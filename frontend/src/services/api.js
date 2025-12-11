/*
  Frontend-only API shim
  - Uses local mock data for portfolio sections so the frontend no longer depends on a backend API.
  - Uses Formspree (or any similar service) for contact form submissions via an environment variable.

  Setup for Vercel (or local dev):
  - Set `REACT_APP_FORMSPREE_ENDPOINT` to your Formspree URL (e.g. https://formspree.io/f/abcd1234)

*/

import {
  personalInfo,
  aboutContent,
  projects,
  skills,
  education,
  certifications,
  experience,
  achievements,
  languages,
} from './data/mockData';

const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT || '';

// Portfolio API (returns local mock data)
export const portfolioApi = {
  getPersonalInfo: async () => ({ ...personalInfo }),
  getAboutInfo: async () => ({ ...aboutContent }),
  getProjects: async () => ([...projects]),
  getProject: async (id) => projects.find((p) => String(p.id) === String(id)),
  getSkills: async () => ({ ...skills }),
  getEducation: async () => ([...education]),
  getCertifications: async () => ([...certifications]),
  getExperience: async () => ([...experience]),
  getLanguages: async () => ([...languages]),
  getAchievements: async () => ([...achievements]),
};

// Contact API (submits directly to Formspree)
export const contactApi = {
  submitContactForm: async (formData) => {
    if (!FORMSPREE_ENDPOINT) {
      throw new Error('Formspree endpoint not configured. Set REACT_APP_FORMSPREE_ENDPOINT in your environment.');
    }

    // Formspree accepts JSON or form-encoded data. We'll send JSON.
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Form submission failed: ${response.status} ${text}`);
    }

    // Formspree returns JSON with `ok: true` on success for the new endpoints
    try {
      const data = await response.json();
      return data;
    } catch (err) {
      return { message: 'Message sent (no JSON response)' };
    }
  },
};

export default { portfolioApi, contactApi };
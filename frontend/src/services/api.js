import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for logging and error handling
api.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url} - ${response.status}`);
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Portfolio API endpoints
export const portfolioApi = {
  // Get personal information
  getPersonalInfo: async () => {
    const response = await api.get('/portfolio/personal');
    return response.data;
  },

  // Get about information
  getAboutInfo: async () => {
    const response = await api.get('/portfolio/about');
    return response.data;
  },

  // Get all projects
  getProjects: async () => {
    const response = await api.get('/portfolio/projects');
    return response.data;
  },

  // Get specific project by ID
  getProject: async (id) => {
    const response = await api.get(`/portfolio/projects/${id}`);
    return response.data;
  },

  // Get skills data
  getSkills: async () => {
    const response = await api.get('/portfolio/skills');
    return response.data;
  },

  // Get education information
  getEducation: async () => {
    const response = await api.get('/portfolio/education');
    return response.data;
  },

  // Get certifications
  getCertifications: async () => {
    const response = await api.get('/portfolio/certifications');
    return response.data;
  },

  // Get work experience
  getExperience: async () => {
    const response = await api.get('/portfolio/experience');
    return response.data;
  },

  // Get languages
  getLanguages: async () => {
    const response = await api.get('/portfolio/languages');
    return response.data;
  },

  // Get achievements
  getAchievements: async () => {
    const response = await api.get('/portfolio/achievements');
    return response.data;
  },
};

// Contact API endpoints
export const contactApi = {
  // Submit contact form
  submitContactForm: async (formData) => {
    const response = await api.post('/contact/', formData);
    return response.data;
  },
};

// Health check endpoint
export const healthApi = {
  // Check API health
  checkHealth: async () => {
    const response = await api.get('/health');
    return response.data;
  },
};

export default api;
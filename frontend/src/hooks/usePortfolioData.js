import { useState, useEffect } from 'react';
import { portfolioApi } from '../services/api';

// Custom hook for fetching portfolio data
export const usePortfolioData = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let result;
        switch (endpoint) {
          case 'personal':
            result = await portfolioApi.getPersonalInfo();
            break;
          case 'about':
            result = await portfolioApi.getAboutInfo();
            break;
          case 'projects':
            result = await portfolioApi.getProjects();
            break;
          case 'skills':
            result = await portfolioApi.getSkills();
            break;
          case 'education':
            result = await portfolioApi.getEducation();
            break;
          case 'certifications':
            result = await portfolioApi.getCertifications();
            break;
          case 'experience':
            result = await portfolioApi.getExperience();
            break;
          case 'languages':
            result = await portfolioApi.getLanguages();
            break;
          case 'achievements':
            result = await portfolioApi.getAchievements();
            break;
          default:
            throw new Error(`Unknown endpoint: ${endpoint}`);
        }
        
        setData(result);
      } catch (err) {
        console.error(`Error fetching ${endpoint} data:`, err);
        setError(err.message || `Failed to fetch ${endpoint} data`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

// Specific hooks for each data type
export const usePersonalInfo = () => usePortfolioData('personal');
export const useAboutInfo = () => usePortfolioData('about');
export const useProjects = () => usePortfolioData('projects');
export const useSkills = () => usePortfolioData('skills');
export const useEducation = () => usePortfolioData('education');
export const useCertifications = () => usePortfolioData('certifications');
export const useExperience = () => usePortfolioData('experience');
export const useLanguages = () => usePortfolioData('languages');
export const useAchievements = () => usePortfolioData('achievements');
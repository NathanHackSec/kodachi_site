import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const kodachiApi = {
  // Company information
  getCompany: () => apiClient.get('/company'),
  
  // Services
  getServices: () => apiClient.get('/services'),
  
  // Projects
  getProjects: () => apiClient.get('/projects'),
  
  // Testimonials
  getTestimonials: () => apiClient.get('/testimonials'),
  
  // Courses
  getCourses: () => apiClient.get('/courses'),
  
  // Careers
  getCareers: () => apiClient.get('/careers'),
  
  // Statistics
  getStats: () => apiClient.get('/stats'),
  
  // Training platform status
  getTrainingStatus: () => apiClient.get('/training-status'),
  
  // Contact form submission
  submitContact: (data) => apiClient.post('/contact', data),
  
  // Get all contacts (admin)
  getContacts: () => apiClient.get('/contacts'),
};

export default kodachiApi;
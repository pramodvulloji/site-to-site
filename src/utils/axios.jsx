import axios from 'axios';
import { getToken } from '@/auth';
import { API_BASE_URL } from '@/config/serverApiConfig';

// Create a custom axios instance
const apiInstance = axios.create({
  baseURL: API_BASE_URL, // API base URL
  withCredentials: true, // Allows cookies and credentials across origins
});

// Request interceptor to handle authentication tokens
apiInstance.interceptors.request.use(
  (config) => {
    const token = getToken(); // Fetch token securely
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        console.error('Unauthorized access - redirecting to login');
        // Handle unauthorized access, e.g., redirect to login or clear token
      } else {
        console.error('An error occurred:', error.response.status);
      }
    }
    return Promise.reject(error);
  }
);

export default apiInstance;

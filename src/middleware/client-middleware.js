import { getToken } from '@/auth';
import { API_BASE_URL } from '@/config/serverApiConfig';
import axios from 'axios';

// Global request interceptor (applies to all axios requests)
axios.interceptors.request.use(
  (config) => {
    console.log('request', config);
    config.headers['Access-Control-Allow-*'] = '*';
    config.headers.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (config) => {
    console.log('response', config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Create a custom axios instance
export const apiInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Instance-specific request interceptor (applies only to `apiInstance`)
apiInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    console.log('Logging API request:', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;

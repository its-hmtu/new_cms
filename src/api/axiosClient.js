import axios from "axios";
import Cookies from "js-cookie";

console.log(import.meta.env);
const { VITE_API_BASE_URL } = import.meta.env;

const axiosClient = axios.create({
  baseURL: `${VITE_API_BASE_URL}/api/cms`,
  headers: {
    'Content-Type': 'application/json',
  } 
})

axiosClient.interceptors.request.use((config) => {
  if (!config.data) config.data = {};
  if (config.data) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${Cookies.get('access_token') || ''}`,
    }
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response.data || response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear auth data without dispatching to store to avoid circular dependency
      Cookies.remove('access_token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
)

export default axiosClient;
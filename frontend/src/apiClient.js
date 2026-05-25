import axios from "axios";

// Create axios instance with base URL pointing to backend
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add request interceptor for debugging
apiClient.interceptors.request.use((config) => {
  console.log(`API Request: ${config.method.toUpperCase()} ${config.url}`);
  return config;
});

// Optional: Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  },
);

export default apiClient;

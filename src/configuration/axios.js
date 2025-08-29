import axios from "axios";

export const Axios = axios.create({
  baseURL: "https://forkify-api.jonas.io/api/v2/recipes",
  timeout: 20000,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

export const AxiosResponseInterceptor = Axios.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors
    if (error.code === "ECONNABORTED") {
      console.error("Request took longer than usual. Please try again.");
    }
    return Promise.reject(error);
  }
);

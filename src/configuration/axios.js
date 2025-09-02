import axios from "axios";
import { notifyError } from "../helpers/notify";

export const Axios = axios.create({
  baseURL: "https://forkify-api.jonas.io/api/v2/recipes",
  timeout: 20000,
});

export const AxiosRequestInterceptor = Axios.interceptors.request.use(
  (config) => {
    config.params = { ...config.params, key: import.meta.env.VITE_API_KEY };
    return config;
  }
);

export const AxiosResponseInterceptor = Axios.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle errors
    if (error.code === "ECONNABORTED") {
      notifyError("Request took longer than usual. Please try again.");
    }
    return Promise.reject(error);
  }
);

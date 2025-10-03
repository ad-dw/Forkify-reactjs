import axios from "axios";
import { notifyError } from "../helpers/notify";

export const Axios = axios.create({
  baseURL: "https://api.spoonacular.com/recipes",
  timeout: 20000,
});

// export const AxiosRequestInterceptor = Axios.interceptors.request.use(
//   (config) => {
//     config.params = { apiKey: import.meta.env.VITE_API_KEY, ...config.params };
//     return config;
//   }
// );

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

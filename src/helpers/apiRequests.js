import { Axios } from "../configuration/axios";
import { notifyError } from "./notify";

export const searchRecipe = async (keyword) => {
  const params = {
    apiKey: import.meta.env.VITE_API_KEY,
    titleMatch: keyword,
  };
  try {
    const response = await Axios.get("/complexSearch", { params });
    return response.data.results;
  } catch (error) {
    notifyError("Error searching recipe:", error.message);
    throw error;
  }
};

export const searchRecipeDetails = async (id) => {
  try {
    const params = {
      apiKey: import.meta.env.VITE_API_KEY,
    };
    const response = await Axios.get(`/${id}/information`, {
      params,
    });
    return response.data;
  } catch (error) {
    notifyError("Error fetching recipe details:", error.message);
    throw error;
  }
};

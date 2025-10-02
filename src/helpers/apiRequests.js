import { Axios } from "../configuration/axios";
import { notifyError } from "./notify";

export const searchRecipe = async (keyword) => {
  const params = {
    search: keyword,
  };
  try {
    const response = await Axios.get("/", { params });
    return response.data.data.recipes;
  } catch (error) {
    notifyError("Error searching recipe:", error.message);
    throw error;
  }
};

export const searchRecipeDetails = async (id) => {
  try {
    const response = await Axios.get(`/${id}`);
    return response.data;
  } catch (error) {
    notifyError("Error fetching recipe details:", error.message);
    throw error;
  }
};

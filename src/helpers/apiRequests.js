import { Axios } from "../configuration/axios";
import { notifyError } from "./notify";

export const searchRecipe = async (keyword, offset = 0) => {
  console.log("offset in apiRequests:", offset);
  let ongoingSearch = false;
  const controller = new AbortController();
  if (ongoingSearch) {
    controller.abort();
    ongoingSearch = false;
  }
  const params = {
    apiKey: import.meta.env.VITE_PUBLIC_API_KEY,
    offset: offset,
    titleMatch: keyword,
    signal: controller.signal,
  };
  try {
    ongoingSearch = true;
    const response = await Axios.get("/complexSearch", { params });
    console.log(response);
    return response.data;
  } catch (error) {
    notifyError("Error searching recipe:", error.message);
    throw error;
  } finally {
    ongoingSearch = false;
  }
};

export const searchRecipeDetails = async (id) => {
  try {
    const params = {
      apiKey: import.meta.env.VITE_PUBLIC_API_KEY,
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

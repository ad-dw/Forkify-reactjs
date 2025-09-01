import { Axios } from "../configuration/axios";
import { notifyError } from "./notify";

const searchRecipe = async (keyword) => {
  const params = {
    search: keyword,
  };
  try {
    const response = await Axios.get("/", { params });
    console.log(response.data);
  } catch (error) {
    notifyError("Error searching recipe:", error.message);
    throw error;
  }
};

export default searchRecipe;

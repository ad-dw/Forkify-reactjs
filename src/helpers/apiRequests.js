import Axios from "../configuration/axios";

const searchRecipe = async (keyword) => {
  const params = {
    search: keyword,
  };
  try {
    const response = await Axios.get("/", { params });
    console.log(response.data);
  } catch (error) {
    console.error("Error searching recipe:", error);
    throw error;
  }
};

export default searchRecipe;

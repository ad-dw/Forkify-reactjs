export const isRecipeBookmarked = (recipe) => {
  const bookmarkedRecipes = JSON.parse(
    localStorage.getItem("bookmarkedRecipes")
  );
  return bookmarkedRecipes.some((item) => item.id === recipe.id);
};

export const setItemToLocalStorage = (key, value) => {
  const bookmarkedItems = JSON.parse(localStorage.getItem(key)) || [];
  localStorage.setItem(
    key,
    JSON.stringify([bookmarkedItems, value].flat().filter(Boolean))
  );
};

export const removeItemFromLocalStorage = (key, id) => {
  const bookmarkedItems = JSON.parse(localStorage.getItem(key)) || [];
  const updatedItems = bookmarkedItems.filter((item) => item.id !== id);
  localStorage.setItem(key, JSON.stringify(updatedItems));
};

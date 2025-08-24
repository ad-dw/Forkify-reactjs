import React from "react";

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="recipe-detail-container">
      {recipe ? (
        <div className="recipe-detail">
          <h2>{recipe.title}</h2>
          <img src={recipe.image_url} alt={recipe.title} />
          <p>{recipe.publisher}</p>
          <ul>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
          </ul>
        </div>
      ) : (
        <div className="empty-recipe-detail">
          <p>Please select a recipe to see the details.</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;

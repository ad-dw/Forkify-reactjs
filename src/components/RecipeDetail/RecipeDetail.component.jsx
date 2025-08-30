import "./RecipeDetail.styles.css";
import { Pointer } from "lucide-react";

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
        <div
          className="empty-recipe-detail"
          tabIndex={0}
          role="region"
          aria-label="No recipe selected"
        >
          <Pointer size={180} strokeWidth={0.5} />
          <p>Please select a recipe to see the details.</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;

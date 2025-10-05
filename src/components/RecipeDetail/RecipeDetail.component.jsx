import "./RecipeDetail.styles.css";
import { Pointer } from "lucide-react";
import { CirclePlus, CircleMinus, Bookmark, Check, Clock3 } from "lucide-react";
import Fraction from "fraction.js";
import { useSelector } from "react-redux";
import { selectRecipeDetail } from "../../redux/recipeDetail/recipeDetail.selector";

const RecipeDetail = () => {
  const recipe = useSelector(selectRecipeDetail);
  console.log(recipe?.summary);
  const summary = recipe?.summary.replaceAll(
    /<a /g,
    '<a target="_blank" rel="noopener noreferrer" '
  );

  return (
    <div className="recipe-detail-container">
      {recipe ? (
        <div className="recipe-detail">
          <h2 className="recipe-title">{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <div className="summary-container">
            <p
              dangerouslySetInnerHTML={{ __html: summary }}
              className="summary"
            />
          </div>
          <div className="cooking-info">
            <p>
              <Clock3 role="presentation" /> {recipe.readyInMinutes} minutes
            </p>
            <div
              className="servings-control"
              role="group"
              aria-label="Adjust servings"
            >
              <button
                aria-label="Increase servings"
                title="Increase servings"
                className="rd-btn"
              >
                <CirclePlus className="icon" role="presentation" />
              </button>
              <p>{recipe.servings} servings</p>
              <button
                aria-label="Decrease servings"
                title="Decrease servings"
                className="rd-btn"
              >
                <CircleMinus className="icon" role="presentation" />
              </button>
            </div>
            <button
              aria-label="Bookmark this recipe"
              title="Bookmark this recipe"
              className="bookmark-button rd-btn"
            >
              <Bookmark className="icon" role="presentation" />
            </button>
          </div>
          <div className="ingredients-section">
            <h3>Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.extendedIngredients &&
                recipe.extendedIngredients.map((ingredient, idx) => (
                  <li key={idx} className="ingredient-item">
                    <Check size={24} className="icon" role="presentation" />
                    <span className="ingredient-text">
                      {` ${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort} ${ingredient.name}`}
                    </span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="directions">
            <h3>How to cook it</h3>
            <p>
              This recipe was carefully designed and tested by{" "}
              {recipe.publisher}. Please check out directions at their website.
            </p>
            <a
              className="directions-link"
              href={recipe.source_url}
              target="_blank"
              rel="noopener noreferrer"
              title="directions to cook recipe"
              aria-label="Directions to cook recipe"
            >
              Directions
            </a>
          </div>
        </div>
      ) : (
        <div
          className="empty-recipe-detail"
          tabIndex={0}
          role="region"
          aria-label="No recipe selected"
        >
          <Pointer size={180} strokeWidth={0.5} role="presentation" />
          <p>Please select a recipe to see the details.</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;

import "./RecipeDetail.styles.css";
import { Pointer } from "lucide-react";
import {
  CirclePlus,
  CircleMinus,
  Bookmark,
  Check,
  Clock3,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsRecipeError,
  selectIsRecipeLoading,
  selectRecipeDetail,
} from "../../redux/recipeDetail/recipeDetail.selector";
import {
  addBookmark,
  removeBookmark,
} from "../../redux/recipeDetail/recipeDetail.slice";
import Spinner from "../Spinner/Spinner.component";
import { useState } from "react";

const RecipeDetail = () => {
  const recipe = useSelector(selectRecipeDetail);
  const loading = useSelector(selectIsRecipeLoading);
  const error = useSelector(selectIsRecipeError);
  const dispatch = useDispatch();
  const smallScreen = window.matchMedia?.("(max-width: 768px)").matches;
  const [recipeVisible, setRecipeVisible] = useState(!smallScreen);

  const handleBookmarkRecipe = () => {
    if (!recipe.bookmarked) {
      dispatch(addBookmark(recipe));
    } else {
      dispatch(removeBookmark(recipe.id));
    }
  };

  const summary = recipe?.summary?.replaceAll(
    /<a /g,
    '<a target="_blank" rel="noopener noreferrer" '
  );

  const renderableComponent = () => {
    if (loading) {
      return <Spinner />;
    } else if (error) {
      return (
        <div className="error-message" role="alert">
          An error occurred while fetching the recipe details. Please try again
          later.
        </div>
      );
    } else if (recipe) {
      return (
        <div className="recipe-detail" role="region" aria-label="recipe detail">
          <h2 className="recipe-title">{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <div className="summary-container">
            <p
              dangerouslySetInnerHTML={{ __html: summary }}
              className="summary"
            />
          </div>
          <div className="cooking-info">
            <p className="recipe-time">
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
              title={
                recipe.bookmarked
                  ? "Unbookmark this recipe"
                  : "Bookmark this recipe"
              }
              className="bookmark-button rd-btn"
              onClick={handleBookmarkRecipe}
            >
              <Bookmark
                className="icon"
                role="presentation"
                fill={recipe.bookmarked ? "black" : "none"}
              />
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
            <ul className="directions-list">
              {recipe?.analyzedInstructions[0]["steps"].map((stage) => (
                <li key={stage.number} className="direction-step">
                  <span>{stage.number}.</span>
                  <span>{stage.step}</span>
                </li>
              ))}
            </ul>
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
      );
    } else {
      return smallScreen ? null : (
        <div
          className="empty-recipe-detail"
          tabIndex={0}
          role="region"
          aria-label="No recipe selected"
        >
          <Pointer size={180} strokeWidth={0.5} role="presentation" />
          <p>Please select a recipe to see the details.</p>
        </div>
      );
    }
  };

  return (
    recipeVisible && (
      <div
        className={` ${
          smallScreen
            ? "small-screen-recipe-container"
            : "recipe-detail-container"
        }`}
        tabIndex={0}
      >
        {smallScreen && (
          <button>
            <X />
          </button>
        )}
        {renderableComponent()}
      </div>
    )
  );
};

export default RecipeDetail;

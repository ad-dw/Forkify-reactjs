import "./RecipeDetail.styles.css";
import { Pointer } from "lucide-react";
import { CirclePlus, CircleMinus, Bookmark, Check, Clock3 } from "lucide-react";

const recipe = {
  publisher: "Two Peas and Their Pod",
  ingredients: [
    {
      quantity: 12,
      unit: "oz",
      description: "pasta",
    },
    {
      quantity: 1.5,
      unit: "cups",
      description: "ricotta cheese",
    },
    {
      quantity: 0.25,
      unit: "cup",
      description: "grated parmesan cheese",
    },
    {
      quantity: 1,
      unit: "",
      description: "large egg",
    },
    {
      quantity: 1,
      unit: "",
      description: "clove garlic minced",
    },
    {
      quantity: 10,
      unit: "oz",
      description:
        "package frozen chopped spinach thawed and squeezed of excess liquid",
    },
    {
      quantity: null,
      unit: "",
      description: "Pinch of nutmeg",
    },
    {
      quantity: 0.25,
      unit: "tsp",
      description: "dried basil",
    },
    {
      quantity: 0.13,
      unit: "tsp",
      description: "crushed red pepper",
    },
    {
      quantity: null,
      unit: "",
      description: "Salt and black pepper to taste",
    },
    {
      quantity: null,
      unit: "",
      description: "Marinara sauce",
    },
    {
      quantity: 2,
      unit: "cups",
      description: "shredded mozzarella cheese",
    },
  ],
  source_url:
    "http://www.twopeasandtheirpod.com/baked-pasta-with-spinach-and-ricotta/",
  image_url:
    "http://forkify-api.herokuapp.com/images/SpinachBakedShells53ded.jpg",
  title: "Baked Pasta with Spinach and Ricotta",
  servings: 4,
  cooking_time: 75,
  id: "664c8f193e7aa067e94e825d",
};

const RecipeDetail = () => {
  return (
    <div className="recipe-detail-container">
      {recipe ? (
        <div className="recipe-detail">
          <h2 className="recipe-title">{recipe.title}</h2>
          <img src={recipe.image_url} alt={recipe.title} />
          <div className="cooking-info">
            <p>
              <Clock3 /> {recipe.cooking_time} minutes
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
                <CirclePlus className="icon" />
              </button>
              <p>{recipe.servings} servings</p>
              <button
                aria-label="Decrease servings"
                title="Decrease servings"
                className="rd-btn"
              >
                <CircleMinus className="icon" />
              </button>
            </div>
            <button
              aria-label="Bookmark this recipe"
              title="Bookmark this recipe"
              className="bookmark-button rd-btn"
            >
              <Bookmark className="icon" />
            </button>
          </div>
          <ul className="ingredients-list">
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient, idx) => (
                <li key={idx} className="ingredient-item">
                  <Check size={24} className="icon" />
                  <span className="ingredient-text">
                    {ingredient.quantity} {ingredient.unit}{" "}
                    {ingredient.description}
                  </span>
                </li>
              ))}
          </ul>
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
          <Pointer size={180} strokeWidth={0.5} />
          <p>Please select a recipe to see the details.</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;

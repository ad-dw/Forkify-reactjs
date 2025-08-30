import "./RecipeView.styles.css";
import { CookingPot } from "lucide-react";
import SearchResults from "../SearchResultsPanel/SearchResults.component";
import RecipeDetail from "../RecipeDetail/RecipeDetail.component";

const recipe = [
  {
    publisher: "Two Peas and Their Pod",
    image_url:
      "http://forkify-api.herokuapp.com/images/SpinachBakedShells53ded.jpg",
    title: "Baked Pasta with Spinach and Ricotta",
    id: "664c8f193e7aa067e94e825d",
  },
  {
    publisher: "Bon Appetit",
    image_url:
      "http://forkify-api.herokuapp.com/images/mare_lobster_pasta_with_herbed_cream_sauce_h3bbc.jpg",
    title: "Lobster Pasta with Herbed Cream Sauce",
    id: "664c8f193e7aa067e94e87d5",
  },
  {
    publisher: "Smitten Kitchen",
    image_url:
      "http://forkify-api.herokuapp.com/images/3536930521_dcbfce4033c3a0.jpg",
    title: "asparagus, goat cheese and lemon pasta",
    id: "664c8f193e7aa067e94e87bc",
  },
  {
    publisher: "The Pioneer Woman",
    image_url: "http://forkify-api.herokuapp.com/images/PastaCarbonara061c.jpg",
    title: "Pastor Ryan’s Pasta Carbonara",
    id: "664c8f193e7aa067e94e86db",
  },
  {
    publisher: "The Pioneer Woman",
    image_url:
      "http://forkify-api.herokuapp.com/images/4814287904_bb43e024c9_be8a9.jpg",
    title: "Grilled Chicken with Lemon Basil Pasta",
    id: "664c8f193e7aa067e94e86ad",
  },
  {
    publisher: "Epicurious",
    image_url:
      "http://forkify-api.herokuapp.com/images/epicuriousfacebook511b.png",
    title: "Pasta with Chickpeas and Charred Tomatoes",
    id: "664c8f193e7aa067e94e89d8",
  },
];

function RecipeView() {
  return (
    <div className="recipe-view">
      {!recipe.length ? (
        <div className="empty-view">
          <CookingPot size={200} strokeWidth={0.75} />
          <p className="empty-view-text">
            Start by searching for a recipe or an ingredient. Have fun!
          </p>
        </div>
      ) : (
        <div className="recipe-view-content">
          <SearchResults results={recipe} />
          <RecipeDetail />
        </div>
      )}
    </div>
  );
}

export default RecipeView;

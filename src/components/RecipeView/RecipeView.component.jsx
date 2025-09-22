import "./RecipeView.styles.css";
import { CookingPot } from "lucide-react";
import SearchResults from "../SearchResultsPanel/SearchResults.component";
import RecipeDetail from "../RecipeDetail/RecipeDetail.component";

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
          <SearchResults />
          <RecipeDetail />
        </div>
      )}
    </div>
  );
}

export default RecipeView;

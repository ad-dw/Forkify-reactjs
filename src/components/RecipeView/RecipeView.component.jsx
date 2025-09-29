import "./RecipeView.styles.css";
import { CookingPot } from "lucide-react";
import SearchResults from "../SearchResultsPanel/SearchResults.component";
import RecipeDetail from "../RecipeDetail/RecipeDetail.component";
import { useSelector } from "react-redux";
import {
  selectSearchError,
  selectSearchLoading,
  selectSearchResults,
} from "../../redux/searchResults/searchResults.selector";

function RecipeView() {
  const searchResults = useSelector(selectSearchResults);
  const loading = useSelector(selectSearchLoading);
  const error = useSelector(selectSearchError);
  return (
    <div className="recipe-view" tabIndex={0}>
      {!searchResults?.length && !loading && !error ? (
        <div className="empty-view">
          <CookingPot size={200} strokeWidth={0.75} role="presentation" />
          <p className="empty-view-text">
            Start by searching for a recipe or an ingredient. Have fun!
          </p>
        </div>
      ) : (
        <div className="recipe-view-content">
          <SearchResults
            results={searchResults}
            loading={loading}
            error={error}
          />
          <RecipeDetail />
        </div>
      )}
    </div>
  );
}

export default RecipeView;

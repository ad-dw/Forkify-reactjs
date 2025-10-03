import "./RecipeView.styles.css";
import { CookingPot } from "lucide-react";
import SearchResults from "../SearchResultsPanel/SearchResults.component";
import RecipeDetail from "../RecipeDetail/RecipeDetail.component";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import {
  selectSearchError,
  selectSearchLoading,
  selectSearchResults,
} from "../../redux/searchResults/searchResults.selector";

function RecipeView() {
  const searchResults = useSelector(selectSearchResults);
  const loading = useSelector(selectSearchLoading);
  const error = useSelector(selectSearchError);

  const emptyView = useMemo(
    () => !searchResults?.length && !loading && !error,
    [searchResults, loading, error]
  );

  return (
    <div
      className="recipe-view"
      tabIndex={emptyView ? 0 : -1}
      role="region"
      aria-label="Recipe View"
      aria-describedby="empty-view-text"
    >
      {emptyView ? (
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

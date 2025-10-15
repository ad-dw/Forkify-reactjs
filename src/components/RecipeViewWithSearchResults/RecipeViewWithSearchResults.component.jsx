import Spinner from "../Spinner/Spinner.component";
import "./RecpieViewWithSearchResults.styles.css";
import { lazy, Suspense } from "react";
const SearchResults = lazy(() =>
  import("../SearchResultsPanel/SearchResults.component")
);
const RecipeDetail = lazy(() =>
  import("../RecipeDetail/RecipeDetail.component")
);

const RecipeViewWithSearchResults = ({ searchResults, loading, error }) => {
  return (
    <div className="recipe-view-content">
      <Suspense fallback={<Spinner />}>
        <SearchResults
          results={searchResults}
          loading={loading}
          error={error}
        />
      </Suspense>
      <Suspense fallback={<Spinner className="recipe-detail-container" />}>
        <RecipeDetail />
      </Suspense>
    </div>
  );
};
export default RecipeViewWithSearchResults;

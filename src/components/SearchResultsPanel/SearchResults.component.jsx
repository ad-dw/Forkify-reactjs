import { useEffect, useState } from "react";
import "./SearchResults.styles.css";
import SearchResultItem from "../SearchResultItem/SearchResultItem.component";
import Spinner from "../Spinner/Spinner.component";
import Pagination from "../Pagination/Pagination.component";

const SearchResults = ({
  results,
  loading,
  error,
  id,
  role = "list",
  itemRole = "listitem",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const searchResultsListID = id || "search-results-panel";

  const keyboardNavigation = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCurrentIndex((curIdx) => {
        setPreviousIndex(curIdx);
        return (curIdx + 1) % results.length;
      });
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setCurrentIndex((prevIndex) => {
        setPreviousIndex(prevIndex);
        return (prevIndex - 1 + results.length) % results.length;
      });
    }
  };

  useEffect(() => {
    const searchResultsList = document.querySelector("#" + searchResultsListID);
    if (!searchResultsList) return;
    const nextItem = searchResultsList.querySelector(
      `[data-index="${currentIndex}"]`
    );
    const previousItem = searchResultsList.querySelector(
      `[data-index="${previousIndex}"]`
    );
    nextItem?.setAttribute("tabIndex", 0);
    if (currentIndex !== previousIndex) {
      previousItem?.setAttribute("tabIndex", -1);
      nextItem?.focus();
    }
  }, [currentIndex]);

  const renderableComponent = () => {
    if (error) {
      return (
        <p className="error-text state-container">
          Error in fetching recipe: {error}
        </p>
      );
    } else if (loading) {
      return (
        <div className="state-container">
          <Spinner />
          <p>Loading...</p>
        </div>
      );
    } else {
      return results.length === 0 ? (
        <p className="state-container">No results found.</p>
      ) : (
        <>
          <ul
            className="search-results-list"
            aria-label="search results"
            role={role}
          >
            {results.map((item, idx) => (
              <SearchResultItem
                key={idx}
                item={item}
                idx={idx}
                currentIndex={currentIndex}
                role={itemRole}
              />
            ))}
          </ul>
          <Pagination />
        </>
      );
    }
  };
  return (
    <div id={searchResultsListID} onKeyDown={keyboardNavigation}>
      {renderableComponent()}
    </div>
  );
};

export default SearchResults;

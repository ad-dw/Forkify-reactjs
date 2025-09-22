import { useEffect, useState } from "react";
import "./SearchResults.styles.css";
import SearchResultItem from "../SearchResultItem/SearchResultItem.component";
import { useSelector } from "react-redux";
import {
  selectSearchError,
  selectSearchLoading,
  selectSearchResults,
} from "../../redux/searchResults/searchResults.selector";
import Spinner from "../Spinner/Spinner.component";

const searchResultsListID = "search-results-panel";

const SearchResults = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const searchResults = useSelector(selectSearchResults);
  const loading = useSelector(selectSearchLoading);
  const error = useSelector(selectSearchError);

  const keyboardNavigation = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCurrentIndex((curIdx) => {
        setPreviousIndex(curIdx);
        return (curIdx + 1) % searchResults.length;
      });
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setCurrentIndex((prevIndex) => {
        setPreviousIndex(prevIndex);
        return (prevIndex - 1 + searchResults.length) % searchResults.length;
      });
    }
  };

  useEffect(() => {
    const searchResultsList = document.querySelector("#" + searchResultsListID);
    if (!searchResultsList) return;
    searchResultsList.addEventListener("keydown", keyboardNavigation);
    return () => {
      searchResultsList.removeEventListener("keydown", keyboardNavigation);
    };
  }, []);

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
      return searchResults.length === 0 ? (
        <p className="state-container">No results found.</p>
      ) : (
        <div id={searchResultsListID}>
          <ul className="search-results-list">
            {searchResults.map((item, idx) => (
              <SearchResultItem
                key={idx}
                item={item}
                idx={idx}
                currentIndex={currentIndex}
              />
            ))}
          </ul>
        </div>
      );
    }
  };
  return renderableComponent();
};

export default SearchResults;

import { useEffect, useState } from "react";
import "./SearchResults.styles.css";
import SearchResultItem from "../SearchResultItem/SearchResultItem.component";

const searchResultsListID = "search-results-panel";
let initialRender = true;

const SearchResults = ({ results }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

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

  return (
    <div id={searchResultsListID}>
      {results && results.length > 0 ? (
        <ul className="search-results-list">
          {results.map((item, idx) => (
            <SearchResultItem
              key={idx}
              item={item}
              idx={idx}
              currentIndex={currentIndex}
            />
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;

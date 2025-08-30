import { useEffect, useState } from "react";
import "./SearchResults.styles.css";

const searchResultsListID = "search-results-panel";

const SearchResults = ({ results }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(results.length);

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
    const firstFocusableItem = searchResultsList.querySelector(
      `[data-index='${currentIndex}']`
    );
    firstFocusableItem?.setAttribute("tabIndex", 0);
    return () => {
      searchResultsList.removeEventListener("keydown", keyboardNavigation);
    };
  }, []);

  useEffect(() => {
    console.log(currentIndex, previousIndex);
    const searchResultsList = document.querySelector("#" + searchResultsListID);
    if (!searchResultsList) return;
    const nextItem = searchResultsList.querySelector(
      `[data-index="${currentIndex}"]`
    );
    const previousItem = searchResultsList.querySelector(
      `[data-index="${previousIndex}"]`
    );
    nextItem?.setAttribute("tabIndex", 0);
    previousItem?.setAttribute("tabIndex", -1);
    nextItem?.focus();
  }, [currentIndex]);

  return (
    <div id={searchResultsListID}>
      {results && results.length > 0 ? (
        <ul className="search-results-list">
          {results.map((item, idx) => (
            <li
              key={idx}
              className="search-result-item"
              tabIndex={-1}
              data-index={idx}
              title={`${item.title} by ${item.publisher}`}
              aria-label={`${item.title} by ${item.publisher}`}
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="recipe-preview-image"
              />
              <div className="recipe-preview-info">
                <h2 className="recipe-preview-title">{item.title}</h2>
                <p className="recipe-preview-publisher">{item.publisher}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;

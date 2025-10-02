import { useEffect } from "react";
import "./SearchResultItem.styles.css";
import { useDispatch } from "react-redux";
import { searchResultsAsync } from "../../redux/searchResults/searchResults.slice";

function SearchResultItem({ item, idx, currentIndex }) {
  const { title, image_url, publisher } = item;
  const dispatch = useDispatch();

  const recipeClickHandler = () => {
    dispatch(searchResultsAsync(item.id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      recipeClickHandler();
    }
  };

  useEffect(() => {
    const searchResultsList = document.querySelector("#search-results-panel");
    const firstFocusableItem = searchResultsList?.querySelector(
      `[data-index='${currentIndex}']`
    );
    firstFocusableItem?.setAttribute("tabIndex", 0);
  }, []);

  return (
    <li
      className="search-result-item"
      tabIndex={-1}
      data-index={idx}
      title={`${title} by ${publisher}`}
      aria-label={`${title} by ${publisher}`}
      onClick={recipeClickHandler}
      onKeyDown={handleKeyDown}
    >
      <img src={image_url} alt={title} className="recipe-preview-image" />
      <div className="recipe-preview-info">
        <h2 className="recipe-preview-title">{title}</h2>
        <p className="recipe-preview-publisher">{publisher}</p>
      </div>
    </li>
  );
}

export default SearchResultItem;

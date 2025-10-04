import { useEffect } from "react";
import "./SearchResultItem.styles.css";
import { useDispatch } from "react-redux";
import { searchResultsAsync } from "../../redux/searchResults/searchResults.slice";

function SearchResultItem({ item, idx, currentIndex }) {
  const { title, image } = item;
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
      title={title}
      aria-label={title}
      onClick={recipeClickHandler}
      onKeyDown={handleKeyDown}
    >
      <img src={image} alt={title} className="recipe-preview-image" />
      <div className="recipe-preview-info">
        <h2 className="recipe-preview-title">{title}</h2>
      </div>
    </li>
  );
}

export default SearchResultItem;

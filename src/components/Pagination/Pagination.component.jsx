import { useDispatch, useSelector } from "react-redux";
import "./Pagination.styles.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  selectSearchOffset,
  selectSearchPages,
  selectSearchTerm,
} from "../../redux/searchResults/searchResults.selector";
import { searchResultsAsync } from "../../redux/searchResults/searchResults.slice";

const Pagination = () => {
  const pages = useSelector(selectSearchPages);
  const offset = useSelector(selectSearchOffset);
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleGoToPreviousPage = () => {
    dispatch(searchResultsAsync({ searchTerm, offset: offset - 10 }));
  };
  const handleGoToNextPage = () => {
    dispatch(searchResultsAsync({ searchTerm, offset: offset + 10 }));
  };
  return (
    <div
      className="pagination-container"
      role="navigation"
      aria-label="pagination navigation"
    >
      <button
        className="pagination-button"
        aria-label="go to previous page"
        title="go to previous page"
        onClick={handleGoToPreviousPage}
        disabled={offset / 10 === 0}
        role="link"
      >
        <ArrowLeft />
      </button>
      <span>
        Page {Math.trunc((offset + 10) / 10)} of {pages}
      </span>
      <button
        className="pagination-button"
        aria-label="go to next page"
        title="go to next page"
        onClick={handleGoToNextPage}
        role="link"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;

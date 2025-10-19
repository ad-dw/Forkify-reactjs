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
  console.log(offset);

  const handleGoToPreviousPage = () => {
    if (offset > 0) {
      dispatch(searchResultsAsync({ searchTerm, offset: offset - 10 }));
    }
  };
  const handleGoToNextPage = () => {
    dispatch(searchResultsAsync({ searchTerm, offset: offset + 10 }));
  };
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        aria-label="go to previous page"
        title="go to previous page"
        onClick={handleGoToPreviousPage}
        disabled={offset < 10}
      >
        <ArrowLeft />
      </button>
      <span>
        Page {Math.trunc(offset / 10)} of {pages}
      </span>
      <button
        className="pagination-button"
        aria-label="go to next page"
        title="go to next page"
        onClick={handleGoToNextPage}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;

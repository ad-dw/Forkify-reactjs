import "./Pagination.styles.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        aria-label="go to previous page"
        title="go to previous page"
      >
        <ArrowLeft />
      </button>
      <span>Page 1 of 1</span>
      <button
        className="pagination-button"
        aria-label="go to next page"
        title="go to next page"
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pagination;

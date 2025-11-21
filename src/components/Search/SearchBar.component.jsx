import "./SearchBar.styles.css";
import {
  searchResultsAsync,
  updateSearchTerm,
} from "../../redux/searchResults/searchResults.slice";
import { debounce } from "../../helpers/debounce";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchTotalResults } from "../../redux/searchResults/searchResults.selector";

const SearchBar = ({ role }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const totalResults = useSelector(selectSearchTotalResults);

  const debounceHandleChange = debounce((event) => {
    const value = event.target.value;
    if (value.length < 3) return;
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  }, 500);

  useEffect(() => {
    if (!searchTerm || searchTerm.length < 3) return;
    dispatch(searchResultsAsync({ searchTerm, offset: 0 }));
  }, [searchTerm]);

  return (
    <div className="search-bar" role={role}>
      <input
        type="text"
        placeholder="Search 1,000,000+ recipes"
        aria-label="Search over a million recipes"
        className="search-input"
        onChange={(event) => {
          debounceHandleChange(event);
        }}
      />
      <p role="alert" aria-live="polite" className="screen-reader-content">
        {totalResults} results found.
      </p>
    </div>
  );
};

export default SearchBar;

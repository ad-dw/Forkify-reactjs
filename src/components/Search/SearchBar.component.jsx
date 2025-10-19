import "./SearchBar.styles.css";
import {
  searchResultsAsync,
  updateSearchTerm,
} from "../../redux/searchResults/searchResults.slice";
import { debounce } from "../../helpers/debounce";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

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
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search 1,000,000+ recipes"
        aria-label="Search over a million recipes"
        className="search-input"
        onChange={(event) => {
          debounceHandleChange(event);
        }}
      />
    </div>
  );
};

export default SearchBar;

import "./SearchBar.styles.css";
import { Search } from "lucide-react";
import { searchRecipe } from "../../helpers/apiRequests";
import { debounce } from "../../helpers/debounce";

const handleChange = (event) => {
  const value = event.target.value;
  if (value.length < 3) return;
  searchRecipe(value);
};

const debounceHandleChange = debounce(handleChange, 500);

function SearchBar() {
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
}

export default SearchBar;

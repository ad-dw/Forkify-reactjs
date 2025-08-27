import "./SearchBar.styles.css";
import { Search } from "lucide-react";
import searchRecipe from "../../helpers/apiRequests";
import { debounce } from "../../helpers/debounce";

const handleChange = (event) => {
  console.log(event);
  const value = event.target.value;
  if (value.length < 3) return;
  searchRecipe(value);
};

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search 1,000,000+ recipes"
        className="search-input"
        onChange={(event) => {
          debounce(handleChange, 500)(event);
        }}
      />
      <button type="submit" className="search-btn" aria-label="Search recipes">
        <Search size={28} />
      </button>
    </div>
  );
}

export default SearchBar;

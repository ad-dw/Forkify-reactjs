import "./SearchBar.styles.css";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search 1,000,000+ recipes"
        className="search-input"
      />
      <button type="submit" className="search-btn" aria-label="Search recipes">
        <Search size={28} />
      </button>
    </div>
  );
}

export default SearchBar;

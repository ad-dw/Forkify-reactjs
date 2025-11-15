import SearchResults from "../SearchResultsPanel/SearchResults.component";
import "./Bookmarks.style.css";
import { BookmarkX, X } from "lucide-react";
import { getItemFromLocalStorage } from "../../helpers/localstorage";
import { useEffect } from "react";
import { trapFocus } from "../../helpers/trapFocus";

export default function Bookmarks({ handleBookmarksClose }) {
  const items = getItemFromLocalStorage("bookmarkedRecipes");
  const keyDownHandler = (e) => {
    if (e.key === "Escape") {
      handleBookmarksClose();
    }
    if (e.key === "Tab" && e.shiftKey && e.target.id === "bookmarks-menu") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const bookmarksMenu = document.getElementById("bookmarks-menu");
    trapFocus(bookmarksMenu);
  }, []);

  return (
    <aside
      className="bookmarks"
      onKeyDown={keyDownHandler}
      tabIndex={0}
      id="bookmarks-menu"
      role="region"
      aria-label="bookmarks"
    >
      <div className="bookmarks-header">
        <h2 className="bookmarks__title">Bookmarks</h2>
        <button
          className="close-bookmarks-btn rd-btn"
          aria-label="Close bookmarks"
          title="Close bookmarks"
          onClick={handleBookmarksClose}
        >
          <X size={24} className="icon" />
        </button>
      </div>

      {items.length === 0 ? (
        <div className="bookmarks__empty">
          <BookmarkX size={200} strokeWidth={0.75} role="presentation" />
          <p>No bookmarks yet.</p>
        </div>
      ) : (
        <SearchResults
          results={items}
          loading={false}
          error={null}
          id="bookmarks-list"
          role="menu"
          itemRole="menuitem"
          paginationNeeded={false}
        />
      )}
    </aside>
  );
}

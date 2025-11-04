import SearchResults from "../SearchResultsPanel/SearchResults.component";
import "./Bookmarks.style.css";
import { BookmarkX, X } from "lucide-react";
import { getItemFromLocalStorage } from "../../helpers/localstorage";

export default function Bookmarks({ handleBookmarksClose }) {
  const items = getItemFromLocalStorage("bookmarkedRecipes");
  const keyDownHandler = (e) => {
    if (e.key === "Escape") {
      handleBookmarksClose();
    }
  };

  return (
    <aside className="bookmarks" onKeyDown={keyDownHandler}>
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
        />
      )}
    </aside>
  );
}

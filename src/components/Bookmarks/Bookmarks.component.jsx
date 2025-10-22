import SearchResults from "../SearchResultsPanel/SearchResults.component";
import "./Bookmarks.style.css";
import { BookmarkX } from "lucide-react";
import { getItemFromLocalStorage } from "../../helpers/localstorage";

export default function Bookmarks() {
  const items = getItemFromLocalStorage("bookmarkedRecipes");

  return (
    <aside className="bookmarks">
      <h2 className="bookmarks__title">Bookmarks</h2>

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

import "./Bookmarks.style.css";
import { BookmarkX } from "lucide-react";
export default function Bookmarks({
  items = [],
  onRemove = () => {},
  onOpen = () => {},
}) {
  return (
    <aside className="bookmarks">
      <h2 className="bookmarks__title">Bookmarks</h2>

      {items.length === 0 ? (
        <div className="bookmarks__empty">
          <BookmarkX size={200} strokeWidth={0.75} role="presentation" />
          <p>No bookmarks yet.</p>
        </div>
      ) : (
        <ul className="bookmarks__list">
          {items.map((item) => (
            <li key={item.id} className="bookmarks__item">
              <button
                type="button"
                className="bookmarks__link"
                onClick={() => onOpen(item)}
                aria-label={`Open ${item.title}`}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="bookmarks__img"
                  />
                )}
                <div className="bookmarks__info">
                  <span className="bookmarks__name">{item.title}</span>
                  {item.publisher && (
                    <span className="bookmarks__publisher">
                      {item.publisher}
                    </span>
                  )}
                </div>
              </button>

              <button
                type="button"
                className="bookmarks__remove"
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.title} from bookmarks`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

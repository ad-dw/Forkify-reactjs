import "./NavigationBar.styles.css";
import { Link } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { Utensils, Menu } from "lucide-react";
import SearchBar from "../Search/SearchBar.component";
import Spinner from "../Spinner/Spinner.component";
import { trapFocus } from "../../helpers/trapFocus";

const Bookmarks = lazy(() => import("../Bookmarks/Bookmarks.component"));

function NavigationBar() {
  const smallScreen = window.matchMedia?.("(width <= 768px)").matches;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookmarksOpen, setBookmarksOpen] = useState(false);

  const handleMenuToggle = (menuOpen) => {
    setIsMenuOpen((prev) => menuOpen ?? !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
      const menuButton = document.querySelector("#menu-button");
      menuButton?.focus();
    }
  };

  const handleBookmarksOpen = () => {
    setBookmarksOpen((prev) => !prev);
    const bookmarksButton = document.querySelector("#bookmarks");
    bookmarksButton?.focus();
  };

  useEffect(() => {
    if (isMenuOpen) {
      let menu = document.querySelector("#nav-menu");
      trapFocus(menu);
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navigation-bar" aria-label="global-navigation">
        <Link to="/" aria-label="Home" className="nav-logo" title="Home">
          <Utensils size={28} className="icon" />
          <span>Forkify</span>
        </Link>
        {smallScreen && (
          <button
            aria-label="Menu options"
            aria-haspopup="true"
            type="button"
            onClick={handleMenuToggle}
            id="menu-button"
          >
            <Menu className="menu-icon" size={28} />
          </button>
        )}
        {(isMenuOpen || !smallScreen) && (
          <div
            className={smallScreen ? "nav-menu-container" : ""}
            onClick={() => handleMenuToggle(false)}
          >
            <div
              id="nav-menu"
              className={`nav-menu ${smallScreen ? "small-screen-menu" : ""}`}
              onKeyDown={handleKeyDown}
              role={smallScreen ? "menu" : undefined}
            >
              <SearchBar role={smallScreen ? "menuitem" : undefined} />
              <div
                className="nav-links"
                role={smallScreen ? "group" : undefined}
              >
                <Link
                  to="/about"
                  title="About"
                  aria-label="About forkify"
                  role={smallScreen ? "menuitem" : "link"}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  title="Contact"
                  aria-label="Contact forkify"
                  role={smallScreen ? "menuitem" : "link"}
                >
                  Contact
                </Link>
              </div>
              <button
                id="bookmarks"
                title="Bookmarks"
                type="button"
                aria-haspopup="menu"
                onClick={handleBookmarksOpen}
                role={smallScreen ? "menuitem" : "button"}
              >
                Bookmarks
              </button>
            </div>
          </div>
        )}
      </nav>
      {bookmarksOpen && (
        <div
          className="bookmarks-container"
          role="region"
          aria-label="bookmarks"
        >
          <Suspense fallback={<Spinner />}>
            <Bookmarks handleBookmarksClose={handleBookmarksOpen} />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default NavigationBar;

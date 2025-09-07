import "./NavigationBar.styles.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Utensils, Menu } from "lucide-react";
import SearchBar from "../Search/SearchBar.component";

function NavigationBar() {
  const smallScreen = window.matchMedia("(width <= 768px)").matches;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
      const menuButton = document.querySelector("#menu-button");
      menuButton?.focus();
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      let menu = document.querySelector("#nav-menu");
      let firstFocusableElement = menu?.querySelector("input, button");
      firstFocusableElement?.focus();
    }
  }, [isMenuOpen]);

  return (
    <nav className="navigation-bar">
      <Link to="/" aria-label="Home" className="nav-logo">
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
          id="nav-menu"
          className={`nav-menu ${smallScreen ? "small-screen-menu" : ""}`}
          onKeyDown={handleKeyDown}
        >
          <SearchBar />
          <div className="nav-links">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavigationBar;

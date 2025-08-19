import "./NavigationBar.styles.css";
import { Link } from "react-router-dom";
import { Utensils } from "lucide-react";

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <Link to="/">
        <Utensils size={28} />
        <span>Forkify</span>
      </Link>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;

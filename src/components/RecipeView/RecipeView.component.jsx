import "./RecipeView.styles.css";
import { CookingPot } from "lucide-react";

function RecipeView() {
  return (
    <div className="recipe-view">
      <CookingPot size={200} strokeWidth={0.75} />
      <p className="empty-view-text">
        Start by searching for a recipe or an ingredient. Have fun!
      </p>
    </div>
  );
}

export default RecipeView;

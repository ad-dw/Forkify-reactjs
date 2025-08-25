import "./RecipeView.styles.css";
import { CookingPot } from "lucide-react";
import SearchResults from "../SearchResultsPanel/SearchResults.component";
import RecipeDetail from "../RecipeDetail/RecipeDetail.component";

const recipe = [
  {
    title: "Spaghetti Carbonara",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g pecorino cheese",
      "50g parmesan cheese",
      "2 cloves of garlic",
      "Salt and black pepper",
    ],
    instructions: [
      "Cook the spaghetti in a large pot of boiling salted water until al dente.",
      "In a separate pan, fry the pancetta with the garlic until crispy. Remove garlic and discard.",
      "In a bowl, beat the eggs and mix in the grated pecorino and parmesan cheese.",
      "Drain the spaghetti and return to the pot. Quickly mix in the pancetta and then the egg and cheese mixture. Stir well to create a creamy sauce.",
      "Season with salt and black pepper to taste. Serve immediately with extra grated cheese on top.",
    ],
  },
  {
    title: "Spaghetti Carbonara",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g pecorino cheese",
      "50g parmesan cheese",
      "2 cloves of garlic",
      "Salt and black pepper",
    ],
    instructions: [
      "Cook the spaghetti in a large pot of boiling salted water until al dente.",
      "In a separate pan, fry the pancetta with the garlic until crispy. Remove garlic and discard.",
      "In a bowl, beat the eggs and mix in the grated pecorino and parmesan cheese.",
      "Drain the spaghetti and return to the pot. Quickly mix in the pancetta and then the egg and cheese mixture. Stir well to create a creamy sauce.",
      "Season with salt and black pepper to taste. Serve immediately with extra grated cheese on top.",
    ],
  },
];

function RecipeView() {
  return (
    <div className="recipe-view">
      {!recipe.length ? (
        <div className="empty-view">
          <CookingPot size={200} strokeWidth={0.75} />
          <p className="empty-view-text">
            Start by searching for a recipe or an ingredient. Have fun!
          </p>
        </div>
      ) : (
        <div className="recipe-view-content">
          <SearchResults results={recipe} />
          <RecipeDetail />
        </div>
      )}
    </div>
  );
}

export default RecipeView;

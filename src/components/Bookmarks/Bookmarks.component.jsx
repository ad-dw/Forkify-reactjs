import SearchResults from "../SearchResultsPanel/SearchResults.component";
import "./Bookmarks.style.css";
import { BookmarkX } from "lucide-react";

const items = [
  {
    id: 641893,
    title: "Easy Cheesy Pizza Casserole",
    image: "https://img.spoonacular.com/recipes/641893-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 716300,
    title: "Plantain Pizza",
    image: "https://img.spoonacular.com/recipes/716300-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 647124,
    title: "Homemade Thin Crust Pizza + Pesto + Potato",
    image: "https://img.spoonacular.com/recipes/647124-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 655847,
    title: "Pesto Veggie Pizza",
    image: "https://img.spoonacular.com/recipes/655847-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 663366,
    title: "Thin Crust Genoa Salami Pizza",
    image: "https://img.spoonacular.com/recipes/663366-312x231.png",
    imageType: "png",
  },
  {
    id: 642371,
    title:
      "Elk Italian Sausage Pizza With Ricotta Cheese, Sautéd Mushrooms and Onion",
    image: "https://img.spoonacular.com/recipes/642371-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 1095810,
    title: "Buffalo Mozzarella & Pepperoni Pizza with a Cauliflower Crust",
    image: "https://img.spoonacular.com/recipes/1095810-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 662264,
    title: "summer vegetable pizza",
    image: "https://img.spoonacular.com/recipes/662264-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 656329,
    title: "Pizza bites with pumpkin",
    image: "https://img.spoonacular.com/recipes/656329-312x231.jpg",
    imageType: "jpg",
  },
  {
    id: 636593,
    title: "Butternut Squash Pizza",
    image: "https://img.spoonacular.com/recipes/636593-312x231.jpg",
    imageType: "jpg",
  },
];

export default function Bookmarks({ onRemove = () => {}, onOpen = () => {} }) {
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
          <SearchResults
            results={items}
            loading={false}
            error={null}
            id="bookmarks-list"
          />
        </ul>
      )}
    </aside>
  );
}

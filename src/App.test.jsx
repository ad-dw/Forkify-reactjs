import { screen, within } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./tests/test-utils";
import { expect } from "vitest";

describe("rendering App component", () => {
  it("renders Navigation bar and empty recipe view with no data", () => {
    renderWithProviders(<App />, {
      preloadedState: {},
    });
    const navigationBar = screen.getByRole("navigation");
    const recipeView = screen.getByRole("region", { name: /recipe view/i });
    const emptyViewText = screen.getByText(
      /start by searching for a recipe or an ingredient\. have fun!/i
    );
    expect(navigationBar).toBeInTheDocument();
    expect(recipeView).toBeInTheDocument();
    expect(emptyViewText).toBeInTheDocument();
  });

  it("renders navigation bar with search result view and no recipe selected", () => {
    const preloadedState = {
      searchResults: {
        results: [
          {
            id: 716004,
            title: "xyz",
            image: "abc.jpg",
          },
          {
            id: 661925,
            title: "abc",
            image: "xyz.jpg",
          },
        ],
        loading: false,
        error: null,
      },
    };
    renderWithProviders(<App />, { preloadedState });
    const navigationBar = screen.getByRole("navigation");
    expect(navigationBar).toBeInTheDocument();
    const recipeView = screen.getByRole("region", { name: /recipe view/i });
    const recipeList = within(recipeView).getByRole("list", {
      name: /search results/i,
    });
    const recipes = within(recipeList).getAllByRole("listitem");
    const norecipeSelectedText = screen.queryByText(
      /Please select a recipe to see the details./
    );
    expect(recipeView).toBeInTheDocument();
    expect(recipeList).toBeInTheDocument();
    expect(norecipeSelectedText).toBeInTheDocument();
    expect(recipes).toHaveLength(2);
  }),
    it("renders navigation bar with search result view and one recipe selected", () => {
      const preloadedState = {
        searchResults: {
          results: [
            {
              id: 716004,
              title:
                "Quinoa and Chickpea Salad with Sun-Dried Tomatoes and Dried Cherries",
              image: "https://img.spoonacular.com/recipes/716004-312x231.jpg",
              imageType: "jpg",
            },
          ],
          loading: false,
          error: null,
        },
        recipeDetail: {
          error: null,
          loading: false,
          recipe: {
            bookmarked: false,
            extendedIngredients: [
              {
                id: 1,
                name: "Quinoa",
                amount: 1,
                unit: "cup",
                measures: {
                  metric: {
                    amount: 99.75,
                    unitLong: "grams",
                    unitShort: "g",
                  },
                },
              },
            ],
            id: 661925,
            image: "https://img.spoonacular.com/recipes/661925-556x370.jpg",
            analyzedInstructions: [
              {
                steps: [
                  {
                    number: 1,
                    step: "Prepare the quinoa: In a medium saucepan combine t…il the liquid is just absorbed, about 15 minutes.",
                  },
                ],
              },
            ],
            readyInMinutes: 45,
            servings: 4,
            sourceUrl:
              "https://www.foodista.com/recipe/K2BYJP76/strawberry-mango-quinoa-salad",
            summary:
              "Need a <b>gluten free and lacto ovo vegetarian hor d'oeuvre</b>? Strawberry-Mango Quinoa Salad could be an awesome recipe to try. This recipe serves 4. One serving contains <b>354 calories</b>, <b>8g of protein</b>, and <b>17g of fat</b>.",
            title: "Strawberry-Mango Quinoa Salad",
          },
        },
      };
      renderWithProviders(<App />, { preloadedState });
      const navigationBar = screen.getByRole("navigation");
      expect(navigationBar).toBeInTheDocument();
      const recipeDetail = screen.getByRole("region", {
        name: /recipe detail/i,
      });
      const recipeList = screen.getByRole("list", {
        name: /search results/i,
      });
      const recipes = within(recipeList).getAllByRole("listitem");
      const norecipeSelectedText = screen.queryByText(
        /Please select a recipe to see the details./
      );
      expect(recipeList).toBeInTheDocument();
      expect(recipeDetail).toBeInTheDocument();
      expect(norecipeSelectedText).not.toBeInTheDocument();
      expect(recipes).toHaveLength(1);
    });
});

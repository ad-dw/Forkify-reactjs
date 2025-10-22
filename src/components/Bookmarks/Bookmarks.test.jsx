import { render, screen } from "@testing-library/react";
import Bookmarks from "./Bookmarks.component";
import { renderWithProviders } from "../../tests/test-utils";

describe("Bookmarks component", () => {
  it("renders bookmarks component with no data", () => {
    localStorage.setItem("bookmarkedRecipes", JSON.stringify([]));
    render(<Bookmarks />);
    const noBookmarksText = screen.queryByText(/No bookmarks yet./);
    expect(noBookmarksText).toBeInTheDocument();
  });
  it("renders bookmarks component with data", () => {
    localStorage.setItem(
      "bookmarkedRecipes",
      JSON.stringify([
        { title: "recipe1", image: "image1.jpg" },
        { title: "recipe2", image: "image2.jpg" },
      ])
    );
    renderWithProviders(<Bookmarks />);
    const noBookmarksText = screen.queryByText(/No bookmarks yet./);
    expect(noBookmarksText).not.toBeInTheDocument();
    const bookmarksMenu = screen.getByRole("menu", /bookmarked recipes/i);
    expect(bookmarksMenu).toBeInTheDocument();
    const bookmarkItems = screen.getAllByRole("menuitem");
    expect(bookmarkItems.length).toBe(2);
  });
});

import { screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar.component";
import { renderWithProviders } from "../../tests/test-utils";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("NavigationBar", () => {
  test("should render correctly in large screens", async () => {
    renderWithProviders(<NavigationBar />);
    const navigationBar = screen.getByRole("navigation", {
      name: /global-navigation/i,
    });
    expect(navigationBar).toBeInTheDocument();
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const contactLink = screen.getByRole("link", { name: /contact/i });
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    const bookmarksButton = screen.getByRole("button", { name: /bookmarks/i });
    expect(bookmarksButton).toBeInTheDocument();
    await userEvent.click(bookmarksButton);
    const bookmarksRegion = await screen.findByRole("region", {
      name: /bookmarks/i,
    });
    expect(bookmarksRegion).toBeInTheDocument();
  });
  // test("should render correctly in small screens", async () => {
  //   Object.defineProperty(window, "innerHeight", {
  //     writable: true,
  //     configurable: true,
  //     value: 500,
  //   });
  //   renderWithProviders(<NavigationBar />);
  //   const navigationBar = screen.getByRole("navigation", {
  //     name: /global-navigation/i,
  //   });
  //   expect(navigationBar).toBeInTheDocument();
  //   const homeLink = screen.getByRole("link", { name: /home/i });
  //   expect(homeLink).toBeInTheDocument();
  //   const aboutLink = screen.getByRole("link", { name: /about/i });
  //   const contactLink = screen.getByRole("link", { name: /contact/i });
  //   expect(aboutLink).toBeInTheDocument();
  //   expect(contactLink).toBeInTheDocument();
  //   const bookmarksButton = screen.getByRole("button", { name: /bookmarks/i });
  //   expect(bookmarksButton).toBeInTheDocument();
  //   await userEvent.click(bookmarksButton);
  //   const bookmarksRegion = await screen.findByRole("region", {
  //     name: /bookmarks/i,
  //   });
  //   expect(bookmarksRegion).toBeInTheDocument();
  // });
});

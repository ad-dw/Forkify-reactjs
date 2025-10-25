import { screen, within } from "@testing-library/react";
import SearchResults from "./SearchResults.component";
import { renderWithProviders } from "../../tests/test-utils";
import { expect } from "vitest";

describe("SearchResultsPanel", () => {
  it("render SearchResultsPanel with no results", () => {
    renderWithProviders(
      <SearchResults results={[]} loading={false} error={null} />
    );
    const noResultsFindText = screen.getByText(/No results found/i);
    expect(noResultsFindText).toBeInTheDocument();
    const pagination = screen.queryByRole("navigation", {
      name: /pagination/i,
    });
    expect(pagination).not.toBeInTheDocument();
  });
  it("render SearchResultsPanel with results", () => {
    renderWithProviders(
      <SearchResults
        results={new Array(11).fill({
          id: 1,
          title: "Test Recipe",
          image: "test.jpg",
        })}
        loading={false}
        error={null}
      />,
      {
        preloadedState: {
          searchResults: { totalResults: 25, pages: 3, offset: 0 },
        },
      }
    );
    const noResultsFindText = screen.queryByText(/No results found/i);
    expect(noResultsFindText).not.toBeInTheDocument();
    const resultsList = screen.getByRole("list", /search results/i);
    expect(resultsList).toBeInTheDocument();
    const results = within(resultsList).getAllByRole("listitem");
    expect(results.length).toBe(11);
    const pagination = screen.queryByRole("navigation", {
      name: /pagination/i,
    });
    expect(pagination).toBeInTheDocument();
  });
  it("render SearchResultsPanel with error", () => {
    renderWithProviders(
      <SearchResults
        results={[]}
        loading={false}
        error="Something went wrong"
      />
    );
    const errorText = screen.getByText(
      /Error in fetching recipe: Something went wrong/i
    );
    expect(errorText).toBeInTheDocument();
  });
  it("render SearchResultsPanel in loading state", () => {
    renderWithProviders(
      <SearchResults results={[]} loading={true} error={null} />
    );
    const loader = screen.getByRole("progressbar", { name: /loading/i });
    expect(loader).toBeInTheDocument();
  });
});

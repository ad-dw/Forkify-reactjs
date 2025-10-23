import { render, screen, within } from "@testing-library/react";
import SearchResults from "./SearchResults.component";
import { renderWithProviders } from "../../tests/test-utils";
import { expect } from "vitest";

describe("SearchResultsPanel", () => {
  it("render SearchResultsPanel with no results", () => {
    render(<SearchResults results={[]} loading={false} error={null} />);
    const noResultsFindText = screen.getByText(/No results found/i);
    expect(noResultsFindText).toBeInTheDocument();
  });
  it("render SearchResultsPanel with results", () => {
    renderWithProviders(
      <SearchResults
        results={[
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
        ]}
        loading={false}
        error={null}
      />
    );
    const noResultsFindText = screen.queryByText(/No results found/i);
    expect(noResultsFindText).not.toBeInTheDocument();
    const resultsList = screen.getByRole("list", /search results/i);
    expect(resultsList).toBeInTheDocument();
    const results = within(resultsList).getAllByRole("listitem");
    expect(results.length).toBe(2);
  });
  it("render SearchResultsPanel with error", () => {
    render(
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
    render(<SearchResults results={[]} loading={true} error={null} />);
    const loader = screen.getByRole("progressbar", { name: /loading/i });
    expect(loader).toBeInTheDocument();
  });
});

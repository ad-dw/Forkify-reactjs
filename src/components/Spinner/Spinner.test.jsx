import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner.component";

it("should render Spinner component", () => {
  render(<Spinner className="test-class" />);
  const progressbar = screen.getByRole("progressbar");
  expect(progressbar).toBeInTheDocument();
  expect(progressbar.closest(".spinner-container")).toHaveClass("test-class");
});

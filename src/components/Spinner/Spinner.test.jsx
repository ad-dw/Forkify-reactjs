import { render, screen } from "@testing-library/react";
import Spinner from "./Spinner.component";

it("should render Spinner component", () => {
  render(<Spinner />);
  const progressbar = screen.getByRole("progressbar");
  expect(progressbar).toBeInTheDocument();
});

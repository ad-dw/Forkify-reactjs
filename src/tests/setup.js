// tests/setup.js
import "@testing-library/jest-dom/vitest"; // extends expect with jest-dom matchers
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

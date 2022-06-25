import Homepage from "../pages/homepage/Homepage";
import { render } from "@testing-library/react";

describe("Test suite for Homepage Component", () => {
  it("renders Homepage", () => {
    render(<Homepage />);
  });
});

import { render, screen } from "@testing-library/react";
import Nav from "../Nav";
import store from "../../../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Nav Testing", () => {
  test("render navbar", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByRole("contentinfo")).toHaveTextContent("Profile");
  });
});

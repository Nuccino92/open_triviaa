import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Homepage from "../Homepage";
import store from "../../../redux/store";

const setLoading = () => {};

describe("Homepage Testing", () => {
  test("check for correct button text", () => {
    render(
      <Provider store={store}>
        <Homepage setLoading={setLoading} />
      </Provider>
    );
    expect(screen.getByRole("startCasual")).toHaveTextContent("Casual");
    expect(screen.getByRole("startRanked")).toHaveTextContent("Ranked");
  });
});

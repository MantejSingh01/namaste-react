import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import store from "../../Redux/reducStore";

describe("Cart page test cases", () => {
  test("should check if the cart page is loaded or not", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const button = screen.getByText("Cart");

    expect(button).toBeInTheDocument();
  });

  test("should get by placeholder text", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const name = screen.getByPlaceholderText("name");

    expect(name).toBeInTheDocument();
  });
  test("should get all the input boxes", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );

    const name = screen.getAllByRole("textbox");
    console.log(name.length);
    expect(name.length).not.toBe(0);
  });
});

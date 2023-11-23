import { fireEvent, render, screen } from "@testing-library/react";
import Container from "../Container";
import { Provider } from "react-redux";
import store from "../../Redux/reducStore";
import { BrowserRouter } from "react-router-dom";
import DATA from "../../utils/fakeData";
import { act } from "react-dom/test-utils";

describe("Resto Cards test case ", () => {

    beforeAll(()=>{
        console.log("before All")
    })
    beforeEach(()=>{
        console.log("Before Each ");
    })
    afterAll(()=>{
        console.log("afterAll")
    })
    afterEach(()=>{
        console.log("after each ");
    })
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(DATA);
      },
    });
  });

  it("should get all the result on the container page", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Container />
          </Provider>
        </BrowserRouter>
      );
    });
    const input = screen.getByTestId("searchbox");
    fireEvent.change(input, {target:{value:"pizza"}})

  });
});

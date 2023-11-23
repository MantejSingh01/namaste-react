import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../Redux/reducStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import DATA from "../../utils/fakeData";
import 'whatwg-fetch';

describe("Should include header test cases", () => {

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(DATA)
        }
    })
})
  it("should check the login button", () => {


 render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

  
  const isLogin = screen.getByRole('button',{name:'default user'});
  fireEvent.click(isLogin);
  const isLogout = screen.getByText("default user")
  expect(isLogout).toBeInTheDocument();

  });

});

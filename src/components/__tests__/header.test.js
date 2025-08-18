import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utils/appStore"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";



it("should render Header with a login component",()=>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  const loginButton = screen.getAllByRole("button", { name : "Login" });


  // const loginButton = screen.getByText("login");

  //Assertion
  expect(loginButton[0]).toBeInTheDocument();

});

it("should render Header Component with a Cart item 0",()=>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  const cartItems = screen.getByText(/Cart/);


  // const loginButton = screen.getByText("login");

  //Assertion
  expect(cartItems).toBeInTheDocument();

});

it("should Change login to logout onClick",()=>{
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )
  const loginButton = screen.getByRole("button", {name : /Login/i});

  fireEvent.click(loginButton);

  const loginoutButton = screen.getByRole("button", {name : /Logout/i});

  expect(loginoutButton).toBeInTheDocument();

});
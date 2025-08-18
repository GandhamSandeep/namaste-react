import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";


global.fetch = jest.fn(()=>{
  return Promise.resolve({
    json: ()=>{ 
      return Promise.resolve(MOCK_DATA_NAME);
    }
  });
});



it("should Load Cart Restaurant Component", async ()=>{

  await act( async()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu/>
          <Cart />
        </Provider>
      </BrowserRouter>
  );
  });

  const accordianHeader = screen.getByText("Dips (1)");
  fireEvent.click(accordianHeader);

  expect(screen.getByTestId("foodItems").length).toBe(1);


  const addBtn = screen.getAllByRole("button", {name: "+ Add"})
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart(1 itmes)")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart(2 itmes)")).toBeInTheDocument();
  expect(screen.getByTestId("foodItems").length).toBe(2);

  fireEvent.click(screen.getByRole("button", {name: "Clear All"}));

  expect(screen.getAllByTestId("foodItems").length).toBe(1);
  
  expect(
    screen.getByText("Cart is Empty. Add Items to Cart").toBeInTheDocument()
  );
});
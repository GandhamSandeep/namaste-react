import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import Mock_Data from "../mocks/restaurantCard-mock.json"
import "@testing-library/jest-dom"

it("should render RestaurantCard Component with props data", ()=>{
  render(
    <RestaurantCard resData={Mock_Data} />
  )

  const name = screen.getByText("Big Bowl");
  
  expect(name).toBeInTheDocument();
})

it("should render RestaurantCard Component with Promoted Label", ()=>{
  //HOC: withPromoted label
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
  render(
    <PromotedRestaurantCard resData={Mock_Data} />
  )

  const promotedLabel = screen.getByText("Promoted");

  expect(promotedLabel).toBeInTheDocument();

})
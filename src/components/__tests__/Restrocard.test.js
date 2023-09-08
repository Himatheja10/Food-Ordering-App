import { render,screen } from "@testing-library/react"
import Restrocard from "../Restrocard"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/OneRestaurantdata.json"
import { withpromotedlabel } from "../Restrocard"


it("should contain the restaurant card component with props data", () => {

     render(<Restrocard resData = {MOCK_DATA}/>)

    const name = screen.getByText("New Maruthi tiffins");
    expect(name).toBeInTheDocument();
})

it("should contain the Restro card with promoted label", () => {

  const PromotedRestaurant = withpromotedlabel(Restrocard);

  render(<PromotedRestaurant resData={MOCK_DATA}/>);

  const promotedlabel = screen.getByText("Promoted")

  expect(promotedlabel).toBeInTheDocument();
})
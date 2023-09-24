import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/RestaurantList.json"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

//creating the mock of the fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve(
        {
            json : () =>{
                return Promise.resolve(MOCK_DATA)
             }
        }
    )    
})
it("should search reslist for the biryani text input", async () => {

    await act(async () => render(<BrowserRouter>
        <Body />
    </BrowserRouter>))

    const searchbutton = screen.getByRole("button", {name : "Search"});

    const searchinput = screen.getByTestId("searchinput");

    fireEvent.change(searchinput, {target : {value : "biryani"}});

    fireEvent.click(searchbutton);

    const rescards = screen.getAllByTestId("rescard")

    expect(rescards.length).toBe(2);
})

it("should gives us the top rated restaurants on clicking the top rated restaurant buttons", async () => {

   await act(async () => {
      render(<BrowserRouter>
              <Body/>
        </BrowserRouter>)
   })

   const topratedresbtn = screen.getByRole("button",{name : "Top rated restaurant"})

   const rescardsbeforeclicking = screen.getAllByTestId("rescard");

   expect(rescardsbeforeclicking.length).toBe(20);

   fireEvent.click(topratedresbtn);

   const rescardsafterclicking = screen.getAllByTestId("rescard");

   expect(rescardsafterclicking.length).toBe(7);
})
import { fireEvent, render,screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("should contain the login button", () => {

   
       render(<BrowserRouter>
             <Provider store={appStore}>
                <Header />
              </Provider>
       </BrowserRouter>
            );
  

    const loginbtn = screen.getByText("Login");

    fireEvent.click(loginbtn)

    const logoutbtn = screen.getByText("Logout")

    expect(logoutbtn).toBeInTheDocument();

})

it("should contain the Cart - (0) button", () => {

   
    render(<BrowserRouter>
          <Provider store={appStore}>
             <Header />
           </Provider>
    </BrowserRouter>
         );


    const cartbutton = screen.getByText("Cart - (0)")

 expect(cartbutton).toBeInTheDocument();

})
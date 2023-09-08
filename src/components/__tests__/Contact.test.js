const { render,screen } = require("@testing-library/react")
import Contact from "../Contact"
import "@testing-library/jest-dom"



test("Testing wheather our contact page is loading or not", ()=>{

    render(<Contact />);
    //rendered into js dom now rendered component will be in screen

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Testing wheather our contact page is loading or not", ()=>{
    //rendering
    render(<Contact />);
    //rendered into js dom now rendered component will be in screen
    
    //Querying
    const button = screen.getByText("submit")
    
    //Asserting
    expect(button).toBeInTheDocument();
});
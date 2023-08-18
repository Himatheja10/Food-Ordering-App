import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";




 const FoodApp = () =>{
  return <div className="totalapp">
      <Header />
      <Body />
  </div>
 }

 const Root = ReactDOM.createRoot(document.getElementById("root"))

 Root.render(<FoodApp />)
        
import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Resmenu from "./components/Resmenu";
//import Grocery from "./components/Grocery";

import UserContext from "./utils/UserContext";



const Grocery = lazy(() => import("./components/Grocery"))

 const FoodApp = () =>{
    const [userName,setuserName] = useState("")
    useEffect(() => {
        const data = {
            name : "Himatheja"
        }
        setuserName(data.name);
    },[])
   return (
   <UserContext.Provider value={{loggedInUser : userName , setuserName}}>
         <div>
           <Header />
            <Outlet/>
        </div>
   </UserContext.Provider>
   )
 }

 const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <FoodApp/>,
        children :[
            {
                path : "/",
                element : <Body />
               
            },
            {
                path : "/about",
                element : <About />
               
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path : "/restaurants/:resid",
                element : <Resmenu />
            }
        ],
        errorElement : <Error />
    },
    
 ])

 const Root = ReactDOM.createRoot(document.getElementById("root"))

 Root.render(<RouterProvider router={appRouter} />)
        
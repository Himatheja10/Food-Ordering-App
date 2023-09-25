import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
//import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Resmenu from "./components/Resmenu";
//import Grocery from "./components/Grocery"; - we have imported this using lazy in line 26
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Authentication from "./components/Authentication";



const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

 const FoodApp = () =>{
    const [userName,setuserName] = useState("");
    const login = localStorage.getItem('login');
    const [isloggedin,setisloggedin] = useState(login);
    useEffect(() => {
        const data = {
            name : "Himatheja"
        }
        setuserName(data.name);
    },[])
    
   return (
   <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser : userName , setuserName, isloggedin , setisloggedin}}>
      {!isloggedin ? <Authentication/>  :
          <div>
             <Header />
             <Outlet/>
          </div>
 }
      </UserContext.Provider>
 </Provider>
   )
 }

 const appRouter = createBrowserRouter([
    
    {
        path : "/",
        element : <FoodApp/>,
        children :[
            {
                path : "/",
                element : <Authentication/>
            },

            {
                path : "/about",
                element : <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
               
            },
            {
                path : "/home",
                element : <Body />
               
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
            },
            {
                path : "/cart",
                element : <Cart />
            },
        ],
        errorElement : <Error />
    },
    
 ])

 const Root = ReactDOM.createRoot(document.getElementById("root"))

 Root.render(<RouterProvider router={appRouter} />)
        
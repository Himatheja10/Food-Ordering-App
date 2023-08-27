import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () =>{
  let [loginbtn,setloginbtn] = useState("Login")
  const onlinestatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)
  
    return <div className="flex justify-between bg-pink-50 shadow-lg m-2">
        <div>
          <img src={LOGO_URL} className="w-56"/>
        </div>
        <div className="flex items-center p-4 m-4">
          <ul className="flex ">
            <li className="px-4">onlinestatus : {onlinestatus === true ? "🟢":"🔴"}


            </li>
           <li className="px-4">
            <Link to="/">Home</Link>
            </li>
           <li className="px-4">
           <Link to="/about">About Us</Link>
           </li>
           <li className="px-4">
             <Link to="/contact">Contact</Link>
            </li>
           <li className="px-4">Cart</li>
           <li className="px-4"><Link to="/grocery">Grocery</Link></li>
           <li className="px-4"><button className="login-btn" onClick={ () => {
              loginbtn === "Login" ?setloginbtn("Logout"):setloginbtn("Login");
           }}>{loginbtn}</button></li>
           <li  className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
    </div>
  }

  export default Header;
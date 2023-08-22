import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
  let [loginbtn,setloginbtn] = useState("Login")
  const onlinestatus = useOnlineStatus();
    return <div className="header">
        <div>
          <img src={LOGO_URL} className="image-icon"/>
        </div>
        <div className="Nav-items">
          <ul>
            <li>onlinestatus : {onlinestatus ? "🟢":"🔴"}


            </li>
           <li>
            <Link to="/">Home</Link>
            </li>
           <li>
           <Link to="/about">About Us</Link>
           </li>
           <li>
             <Link to="/contact">Contact</Link>
            </li>
           <li>Cart</li>
           <li><Link to="/grocery">Grocery</Link></li>
           <li><button className="login-btn" onClick={ () => {
              loginbtn === "Login" ?setloginbtn("Logout"):setloginbtn("Login");
           }}>{loginbtn}</button></li>
          </ul>
        </div>
    </div>
  }

  export default Header;
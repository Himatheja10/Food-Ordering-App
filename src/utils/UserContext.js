import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "Default context",
    setuserName : ()=>{},
    isloggedin : "",
    setisloggedin : ()=>{}
})

export default UserContext;
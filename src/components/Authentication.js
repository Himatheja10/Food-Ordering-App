import { useContext } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
import Error from "./Error";

const Authentication = () => {
    const history= useNavigate();
    const context = useContext(UserContext);
    const emailinput = useRef();
    const passwordinput = useRef();

    const Submithandler = async (e) => {
        e.preventDefault();
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCn_RHzhbH0pxH9Bnqeq6IHI9605LjJ3Fs";

        const response = await fetch(url,{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : emailinput.current.value,
                password : passwordinput.current.value,
                returnSecureToken : true
            })
        })
        const data = await response.json();
       if(response.ok){
        localStorage.setItem("login",true);
        context.setisloggedin(true);
        history("/home");
       }
       else{
        console.log(data.error.message);
        alert(data.error.message);
          
       }

    }
    const signupfnc = async (e) => {
        e.preventDefault();
        const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCn_RHzhbH0pxH9Bnqeq6IHI9605LjJ3Fs";
        let response =  await fetch(url,{method : "POST",
                body : JSON.stringify({
                    email : emailinput.current.value,
                    password : passwordinput.current.value,
                    returnSecureToken : true
                }),
                headers : {
                    "Content-Type" : "application/json"
                }
    })
    if(response.ok){
    const data = await response.json();
    alert("You have done your sign up");
    
    console.log(data.idToken);
    }
    else{
        const data = await response.json();
        alert(data.error.message);
    }

    }

    
    return <div className="flex justify-center">
        <div className="w-6/12 bg-gray-100">
        <form  >
           <div className="flex justify-center m-2 p-2">
            <label htmlFor="username" className="m-2">UserName </label>
            <input type="text" id="username" className="border border-black flex m-2" ref={emailinput}/>
           </div>
           <div className="flex justify-center m-2 p-2">
           <label htmlFor="password" className="m-2">Password </label>
            <input type="text" id="password" className="border border-black flex m-2" ref={passwordinput}/>
           </div>
           <div className="flex justify-center m-2 p-2">
             <button className="bg-black text-white m-2 p-2 border rounded-lg" onClick={
               Submithandler
             }>LogIn</button>
             <button className="bg-black text-white m-2 p-2 border rounded-lg" onClick={
                
                    signupfnc
                

             }>SignUp</button>
           </div>
           <div>
             
           </div>
        </form>
        </div>
    </div>
}

export default Authentication;
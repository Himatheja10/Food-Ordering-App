 import User from "./User";
import UserClass from "./UserClass";
import React  from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component{
  constructor(props){
    super(props)
    console.log("Parent Constructor")
  }

componentDidMount(){
  console.log("parent componentDidMount is called")
}
  render(){
    console.log("Parent render")
    return (<div>
        
      <h1>This a Food ordering App</h1>
    <h2> This app i created from react ehich i have learnt feom Namaste react</h2>
    

    <UserClass name="Himatheja" contact="9390221427" Location ="Parvathipuram"/>;
    <UserContext.Consumer >{(data)=> data.loggedInUser}</UserContext.Consumer>
  </div>)
  }
}
 {/*const About = () =>{
    return (<div>
        
        <h1>This a Food ordering App</h1>
      <h2> This app i created from react ehich i have learnt feom Namaste react</h2>
      

      <UserClass name="Himatheja" contact="9390221427" Location ="Parvathipuram"/>;
    </div>)
 } */}

 export default About;
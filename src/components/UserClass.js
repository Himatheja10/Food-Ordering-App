import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
           
            
        }
        console.log("Child constructor")
    }

    async componentDidMount(){
        console.log("Child componentDidMount is called")
        
      }
    render(){
        
        console.log("Child render")
        
        return (
            <div className="user-box">
                
                
                <h4>contact : {this.props.contact}</h4>
                <h4>Location : {this.props.Location}</h4>
                <h4>email : himatheja1010@gmail.com</h4>
               
            </div>
        )
    }
}

export default UserClass;
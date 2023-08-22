const User = ({name,contact}) =>{
    return (
        <div className="user-box">
            <h2>This is {name}</h2>
            <h4>contact : {contact}</h4>
            <h4>Location : Parvathipuram</h4>
            <h4>email : himatheja1010@gmail.com</h4>
        </div>
    )
}

export default User;
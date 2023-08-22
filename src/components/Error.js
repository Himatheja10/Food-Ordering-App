import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Ooops Somthing Went Wrong !!!</h1>
            <h2>{err.status}</h2>
            <h4>{err.statusText}</h4>
        </div>
    )
}

export default Error
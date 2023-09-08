import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantmenu = (resid) => {
    
    const [Resmenu,setResmenu] = useState(null)
    useEffect(() =>{
        fetchdata();
    },[])

    const fetchdata = async () => {
        const data = await fetch(MENU_URL + resid);
        const json = await data.json();
        //console.log(json);
        setResmenu(json);
    }

    return Resmenu;
}

export default useRestaurantmenu
import useRestaurantmenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const Resmenu = () => {

    // const[menudata,setmenudata] =useState(null);
    // useEffect(()=>{
    //     fetchdatamenu();
    // },[])

    const {resid} = useParams();
    console.log(resid)

    const menudata = useRestaurantmenu(resid);
    console.log(menudata)
    
    // const fetchdatamenu = async () =>{
    //         const data = await fetch( MENU_URL + resid)
    //         const json = await data.json();
    //         console.log(json);
    //         setmenudata(json);
    // }
    if(menudata === null){
        return <Shimmer/>
    }
    const {itemCards} = menudata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(itemCards);
    const {name,cuisines} = menudata?.data?.cards[0]?.card?.card?.info;
    return (
        <div>
          
          <h2>{name}</h2>
            
            <p>{cuisines}</p>
            <h4>MENU</h4>
            <ul>
               {
                itemCards.map((menu) => <li key={menu.card.info.id}> {menu.card.info.name} - {menu.card.info.price/100}</li>)
               }
               
            </ul>
        </div>
    )
}

export default Resmenu;
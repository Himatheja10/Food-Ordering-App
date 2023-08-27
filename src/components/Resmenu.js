import useRestaurantmenu from "../utils/useRestaurantmenu";
import Shimmer from "./Shimmer";
import { useParams, useSubmit } from "react-router-dom";
import Itemtype from "./Itemtype";
import { useState } from "react";


const Resmenu = () => {

    // const[menudata,setmenudata] =useState(null);
    // useEffect(()=>{
    //     fetchdatamenu();
    // },[])

    const {resid} = useParams();
    //console.log(resid)

    const menudata = useRestaurantmenu(resid);
    //console.log(menudata)
    
    const [showIndex,setshowIndex] = useState(null)
    const [wrapitems,setwrapitems] = useState(false);
    
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
    //console.log(itemCards);

    const {name,cuisines} = menudata?.data?.cards[0]?.card?.card?.info;
    const {cards} = menudata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    //console.log(cards)

    const menucardstypes = cards.filter((cardmenu) => cardmenu?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
    //console.log(menucardstypes)

    return (
        <div className="flex justify-center">
           <div className="w-6/12 bg-gray-100  p-4">
              <div className="text-center">
              <p className="font-bold text-2xl">{name}</p>
              <p>{cuisines.join(", ")}</p>
              </div>
              
                {menucardstypes.map((card,index) => <Itemtype menutype={card} key={card.card.card.title}
                   wrapitems = {index===showIndex ? true: false} setshowIndex={() => {
                    if(index === showIndex && wrapitems === true) {
                        setshowIndex(null)
                        setwrapitems(!wrapitems)
                    }
                    else if(index === showIndex && wrapitems ===false){
                       setshowIndex(null);
                       setwrapitems(!wrapitems)
                    }
                    else {
                           setshowIndex(index)
                           setwrapitems(!wrapitems);
                    }
                   }}/>)}
              
           </div>
           
        </div>
    )
}

export default Resmenu;
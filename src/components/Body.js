import Restrocard  from "./Restrocard.js";

import resInfo from "../utils/mockData.js";
import { useState } from "react"




 const Body = () =>{
  let [listOfRestaurants,setlistOfRestaurants] = useState(resInfo);
  
    {console.log(5+6)}
    return <div className="body-container">
      <div className="">
         <button className="filter-btn" onClick={ () =>{
          let filteredlist = listOfRestaurants.filter(
            (restau) =>   restau.info.avgRating>4
          );
          setlistOfRestaurants(filteredlist);
          console.log(filteredlist) ;
        }
       
         }>Top rated restaurant</button>
      </div>
      <div className="restro-container">
       {listOfRestaurants.map( (restaurant) => <Restrocard resData = {restaurant} key={restaurant.info.id}/>)}
       
      </div>
    </div>
 }

 export default Body;
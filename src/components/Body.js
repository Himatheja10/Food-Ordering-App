import Restrocard  from "./Restrocard.js";

import Shimmer from "./Shimmer.js";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



 const Body = () =>{
  const [listOfRestaurants,setlistOfRestaurants] = useState([]);

  const [filterOfRestaurants,setfilterOfRestaurants] = useState([]);

  const [searchtext,setsearchtext] = useState("")

  const onlinestatus = useOnlineStatus();
  
    useEffect(  () => {
      fetchdata();

    },[])
     const fetchdata = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.97663373159588&lng=79.53625570982695&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      let jsondata = await data.json();
      console.log(jsondata)
      console.log(jsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      setlistOfRestaurants(jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilterOfRestaurants(jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }
     
     if(onlinestatus === false ) return <h1>You are offline man check ur internet</h1>
  

    return listOfRestaurants.length === 0?<Shimmer />:(<div className="body-container">
      <div className="bodytop-container">
         <div className="search-container">
          <input type="search" value={searchtext} onChange={(e) =>{
          
            setsearchtext(e.target.value);
          }}/>
          <button className="search-btn" onClick={() => {
            
            //filter restauramts using search logic
            let filterlist = listOfRestaurants.filter(
              (rest) =>rest.info.name.toLowerCase().includes(searchtext.toLowerCase())
      
              )
             setfilterOfRestaurants(filterlist);
          }}>Search</button>
         </div>
         <button className="filter-btn" onClick={ () =>{
          let filteredlist = listOfRestaurants.filter(
            (restau) =>   restau.info.avgRating>4
          );
          setfilterOfRestaurants(filteredlist);
          console.log(filteredlist) ;
        }
       
         }>Top rated restaurant</button>
      </div>
      <div className="restro-container">
       {filterOfRestaurants.map( (restaurant) => <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><Restrocard resData = {restaurant} /></Link>)}
       
      </div>
    </div>)
 }

 export default Body;
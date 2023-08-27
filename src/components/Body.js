

import Shimmer from "./Shimmer.js";
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import Restrocard,{withpromotedlabel} from "./Restrocard.js";
import UserContext from "../utils/UserContext.js";


 const Body = () =>{
  const [listOfRestaurants,setlistOfRestaurants] = useState([]);

  const [filterOfRestaurants,setfilterOfRestaurants] = useState([]);

  const [searchtext,setsearchtext] = useState("")

  const onlinestatus = useOnlineStatus();
  const {loggedInUser, setuserName} = useContext(UserContext);

  const PromotedRestaurant = withpromotedlabel(Restrocard);
  
  
    useEffect(  () => {
      fetchdata();

    },[])
     const fetchdata = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.97663373159588&lng=79.53625570982695&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      let jsondata = await data.json();
      console.log(jsondata)
      //console.log(jsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      setlistOfRestaurants(jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setfilterOfRestaurants(jsondata?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     }
     
     if(onlinestatus === false ) return <h1>You are offline man check ur internet</h1>
  
    

    return listOfRestaurants.length === 0?<Shimmer />:(<div className="body-container">
      <div className="bodytop-container flex items-center">
         <div className="search-container m-4 p-4">
          <input type="search" className="border border-solid border-black" value={searchtext} onChange={(e) =>{
          
            setsearchtext(e.target.value);
          }}/>
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
            
            //filter restauramts using search logic
            let filterlist = listOfRestaurants.filter(
              (rest) =>rest.info.name.toLowerCase().includes(searchtext.toLowerCase())
      
              )
             setfilterOfRestaurants(filterlist);
          }}>Search</button>
          
         </div>
         <div>
         <button className="px-4 py-2 bg-green-100 m-4 " onClick={ () =>{
          let filteredlist = listOfRestaurants.filter(
            (restau) =>   restau.info.avgRating>4
          );
          setfilterOfRestaurants(filteredlist);
          console.log(filteredlist) ;
        }
       
         }>Top rated restaurant</button>
         </div>
         <div>
          <label className="p-1">User Name :</label>
           <input  className="border border-solid border-black p-2" value={loggedInUser} onChange={(e) => {
                setuserName(e.target.value)
           }}/>
         </div>
      </div>
      <div className="restro-container flex flex-wrap">
       {filterOfRestaurants.map( (restaurant) => 
           <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
              {true ? <PromotedRestaurant resData = {restaurant}/> : <Restrocard resData = {restaurant}/>}</Link>)}
       
      </div>
    </div>)
 }

 export default Body;
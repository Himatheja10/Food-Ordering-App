import { CDN_URL } from "../utils/constants";


 const Restrocard = (props) =>{
    const {resData} = props;
    const {info} = resData;
    const{name,cloudinaryImageId,avgRating,cuisines} = info;
    return <div className="m-4 p-4 w-80 bg-gray-100">
    <img src={CDN_URL+ cloudinaryImageId} className="restro-logo h-52 w-80 rounded-xl"/>
    <h4 className="font-bold py-2 text-lg">{name}</h4>
    <h4>{avgRating + '⭐'}</h4>
    <h4>{cuisines.join(", ")}</h4>
  </div>
  }
  
   export const withpromotedlabel = (Restrocard) => {
    
    return (props) => {
      
      return (
        <div>
          <label className="absolute bg-black text-white rounded-lg">Promoted</label>
          <Restrocard {...props}/>
        </div>
      )
    }
   }

  export default Restrocard;
  
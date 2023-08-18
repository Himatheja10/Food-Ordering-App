import { CDN_URL } from "../utils/constants";


const Restrocard = (props) =>{
    const {resData} = props;
    const {info} = resData;
    const{name,cloudinaryImageId,avgRating,cuisines} = info;
    return <div className="restro-card">
    <img src={CDN_URL+ cloudinaryImageId} className="restro-logo"/>
    <h4>{name}</h4>
    <h4>{avgRating + '⭐'}</h4>
    <h4>{cuisines.join(", ")}</h4>
  </div>
  }

  export default Restrocard;
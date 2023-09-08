import { Item_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";

const Iteminitemtype = ({itemcard}) => {

    const dispatch = useDispatch();

    const handleaddItem = (itemcard) => {
        //dispatch an action
        dispatch(addItem(itemcard));
    }
    
    return (
        <div className="py-4 flex border-2 border-b-black">
            <div className="w-9/12 ">
            <p className="font-bold text-lg">{itemcard.card.info.name}</p>
            <p className="font-bold">₹ {itemcard.card.info.price ? (itemcard.card.info.price/100):(itemcard.card.info.defaultprice/100)}</p>
            <p className="py-2">{itemcard.card.info.description}</p>
            </div>
            <div className="w-3/12  ">
                <div >
                
                <div className="absolute">
                <button className="bg-black text-white rounded-md mx-10 p-2" onClick={ () => handleaddItem(itemcard)}>Add +</button>
                </div>
                <img src={Item_URL+itemcard.card.info.imageId} className="w-full h-40 rounded-lg"/>
                </div>
            </div>
            
        </div>
    )
}

export default Iteminitemtype
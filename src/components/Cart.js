
import { useSelector } from "react-redux";
import Iteminitemtype from "./Iteminitemtype";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch();
    const handleclearcart = () => {
        //dispatch an action
       dispatch(clearCart())
    }

    return (
        <div className="flex justify-center">
            <div className="w-6/12 bg-green-100">
              <div className="text-center">
              <p className="m-2 p-2 font-bold text-2xl">Cart</p>
              <button className="m-2 p-2 font-bold bg-black text-white rounded-lg" onClick={handleclearcart}>clearCart</button>
              {cartItems.map((item) => <Iteminitemtype itemcard={item} key={item.card.info.name}/>)}
              </div>
            </div>
        </div>
    )
}

export default Cart;
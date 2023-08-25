import { useState } from "react";
import Iteminitemtype from "./Iteminitemtype";


const Itemtype = (props) => {
    
    const {menutype} = props
    
    const {title,itemCards} = menutype?.card?.card;

    const [wrapitems,setwrapitems] = useState(false)
    console.log(title)
    return (
          
        <div className=" py-4 shadow-xl bg-gray-100 border-4 border-b-black">
            {/* Header */}
            <div className="flex justify-between cursor-pointer" onClick={() => {
                  !wrapitems ? setwrapitems(true):setwrapitems(false)
               }}>
               <span className="font-bold text-xl cursor-pointer" >{title} ({itemCards.length})</span>
               <span className="cursor-pointer">🔽</span>
            </div>
            {/* Body */}
            {!wrapitems && itemCards.map((item) => <Iteminitemtype itemcard={item} key={item.card.info.id}/> ) }  
           
        </div>
    )
}

export default Itemtype
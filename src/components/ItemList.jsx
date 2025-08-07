import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //Dispatch an action to add item to cart
    dispatch(addItem(item));
  }

  console.log(items);
  return (
    <div>
        {items.map((item) => 
          <div key={item.card.info.id} className="p-2 m-2 border-b-1 border-gray-400 flex justify-between">
            <div className="items-center w-9/12">
              <div className="text-left">
                <div>{item.card.info.name}</div>
                <div className="pt-2 font-bold">₹ { item.card.info.price ? item.card.info.price / 100 : item.card.info.default / 100 }/-</div>
              </div>
              <p className="text-left py-2 text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
                <div className="absolute">
                  <button className="bg-white p-2 shadow-2xl rounded-lg"
                  onClick={()=>handleAddItem(item)}
                  >+ Add</button>
                </div>
                <img className="w-40 h-30 rounded-lg" src={CDN_URL+ item.card.info.imageId} alt="" />
              </div>
          </div>
        )}
    </div>
  );
}

export default ItemList;
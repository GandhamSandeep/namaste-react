import ItemList from "./ItemList";
import { useState } from 'react';

const RestaurantCategory = ({data, showItems, setShowIndex})=>{
  
  const  handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 bg-gray-100 mx-auto my-4 shadow-lg px-4">
      <div className="flex justify-between items-center cursor-pointer scroll-smooth" onClick={handleClick}>
        <span className="font-bold text-xl p-4">{data.title} ({data.itemCards.length})</span>
        <span>⬇️</span>
      </div>
      {
        showItems && <ItemList items={data.itemCards} />
      }
    </div>
  )
}
export default RestaurantCategory;
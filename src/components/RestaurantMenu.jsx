import React, { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { MENU_API_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);  


  const fetchMenu = async () => {
    const data = await fetch( MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = info;

  const { itemCards } = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(',')} - {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map(item => <li key={item.card?.info?.id}>{item.card?.info?.name} - {item.card?.info?.price}</li>)}
      </ul>
    </div>    
  );
};

export default RestaurantMenu;
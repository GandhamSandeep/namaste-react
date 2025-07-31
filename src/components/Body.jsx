import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_API_URL } from "../utils/constants";



const Body = ()=>{
  // Local State Variable => Super Powerful Variables
  let [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch( RESTAURANT_LIST_API_URL );
    const json = await data.json();
    console.log(json.data);
    setListOfRestaurants(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  if(listOfRestaurants.length === 0){
    return <Shimmer />;
  }
  
   return (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input type="text" className="border border-solid border-black" value={searchText} onChange={(event)=>{
            //update the search text
            setSearchText(event.target.value); 
          }} />
          <button className="px-4 py-1 bg-green-100 ml-4 cursor-pointer rounded-md text-red-500" onClick={()=>{
            //filter the restaurant cards and update UI
            // search Text
            const filteredRestaurants = listOfRestaurants.filter((res)=> 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}>Search</button>
        </div>
       <div className="m-4 p-4 flex items-center">
        <button className="px-4 py-1 bg-blue-400 ml-4 cursor-pointer rounded-lg text-white" 
            onClick={()=>{
            const filteredList = listOfRestaurants.filter(
              (res)=> res.info.avgRating > 4
            );
              setListOfRestaurants(filteredList);
            }}>Top Rated Restaurants
          </button>
       </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {
          filteredRestaurants.map(restaurant => 
          <Link key={restaurant.info.id} to={"restaurants/"+restaurant.info.id}><RestaurantCard resData = {restaurant}  /></Link>
          )
        }
      </div>
    </div>
  )
}

export default Body;
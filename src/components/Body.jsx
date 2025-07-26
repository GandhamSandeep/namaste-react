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
    setListOfRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  if(listOfRestaurants.length === 0){
    return <Shimmer />;
  }
  
   return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(event)=>{
            //update the search text
            setSearchText(event.target.value); 
          }} />
          <button className="search-btn" onClick={()=>{
            //filter the restaurant cards and update UI
            // search Text
            const filteredRestaurants = listOfRestaurants.filter((res)=> 
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}>Search</button>
        </div>
        <button className="filter-btn" 
          onClick={()=>{
          const filteredList = listOfRestaurants.filter(
            (res)=> res.info.avgRating > 4
          );
            setListOfRestaurants(filteredList);
          }}>Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
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
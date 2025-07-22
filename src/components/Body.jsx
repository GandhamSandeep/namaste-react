import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = ()=>{
  // Local State Variable => Super Powerful Variables
  let [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json,'json');


    setListOfRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // with if condition statement  

  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />;
  // }

  // with ternary operator

  return (listOfRestaurants.length === 0) ? ( <Shimmer /> ) :
  
   (
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
          <RestaurantCard key={restaurant.info.id}  resData = {restaurant}  />)
        }
      </div>
    </div>
  )
}

export default Body
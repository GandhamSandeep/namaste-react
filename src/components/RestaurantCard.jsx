import { CDN_URL } from "../utils/constants"
import UserContext from "../utils/UserContext"
import { useContext } from 'react'

const RestaurantCard = (props)=>{
  const {resData} = props


  const {loggedInUser} = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    sla
  } = resData.info
  return (
    <div className="m-4 p-2 w-[250px] bg-gray-100 rounded-lg hover:bg-sky-100">
      <img alt="res-logo" className="h-[150px] w-[100%] rounded-lg" src={CDN_URL+cloudinaryImageId}/>
      <div className="p-4">
        <h3 className="font-bold text-md">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
    </div>
  )
}

//Higher Order Component
//Input - RestaurantCard => RestaurantCardPromoted


export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div className="">
        <label className="text-white absolute bg-black m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}


export default RestaurantCard;
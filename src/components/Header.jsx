import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = ()=>{

  const [btnName, setBtnName] = useState("login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg mb-2 h-20">
      <div className="logo-container">
        <img className="w-40 h-20" src={LOGO_URL}/>
      </div>
      <div className="">
        <ul className="flex p-4 m-4 g-4">
          <li className="px-4">
            Online Status: { onlineStatus ? "✅" : "🔴" }
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4 font-bold">{loggedInUser} </li>
          <button className="login" onClick={()=>{
            btnName === "Login" 
            ? setBtnName("Logout") 
            : setBtnName("Login");      
          }}>{btnName}</button>
        </ul>
      </div>
    </div>

  )
}

export default Header;
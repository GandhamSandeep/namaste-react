import { LOGO_URL } from "../utils/constants";
import { useState } from "react"
import { Link } from "react-router-dom";

const Header = ()=>{

  const [btnName, setBtnName] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>Cart </li>
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
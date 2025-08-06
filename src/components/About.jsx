import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";




class About extends React.Component{

  constructor(props){
    super(props);

    // console.log("Parent Component Constructor");
  }
  
  componentDidMount(){
    // console.log("Parent Component Mounted");
  }

  render(){
    // console.log("Parent Component Render");
    return(    
      <div className="about">
      <h1>About Us</h1>
      <h2>Learning React</h2>
      <div>
      <UserContext.Consumer>
        {({loggedInUser}) => (<h1 className="font-bold">LoggedInUser: {loggedInUser}</h1>) }
      </UserContext.Consumer>
      </div>
      {/* <User name={"Sandeep is from Functional Component"} /> */}
      <UserClass name={"Sandep is from Class Component"} location={"Bangalore"} />
      <User/>

    </div>
    );
  }
}



// Functional Component

// const About = ()=>{
//   return(
//     <div className="about">
//       <h1>About Us</h1>
//       <h2>Learning React</h2>
//       <User name={"Sandeep is from Functional Component"} />
//       <UserClass name={"Sandep is from Class Component"} location={"Bangalore"} />
//     </div>
//   );
// }

export default About;
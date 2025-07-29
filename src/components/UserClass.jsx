import React from "react";

class UserClass extends React.Component{

  constructor(props){
    super(props);
    
    
    this.state ={
      userInfo: {
        name : "dummyname",
        login: "sandeep Gandham"
      },
    }
    console.log("Child Component Constructor");
  }
  
  async componentDidMount(){
    console.log("Child Component Mounted");

    // Simulating an API call
    const data = await fetch("https://api.github.com/users/sandeepgandham");
    const json = await data.json();
    

    this.setState({
      userInfo: json
    });
    console.log(json);

  
  // Uncomment the below code to see the timer functionality

  //  this.timer =  setInterval(() => {
  //     console.log('UserClass Component is still mounted');
  //   }, 1000);

  }

  componentDidUpdate(){
    console.log("Child ComponentDidUpdate");
  }

  componentWillUnmount(){
    console.log("Child Component Will Unmount");
    // clearInterval(this.timer);
  }

  render(){

    const {name, login} = this.state.userInfo;
    console.log("Child Component Render");

    return(
      <div className="user-card">
        <h3>Name : {name}</h3>
        <h4>Location: {login}</h4>
        <h5>Contact: gandhams129@gmail.com</h5>
      </div>
    );
  }

}

export default UserClass;
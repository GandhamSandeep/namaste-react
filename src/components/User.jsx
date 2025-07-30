import React from 'react';
import { useState, useEffect } from 'react';

const User = (props)=>{
  const {name} = props;

  const [count] = useState(0);
  const [count2, setCount2] = useState(0)

  // useEffect(()=>{
  //   const timer = setInterval(() => {
  //     console.log('User Component Mounted');
  //   }, 1000);

  //   return(()=>{
      
  //     clearInterval(timer);
  //   })
  // },[])
  

  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <button onClick={()=>{
        setCount2(count2 + 1);
      }}>Count Increament</button>
      <h3>Name : {name}</h3>
      <h4>Location: Bangalore</h4>
      <h5>Contact: gandhams129@gmail.com</h5>
    </div>
  );
 }

export default User;
import React from "react";



const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form action="">
        <input placeholder="name" type="text" className="border border-black p-2 m-2 rounded-md"/>
        <input type="text" className="border border-black p-2 m-2 rounded-md"/>
        <button type="submit" className=" p-2 m-2 rounded-md bg-blue-400 text-white ">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
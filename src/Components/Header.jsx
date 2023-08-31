import React from "react";
// import  {Link}  from 'react-router-dom';

const Header = () => {
  return (
    <div className=" max-w-7xl m-auto h-16 flex items-center justify-between py-11">
      <div className="logo cursor-pointer">
        <img src="/images/logo.png" className=" md:w-[80px]" alt="logo" />
      </div>
      <ul className=" flex items-center cursor-pointer gap-6 text-2xl ">
        <li href="#">MENU</li>
        <li href="#">LOCATION</li>
        <li href="#">ABOUT</li>
        <li>
          {/* <Link to="/Contact">CONTACT</Link> */}
        </li>
      </ul>
      <button className="btn ">Login</button>
    </div>
  );
};

export default Header;

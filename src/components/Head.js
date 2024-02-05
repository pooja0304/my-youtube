import React from "react";
import { LOGO, MENU_ICON, USER_ICON } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch()

  const toggleMenuHandler = () =>{
      dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col mx-3 my-4">
      <div className="flex col-span-1">
        <img src={MENU_ICON} alt="menu" className="h-6 mr-6 cursor-pointer" onClick={()=>toggleMenuHandler()}/>
        <img src={LOGO} alt="logo" className="h-7" />
      </div>
      <div className="col-span-10 flex justify-center">
        <input type="text" placeholder="search" className="w-1/2 border-gray-400 border p-2 rounded-l-full" />
        <button className="border-gray-400 border p-2 rounded-r-full bg-gray-100">search</button>
      </div>
      <div className="col-span-1">
        <img src={USER_ICON} alt="user" className="h-8" />
      </div>
    </div>
  );
};

export default Head;

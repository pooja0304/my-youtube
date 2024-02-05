import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const ismenuopen = useSelector((store) => store.app?.isMenuOpen);
  //   early return pattern
  if (!ismenuopen) return null;
  return (
    <div className="col-span-1 mx-x p-5 max-h-screen">
        <ul className="text-sm mb-4 border-b-gray-300 border-b py-3">
        <li className="py-2"><Link to="/">Home</Link></li>
        <li className="py-2">Shorts</li>
        <li className="py-2">Subscriptions</li>
      </ul>
      <h1 className="font-bold">You</h1>
      <ul className="text-sm mb-2 border-b-gray-300 border-b py-2">
        <li className="py-2">Your channel</li>
        <li className="py-2">History</li>
        <li className="py-2">Your videos</li>
        <li className="py-2">Watch later</li>
        <li className="py-2">show more</li>
      </ul>
      <h1 className="font-bold">Explore</h1>
      <ul className="text-sm mb-2 border-b-gray-300 border-b py-2">
        <li className="py-2">Trending</li>
        <li className="py-2">Shopping</li>
        <li className="py-2">Music</li>
        <li className="py-2">Movies</li>
        <li className="py-2">Live</li>
      </ul>
    </div>
  );
};

export default Sidebar;

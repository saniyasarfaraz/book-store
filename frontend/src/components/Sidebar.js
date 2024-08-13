import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ data }) => {
  if (!data) {
    // Render a loading message or spinner while data is being fetched
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="bg-4f2c16 p-4 rounded flex flex-col items-center h-full text-white">
      <div className="flex flex-col items-center justify-center">
        {/* Use optional chaining to avoid errors if data properties are undefined */}
        <img
          src={data.avatar}
          alt="Avatar"
          className="h-24 w-24 rounded-full border border-white"
        />
        <p className="mt-3 text-xl font-semibold">{data.username}</p>
        <p className="mt-1 text-base">{data.email}</p>
        <div className="w-full mt-4 h-px bg-3e362e hidden lg:block"></div>
        <Link
          to="/profile"
          className="text-white font-semibold w-full py-2 text-center hover:bg-3e362e rounded transition-all duration-300"
        >
          Favourites
        </Link>
        <Link
          to="/profile/orderHistory"
          className="text-white font-semibold w-full py-2 text-center hover:bg-3e362e rounded transition-all duration-300"
        >
          Order History
        </Link>
        <Link
          to="/profile/settings"
          className="text-white font-semibold w-full py-2 text-center hover:bg-3e362e rounded transition-all duration-300"
        >
          Settings
        </Link>
      </div>
      <button className="bg-3e362e w-3/6 lg:w-full mt-4 text-white font-semibold flex items-center py-2 rounded hover:bg-c4a27c transition-all duration-300">
        Log Out
        {/* <FaArrowRightFromBracket className="ms-4"/> */}
      </button>
    </div>
  );
};

export default Sidebar;

// src/components/favouritesIcon.js
import React from "react";
import { BsSuitHeart } from "react-icons/bs";
const favouritesIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <BsSuitHeart />
    </div>
  );
};

export default favouritesIcon;

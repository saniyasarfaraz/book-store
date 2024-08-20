// src/components/FavoritesIcon.js
import React from "react";
import { BsSuitHeart } from "react-icons/bs";
const FavoritesIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      <BsSuitHeart />
    </div>
  );
};

export default FavoritesIcon;

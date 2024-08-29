import React, { useEffect, useState } from "react";
import axios from "axios";
import FavouriteBookCard from "../profile/FavouriteBookCard";
import Header from "../header";
import { useSelector } from "react-redux";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // Fetch favourite books on component mount
  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-favourite-books",
          { headers }
        );
        setFavourites(response.data.data);
      } catch (error) {
        console.error("Error fetching favourites:", error);
      }
    };

    fetchFavourites();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Update the favourites list when a book is removed
  const handleRemove = (id) => {
    setFavourites(favourites.filter((book) => book._id !== id));
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  return (
    <>
      <Header />
      {isLoggedIn && role === "user" && (
        <div
          className="book-container"
          style={{
            marginTop: "5.5vw",
            width: "99%",
            height: "104%",
            display: "flex",
            flexGrow: " 1",
            flexWrap: "wrap",
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          <div style={{ display: "grid", width: "100%" }}>
            {favourites.length === 0 && (
              <div
                className="home-heading"
                style={{
                  color: "#3e362e7a",
                  marginTop: "12vw",
                  // display: "grid",
                  // justifyItems: "center",
                  justifySelf: "center",
                  alignelf: "center",
                  // alignSelf: "center",
                }}
              >
                No Favourite Book
              </div>
            )}
          </div>
          {favourites.map((item) => (
            <FavouriteBookCard
              key={item._id}
              id={item._id}
              img={item.imageSource}
              title={item.bookName}
              author={item.author}
              genre={item.bookGenre}
              price={item.price}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Favourites;

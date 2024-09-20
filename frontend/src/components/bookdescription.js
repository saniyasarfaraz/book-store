import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Books from "./assets/books";
import Header from "./header";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoMdCart } from "react-icons/io";
import FavouriteIcon from "./header icons/favourite.svg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { RiHeartAdd2Line } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Bookdescription = (props) => {
  //to fetch book desc from server
  const { id } = useParams();
  const navigate = useNavigate();

  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:1000/api/v1/get-book-by-id/${id}`
      );
      console.log(response.data.data);
      setData(response.data.data);
    };
    fetch();
  }, []);
  console.log(Data);
  console.log(localStorage.role);

  // console.log("id is" + id);
  // const book = Books[id];
  // console.log(book);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function buy() {
    if (isLoggedIn) {
      alert("Your order placed Suceesfully");
      navigate("/");
    } else {
      alert("Please login to buy the book");
      navigate("/Login");
    }
  }
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };
  const favclick = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-book-to-favourite",
      {},
      { headers }
    );
    alert(response.data.message);
  };

  const handleCart = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-to-cart",
      {},
      { headers }
    );
    alert(response.data.message);
    // toast.success("Book added to cart successfully!");
  };

  const deleteBook = async () => {
    const response = await axios.delete(
      "http://localhost:1000/api/v1/delete-book",
      { headers }
    );
    alert(response.data.message);
    navigate("/books");
  };
  const updateBook = async () => {
    console.log("chll gya1");
    const response = await axios.put(
      "http://localhost:1000/api/v1/update-book",
      { headers }
    );
    console.log("chll gya2");
    alert(response.data.message);
    navigate("/updatebook");
  };
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (!Data) {
    return <p>Book not found</p>; // Handle case where book is not found
  }

  return (
    <div>
      <Header />
      <div
        className="card mb-3 "
        style={{
          minWidth: "80vw",
          maxWidth: "90vw",
          minHeight: "90vh",
          margin: "auto",
          marginTop: "12vh",
          backgroundColor: "#f5e1bc9e",
        }}
      >
        <div className="row g-0 book-card" style={{}}>
          <div
            className="col-md-6 "
            style={{ display: "flex", backgroundColor: "#f5e1bc31" }}
          >
            <img
              src={Data.imageSource}
              className="img-fluid  book-img"
              alt="a book"
              style={{
                // margin: "2rem",
                // marginLeft: "5vw",

                maxHeight: "85vh",
              }}
            ></img>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">{Data.bookName}</h1>
              <p className="card-text text-body-secondary ">
                Author: {Data.author}
              </p>
              <p className="card-text fs-4" style={{ textAlign: "justify" }}>
                <br></br>
                <strong>Description:</strong> {Data.Bookdescription}
              </p>
              <p className="card-text fs-5 ">Pages: {Data.pages}</p>
              <p className="card-text fs-5 ">Genre: {Data.bookGenre}</p>
              <p
                className="card-text  fs-3"
                style={{ position: "relative", bottom: "-1rem" }}
              >
                Price: ₹ {Data.price}.00
              </p>
              <span
                onClick={favclick}
                className="favIcon"
                style={{
                  // backgroundColor: "#c4a27c",
                  width: "4vw",
                  height: "4vw",
                  display: "inline-block",
                  borderRadius: "50%",
                  display: "flex",
                  marginTop: "6vh",
                  visibility:
                    isLoggedIn && localStorage.role == "user"
                      ? "visible"
                      : "hidden",
                }}
              >
                <RiHeartAdd2Line className="large-icon" />
              </span>
              <div className="button-box">
                <button
                  className="btn btn-primary btn-lg decription-button"
                  style={{
                    display:
                      isLoggedIn && localStorage.role == "admin"
                        ? "none"
                        : "block",
                    position: !isLoggedIn ? "relative" : "static",
                    right: !isLoggedIn ? "20vw" : 0,
                  }}
                  onClick={buy}
                >
                  Buy Now
                </button>
                <button
                  className=" btn btn-primary btn-lg cart-button"
                  style={{
                    display:
                      isLoggedIn && localStorage.role == "user"
                        ? "block"
                        : "none",
                  }}
                  onClick={handleCart}
                >
                  <IoMdCart />
                  &nbsp; Add to Cart
                </button>
              </div>
              <div className="button-box">
                <button
                  className="btn btn-primary btn-lg"
                  style={{
                    display:
                      localStorage.role == "admin" ? "inline-block" : "none",
                  }}
                  onClick={updateBook}
                >
                  <FiEdit style={{ marginRight: "0.5rem" }} />
                  Edit Book
                </button>

                <button
                  className=" btn btn-primary btn-lg cart-button"
                  style={{
                    display:
                      isLoggedIn && localStorage.role == "admin"
                        ? "block"
                        : "none",

                    width: "48%",
                  }}
                  // onClick={}
                  onClick={deleteBook}
                >
                  <RiDeleteBin6Line />
                  &nbsp; Delete Book
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdescription;

// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Header from "./header";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import { IoMdCart } from "react-icons/io";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FiEdit } from "react-icons/fi";
// import { RiHeartAdd2Line } from "react-icons/ri";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Bookdescription = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [Data, setData] = useState(null); // Initialize with null
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   useEffect(() => {
//     const fetchBook = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:1000/api/v1/get-book-by-id/${id}`
//         );
//         setData(response.data.data);
//       } catch (error) {
//         console.error("Error fetching book data:", error);
//         toast.error("Failed to fetch book data.");
//       }
//     };
//     fetchBook();
//     window.scrollTo(0, 0);
//   }, [id]);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//     bookid: id,
//   };

//   const handleBuy = () => {
//     if (isLoggedIn) {
//       toast.success("Your order was placed successfully!");
//       navigate("/");
//     } else {
//       toast.info("Please log in to buy the book.");
//       navigate("/Login");
//     }
//   };

//   const handleFavouriteClick = async () => {
//     try {
//       const response = await axios.put(
//         "http://localhost:1000/api/v1/add-book-to-favourite",
//         {},
//         { headers }
//       );
//       toast.success(response.data.message);
//     } catch (error) {
//       console.error("Error adding book to favourites:", error);
//       toast.error("Failed to add book to favourites.");
//     }
//   };

//   const handleCart = async () => {
//     try {
//       const response = await axios.put(
//         "http://localhost:1000/api/v1/add-to-cart",
//         {},
//         { headers }
//       );
//       if (response.status === 200) {
//         toast.success("Book added to cart successfully!");
//       } else {
//         toast.error("Failed to add book to cart.");
//       }
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   if (!Data) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <Header />
//       <div
//         className="card mb-3"
//         style={{
//           minWidth: "80vw",
//           maxWidth: "90vw",
//           minHeight: "90vh",
//           margin: "auto",
//           marginTop: "12vh",
//           backgroundColor: "#f5e1bc9e",
//         }}
//       >
//         <div className="row g-0 book-card">
//           <div
//             className="col-md-6"
//             style={{ display: "flex", backgroundColor: "#f5e1bc31" }}
//           >
//             <img
//               src={Data.imageSource}
//               className="img-fluid book-img"
//               alt="Book cover"
//               style={{ maxHeight: "85vh" }}
//             />
//           </div>
//           <div className="col-md-6">
//             <div className="card-body">
//               <h1 className="card-title">{Data.bookName}</h1>
//               <p className="card-text text-body-secondary">
//                 Author: {Data.author}
//               </p>
//               <p className="card-text fs-4" style={{ textAlign: "justify" }}>
//                 <strong>Description:</strong> {Data.Bookdescription}
//               </p>
//               <p className="card-text fs-5">Pages: {Data.pages}</p>
//               <p className="card-text fs-5">Genre: {Data.bookGenre}</p>
//               <p
//                 className="card-text fs-3"
//                 style={{ position: "relative", bottom: "-1rem" }}
//               >
//                 Price: ₹ {Data.price}.00
//               </p>
//               <span
//                 onClick={handleFavouriteClick}
//                 className="favIcon"
//                 style={{
//                   width: "4vw",
//                   height: "4vw",
//                   display: "inline-block",
//                   borderRadius: "50%",
//                   display: "flex",
//                   marginTop: "6vh",
//                   visibility:
//                     isLoggedIn && localStorage.role === "user"
//                       ? "visible"
//                       : "hidden",
//                 }}
//               >
//                 <RiHeartAdd2Line className="large-icon" />
//               </span>
//               <div className="button-box">
//                 <button
//                   className="btn btn-primary btn-lg decription-button"
//                   style={{
//                     display: localStorage.role === "user" ? "block" : "none",
//                     position: !isLoggedIn ? "relative" : "static",
//                     right: !isLoggedIn ? "20vw" : 0,
//                   }}
//                   onClick={handleBuy}
//                 >
//                   Buy Now
//                 </button>
//                 <button
//                   className="btn btn-primary btn-lg cart-button"
//                   style={{
//                     display:
//                       isLoggedIn && localStorage.role === "user"
//                         ? "block"
//                         : "none",
//                   }}
//                   onClick={handleCart}
//                 >
//                   <IoMdCart /> &nbsp; Add to Cart
//                 </button>
//               </div>
//               <div className="button-box">
//                 <button
//                   className="btn btn-primary btn-lg"
//                   style={{
//                     display:
//                       localStorage.role === "admin" ? "inline-block" : "none",
//                   }}
//                 >
//                   <FiEdit style={{ marginRight: "0.5rem" }} />
//                   Edit Book
//                 </button>
//                 <button
//                   className="btn btn-primary btn-lg cart-button"
//                   style={{
//                     display:
//                       isLoggedIn && localStorage.role === "admin"
//                         ? "block"
//                         : "none",
//                     width: "48%",
//                   }}
//                 >
//                   <RiDeleteBin6Line /> &nbsp; Delete Book
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer position="top-right" autoClose={5000} />
//     </div>
//   );
// };

// export default Bookdescription;

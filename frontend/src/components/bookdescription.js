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
          <div className="col-md-6 ">
            <img
              src={Data.imageSource}
              className="img-fluid rounded-start book-img"
              alt="a book"
              style={{
                margin: "2rem",
                marginLeft: "5vw",

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
                  position: "relative",
                  top: "2rem",
                  visibility:
                    isLoggedIn && localStorage.role == "user"
                      ? "visible"
                      : "hidden",
                }}
              >
                <RiHeartAdd2Line className="large-icon" />
              </span>
              <button
                className="btn btn-primary btn-lg"
                style={{
                  position: "relative",
                  top: "3rem",
                  right: "10rem",
                  width: "48%",
                  display: localStorage.role == "user" ? "block" : "none",
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
                  position: "relative",
                  top: "0rem",
                  left: "10rem",
                  width: "48%",
                }}
                onClick={handleCart}
              >
                <IoMdCart />
                &nbsp; Add to Cart
              </button>
              <button
                className="btn btn-primary btn-lg"
                style={{
                  position: "relative",
                  top: "3rem",
                  width: "48%",
                  display:
                    localStorage.role == "admin" ? "inline-block" : "none",
                }}
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
                  position: "relative",
                  top: "0rem",
                  left: "10rem",
                  width: "48%",
                }}
                onClick={buy}
              >
                <RiDeleteBin6Line />
                &nbsp; Delete Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdescription;

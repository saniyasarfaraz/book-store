import React, { useEffect, useState } from "react";
import axios from "axios";
import Cartcard from "./cartcard";
import { BsCart4 } from "react-icons/bs";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  // Function to fetch cart data
  const fetchCart = async () => {
    try {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-user-cart",
        { headers }
      );
      setCart(response.data.data);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const placeOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1000/api/v1/place-order",
        { order: cart }, // Fix here: Use cart instead of Cart
        { headers }
      );
      alert(response.data.message);
      navigate("/");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Please try again.");
    }
  };

  // Update total whenever the cart changes
  useEffect(() => {
    if (cart.length > 0) {
      const totalAmount = cart.reduce(
        (sum, item) => sum + parseFloat(item.price),
        0
      );
      setTotal(totalAmount);
    } else {
      setTotal(0);
    }
  }, [cart]);

  return (
    <>
      <Header />
      {isLoggedIn && (
        <div>
          <div
            className="book-container"
            style={{
              marginTop: "6vw",
              width: "89vw",
              height: "100%",
              display: "flex",
              flexGrow: "1",
              flexWrap: "wrap",
              overflowY: "auto",
              overflowX: "hidden",
              marginLeft: "8rem",
            }}
          >
            {cart.length === 0 && (
              <div
                className="home-heading"
                style={{
                  color: "#3e362e7a",
                  margin: "auto",
                  marginTop: "33vh",
                  display: "flex",
                  height: "37.5vh",
                }}
              >
                <BsCart4 /> &nbsp;
                <p>Empty Cart</p>
              </div>
            )}
            {cart &&
              cart.map((item, index) => (
                <div key={item._id} style={{ display: "inline-block" }}>
                  <Cartcard
                    id={item._id}
                    img={item.imageSource}
                    title={item.bookName}
                    author={item.author}
                    genre={item.bookGenre}
                    price={item.price}
                    favourite={true}
                    refreshCart={fetchCart} // Pass the refreshCart function as a prop
                  />
                </div>
              ))}
            {cart.length > 0 && (
              <div
                className="cards"
                style={{
                  display: "block",
                  minWidth: "60vw",
                  borderRadius: 0,
                  borderCollapse: "collapse",
                  maxWidth: "99vw",
                  minHeight: "10vh",
                  maxHeight: "45vh",
                  height: "10vh",
                  border: "0.5px solid #3e362e40",
                  backgroundColor: "#f5e1bc9e",
                  position: "sticky",
                  bottom: "0",
                }}
              >
                <button
                  onClick={placeOrder}
                  className="btn btn-primary"
                  style={{
                    width: "10rem",
                    height: "3rem",
                    marginTop: "0.7rem",
                    marginLeft: "40vw",
                  }}
                >
                  Place your order
                </button>
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div
              className="card book-card "
              style={{
                width: "20vw",
                marginLeft: "70vw",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "sticky",
                bottom: "26vw",
              }}
            >
              <h2
                style={{
                  width: "100%",
                  borderBottom: "1px solid #3e362e40",
                }}
              >
                &nbsp; Price Details &nbsp;
              </h2>
              <p>No. of books: {cart.length}</p>
              <p
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderBottom: "1px solid #3e362e40",
                  paddingBottom: "2rem",
                }}
              >
                Total price: ₹{total}.00{" "}
              </p>
              <button
                onClick={placeOrder}
                className="btn btn-primary"
                style={{ width: "98%" }}
              >
                Place order
              </button>
              &nbsp;
            </div>
          )}
          <Footer />
        </div>
      )}
    </>
  );
};

export default Cart;

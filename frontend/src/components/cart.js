// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cartcard from "./cartcard";
// import { BsCart4 } from "react-icons/bs";
// import Header from "./header";
// import { useNavigate } from "react-router-dom";
// import Footer from "./footer";
// const Cart = () => {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   // Function to fetch cart data
//   const fetchCart = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:1000/api/v1/get-user-cart",
//         { headers }
//       );
//       console.log(response);
//       setCart(response.data.data);
//     } catch (error) {
//       console.error("Error fetching cart data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const placeOrder = async () => {
//     // alert("Placing Order...");
//     try {
//       const response = await axios.post(
//         "http://localhost:1000/api/v1/place-order",
//         { order: Cart }, // { order: cart },
//         { headers }
//       );
//       alert(response.data.message);
//       navigate("/profile/orderHistory");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Update total whenever the cart changes
//   useEffect(() => {
//     if (cart.length > 0) {
//       const totalAmount = cart.reduce(
//         (sum, item) => sum + parseFloat(item.price),
//         0
//       );
//       setTotal(totalAmount);
//     } else {
//       setTotal(0);
//     }
//   }, [cart]); // Recalculate total whenever cart changes

//   return (
//     <>
//       <Header />
//       <div
//         className="book-container"
//         style={{
//           marginTop: "6vw",
//           width: "89vw",
//           height: "100%",
//           display: "flex",
//           flexGrow: "1",
//           flexWrap: "wrap",
//           overflowY: "auto",
//           overflowX: "hidden",
//           marginLeft: "8rem",
//         }}
//       >
//         {cart.length === 0 && (
//           <div
//             className="home-heading"
//             style={{
//               color: "#3e362e7a",
//               margin: "auto",
//               marginTop: "33vh",
//               display: "flex",
//               height: "37.5vh",
//             }}
//           >
//             <BsCart4 /> &nbsp;
//             <p>Empty Cart</p>
//           </div>
//         )}
//         {cart &&
//           cart.map((item, index) => (
//             <div style={{ display: "inline-block" }}>
//               <Cartcard
//                 id={item._id}
//                 img={item.imageSource}
//                 title={item.bookName}
//                 author={item.author}
//                 genre={item.bookGenre}
//                 price={item.price}
//                 favourite={true}
//                 refreshCart={fetchCart} // Pass the refreshCart function as a prop
//               />
//             </div>
//           ))}
//         {cart.length > 0 && (
//           <div
//             className="cards"
//             style={{
//               display: "block",
//               minWidth: "60vw",
//               borderRadius: 0,
//               borderCollapse: "collapse",
//               maxWidth: "99vw",
//               minHeight: "20vh",
//               maxHeight: "45vh",
//               border: "0.5px solid #3e362e40",
//               backgroundColor: "#f5e1bc9e",
//               position: "sticky",
//               bottom: "0",
//             }}
//           >
//             <button
//               onClick={placeOrder}
//               className="btn btn-primary"
//               style={{ width: "98%" }}
//             >
//               Place your order
//             </button>
//           </div>
//         )}
//       </div>

//       {cart.length > 0 && (
//         <div
//           className="card book-card "
//           style={{
//             width: "20vw",
//             marginLeft: "70vw",
//             display: "inline-flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "sticky",
//             bottom: "26vw",
//           }}
//         >
//           <h2 style={{ width: "100%", borderBottom: "1px solid #3e362e40" }}>
//             Price Details
//           </h2>
//           <p>No. of books: {cart.length}</p>
//           <p
//             style={{
//               width: "100%",
//               textAlign: "center",
//               borderBottom: "1px solid #3e362e40",
//               paddingBottom: "2rem",
//             }}
//           >
//             Total price: ₹{total}.00{" "}
//           </p>
//           <button
//             onClick={placeOrder}
//             className="btn btn-primary"
//             style={{ width: "98%" }}
//           >
//             Place your order
//           </button>
//           &nbsp;
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default Cart;

// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import Cartcard from "./cartcard";
// // // // import { BsCart4 } from "react-icons/bs";
// // // // import Header from "./header";
// // // // import { useNavigate } from "react-router-dom";
// // // // import Footer from "./footer";

// // // // const Cart = () => {
// // // //   const navigate = useNavigate();
// // // //   const [cart, setCart] = useState([]);
// // // //   const [total, setTotal] = useState(0);

// // // //   const headers = {
// // // //     id: localStorage.getItem("id"),
// // // //     authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //   };

// // // //   // Function to fetch cart data
// // // //   const fetchCart = async () => {
// // // //     try {
// // // //       const response = await axios.get(
// // // //         "http://localhost:1000/api/v1/get-user-cart",
// // // //         { headers }
// // // //       );
// // // //       console.log(response);
// // // //       setCart(response.data.data);
// // // //     } catch (error) {
// // // //       console.error("Error fetching cart data:", error);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchCart();
// // // //   }, []);

// // // //   // Place order function
// // // //   const placeOrder = async () => {
// // // //     try {
// // // //       const response = await axios.post(
// // // //         "http://localhost:1000/api/v1/place-order",
// // // //         { order: cart },
// // // //         { headers }
// // // //       );
// // // //       alert(response.data.message);
// // // //       navigate("/profile/orderHistory");
// // // //     } catch (error) {
// // // //       console.log(error);
// // // //     }
// // // //   };

// // // //   // Update total whenever the cart changes
// // // //   useEffect(() => {
// // // //     if (cart.length > 0) {
// // // //       const totalAmount = cart.reduce(
// // // //         (sum, item) => sum + +item.price * item.quantity, // Assuming `quantity` is added to `cart` items
// // // //         0
// // // //       );
// // // //       setTotal(totalAmount);
// // // //     } else {
// // // //       setTotal(0);
// // // //     }
// // // //   }, [cart]);

// // // //   return (
// // // //     <>
// // // //       <Header />
// // // //       <div
// // // //         className="book-container"
// // // //         style={{
// // // //           marginTop: "6vw",
// // // //           width: "89vw",
// // // //           height: "100%",
// // // //           display: "flex",
// // // //           flexGrow: "1",
// // // //           flexWrap: "wrap",
// // // //           overflowY: "auto",
// // // //           overflowX: "hidden",
// // // //           marginLeft: "8rem",
// // // //           position: "relative", // Ensure "Place your order" button is sticky
// // // //         }}
// // // //       >
// // // //         {cart.length === 0 && (
// // // //           <div
// // // //             className="home-heading"
// // // //             style={{
// // // //               color: "#3e362e7a",
// // // //               margin: "auto",
// // // //               marginTop: "33vh",
// // // //               display: "flex",
// // // //               height: "37.5vh",
// // // //             }}
// // // //           >
// // // //             <BsCart4 /> &nbsp;
// // // //             <p>Empty Cart</p>
// // // //           </div>
// // // //         )}
// // // //         {cart &&
// // // //           cart.map((item, index) => (
// // // //             <div key={index} style={{ display: "inline-block" }}>
// // // //               <Cartcard
// // // //                 id={item._id}
// // // //                 img={item.imageSource}
// // // //                 title={item.bookName}
// // // //                 author={item.author}
// // // //                 genre={item.bookGenre}
// // // //                 price={item.price}
// // // //                 quantity={item.quantity || 1} // Default quantity to 1 if not present
// // // //                 setCart={setCart} // Pass setCart to update cart state
// // // //                 favourite={true}
// // // //                 refreshCart={fetchCart} // Pass the refreshCart function as a prop
// // // //               />
// // // //             </div>
// // // //           ))}
// // // //         {cart.length > 0 && (
// // // //           <div
// // // //             className="cards"
// // // //             style={{
// // // //               display: "block",
// // // //               minWidth: "60vw",
// // // //               borderRadius: 0,
// // // //               borderCollapse: "collapse",
// // // //               maxWidth: "99vw",
// // // //               minHeight: "20vh",
// // // //               maxHeight: "45vh",
// // // //               border: "0.5px solid #3e362e40",
// // // //               backgroundColor: "#f5e1bc9e",
// // // //               position: "sticky",
// // // //               bottom: "0",
// // // //             }}
// // // //           >
// // // //             <button
// // // //               onClick={placeOrder}
// // // //               className="btn btn-primary"
// // // //               style={{ width: "98%" }}
// // // //             >
// // // //               Place your order
// // // //             </button>
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {cart.length > 0 && (
// // // //         <div
// // // //           className="card book-card "
// // // //           style={{
// // // //             width: "20vw",
// // // //             marginLeft: "70vw",
// // // //             display: "inline-flex",
// // // //             alignItems: "center",
// // // //             justifyContent: "center",
// // // //             position: "sticky",
// // // //             bottom: "26vw",
// // // //           }}
// // // //         >
// // // //           <h2 style={{ width: "100%", borderBottom: "1px solid #3e362e40" }}>
// // // //             Price Details
// // // //           </h2>
// // // //           <p>No. of books: {cart.length}</p>
// // // //           <p
// // // //             style={{
// // // //               width: "100%",
// // // //               textAlign: "center",
// // // //               borderBottom: "1px solid #3e362e40",
// // // //               paddingBottom: "2rem",
// // // //             }}
// // // //           >
// // // //             Total price: ₹{total}.00
// // // //           </p>
// // // //           <button
// // // //             onClick={placeOrder}
// // // //             className="btn btn-primary"
// // // //             style={{ width: "98%" }}
// // // //           >
// // // //             Place your order
// // // //           </button>
// // // //           &nbsp;
// // // //         </div>
// // // //       )}

// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // };

// // // // export default Cart;

// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import Cartcard from "./cartcard";
// // // import { BsCart4 } from "react-icons/bs";
// // // import Header from "./header";
// // // import { useNavigate } from "react-router-dom";
// // // import Footer from "./footer";

// // // const Cart = () => {
// // //   const navigate = useNavigate();
// // //   const [cart, setCart] = useState([]);
// // //   const [total, setTotal] = useState(0);

// // //   const headers = {
// // //     id: localStorage.getItem("id"),
// // //     authorization: `Bearer ${localStorage.getItem("token")}`,
// // //   };

// // //   // Function to fetch cart data
// // //   const fetchCart = async () => {
// // //     try {
// // //       const response = await axios.get(
// // //         "http://localhost:1000/api/v1/get-user-cart",
// // //         { headers }
// // //       );
// // //       setCart(response.data.data);
// // //     } catch (error) {
// // //       console.error("Error fetching cart data:", error);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchCart();
// // //   }, []);

// // //   // Update quantity of an item
// // //   const updateQuantity = async (id, quantity) => {
// // //     try {
// // //       await axios.put(
// // //         `http://localhost:1000/api/v1/update-cart-item/${id}`,
// // //         { quantity },
// // //         { headers }
// // //       );
// // //       fetchCart(); // Re-fetch the cart after updating quantity
// // //     } catch (error) {
// // //       console.error("Error updating item quantity:", error);
// // //     }
// // //   };

// // //   // Calculate total price
// // //   useEffect(() => {
// // //     const totalAmount = cart.reduce(
// // //       (sum, item) => sum + (item.price * item.quantity || 1),
// // //       0
// // //     );
// // //     setTotal(totalAmount);
// // //   }, [cart]);

// // //   const placeOrder = async () => {
// // //     try {
// // //       const response = await axios.post(
// // //         "http://localhost:1000/api/v1/place-order",
// // //         { order: cart },
// // //         { headers }
// // //       );
// // //       alert(response.data.message);
// // //       navigate("/profile/orderHistory");
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <Header />
// // //       <div
// // //         className="book-container"
// // //         style={{
// // //           marginTop: "6vw",
// // //           width: "89vw",
// // //           height: "100%",
// // //           display: "flex",
// // //           flexGrow: "1",
// // //           flexWrap: "wrap",
// // //           overflowY: "auto",
// // //           overflowX: "hidden",
// // //           marginLeft: "8rem",
// // //         }}
// // //       >
// // //         {cart.length === 0 && (
// // //           <div
// // //             className="home-heading"
// // //             style={{
// // //               color: "#3e362e7a",
// // //               margin: "auto",
// // //               marginTop: "33vh",
// // //               display: "flex",
// // //               height: "37.5vh",
// // //             }}
// // //           >
// // //             <BsCart4 /> &nbsp;
// // //             <p>Empty Cart</p>
// // //           </div>
// // //         )}
// // //         {cart &&
// // //           cart.map((item) => (
// // //             <div key={item._id} style={{ display: "inline-block" }}>
// // //               <Cartcard
// // //                 id={item._id}
// // //                 img={item.imageSource}
// // //                 title={item.bookName}
// // //                 author={item.author}
// // //                 genre={item.bookGenre}
// // //                 price={item.price}
// // //                 quantity={item.quantity}
// // //                 updateQuantity={updateQuantity} // Pass updateQuantity function as a prop
// // //                 refreshCart={fetchCart} // Pass refreshCart function as a prop
// // //               />
// // //             </div>
// // //           ))}
// // //         {cart.length > 0 && (
// // //           <div
// // //             className="cards"
// // //             style={{
// // //               display: "block",
// // //               minWidth: "60vw",
// // //               borderRadius: 0,
// // //               borderCollapse: "collapse",
// // //               maxWidth: "99vw",
// // //               minHeight: "20vh",
// // //               maxHeight: "45vh",
// // //               border: "0.5px solid #3e362e40",
// // //               backgroundColor: "#f5e1bc9e",
// // //               position: "sticky",
// // //               bottom: "0",
// // //             }}
// // //           >
// // //             <button
// // //               onClick={placeOrder}
// // //               className="btn btn-primary"
// // //               style={{ width: "98%" }}
// // //             >
// // //               Place your order
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>

// // //       {cart.length > 0 && (
// // //         <div
// // //           className="card book-card"
// // //           style={{
// // //             width: "20vw",
// // //             marginLeft: "70vw",
// // //             display: "inline-flex",
// // //             alignItems: "center",
// // //             justifyContent: "center",
// // //             position: "sticky",
// // //             bottom: "26vw",
// // //           }}
// // //         >
// // //           <h2 style={{ width: "100%", borderBottom: "1px solid #3e362e40" }}>
// // //             Price Details
// // //           </h2>
// // //           <p>
// // //             No. of books:{" "}
// // //             {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
// // //           </p>
// // //           <p
// // //             style={{
// // //               width: "100%",
// // //               textAlign: "center",
// // //               borderBottom: "1px solid #3e362e40",
// // //               paddingBottom: "2rem",
// // //             }}
// // //           >
// // //             Total price: ₹{total}.00{" "}
// // //           </p>
// // //           <button
// // //             onClick={placeOrder}
// // //             className="btn btn-primary"
// // //             style={{ width: "98%" }}
// // //           >
// // //             Place your order
// // //           </button>
// // //           &nbsp;
// // //         </div>
// // //       )}

// // //       <Footer />
// // //     </>
// // //   );
// // // };

// // // export default Cart;

// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Cartcard from "./cartcard";
// // import { BsCart4 } from "react-icons/bs";
// // import Header from "./header";
// // import { useNavigate } from "react-router-dom";
// // import Footer from "./footer";

// // const Cart = () => {
// //   const navigate = useNavigate();
// //   const [cart, setCart] = useState([]);
// //   const [total, setTotal] = useState(0);
// //   const [numBooks, setNumBooks] = useState(0);

// //   const headers = {
// //     id: localStorage.getItem("id"),
// //     authorization: `Bearer ${localStorage.getItem("token")}`,
// //   };

// //   // Function to fetch cart data
// //   const fetchCart = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:1000/api/v1/get-user-cart",
// //         { headers }
// //       );
// //       setCart(response.data.data);
// //     } catch (error) {
// //       console.error("Error fetching cart data:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCart();
// //   }, []);

// //   // Update quantity of an item
// //   const updateQuantity = async (id, quantity) => {
// //     try {
// //       await axios.put(
// //         `http://localhost:1000/api/v1/update-cart-item/${id}`,
// //         { quantity },
// //         { headers }
// //       );
// //       fetchCart(); // Re-fetch the cart after updating quantity
// //     } catch (error) {
// //       console.error("Error updating item quantity:", error);
// //     }
// //   };

// //   // Calculate total price and number of books
// //   useEffect(() => {
// //     const totalAmount = cart.reduce(
// //       (sum, item) => sum + (item.price * item.quantity || 0),
// //       0
// //     );
// //     const totalBooks = cart.reduce(
// //       (sum, item) => sum + (item.quantity || 1),
// //       0
// //     );
// //     setTotal(totalAmount);
// //     setNumBooks(totalBooks);
// //   }, [cart]);

// //   const placeOrder = async () => {
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:1000/api/v1/place-order",
// //         { order: cart },
// //         { headers }
// //       );
// //       alert(response.data.message);
// //       navigate("/profile/orderHistory");
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <div
// //         className="book-container"
// //         style={{
// //           marginTop: "6vw",
// //           width: "89vw",
// //           height: "100%",
// //           display: "flex",
// //           flexGrow: "1",
// //           flexWrap: "wrap",
// //           overflowY: "auto",
// //           overflowX: "hidden",
// //           marginLeft: "8rem",
// //         }}
// //       >
// //         {cart.length === 0 && (
// //           <div
// //             className="home-heading"
// //             style={{
// //               color: "#3e362e7a",
// //               margin: "auto",
// //               marginTop: "33vh",
// //               display: "flex",
// //               height: "37.5vh",
// //             }}
// //           >
// //             <BsCart4 /> &nbsp;
// //             <p>Empty Cart</p>
// //           </div>
// //         )}
// //         {cart &&
// //           cart.map((item) => (
// //             <div key={item._id} style={{ display: "inline-block" }}>
// //               <Cartcard
// //                 id={item._id}
// //                 img={item.imageSource}
// //                 title={item.bookName}
// //                 author={item.author}
// //                 genre={item.bookGenre}
// //                 price={item.price}
// //                 quantity={item.quantity}
// //                 updateQuantity={updateQuantity} // Pass updateQuantity function as a prop
// //                 refreshCart={fetchCart} // Pass refreshCart function as a prop
// //               />
// //             </div>
// //           ))}
// //         {cart.length > 0 && (
// //           <div
// //             className="cards"
// //             style={{
// //               display: "block",
// //               minWidth: "60vw",
// //               borderRadius: 0,
// //               borderCollapse: "collapse",
// //               maxWidth: "99vw",
// //               minHeight: "20vh",
// //               maxHeight: "45vh",
// //               border: "0.5px solid #3e362e40",
// //               backgroundColor: "#f5e1bc9e",
// //               position: "sticky",
// //               bottom: "0",
// //             }}
// //           >
// //             <button
// //               onClick={placeOrder}
// //               className="btn btn-primary"
// //               style={{ width: "98%" }}
// //             >
// //               Place your order
// //             </button>
// //           </div>
// //         )}
// //       </div>

// //       {cart.length > 0 && (
// //         <div
// //           className="card book-card"
// //           style={{
// //             width: "20vw",
// //             marginLeft: "70vw",
// //             display: "inline-flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //             position: "sticky",
// //             bottom: "26vw",
// //           }}
// //         >
// //           <h2 style={{ width: "100%", borderBottom: "1px solid #3e362e40" }}>
// //             Price Details
// //           </h2>
// //           <p>
// //             No. of books:{" "}
// //             {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)}
// //           </p>
// //           <p
// //             style={{
// //               width: "100%",
// //               textAlign: "center",
// //               borderBottom: "1px solid #3e362e40",
// //               paddingBottom: "2rem",
// //             }}
// //           >
// //             Total price: ₹{total.toFixed(2)}{" "}
// //           </p>
// //           <button
// //             onClick={placeOrder}
// //             className="btn btn-primary"
// //             style={{ width: "98%" }}
// //           >
// //             Place your order
// //           </button>
// //           &nbsp;
// //         </div>
// //       )}

// //       <Footer />
// //     </>
// //   );
// // };

// // export default Cart;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cartcard from "./cartcard";
// import { BsCart4 } from "react-icons/bs";
// import Header from "./header";
// import { useNavigate } from "react-router-dom";
// import Footer from "./footer";

// const Cart = () => {
//   const navigate = useNavigate();
//   const [cart, setCart] = useState([]);
//   const [total, setTotal] = useState(0);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };

//   // Function to fetch cart data
//   const fetchCart = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:1000/api/v1/get-user-cart",
//         { headers }
//       );
//       setCart(response.data.data);
//     } catch (error) {
//       console.error("Error fetching cart data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   // Update quantity of an item
//   const updateQuantity = async (id, quantity) => {
//     try {
//       await axios.put(
//         `http://localhost:1000/api/v1/update-cart-item/${id}`,
//         { quantity },
//         { headers }
//       );
//       fetchCart(); // Re-fetch the cart after updating quantity
//     } catch (error) {
//       console.error("Error updating item quantity:", error);
//     }
//   };

//   // Calculate total price and number of books
//   useEffect(() => {
//     const totalAmount = cart.reduce(
//       (sum, item) => sum + (item.price * item.quantity || 1),
//       0
//     );
//     const numberOfBooks = cart.reduce(
//       (count, item) => count + (item.quantity || 1),
//       0
//     );
//     setTotal(totalAmount);
//     setNumberOfBooks(numberOfBooks);
//   }, [cart]);

//   const placeOrder = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:1000/api/v1/place-order",
//         { order: cart },
//         { headers }
//       );
//       alert(response.data.message);
//       navigate("/profile/orderHistory");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="book-container"
//         style={{
//           marginTop: "6vw",
//           width: "89vw",
//           height: "100%",
//           display: "flex",
//           flexGrow: "1",
//           flexWrap: "wrap",
//           overflowY: "auto",
//           overflowX: "hidden",
//           marginLeft: "8rem",
//         }}
//       >
//         {cart.length === 0 && (
//           <div
//             className="home-heading"
//             style={{
//               color: "#3e362e7a",
//               margin: "auto",
//               marginTop: "33vh",
//               display: "flex",
//               height: "37.5vh",
//             }}
//           >
//             <BsCart4 /> &nbsp;
//             <p>Empty Cart</p>
//           </div>
//         )}
//         {cart &&
//           cart.map((item) => (
//             <div key={item._id} style={{ display: "inline-block" }}>
//               <Cartcard
//                 id={item._id}
//                 img={item.imageSource}
//                 title={item.bookName}
//                 author={item.author}
//                 genre={item.bookGenre}
//                 price={item.price}
//                 quantity={item.quantity}
//                 updateQuantity={updateQuantity} // Pass updateQuantity function as a prop
//                 refreshCart={fetchCart} // Pass the refreshCart function as a prop
//               />
//             </div>
//           ))}
//         {cart.length > 0 && (
//           <div
//             className="cards"
//             style={{
//               display: "block",
//               minWidth: "60vw",
//               borderRadius: 0,
//               borderCollapse: "collapse",
//               maxWidth: "99vw",
//               minHeight: "20vh",
//               maxHeight: "45vh",
//               border: "0.5px solid #3e362e40",
//               backgroundColor: "#f5e1bc9e",
//               position: "sticky",
//               bottom: "0",
//             }}
//           >
//             <button
//               onClick={placeOrder}
//               className="btn btn-primary"
//               style={{ width: "98%" }}
//             >
//               Place your order
//             </button>
//           </div>
//         )}
//       </div>

//       {cart.length > 0 && (
//         <div
//           className="card book-card"
//           style={{
//             width: "20vw",
//             marginLeft: "70vw",
//             display: "inline-flex",
//             alignItems: "center",
//             justifyContent: "center",
//             position: "sticky",
//             bottom: "26vw",
//           }}
//         >
//           <h2 style={{ width: "100%", borderBottom: "1px solid #3e362e40" }}>
//             Price Details
//           </h2>
//           <p>
//             No. of books:{" "}
//             {cart.reduce((count, item) => count + (item.quantity || 1), 0)}
//           </p>
//           <p
//             style={{
//               width: "100%",
//               textAlign: "center",
//               borderBottom: "1px solid #3e362e40",
//               paddingBottom: "2rem",
//             }}
//           >
//             Total price: ₹{total.toFixed(2)}
//           </p>
//           <button
//             onClick={placeOrder}
//             className="btn btn-primary"
//             style={{ width: "98%" }}
//           >
//             Place your order
//           </button>
//           &nbsp;
//         </div>
//       )}

//       <Footer />
//     </>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cartcard from "./cartcard";
import { BsCart4 } from "react-icons/bs";
import Header from "./header";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfBooks, setNumberOfBooks] = useState(0); // Added state for number of books

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

  // Update quantity of an item
  const updateQuantity = async (id, quantity) => {
    try {
      await axios.put(
        `http://localhost:1000/api/v1/update-cart-item/${id}`,
        { quantity },
        { headers }
      );
      fetchCart(); // Re-fetch the cart after updating quantity
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  // Calculate total price and number of books
  useEffect(() => {
    const totalAmount = cart.reduce(
      (sum, item) => sum + (+item.price * +item.quantity || 1),
      0
    );
    const totalBooks = cart.reduce(
      (count, item) => count + (item.quantity || 1),
      0
    );
    setTotal(totalAmount);
    setNumberOfBooks(totalBooks);
  }, [cart]);

  const placeOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1000/api/v1/place-order",
        { order: cart },
        { headers }
      );
      alert(response.data.message);
      navigate("/profile/orderHistory");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
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
          cart.map((item) => (
            <div key={item._id} style={{ display: "inline-block" }}>
              <Cartcard
                id={item._id}
                img={item.imageSource}
                title={item.bookName}
                author={item.author}
                genre={item.bookGenre}
                price={item.price}
                quantity={item.quantity}
                updateQuantity={updateQuantity} // Pass updateQuantity function as a prop
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
              minHeight: "20vh",
              maxHeight: "45vh",
              border: "0.5px solid #3e362e40",
              backgroundColor: "#f5e1bc9e",
              position: "sticky",
              bottom: "0",
            }}
          >
            <button
              onClick={placeOrder}
              className="btn btn-primary"
              style={{ width: "98%" }}
            >
              Place your order
            </button>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div
          className="card book-card"
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
          <h2 style={{ width: "100%", borderBottom: "1px solid #3e362e40" }}>
            Price Details
          </h2>
          <p>No. of books: {numberOfBooks}</p>
          <p
            style={{
              width: "100%",
              textAlign: "center",
              borderBottom: "1px solid #3e362e40",
              paddingBottom: "2rem",
            }}
          >
            Total price: ₹{total.toFixed(2)}
          </p>
          <button
            onClick={placeOrder}
            className="btn btn-primary"
            style={{ width: "98%" }}
          >
            Place your order
          </button>
          &nbsp;
        </div>
      )}

      <Footer />
    </>
  );
};

export default Cart;

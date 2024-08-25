import { Link } from "react-router-dom";
import axios from "axios";

const Cartcard = (props) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: props.id,
  };

  const handleRemove = async () => {
    try {
      const response = await axios.put(
        `http://localhost:1000/api/v1/remove-from-cart/${props.id}`,
        {},
        { headers }
      );
      alert(response.data.message);
      props.refreshCart(); // Re-fetch the cart after removal
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  return (
    <div style={{ marginBottom: "0" }}>
      <div
        className="card  "
        style={{
          minWidth: "60vw",
          borderRadius: 0,
          borderCollapse: "collapse",
          maxWidth: "99vw",
          minHeight: "20vh",
          maxHeight: "45vh",
          border: "0.5px solid #3e362e40",
          backgroundColor: "#f5e1bc9e",
          margin: 0,
        }}
      >
        <div className="row g-0 book-card" style={{}}>
          <div
            className="col-md-2 "
            style={{ display: "flex", backgroundColor: "#f5e1bc31" }}
          >
            <img
              src={props.img}
              className="img-fluid  book-img"
              alt="a book"
              style={{
                height: "35vh",
                maxHeight: "39vh",
                padding: "0.5rem",
              }}
            ></img>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h4 className="card-text">{props.title}</h4>
              <div style={{ display: "flex", width: "100%" }}>
                <div style={{ display: "inline-block", width: "50%" }}>
                  <p className="card-text text-body-secondary ">
                    Author: {props.author}
                  </p>

                  <p className="card-text  " style={{ fontSize: "1rem" }}>
                    Genre: {props.genre}
                  </p>
                </div>
                <div>
                  <p
                    className="card-text  fs-5"
                    style={{ display: "inline-block", width: "100%" }}
                  >
                    Price: ₹ {props.price}.00
                  </p>
                </div>
              </div>
              <div className="button-box" style={{ width: "50%" }}>
                <Link
                  to={`/Bookdescription/${props.id}`}
                  className="btn small-btn btn-primary decription-button"
                  style={{
                    width: "100%",
                  }}
                >
                  <div className="fav-text">View Details</div>
                </Link>
                <button
                  className=" btn small-btn btn-primary btn-lg cart-button"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: " center",
                    justifyContent: "center",
                  }}
                  onClick={handleRemove}
                >
                  <div className="fav-text">Remove</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartcard;

// // // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import { useState } from "react";

// // const Cartcard = (props) => {
// //   const [quantity, setQuantity] = useState(1); // State for quantity
// //   const headers = {
// //     id: localStorage.getItem("id"),
// //     authorization: `Bearer ${localStorage.getItem("token")}`,
// //     bookid: props.id,
// //   };

// //   // Handle quantity change
// //   const handleQuantityChange = (event) => {
// //     setQuantity(Number(event.target.value));
// //   };

// //   // Increment quantity
// //   const incrementQuantity = () => {
// //     setQuantity((prevQuantity) => prevQuantity + 1);
// //   };

// //   // Decrement quantity
// //   const decrementQuantity = () => {
// //     setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1)); // Prevent quantity from going below 1
// //   };

// //   // Handle remove from cart
// //   const handleRemove = async () => {
// //     try {
// //       const response = await axios.put(
// //         `http://localhost:1000/api/v1/remove-from-cart/${props.id}`,
// //         { quantity }, // Send quantity to server if needed
// //         { headers }
// //       );
// //       alert(response.data.message);
// //       props.refreshCart(); // Re-fetch the cart after removal
// //     } catch (error) {
// //       console.error("Error removing item from cart:", error);
// //     }
// //   };

// //   return (
// //     <div style={{ marginBottom: "0" }}>
// //       <div
// //         className="card"
// //         style={{
// //           minWidth: "60vw",
// //           borderRadius: 0,
// //           borderCollapse: "collapse",
// //           maxWidth: "99vw",
// //           minHeight: "20vh",
// //           maxHeight: "45vh",
// //           border: "0.5px solid #3e362e40",
// //           backgroundColor: "#f5e1bc9e",
// //           margin: 0,
// //         }}
// //       >
// //         <div className="row g-0 book-card">
// //           <div
// //             className="col-md-2"
// //             style={{ display: "flex", backgroundColor: "#f5e1bc31" }}
// //           >
// //             <img
// //               src={props.img}
// //               className="img-fluid book-img"
// //               alt="a book"
// //               style={{
// //                 height: "35vh",
// //                 maxHeight: "39vh",
// //                 padding: "0.5rem",
// //               }}
// //             />
// //           </div>
// //           <div className="col-md-10">
// //             <div className="card-body">
// //               <h4 className="card-text">{props.title}</h4>
// //               <div style={{ display: "flex", width: "100%" }}>
// //                 <div style={{ display: "inline-block", width: "50%" }}>
// //                   <p className="card-text text-body-secondary">
// //                     Author: {props.author}
// //                   </p>
// //                   <p className="card-text" style={{ fontSize: "1rem" }}>
// //                     Genre: {props.genre}
// //                   </p>
// //                 </div>
// //                 <div>
// //                   <p
// //                     className="card-text fs-5"
// //                     style={{ display: "inline-block", width: "100%" }}
// //                   >
// //                     Price: ₹ {props.price * quantity}.00{" "}
// //                     {/* Updated price to show based on quantity */}
// //                   </p>
// //                   {/* Quantity selector with + and - buttons */}
// //                   <div
// //                     style={{
// //                       marginTop: "1rem",
// //                       display: "flex",
// //                       alignItems: "center",
// //                     }}
// //                   >
// //                     <button onClick={decrementQuantity} style={buttonStyle}>
// //                       -
// //                     </button>
// //                     <input
// //                       type="text"
// //                       id="quantity"
// //                       min="1"
// //                       value={quantity}
// //                       onChange={handleQuantityChange}
// //                       style={{
// //                         width: "60px",
// //                         textAlign: "center",
// //                         border: "none",
// //                         margin: "0 10px",
// //                       }}
// //                     />
// //                     <button onClick={incrementQuantity} style={buttonStyle}>
// //                       +
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="button-box" style={{ width: "50%" }}>
// //                 <Link
// //                   to={`/Bookdescription/${props.id}`}
// //                   className="btn small-btn btn-primary decription-button"
// //                   style={{ width: "100%" }}
// //                 >
// //                   <div className="fav-text">View Details</div>
// //                 </Link>
// //                 <button
// //                   className="btn small-btn btn-primary btn-lg cart-button"
// //                   style={{
// //                     width: "100%",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                   }}
// //                   onClick={handleRemove}
// //                 >
// //                   <div className="fav-text">Remove</div>
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Styles for + and - buttons
// // const buttonStyle = {
// //   width: "30px",
// //   height: "30px",
// //   borderRadius: "50%",
// //   border: "1px solid #ccc",
// //   backgroundColor: "#f5e1bc9e",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   cursor: "pointer",
// //   fontSize: "18px",
// //   fontWeight: "bold",
// // };

// // export default Cartcard;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Cartcard = (props) => {
//   const [quantity, setQuantity] = useState(props.quantity || 1);

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//     bookid: props.id,
//   };

//   // Update quantity
//   useEffect(() => {
//     props.updateQuantity(props.id, quantity); // Notify parent of quantity change
//   }, [quantity, props.id, props]);

//   // Handle quantity change
//   const handleQuantityChange = (event) => {
//     setQuantity(Number(event.target.value));
//   };

//   // Increment quantity
//   const incrementQuantity = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   // Decrement quantity
//   const decrementQuantity = () => {
//     setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
//   };

//   // Handle remove from cart
//   const handleRemove = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:1000/api/v1/remove-from-cart/${props.id}`,
//         { quantity },
//         { headers }
//       );
//       alert(response.data.message);
//       props.refreshCart(); // Re-fetch the cart after removal
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   return (
//     <div style={{ marginBottom: "0" }}>
//       <div
//         className="card"
//         style={{
//           minWidth: "60vw",
//           borderRadius: 0,
//           borderCollapse: "collapse",
//           maxWidth: "99vw",
//           minHeight: "20vh",
//           maxHeight: "45vh",
//           border: "0.5px solid #3e362e40",
//           backgroundColor: "#f5e1bc9e",
//           margin: 0,
//         }}
//       >
//         <div className="row g-0 book-card">
//           <div
//             className="col-md-2"
//             style={{ display: "flex", backgroundColor: "#f5e1bc31" }}
//           >
//             <img
//               src={props.img}
//               className="img-fluid book-img"
//               alt="a book"
//               style={{
//                 height: "35vh",
//                 maxHeight: "39vh",
//                 padding: "0.5rem",
//               }}
//             />
//           </div>
//           <div className="col-md-10">
//             <div className="card-body">
//               <h4 className="card-text">{props.title}</h4>
//               <div style={{ display: "flex", width: "100%" }}>
//                 <div style={{ display: "inline-block", width: "50%" }}>
//                   <p className="card-text text-body-secondary">
//                     Author: {props.author}
//                   </p>
//                   <p className="card-text" style={{ fontSize: "1rem" }}>
//                     Genre: {props.genre}
//                   </p>
//                 </div>
//                 <div>
//                   <p
//                     className="card-text fs-5"
//                     style={{ display: "inline-block", width: "100%" }}
//                   >
//                     Price: ₹ {props.price * quantity}.00
//                   </p>
//                   <div
//                     style={{
//                       marginTop: "1rem",
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <button onClick={decrementQuantity} style={buttonStyle}>
//                       -
//                     </button>
//                     <input
//                       type="number"
//                       id="quantity"
//                       min="1"
//                       value={quantity}
//                       onChange={handleQuantityChange}
//                       style={{
//                         width: "60px",
//                         textAlign: "center",
//                         border: "none",
//                         margin: "0 10px",
//                       }}
//                     />
//                     <button onClick={incrementQuantity} style={buttonStyle}>
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="button-box" style={{ width: "50%" }}>
//                 <Link
//                   to={`/Bookdescription/${props.id}`}
//                   className="btn small-btn btn-primary decription-button"
//                   style={{ width: "100%" }}
//                 >
//                   <div className="fav-text">View Details</div>
//                 </Link>
//                 <button
//                   className="btn small-btn btn-primary btn-lg cart-button"
//                   style={{
//                     width: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                   onClick={handleRemove}
//                 >
//                   <div className="fav-text">Remove</div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles for + and - buttons
// const buttonStyle = {
//   width: "30px",
//   height: "30px",
//   borderRadius: "50%",
//   border: "1px solid #ccc",
//   backgroundColor: "#f5e1bc9e",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   cursor: "pointer",
//   fontSize: "18px",
//   fontWeight: "bold",
// };

// export default Cartcard;

// import React, { useState } from "react";
// import axios from "axios";

// const Cartcard = (props) => {
//   const [quantity, setQuantity] = useState(props.quantity || 1); // Initialize with the current quantity

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//     bookid: props.id,
//   };

//   // Handle quantity change
//   const handleQuantityChange = (event) => {
//     const newQuantity = Number(event.target.value);
//     setQuantity(newQuantity);
//     props.updateQuantity(props.id, newQuantity); // Notify the parent component
//   };

//   // Increment quantity
//   const incrementQuantity = () => {
//     const newQuantity = quantity + 1;
//     setQuantity(newQuantity);
//     props.updateQuantity(props.id, newQuantity); // Notify the parent component
//   };

//   // Decrement quantity
//   const decrementQuantity = () => {
//     const newQuantity = Math.max(quantity - 1, 1); // Prevent quantity from going below 1
//     setQuantity(newQuantity);
//     props.updateQuantity(props.id, newQuantity); // Notify the parent component
//   };

//   const handleRemove = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:1000/api/v1/remove-from-cart/${props.id}`,
//         { quantity }, // Send quantity to server if needed
//         { headers }
//       );
//       alert(response.data.message);
//       props.refreshCart(); // Re-fetch the cart after removal
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   return (
//     <div style={{ marginBottom: "0" }}>
//       <div
//         className="card"
//         style={{
//           minWidth: "60vw",
//           borderRadius: 0,
//           borderCollapse: "collapse",
//           maxWidth: "99vw",
//           minHeight: "20vh",
//           maxHeight: "45vh",
//           border: "0.5px solid #3e362e40",
//           backgroundColor: "#f5e1bc9e",
//           margin: 0,
//         }}
//       >
//         <div className="row g-0 book-card">
//           <div
//             className="col-md-2"
//             style={{ display: "flex", backgroundColor: "#f5e1bc31" }}
//           >
//             <img
//               src={props.img}
//               className="img-fluid book-img"
//               alt="a book"
//               style={{
//                 height: "35vh",
//                 maxHeight: "39vh",
//                 padding: "0.5rem",
//               }}
//             />
//           </div>
//           <div className="col-md-10">
//             <div className="card-body">
//               <h4 className="card-text">{props.title}</h4>
//               <div style={{ display: "flex", width: "100%" }}>
//                 <div style={{ display: "inline-block", width: "50%" }}>
//                   <p className="card-text text-body-secondary">
//                     Author: {props.author}
//                   </p>
//                   <p className="card-text" style={{ fontSize: "1rem" }}>
//                     Genre: {props.genre}
//                   </p>
//                 </div>
//                 <div>
//                   <p
//                     className="card-text fs-5"
//                     style={{ display: "inline-block", width: "100%" }}
//                   >
//                     Price: ₹ {props.price * quantity}.00{" "}
//                   </p>
//                   <div
//                     style={{
//                       marginTop: "1rem",
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <button
//                       onClick={decrementQuantity}
//                       className="quantity-button"
//                     >
//                       -
//                     </button>
//                     <input
//                       type="number"
//                       id="quantity"
//                       min="1"
//                       value={quantity}
//                       onChange={handleQuantityChange}
//                       style={{
//                         width: "60px",
//                         textAlign: "center",
//                         border: "none",
//                         margin: "0 10px",
//                       }}
//                     />
//                     <button
//                       onClick={incrementQuantity}
//                       className="quantity-button"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="button-box" style={{ width: "50%" }}>
//                 <button
//                   className="btn small-btn btn-primary btn-lg cart-button"
//                   style={{
//                     width: "100%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                   onClick={handleRemove}
//                 >
//                   <div className="fav-text">Remove</div>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles for + and - buttons

// export default Cartcard;

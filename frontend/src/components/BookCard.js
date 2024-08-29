import { Link } from "react-router-dom";

const BookCard = (props) => {
  console.log(props.id);

  return (
    <div>
      <div className="card book-card multiple-cards">
        <img src={props.img} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h3
            className="card-title"
            style={{ fontWeight: "bold", height: "4rem" }}
          >
            {props.title}
          </h3>
          <p className="card-text fst-italic">Author: {props.author}</p>
          <p style={{ position: "relative", top: "-1rem" }}>
            genre: {props.genre}
          </p>
          <p className="fs-3" style={{ position: "absolute", bottom: "3rem" }}>
            ₹ {props.price}.00
          </p>
          <Link
            to={`/Bookdescription/${props.id}`}
            className="btn btn-primary"
            style={{ position: "absolute", bottom: "1rem", width: "88%" }}
            // onClick={handleBuyClick}
            // description={props.Description}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

// import React from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';

// const BookCard = (props) => {
//   const addToFavorites = async () => {
//     try {
//       const token = localStorage.getItem('token'); // Retrieve the JWT token
//       if (!token) {
//         alert("You need to be logged in to add favorites.");
//         return;
//       }
//       const response = await axios.post(`/favorites/${props.id}`, {}, {
//         headers: { 'Authorization': `Bearer ${token}` }
//       });
//       console.log('Favorites updated:', response.data);
//       alert('Book added to favorites!');
//     } catch (error) {
//       console.error('Error adding to favorites:', error);
//       alert('Failed to add book to favorites.');
//     }
//   };

//   return (
//     <div>
//       <div className="card book-card multiple-cards">
//         <img src={props.img} className="card-img-top" alt="..."></img>
//         <div className="card-body">
//           <h3
//             className="card-title"
//             style={{ fontWeight: "bold", height: "4rem" }}
//           >
//             {props.title}
//           </h3>
//           <p className="card-text fst-italic">Author: {props.author}</p>
//           <p style={{ position: "relative", top: "-1rem" }}>
//             genre: {props.genre}
//           </p>
//           <p className="fs-3" style={{ position: "absolute", bottom: "3rem" }}>
//             ₹ {props.price}.00
//           </p>
//           <div className="d-flex justify-content-between" style={{ position: "absolute", bottom: "1rem", width: "88%" }}>
//             <button
//               onClick={addToFavorites}
//               className="btn btn-secondary"
//               style={{ width: "45%" }}
//             >
//               Add to Favorites
//             </button>
//             <Link
//               to={`/Bookdescription/${props.id}`}
//               className="btn btn-primary"
//               style={{ width: "45%" }}
//             >
//               Buy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// // import { Link } from "react-router-dom";

// // const BookCard = (props) => {

// //   console.log(props.id);

// //   return (
// //     <div>
// //       <div className="card book-card multiple-cards">
// //         <img src={props.img} className="card-img-top" alt="..."></img>
// //         <div className="card-body">
// //           <h3
// //             className="card-title"
// //             style={{ fontWeight: "bold", height: "4rem" }}
// //           >
// //             {props.title}
// //           </h3>
// //           <p className="card-text fst-italic">Author: {props.author}</p>
// //           <p style={{ position: "relative", top: "-1rem" }}>
// //             genre: {props.genre}
// //           </p>
// //           <p className="fs-3" style={{ position: "absolute", bottom: "3rem" }}>
// //             ₹ {props.price}.00
// //           </p>
// //           <Link
// //             to={`/Bookdescription/${props.id}`}
// //             className="btn btn-primary"
// //             style={{ position: "absolute", bottom: "1rem", width: "88%" }}
// //             // onClick={handleBuyClick}
// //             // description={props.Description}
// //           >
// //             Buy
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BookCard;

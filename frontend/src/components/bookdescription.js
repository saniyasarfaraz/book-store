import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Books from "./assets/books";
import Header from "./header";
import axios from "axios";

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

  // console.log("id is" + id);
  // const book = Books[id];
  // console.log(book);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function buy() {
    alert("Your order placed Suceesfully");
    navigate("/");
  }
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
                style={{ position: "absolute", bottom: "10rem" }}
              >
                Price: ₹ {Data.price}.00
              </p>
              <button
                className="btn btn-primary btn-lg"
                style={{ position: "absolute", bottom: "4rem", width: "6vw" }}
                onClick={buy}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdescription;

// import { useParams } from "react-router-dom";
// import Books from "./assets/books";

// const Bookdescription = (props) => {
//   // const { id } = useParams();
//   // const book = Books[id];
//   return (
//     <>
//       <div
//         className="card mb-3 book-card"
//         style={{
//           minWidth: "80vw",
//           maxWidth: "90vw",
//           minHeight: "90vh",
//           margin: "auto",
//           marginTop: "5vh",
//         }}
//       >
//         <div className="row g-0 ">
//           <div className="col-md-6">
//             <img
//               src={props.img}
//               className="img-fluid rounded-start book-img"
//               alt="a book"
//               style={{
//                 margin: "2rem",
//                 marginLeft: "5vw",

//                 maxHeight: "85vh",
//               }}
//             ></img>
//           </div>
//           <div className="col-md-6" style={{ paddingRight: "2vw" }}>
//             <div className="card-body">
//               <h1 className="card-title">{props.title}</h1>
//               <p className="card-text text-body-secondary ">
//                 Author: {props.author}
//               </p>
//               <p className="card-text fs-4" style={{ textAlign: "justify" }}>
//                 <br></br>
//                 <strong>Description:</strong> {props.description}
//               </p>
//               <p className="card-text fs-5 ">Pages: {props.pages}</p>
//               <p className="card-text fs-5 ">Genre: {props.genre}</p>
//               <p
//                 className="card-text  fs-3"
//                 style={{ position: "absolute", bottom: "10rem" }}
//               >
//                 Price: ₹ {props.price}.00
//               </p>
//               <button
//                 className="btn btn-primary btn-lg"
//                 style={{ position: "absolute", bottom: "4rem", width: "6vw" }}
//               >
//                 Buy Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Bookdescription;

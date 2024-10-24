// import React from "react";

// const AllOrders = () => {
//   return (
//     <div
//       className="book-container"
//       style={{
//         marginTop: "5.5vw",
//         width: "99%",
//         height: "104%",
//         display: "flex",
//         flexGrow: " 1",
//         flexWrap: "wrap",
//         overflowY: "auto",
//         overflowX: "hidden",
//       }}
//     >
//       <div style={{ display: "grid", width: "100%" }}>
//         <div
//           className="home-heading"
//           style={{
//             color: "#3e362e7a",
//             marginTop: "12vw",
//             // display: "grid",
//             // justifyItems: "center",
//             justifySelf: "center",
//             alignelf: "center",
//             // alignSelf: "center",
//           }}
//         >
//           No Order History
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllOrders;

import { useEffect, useState } from "react";
import axios from "axios";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-all-orders",
          { headers }
        );
        setAllOrders(response.data.data);
      } catch (error) {
        console.error("Error fetching all orders", error);
      }
    };

    fetchAllOrders();
  }, []);

  return (
    <div>
      {allOrders.length === 0 ? (
        <div
          className="home-heading"
          style={{
            color: "#3e362e7a",
            margin: "auto",
            marginTop: "43vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p style={{ textAlign: "center", width: "100%" }}>No Order History</p>
        </div>
      ) : (
        <div style={{ marginBottom: "0", marginTop: "6vw" }}>
          <div
            className="card"
            style={{
              minWidth: "60vw",
              borderRadius: 0,
              borderCollapse: "collapse",
              maxWidth: "99vw",
              // minHeight: "20vh",
              maxHeight: "45vh",
              border: "0.5px solid #3e362e40",
              backgroundColor: "#f5e1bc9e",
              margin: 0,
            }}
          >
            <div className="row g-0 book-card">
              <div className="col-md-10">
                <div className="card-body">
                  <div style={{ display: "flex", width: "100%" }}>
                    <p className="card-text" style={{ width: "5%" }}>
                      S. No.
                    </p>
                    <p className="card-text" style={{ width: "30%" }}>
                      Book Name
                    </p>
                    <p className="card-text" style={{ width: "20%" }}>
                      User
                    </p>
                    <p className="card-text" style={{ width: "10%" }}>
                      Price
                    </p>
                    <p className="card-text" style={{ width: "15%" }}>
                      Status
                    </p>
                    <p className="card-text" style={{ width: "10%" }}>
                      Order Date
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {allOrders.map((order, index) => (
            <div
              key={index}
              className="card"
              style={{
                minWidth: "60vw",
                borderRadius: 0,
                borderCollapse: "collapse",
                maxWidth: "99vw",
                // minHeight: "20vh",
                border: "0.5px solid #3e362e40",
                backgroundColor: "#f5e1bc9e",
                margin: 0,
              }}
            >
              <div className="row g-0 book-card">
                <div className="col-md-10">
                  <div className="card-body">
                    <div style={{ display: "flex", width: "100%" }}>
                      <p className="card-text" style={{ width: "5%" }}>
                        {index + 1}
                      </p>
                      <p className="card-text" style={{ width: "30%" }}>
                        {order.book ? order.book.bookName : "N/A"}
                      </p>
                      <p className="card-text" style={{ width: "20%" }}>
                        {order.user ? order.user.username : "N/A"}
                      </p>
                      <p className="card-text" style={{ width: "10%" }}>
                        {order.book ? `₹${order.book.price}` : "N/A"}
                      </p>
                      <p className="card-text" style={{ width: "15%" }}>
                        {order.status ? order.status : "N/A"}
                      </p>
                      <p className="card-text" style={{ width: "10%" }}>
                        {new Date(order.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllOrders;

import { useEffect, useState } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]); // Initialize as an empty array to avoid undefined issues
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        console.log("Fetching order history...");
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-order-history",
          { headers }
        );
        console.log("jguyg");
        console.log(response);
        setOrderHistory(response.data.data); // Ensure response is handled correctly
      } catch (error) {
        console.error("Error fetching order history", error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div>
      {orderHistory.length === 0 ? (
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
              minHeight: "20vh",
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
                      Author
                    </p>
                    <p className="card-text" style={{ width: "10%" }}>
                      Price
                    </p>
                    <p className="card-text" style={{ width: "15%" }}>
                      Status
                    </p>
                    <p className="card-text" style={{ width: "10%" }}>
                      Mode
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {orderHistory.map((order, index) => (
            <div
              key={index}
              className="card"
              style={{
                minWidth: "60vw",
                borderRadius: 0,
                borderCollapse: "collapse",
                maxWidth: "99vw",
                minHeight: "20vh",
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
                        {order.bookName}
                      </p>
                      <p className="card-text" style={{ width: "20%" }}>
                        {order.author}
                      </p>
                      <p className="card-text" style={{ width: "10%" }}>
                        {order.price}
                      </p>
                      <p className="card-text" style={{ width: "15%" }}>
                        {order.status}
                      </p>
                      <p className="card-text" style={{ width: "10%" }}>
                        {order.mode}
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

export default OrderHistory;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const OrderHistory = () => {
//   const [orderHistory, setOrderHistory] = useState();
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };
//   useEffect(() => {
//     const fetch = async () => {
//       console.log("OUT");
//       const response = await axios.get(
//         "http://localhost:1000/api/v1/get-order-history",
//         { headers }
//       );
//       console.log(response);
//       setOrderHistory(response.data.data);
//     };
//     fetch();
//   }, []);

//   return (
//     <div>
//       {orderHistory && orderHistory.length === 0 && (
//         <div
//           className="home-heading"
//           style={{
//             color: "#3e362e7a",
//             margin: "auto",
//             marginTop: "43vh",
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <p style={{ textAlign: "center ", width: "100%" }}>
//             No Order History
//           </p>
//         </div>
//       )}
//       {orderHistory && orderHistory.length > 0 && (
//         <div style={{ marginBottom: "0" }}>
//           <div
//             className="card  "
//             style={{
//               minWidth: "60vw",
//               borderRadius: 0,
//               borderCollapse: "collapse",
//               maxWidth: "99vw",
//               minHeight: "20vh",
//               maxHeight: "45vh",
//               border: "0.5px solid #3e362e40",
//               backgroundColor: "#f5e1bc9e",
//               margin: 0,
//             }}
//           >
//             <div className="row g-0 book-card" style={{}}>
//               <div className="col-md-10">
//                 <div className="card-body">
//                   <p className="card-text" style={{ display: "inline-block" }}>
//                     S. No.
//                   </p>
//                   <p className="card-text" style={{ display: "inline-block" }}>
//                     Book Name
//                   </p>
//                   <div style={{ display: "flex", width: "100%" }}>
//                     <div style={{ display: "inline-block", width: "50%" }}>
//                       <p className="card-text  ">Author</p>
//                       <p
//                         className="card-text  fs-5"
//                         style={{ display: "inline-block", width: "100%" }}
//                       >
//                         Price
//                       </p>
//                       <p className="card-text  " style={{ fontSize: "1rem" }}>
//                         Status
//                       </p>
//                     </div>
//                     <div>
//                       <p
//                         className="card-text  fs-5"
//                         style={{ display: "inline-block", width: "100%" }}
//                       >
//                         Mode
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderHistory;

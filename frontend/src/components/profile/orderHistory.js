import { useEffect, useState } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:1000/api/v1/get-order-history",
        { headers }
      );
      setOrderHistory(response.data.data);
    };
    fetch();
  }, []);

  return (
    <div>
      {/* {orderHistory && orderHistory.length === 0 && ( */}
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
        <p style={{ textAlign: "center ", width: "100%" }}>No Order History</p>
      </div>
      {/* )} */}
      {/* {orderHistory && orderHistory.length > 0 && ( */}
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
            <div className="col-md-10">
              <div className="card-body">
                <p className="card-text" style={{ display: "inline-block" }}>
                  S. No.
                </p>
                <p className="card-text" style={{ display: "inline-block" }}>
                  Book Name
                </p>
                <div style={{ display: "flex", width: "100%" }}>
                  <div style={{ display: "inline-block", width: "50%" }}>
                    <p className="card-text  ">Author</p>
                    <p
                      className="card-text  fs-5"
                      style={{ display: "inline-block", width: "100%" }}
                    >
                      Price
                    </p>
                    <p className="card-text  " style={{ fontSize: "1rem" }}>
                      Status
                    </p>
                  </div>
                  <div>
                    <p
                      className="card-text  fs-5"
                      style={{ display: "inline-block", width: "100%" }}
                    >
                      Mode
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  )} */}
    </div>
  );
};

export default OrderHistory;

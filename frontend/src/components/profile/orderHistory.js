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
      {orderHistory && orderHistory.length === 0 && (
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
          <p style={{ textAlign: "center ", width: "100%" }}>
            No Order History
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;

import React from "react";

const AllOrders = () => {
  return (
    <div
      className="book-container"
      style={{
        marginTop: "5.5vw",
        width: "99%",
        height: "104%",
        display: "flex",
        flexGrow: " 1",
        flexWrap: "wrap",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div style={{ display: "grid", width: "100%" }}>
        <div
          className="home-heading"
          style={{
            color: "#3e362e7a",
            marginTop: "12vw",
            // display: "grid",
            // justifyItems: "center",
            justifySelf: "center",
            alignelf: "center",
            // alignSelf: "center",
          }}
        >
          No Order History
        </div>
      </div>
    </div>
  );
};

export default AllOrders;

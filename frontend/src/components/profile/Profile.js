import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Header from "../header";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  // const isLoggedIn = useSelector();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-user-information",
          { headers }
        );
        console.log("profile");
        console.log(response);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [headers]);

  return (
    <div
      className="bg-c4a27c px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-white"
      style={{
        backgroundColor: "#c4a27c",
        width: "98vw",
        marginTop: "5.2vw",
        height: "85vh",
        marginLeft: "0.1vw",
        marginRight: "0.3vw",
        borderRadius: "0.2rem",
      }}
    >
      <Header />
      {profile ? (
        <>
          <div className="w-1/6" style={{ display: "inline-block" }}>
            <Sidebar data={profile} />
          </div>
          <div className="w-5/6" style={{ display: "inline-block" }}>
            <Outlet />
          </div>
        </>
      ) : (
        <p
          className="w-full h-{100%} flex item-center justify-center"
          style={{ color: "4f2c16", alignSelf: "center", display: "none" }}
        >
          Loading...
        </p>
      )}
    </div>
  );
};

export default Profile;

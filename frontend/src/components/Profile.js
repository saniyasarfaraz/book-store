import React,{useEffect} from "react";
//  import Sidebar from "./components/Profile/Sidebar";
 import Sidebar from "./Sidebar";
import{Outlet} from"react-router-dom";
 import {useSelector} from "react-redux";
import axios from "axios";
// import Loader from"../components/Loader/Loader";
const Profile =()=>{
  const [Profile,setprofile]=useState();
  const headers={
    id: localStorage.getItem("id"),
    authorization:'Bearer ${localStorage.getItem("token")}',
  };
  const isLoggedIn = useSelector();
  useEffect(()=>{
    const fetch = async ()=>{
      const response =await axios.get(
        "http://localhost:1000/api/v1/get-user-information",
        {headers}


      );
      setprofile(response.date);
    };
    fetch();
  },[]);
  return(
    <div className="bg-zinc-900 px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4 text-white">
      {!Profile &&(
        <>
      <div className="w-1/6">
      <Sidebar data={Profile}/>
      </div>
      <div className="w-5/6">
      <Outlet/>
      </div>
      </>
      )}
    </div>
  )
}
export default Profile;
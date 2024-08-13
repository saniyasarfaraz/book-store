import React,{useState,useEffect} from "react";
import Loader from"../components/Loader/Loader";
import axios from "axios";
import {AiFillDelete} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const Navigate = useNavigate();
  const[Cart,setCart] = useState();
  const[Total,setTotal]=useState(0);
  const headers ={
    id: localStorage.getTtem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(()=>{
    const fetch=async()=>{
      const res =await axios.get(
        "http://localhost:1000/api/v1/get-user-cart",
        {headers}
      );
      setCart(res.data.data);
    };
    fetch();
  
  },[Cart]);
  const deleteItem =async(bookid)=> {
  const response = await axios.put(`http://localhost:1000/api/v1/remove-from-cart/${bookid}`,
    {},
    {headers}
  );
  alert(response.data.message);
  };
  useEffect(() =>{
    if (Cart && Cart.length > 0) {
      let total =0;
      Cart.map((items) => {
        total += items.price;
      });
      setTotal(total);
      total = 0;
    }
  },[Cart]);
  const PlaceOrder= async () => {
   try{
    const response= await axios.post(
      `http://localhost:1000/api/v1/place-order`,
      {order:Cart},
      {headers}
    );
    alert(response.data.message);
    Navigate("/Profile/orderHistory");
   } catch (error) {
      console.log(error);
    }
   } ;
  return (
    <div className="bg-zinc-900 px-12 h-screen py-8">
    {!Cart&&  <Loader/>}
    {Cart && Cart.length=== 0 &&(
      <div className="h-screen">
        <div className="h-[100%] flex items-center justify-center flex-col">                                         <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-400">Empty Cart</h1>
        <img 
        src="/empty-cart.png" alt="empty cart" className="lg:h-[50vh]"/>
        </div>
      </div>

    )}
    {Cart && Cart.length> 0 && (
      <>
      <h1 className="text-4xl font-semibold text-zinc-500 mb-8">Your Cart</h1>
{Cart.map((item,i) => (
  <div className="w-full my-4 rounded flex-col md:flex-row p-4 bg-zinc-800 justify-beetween items-center"key={i} >
  <img 
    src={item.url}
    alt="/"
    className="h-[20vh ] md:h-[10vh] object-cover"
    />
    <div className="w-full  md:w-auto">
    <h1 className="text-2xl  text-zinc-100 font-semibold text-start mt-2 md:mt-0">
      {items.tittle}
      </h1>
      <p className="text-normal text-zinc-300  mt-2 hidden lg;block">
        {items.desc.slice(0,100)}...
      </p>
      <p className="text-normal text-zinc-300  mt-2 hidden md:block lg;hidden">
        {items.desc.slice(0,65)}...
      </p>

      <p className="text-normal text-zinc-300  mt-2 block md:hidden">
        {items.desc.slice(0,100)}...
      </p>
      </div>
      <div className="w-full my-4 rounded flex-mt-4 md:w-auto  justify-beetween items-center">
        <h2 className="text-zinc-100 text-3xl font-semibold flex">
         $ {item.price}
        </h2>
        <button
        className="bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12"
        onClick={() => deleteItem(item._id)}
        >
          <AiFillDelete/>
        </button>
     </div>
  </div>
))}
      </>
    )}
    {Cart && Cart.length > 0 && (
      <div className="mt-4 w-full flex item-center justify-end">
        <div className="p-4 bg-zinc-800 rounded">
          <h1 className="text-3xl text-zinc-200 font-semibold">
            TOtal Amount
          </h1>
          <div className="mt-3 w-full flex item-center justify-end text-zinc-200">
            <h2>{Cart.length}books/</h2> <h2>${TOtal}</h2>
            </div>
<div className="w-[100%] mt-3">
  <button 
   className="bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12"
   onClick={PlaceOrder} 
   >
    Place your order
       </button>
      </div>
     </div>
   </div>
    )}
    </div>
  );
};

export default Cart;



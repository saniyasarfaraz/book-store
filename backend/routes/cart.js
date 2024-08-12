const router =require("express").Router();
const User =require("../models/user");
const{authentication}=require("./userAuth");
router.put("/add-to-cart",authenticateToken,async (req,res)=>{
    try{
        const{bookid,id}=req.headers;
        const userData = await User.findById(id);
        const isBookinCart=userData.cart.includes(bookid );
        if(isBookinCart){
            return res.json({
                status:"success",
                message:"Book is already in cart"});
        }
        await User.findByIdAndUpdate(id,{$push: {cart:bookid }});
        return res.json({
            status:"success",
            message:"Book added to cart"});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "an error occured"});
    }
});
router.put("/remove-from-cart",authenticateToken,async (req,res)=>{
    try{
        const{bookid}=req.params;
        const{id} = req.headers;
        const isBookinCart=userData.cart.includes(bookid );
        await User.findByIdAndUpdate(id,{$push: {cart:bookid }});
        return res.json({
            status:"success",
            message:"Book removed from cart"});
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "an error occured"});
    }
});
router.get("/get-user-cart",authenticateToken,async (req,res)=>{
    try{
        const{id}=req.headers;
        const userData = await User.findById(id).populate("cart");
        const cart=userData.cart.reverse();
        return res.json({
            status:"success",
            data:cart,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "an error occured"});
    }
});  
module.exports=router;
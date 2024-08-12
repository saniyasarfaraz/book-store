const router =require("express").Router();
const User =require("../models/user");
const{authentication}=require("./userAuth");
router.put("/add-book-to-favourite",authenticateToken,async (req,res)=>{
    try{
        const{bookid,id}=req.headers;
        const userData = await User.findById(id);
        const isBookFavourite=userData.favourites.includes(bookid );
        if(isBookFavourite){
            return res.status(200).json({message:"Book is already in favorites"});
        }
        await User.findByIdAndUpdate(id,{$push: {favourites:bookid }});
        return res.status(200).json({message:"Book added to favorites"});
    }catch(error){
        res.status(500).json({message: "internal server error"});
    }
})  
router.put("/remove-book-from-favourite",authenticateToken,async (req,res)=>{
    try{
        const{bookid,id}=req.headers;
        const userData = await User.findById(id);
        const isBookFavourite=userData.favourites.includes(bookid );
        if(isBookFavourite){
            await User.findByIdAndUpdate(id,{$pull: {favourites:bookid }});
        }
       
        return res.status(200).json({message:"Book removed from favorites"});
    }catch(error){
        res.status(500).json({message: "internal server error"});
    }
})  
router.get("/get-favourite-books",authenticateToken,async (req,res)=>{
    try{
        const{bookid,id}=req.headers;
        const userData = await User.findById(id).populate("favourites");
        const favouriteBooks=userData.favourites;
        return res.json({
            status:"success",
            data: favouriteBooks,
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message: "an error occured"});
    }
});  
module.exports=router;

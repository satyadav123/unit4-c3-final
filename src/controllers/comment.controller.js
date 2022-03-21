

const express=require('express');
const app=express();
const comment=require('../model/model.comment.js');


router.post("/comment",async(req,res)=>{
    try {
        const comment=await Book.create(req.body)
        return res.status(200).send(comment)
    } catch (error) {
        console.log(error);
    }
});



module.exports=router;
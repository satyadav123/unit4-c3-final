
const express=require('express');
const app=express();
const Publication=require('../model/model.publication.js');

router.post("/publication",async(req,res)=>{
    try {
        const publication=await Book.create(req.body)
        return res.status(200).send(publication)
    } catch (error) {
        console.log(error);
    }
});


module.exports=router;


const express=require('express');
const app=express();
const router = express.Router()
const Book=require('../model/model.book.js');


router.post("/books",async(req,res)=>{
    try {
        const book=await Book.create(req.body)
        return res.status(200).send(book)
    } catch (error) {
        console.log(error);
    }
});


module.exports=router;
const express=require('express');
//  const mongoose=require('mongoose');
 const app=express();
  app.use(express.json());
 
 const connectdb=require("./config/db.js");
 module.exports=app;

  
 const userController=require("./controller/user.controller.js")
 const commentController=require("./controller/comment.controller.js")
 const publicationController=require("./controller/publication.controller.js")
 const bookController=require("./controller/book.controller.js")

 
 app.use("/users",userController);
 app.use("/books",bookController);
 app.use("/comment",commentController);
 app.use("/publication", publicationController);










 
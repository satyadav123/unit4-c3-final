

const express=require('express');
// const app=express();
const { body, validationResult } = require("express-validator");
const User=require('../model/model.user.js');
const router = express.Router()

router.post("",
body("firstName")
.trim()
.not()
.isEmpty()
.bail()
.withMessage("First Name cannot be empty")
.isLength({ min: 3,max:30 })
.withMessage("First Name must be at least 4 characters"),

body("lastName")
.trim()
.not()
.isEmpty()
.bail()
.withMessage("First Name cannot be empty")
.isLength({ min: 3,max:30 })
.withMessage("First Name must be at least 4 characters"),
body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 120")
    .custom((val) => {
      if (val < 1 || val > 150) {
        throw new Error("Incorrect age provided");
      }
      return true;
    }),
    body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
async(req,res)=>{
    try {
        const user=await User.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        console.log(error);
    }
});

module.exports=router;
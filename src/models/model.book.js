

const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
      
    likes:{type:Number,require:true,default:0},
    coverImage:{type:String,require:true,max:1},
    content:{type:String,require:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
    publicationId:{type:mongoose.Schema.Types.ObjectId,ref:"publication",require:true},


},{
    versionKey:false,
    timestamps:true
})
const Book=mongoose.model("book",bookSchema);
module.exports=Book;
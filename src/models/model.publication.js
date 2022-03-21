

const mongoose=require('mongoose');

const publicationSchema=new mongoose.Schema({
      
    firstName:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
    lastName:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},


},{
    versionKey:false,
    timestamps:true
})
const Publication=mongoose.model("publication",publicationSchema);
module.exports=Publication;
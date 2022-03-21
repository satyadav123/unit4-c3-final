
const mongoose=require('mongoose');

const commentSchema=new mongoose.Schema({
      
        body:{type:String,require:true},
        userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true},
        bookID:{type:mongoose.Schema.Types.ObjectId,ref:"book",require:true},

},{
    versionKey:false,
    timestamps:true
})
const comment=mongoose.model("comment",commentSchema);
module.exports=comment;
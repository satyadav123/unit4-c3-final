

const mongoose=require('mongoose')
const connectdb=()=>{
    return mongoose.connect('mongodb://127.0.0.1:27017/booksystem');

}
module.exports=connectdb;
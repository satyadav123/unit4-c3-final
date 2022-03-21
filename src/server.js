
const connectdb=require("./config/db.js");
const app=require('./index.js');

app.listen(4900,async()=>{
    try {
      await connectdb();
       console.log("listening port 4900")
    } catch (error) {
        console.log(error)
    }
    
})
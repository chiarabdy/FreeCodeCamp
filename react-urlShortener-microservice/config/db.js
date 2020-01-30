const mongoose = require("mongoose")
const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost/microservices', {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("MongoDB connected");
        
    }catch (err){
        console.log(err.message)
        process.exit()
    }
}
module.exports = connectDB;

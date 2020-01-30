const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes/api")
const connectDB = require("./config/db")

const app = express();
const PORT = process.env.PORT || 8080;
// mongoose.Promise = global.Promise


// Connect DB
connectDB();
// const MONGODB_URI = 'mongodb+srv://chiar:merrychristmas@blog-wgopc.mongodb.net/test?retryWrites=true&w=majority';
// mongoose.connect('mongodb://localhost/microservices', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// //check connection
// mongoose.connection.on('connected',()=>{
//     console.log('Mongoose is connected')
// })
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, ()=>{
    console.log("Listening to the port 8000")
})
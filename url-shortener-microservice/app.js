// get the requirements and set instances 
const express = require("express");
const app = express();
const port = 3000;
const MONGODB_KEY = process.env.MONGO_DB;
const cors = require("cors")
const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json());
app.use('public', express.static(process.cwd() + '/public'));

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_DB);


// // Validate URL
// const urlRegex = /https\/\/www.|http:\/\/www./g;
// DataTransfer.lookup(req.body.url.replace(urlRegex, ''), (err, address, family)=>{
//     if(err){
//         res.json({"error": err})
//     }else {
//         onComplete();
//     }
// });

// //Schemas
// const UrlSchema = new Schema({
//     id: Number,
//     url: String
// });


// // Models
// const urlModel = mongoose.model('Url', UrlSchema);


//GET
app.get('/', (req,res, next)=>{
    res.sendFile(process.cwd() + "/views/index.html")
})

// app.get('/api/shorturl/', (req, res)=>{
//     const original_url = url("www.google.com");
//     res.res({"original_url": original_url})

// })
// // post
// //POST [project_url]/api/shorturl/new - body (urlencoded) : url=https://www.google.com




// function onComplete(){
//     urlModel.find()
//     .exec()
//     .then(docs =>{
//         theData = docs
//         var doc = new urlModel({"id": theDate.length, "url": req.body.url})
//     })
// }

app.listen(port, ()=>{
    console.log("listening to the port 3000")
})
const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req,res, next)=>{
    res.sendFile(__dirname + "/views/index.html")
})

app.get('/api/shorturl/', (req, res)=>{
    const original_url = url("www.google.com");
    res.res({"original_url": original_url})

})

app.listen(port, ()=>{
    console.log("listening to the port 3000")
})
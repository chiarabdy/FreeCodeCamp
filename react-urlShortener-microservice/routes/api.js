const express = require("express");
const router = express.Router();
const UrlModel = require("../models/urlModel")
// Routes
router.get('/new/:urlToShortener(*)', (req, res)=>{
    const {urlToShorten} = req.params 
    UrlModel.find({ })
    .then((data)=>{
        console.log("Data: ", data)
        res.json(data);
    })
    .catch((error)=>{
        console.log("Error: ", error )
    })
})
router.post('/save', (req, res)=>{

})
module.exports = router
////////////////////////////////
////////// Setup code: /////////
////////////////////////////////

'use strict';

// We'll set up our dependencies (versions that we want/need are fetched and checked by Node.js based on what we've outlined in package.json):
const express = require("express");
const mongo = require("mongodb");    // We'll need a database to keep track of all the shortened links we've created and where they should lead to
const mongoose = require("mongoose");    // We'll use mongoose to make it easier to work with our mongoDB database (mongoose serves as a front-end for MongoDB)
const bodyParser = require("body-parser");    // Because the user will be able to submit (i.e. POST) content to the server, we'll need this dependency. It'll read any POST requests and store the user input as a javascript object that we can readily access via req.body
const urlHandler = require("./handlers/urlHandler.js");  // This is the file where we've written our POST and GET handlers. Make it a requirement here makes it possible for us to invoke the functions within it for our different routes.

// Before going any further, we'll instantiate our express.js framework by defining it so that we can access it later:
const app = express();

// We'll also mount our body parser here before any routes that might need to use it:
    // By selecting .urlencoded(), the middleware will only parse urlencoded bodies.
    // By setting the option extended=false, the middleware will only use classic encoding, and therefore only be capable of handling strings and arrays. With extended=true, the values can be of any type.
app.use( bodyParser.urlencoded( { "extended": false } ) );

// Next, for freeCodeCamp to be able to remotely test the project/API/app, we need to enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing):
const cors = require('cors');
app.use(cors());



// We'll need to save all of our shortened URLs somewhere for later reference, and what better place than a MongoDB no-SQL database!
// To this end, we'll establish a connection to our Mongo DB (note that the database connection details are hidden from public view within our .env config):
    // NB: We set the useMongoClient option because the default connection logic is deprecated as of 4.11.0.
mongoose.connect(process.env.MONGO_URI, {useMongoClient: true}, function(err) {
  if (err) return console.log("Error:", err);
  // We'll make sure that we're sure that we're connected to the server:
  // ready states are: 0= disconnected, 1=connected, 2=connecting, 3= disconnecting
  console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState);
});


// Handeling Routes


// We'll tell our Express implementation where we want to keep all of the static files (e.g. CSS, JS files, images):
app.use('/public', express.static(__dirname + '/public'));

// We'll also define our home page...
app.get('/', function(req, res){  
  res.sendFile(__dirname + '/views/index.html');
});

// ... what to do when the user submits/POSTs (our submit button is set to POST) a new long-form URL...
app.post("/api/shorturl/new", urlHandler.postLongUrl);

// ... and what to do when a short-url is targeted...
app.get("/api/shorturl/:short_url", urlHandler.getShortUrl);

// ... before finally defining what to do when the targeted endpoint is invalid:
app.use(function(req, res) {
  res.status(404)
    .sendFile(__dirname + "/views/404.html");
});


// Finally, for our app to be "alive", we need to make sure that it's listening for requests:
app.listen(process.env.PORT, function () {
  console.log('Node.js is listening on port ' + process.env.PORT);
});
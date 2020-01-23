// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const port = 3000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/fen/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res)=> {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/whoami", (req, res)=> {
  const ipaddress = req.ip
  const language = req.acceptsLanguages();
  const software = req.get("User-Agent")
  res.json({'ipaddress': ipaddress, 'language': language, "software": software});
  
});

 

//listen for requests :)
app.listen(port, function () {
  console.log('listening on port');
});

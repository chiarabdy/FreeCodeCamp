// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
// var bodyParser = require("body-parser");


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/timestamp/:date_string?', (req, res) => {
  const date_string = req.params.date_string;
  let date;
  // If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
  if (!date_string) {
    date = new Date();
  } else {
    // if date_string is String, convert date_string to an integer
    if (!isNaN(date_string)) {
      date = new Date(parseInt(date_string));
    } else {
      date = new Date(date_string);
    }
  }
  // If the date string is invalid the api returns a JSON having the structure  {"error" : "Invalid Date" }.
  if (date.toString() === 'Invalid Date') {
    res.json({ error: date.toString() });
  } else {
    // If the date string is valid the api returns a JSON having the structure {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});
// listen for requests :)
app.listen('8000', ()=>{
  console.log("listening on port 8000")
})
// var listener = app.listen(process.env.PORT, function () {
//   console.log('Your app is listening on port ' + listener.address().port);
// });
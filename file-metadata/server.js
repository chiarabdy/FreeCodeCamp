'use strict';

const express = require('express');
const cors = require('cors');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


// require and use "multer"...

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/upload', upload.single('upfile'), (req, res, next)=> {
  return res.json(req.file);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});

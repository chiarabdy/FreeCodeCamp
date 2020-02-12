const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')
require('dotenv').config();

const mongoose = require('mongoose')

const connectDB = async()=>{
  try{
    //25AsVEcv0ULP5tyI
    const uri = process.env.MONGO_URI
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
  }
  catch(err){
    console.error(err.message);
    process.exit(1);
  }
}
connectDB();
app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Send the HTML
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.use('/api/exercises', exerciseRouter);
app.use('/api/users', usersRouter);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

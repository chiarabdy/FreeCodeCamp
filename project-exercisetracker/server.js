const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const exerciseRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')
require('dotenv').config();

const mongoose = require('mongoose')
//Pi40ZRUgL9da0iu3
const connectDB = async()=>{
  try{
    // const MONGO_URI = "mongodb+srv://chiar:Pi40ZRUgL9da0iu3@blog-wgopc.mongodb.net/test"
    await mongoose.connect(('mongodb://localhost/exercise-track' ), {
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


app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

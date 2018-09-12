require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const cors=require('cors');
const session = require('express-session')
const controllers = require('./controller');

app.use( express.static( `${__dirname}/../build` ) );

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 //1 hour
    }
  })
);

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance)
} ).catch(err => console.log(err));

app.get( '/api/fetchAllTheThings', controllers.getAll );
app.post( '/api/registerNewUser', controllers.postNew);
app.post( '/api/loginCheck', controllers.loginAuthCheck);
app.delete( '/api/deleteOneThings/:id', controllers.deleteOne );

// Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));

//My Error Message .Catch all
app.use((req,res,next)=>{
  const error = new Error('Sorry, not found !');
  error.status=404;
  next(error);
})
app.use((error, req,res,next) => {
  res.status(error.status || 500);
  res.json({error:{
    message:error.message
  }})
})

const port = 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));
require ('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();

//Controllers in routes folder / RELATIVE PATH
const controllers = require('./controller');

//End Points
app.get( '/api/fetchListings', controllers.getAll );

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB connection
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance)
} ).catch(err => console.log(err));

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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
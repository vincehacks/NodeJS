/******************************************************************************
 * Created by Vince Chang
 *
 * Lab 10 - Add an Item to the Cart
 *
 * In this lab, we’re going to create a server endpoint that adds a new item to
 * the cart of our store.
 *
 * Your mission: Using the web server we wrote during lab #3, create a new
 * HTTP PUT endpoint /cart that takes an id as a parameter
 * The id has to be validated to make sure it comes from an actual item
 * If the id is valid, add the plate object to an array called cart and return
 * a string “{id} was added to the cart” as a response to the client
 *
 * Hint: Create a plates object that contains the list of all license plates so
 * that you can easily validate existence of the id
 *****************************************************************************/

const express = require('express');
// Doing this because express is a function!, can't just use like express.get()
const app = express();
const port = 8000;
var cors = require('cors');

let cart = [];

app.use(cors());

// Express will think of these paths from top down and order matters!

app.get('/hello', (request, resp) => {
  resp.send('<h1>Hello Express World!</h1>');
});


// NEW WAY using Express to serve static content!
app.use('/data', express.static('data/plates.json'));


// START HERE FOR THIS LAB
app.put('/cart/:id' , (request,resp) => {

  // Retrieving the plates in an object, require parses the json already!
  let plates = require('./data/plates.json');
  // Gets the id from the URL
  let id = request.params.id;
  // Looks if the plate id is in the data from plates.json
  let foundPlate = plates.filter((item) => item._id == id);

  // Messages if found
  if(foundPlate){
    cart.push(foundPlate);
    resp.send(`Plate ${id} was added to the cart`);
  }
  else{
    throw new Error(`Plate with ${id} was not found`);
  }
});


// If I access an unknown URL
// Parameters: err is the error object, req is the request, res is the response
// next is a function used to call the next error handler
function logErrors(err ,req, res, next){
  res.status(404).send('Nothing to see here!');
}

// Logging the errors
app.use(logErrors)


// Tell the server to listen on port 8000
app.listen(port, (err) => {
  console.log(`server listening on ${port}`)
});
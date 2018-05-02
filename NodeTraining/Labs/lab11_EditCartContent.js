/******************************************************************************
 * Created by Vince Chang
 * 
 * Lab 11 - See and Edit Cart Contents
 * 
 * In this lab, we’re going to create a server endpoint to render cart items.
 *
 * Your mission: Using the web server we wrote during lab #4, create a new
 * HTTP GET endpoint /cart that returns all cart items
 * Test your cart at http://localhost:8080/cart.html
 * Create a new HTTP DELETE endpoint /cart that takes an id as a parameter and
 * removes an item from the cart array
 * Now you can add, see and remove items from your cart!
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


// PREVIOUS LAB
app.put('/cart/:id' , (request,resp) => {

	// Retrieving the plates in an object, require parses the json already!
	let plates = require('./data/plates.json');
	// Gets the id from the URL
	let id = request.params.id;
	// Looks if the plate id is in the data from plates.json
	let foundPlate = plates.find((item) => item._id == id);

	// Messages if found
	if(foundPlate){
		cart.push(foundPlate);
		resp.send(`Plate ${id} was added to the cart`);
	}
	else{
		throw new Error(`Plate with ${id} was not found`);
	}
});

// START HERE FOR THIS LAB

// Sends the cart to the client
app.get('/cart',(req,res) => {
	res.send(cart);
});

// Deletes Item from cart
app.delete('/cart/:id' , (request,resp) => {

	let id = request.params.id;
	cart = cart.filter((item) => item._id != id);
	resp.send(`Plate ${id} removed from the cart`);

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
/******************************************************************************
 * Created by Vince Chang
 * 
 * Lab 12 - Improving Scalability of our Restful Web Service
 * 
 * In this lab, we’re going to refactor our cart routes into a specific
 * cart-routing.js file. Our data models cart and plates will also get moved to
 * a data-models.js file.
 *
 * Your mission: Using the web server we wrote during lab #6, create the files
 * mentioned above and move the appropriate pieces of code to each file. 
 * Then include those files in your main server config file
 *****************************************************************************/

const express = require('express');
// Doing this because express is a function!, can't just use like express.get()
const app = express();
const port = 8000;
const data = require('./lab12_data-models')
var cors = require('cors');
const cartRoutes = require('./lab12_cart-routing');


let cart = [];

app.use(cors());
app.use('/cart',cartRoutes)

// Express will think of these paths from top down and order matters!

// Route hello
app.get('/hello', (request, resp) => {
  resp.send('<h1>Hello Express World!</h1>');
});

// Route data
app.use('/data', express.static('data/plates.json'));


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
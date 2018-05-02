/******************************************************************************
 * Created by Vince Chang
 * 
 * Lab 10 - Error Handling
 * 
 * Your mission: Using the web server we wrote during lab #1, add custom error
 * handling when a user tries to access an unknown URL:
 *
 * First throw an error “Unknown URL” along with the path that lead to the
 * error (for instance: “Unknown URL: /app”)
 * Then test that code by accessing a wrong URL in your browser
 * Change the server config to add a custom error handler function
 * The handler function should return a 404 HTTP error with the error message
 * 'Nothing to see here' to the client
 *****************************************************************************/
const express = require('express');
// Doing this because express is a function!, can't just use like express.get()
const app = express();
const port = 8000;

// Express will think of these paths from top down and order matters!

app.get('/hello', (request, resp) => {
  resp.send('<h1>Hello Express World!</h1>');
});


// NEW WAY using Express to serve static content!
app.use('/data', express.static('data/plates.json'));


// PART 1: If I access an unknown URL, this is BAD because we are showing the
// client our stacktrace!
// app.get('*', (request, resp, next) => {
//    throw new Error("Unknown URL: " + request.url);
// });


// PART 2: If I access an unknown URL
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
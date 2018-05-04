/******************************************************************************
 * Created by Vince Chang
 *
 * Lab 9 - Enabling CORS
 *
 * Start a static http-server in the lp-store-ui directory. This will serve a
 * store user interface on http://localhost:8080
 *
 * Open that page in your browser: The store is empty. That’s because CORS
 * isn’t enabled in our Express server.
 *
 * Your mission: Using the web server we wrote during lab #2, change the config
 * to enable CORS. Then you should be able to see data in our store after
 * refreshing http://localhost:8080
 *
 * Note: CORS is required because localhost:8000 and localhost:8080 are
 * different origins, even though they are two servers running on the same
 * physical machine.
 *****************************************************************************/

const express = require('express');
// Doing this because express is a function!, can't just use like express.get()
const app = express();
const port = 8000;
var cors = require('cors');

app.use(cors());

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
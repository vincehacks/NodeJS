/******************************************************************************
 * Created by Vince Chang
 * 
 * Lab 7 - Basic HTTP Server
 * 
 * Your mission: Install express with npm. Create a new file express-server.js
 * and use the express module to create a basic server that runs on port 8000.
 * The server should work as follows:
 *
 * When /hello is accessed, it should return Hello Express World!
 * When /data is accessed, it should return the contents of the file
 * data/plates.json
 * Any other URL should return Nothing to see here
 * 
 * Hint: You can use the fs module to read a file with Node.JS
 *****************************************************************************/

// const fs = require('fs');
const express = require('express');
// Doing this because express is a function!, can't just use like express.get()
const app = express();
const port = 8000;


// Express will think of these paths from top down and order matters!

app.get('/hello', (request, resp) => {
  resp.send('<h1>Hello Express World!</h1>');
});

// OLD WAY BUT STILL WORKS! (need to have the fs module however!)
// app.get('/data', (request,resp) => {
// 	fs.readFile('data/plates.json', (err,data) => {
// 		resp.type('json')
// 		resp.send(data);
// 	});
// });


// NEW WAY using Express to serve static content!
app.use('/data', express.static('data/plates.json'));

// Default route, needs to go last because, this case will always be hit!
app.get('*', (request,resp) => {
	resp.send('<h1>Nothing to see here!</h1>');
});

// Tell the server to listen on port 8000
app.listen(port, (err) => {
   console.log(`server listening on ${port}`)
});
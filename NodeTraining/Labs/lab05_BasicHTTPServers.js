/******************************************************************************
 * Created by Vince Chang
 * 
 * Lab 5 - Basic HTTP Servers
 * 
 * Your mission #1: Install http-server globally with npm and start a server in
 * the static-content folder of our labs. Then go to localhost:8080 in your
 * browser to see the static content being served.
 *
 * Your mission #2: Create a new file http.js and use the http module to create
 * a basic server that runs on port 8000. The server should work as follows:
 * When /hello is accessed, it should return Hello Node.js Server!
 * When /data is accessed, it should return the contents of the file
 * data/plates.json
 * Any other URL should return Nothing to see here
 *
 * To run it: node FILENAME then go to port 8000
 *
 * Hint: Use the fs module to read a file with Node.JS
 *****************************************************************************/

const fs = require('fs');
const http = require('http');
const port = 8000;

const server = http.createServer( 
	(req, resp) => {   
		if(req.url == '/hello'){
		 	resp.end('Hello Node.js Server!');
		}
		else if(req.url =='/data'){
			fs.readFile('data/plates.json', (err,data) => {
				resp.end(data);
			});
		}
		else{
			resp.end('Nothing to see here');
		}
 	}
);

// Tell the server to listen on port 8000
server.listen(port, (err) => {
   console.log(`server listening on ${port}`)
});
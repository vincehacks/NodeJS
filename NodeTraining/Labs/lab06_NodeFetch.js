/******************************************************************************
 * Created by Vince Chang
 *
 * Lab 6 - Using node-fetch to make a HTTP Request
 *
 * Your mission: Create a new file request.js and use the node-fetch module to
 * create a basic HTTP request that gets the data from our hapi server and
 * outputs it to the console
 *
 * Hint: Remember to install node-fetch first
 *****************************************************************************/

// I ran lab 5 because I hosted a server and some data, now I am trying to
// fetch this data. When I run this lab, the .json I'm accessing is shown!
const fetch = require("node-fetch");
const url = "http://localhost:8000/data";

fetch(url).then(response => {
  response.json().then(json => {
    console.log(json);
  });
}).catch(error => {
    console.log(error);
  });
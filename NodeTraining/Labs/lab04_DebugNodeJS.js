/******************************************************************************
 * Created by Vince Chang
 *
 * Lab 4 - Debugging Node.JS with Google Chrome
 *
 * In this lab, we’re going to debug a simple app to see the contents of both
 * the process and global objects.
 *
 * Your mission: Create a file env-global.js that will get a reference to both
 * process and global objects. Then use the Chrome dev tools to inspect the
 * contents of these objects.
 *
 * What is the global object?
 * The global object is a global namespace object
 * It contains references to all global objects like:
 * `console` - an object used to log some information
 * `require()` - the function used to load external modules
 * `process` - an object that has information about the current Node process
 * `setTimeout()`, `setInterval()` - timer functions used to run code
 * asynchronously
 *
 * What is the process object?
 * The `process` object provides information about, and control over, the
 * current Node.JS process
 * As a global, it is always available to Node.JS applications without using
 * `require()`
 * Some examples of properties and methods of that object:
 * `argv`- array of parameters passed to the process
 * `cwd()` - returns the current working directory
 * `env` - returns system environment variables for the current user
 *
 * Hint: You can add a breakpoint to your code with the following statement:
 * debugger;
 *****************************************************************************/

 // Put the debugger anywhere for Chrome tools to know where to start!
 // How to run it: node --inspect-brk FILENAME then go to chrome://inspect
 debugger;

 // Process Object (I will pass in a file sample-txt)
 let processObj = process.argv[2];
 let currentWorkingDir = process.cwd();
 let environmentVars = process.env;

 // Global Object (I will console log the name of that file)
 console.log("The file passed in as argument 2 is " + processObj);
 console.log("The current working directory is " + currentWorkingDir);
 console.log("The environment variables are " + environmentVars);
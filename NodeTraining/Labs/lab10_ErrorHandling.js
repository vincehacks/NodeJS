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
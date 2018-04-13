/******************************************************************************
 * Created by Vince Chang
 * 
 * Lab 12 - Add an Item to the Cart
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
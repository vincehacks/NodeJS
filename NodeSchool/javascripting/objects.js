/*
  Created By: Vince Chang
  Node School: javascripting
  OBJECTS (Exercise 15 of 19)
 *****************************************************************************

  Objects are lists of values similar to arrays, except values are
  identified by keys instead of integers.

  Here is an example:

    var foodPreferences = {
      pizza: 'yum',
      salad: 'gross'
    };

  The challenge:

  Define a variable named pizza like this:

    var pizza = {
      toppings: ['cheese', 'sauce', 'pepperoni'],
      crust: 'deep dish',
      serves: 2
    };

  Use console.log() to print the pizza object to the terminal.

  Check to see if your program is correct by running this command:

    javascripting verify objects.js
 ****************************************************************************/

  var pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
  };

  console.log(pizza);
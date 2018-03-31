/*
  Created By: Vince Chang
  Node School: javascripting
  REVISING STRINGS (Exercise 5 of 19)
 *****************************************************************************

  You will often need to change the contents of a string. Strings have
  built-in functionality that allow you to inspect and manipulate their
  contents. Here is an example using the .replace() method:

     var example = 'this example exists';
     example = example.replace('exists', 'is awesome');
     console.log(example);

  The challenge:

  Define a variable named pizza that references this string:
  'pizza is alright'

  Use the .replace() method to change alright to wonderful. Use console.log()
  to print the results of the .replace() method to the terminal.

  Check to see if your program is correct by running this command:

  javascripting verify revising-strings.js
 ****************************************************************************/

  var pizza = 'pizza is alright';
  pizza = pizza.replace('alright','wonderful');
  console.log(pizza);
/*
  Created By: Vince Chang
  Node School: javascripting
  IF STATEMENT (Exercise 9 of 19)
 *****************************************************************************

  Conditional statements are used to alter the control flow of a program,
  based on a specified boolean condition. A conditional statement looks like
  this:

     if (n > 1) {
       console.log('the variable n is greater than 1.');
     } else {
       console.log('the variable n is less than or equal to 1.');
     }

  Inside parentheses you must enter a logic statement, meaning that the
  result of the statement is either true or false. The else block is optional
  and contains the code that will be executed if the statement is false.

  The challenge:

  Declare a variable named fruit. Make the fruit variable reference the value
  orange with the type of String.
   
  Then use console.log() to print "The fruit name has more than five
  characters." if the length of the value of fruit is greater than five.
  Otherwise, print "The fruit name has five characters or less."

  Check to see if your program is correct by running this command:  
   
     javascripting verify if-statement.js
 ****************************************************************************/
  var fruit = 'orange';

  if(fruit.length > 5)
    console.log("The fruit name has more than five characters.");
  else
    console.log("The fruit name has five characters or less.")
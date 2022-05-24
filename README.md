Tech Degree with TeamTreeHouse
Unit 1
Project: A Random Quote Generator

Grade Aim: Meets Expectations

Using basic JS functionality such as: 

- Array of objects
- Array propterty- array.length()
- Arrow functions
- Conditionas Statment
- Dom manipulation - innerHTML 
- Math functions - math.floor, math.random

A random quote generator was implimeted by creating an array of objects (quotes) that holds the properties of each quote. 

Functions: 

getRandomQuote()
An array in passed into the function. A random number within the range of 0 and the length of the array - 1 (arrays are 0 index) is generated using the Math.floor and Math.random functions. The random number is stored in a variable (randomNum). The object in the array with the index that matches the random number is returned. 

printQuote()
Calls on the getRandomQuote() function to return grab a random quoute from the quotes array and is stored in a variable named randomQuote. The quote string that will be pushed to the DOM is stored under the variable named quoteStr, this string is made up of HTML tags and information unique to each quotes. The unique property of the quote is access by destructuring the object in order to acess the values of the objectes property. Conditional statements are used to control for cases where an objects property values are non existent. The goal is, if the obj property value is not "null", the property value should be displayed to the DOM, otherwise it should be skiped. At the very end of check, we want to close the <p> tag, in the case that the last property value check is null, the p tag will still be closed. 



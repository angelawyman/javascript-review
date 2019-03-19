##### This is a markdown file.
###

***

# INTRODUCTION

**1.) What is JavaScript?**<br/>
A. JavaScript is used only for web apps<br/>
*B. You can use JavaScript to create interactive web elements*<br/>
C. JavaScript is a server-side only language

**2. What tag contains the JavaScript code?**\
A. body<br/>
*B. script*<br/>
C. style<br/>
D. code<br/>

>Don't write this (deprecated):
`<script language="javascript" type="text/javascript">`

**3). What extension is used for the JavaScript file?**
*JavaScript files have the file extension .js.*

#### **4.) Where is the "script" tag typically placed?**\
A. Before the HTML tag\
B. After the closing HTML tag\
*C. Inside the HEAD tag*\

### Place Script Tag in Body
Where else do you put the script tag?
Remember that the script, which is placed in the head section, will be executed before the <body> is rendered. If you want to get elements in the body, it's a good idea to place your script at the end of the body tag. It's a good idea to place scripts at the bottom of the <body> element. This can improve page load, because HTML display is not blocked by scripts loading.

**5.)  Why is the Javascript code being placed just before the closing body tag?**\
*A. To let the web page fully load in the browser window*\
B. That's the only possible way\
C. To comply with the standards\

#### Link to External file
Link to an external file in the head:
    `<script src="demo.js"></script>`

Your demo.js file includes the following JavaScript:

>alert("This is an alert box!");

Every written "instruction" is called a statement. JavaScript statements are separated by semicolons

Scripts can be placed in external files.
External scripts are useful and practical when the same code is used in a number of different web pages.
Placing a JavaScript in an external file has the following advantages: 
- It separates HTML and code.
- It makes HTML and JavaScript easier to read and maintain.
- Cached JavaScript files can speed up page loads.


The document.write() function writes a string into our HTML document. This function can be used to write text, HTML, or both. 

    ` <script>
       document.write("Hello World!");
     </script>`

You can also format text

    `<script>
       document.write("<h1>Hello World!</h1>");
     </script>`

**6.)  Which choice can be added within the text to be displayed?**
*A. Formatting tags*
B. JavaScript commands
C. Folders


### COMMENTING

Comments are used to describe and explain what the code is doing. Comments are ignored by the browser, and are not executed.

Single line comments use double slashes.
`<script>
   // This is a single line comment
   alert("This is an alert box!");
</script>`

Multiple lines
`<script>
   /* This code 
   creates an 
   alert box */
   alert("This is an alert box!");
</script>`


**7.)  How does the single line comment look like?**
`*A. // this is a comment*
B. <!--this is a comment-->
C. **this is a comment
D. %%this is a comment`

***
## MODULE 2 BASIC CONCEPTS

* Variables
* Data Types
* Math Operators 
* Assignment Operators
* Comparision Operators
* Boolean Operators
* String Operators
***

### Variables

Variables are containers for storing data values. The value of a variable can change throughout the program. Here we assign the variable a value of 10.

var x = 10;

A variable can be declared without a value. The value might require some calculation, something that will be provided later, like user input. A variable declared without a value will have the value undefined.

var x = 100;
document.write(x);

**Rules to naming variables:**
- JavaScript is case sensitive. The variable lastName is a different variable than lastname.
- camelCase is commonly used. That is: words go one after another, each new word starts with a capital letter: myFavoriteFoods. Use logical names with purpose like firstName or shoppingCart.
- The first character for a variable can be a letter, or an underscore, or a dollar sign. Subsequent characters may be letters, digits, underscores, or dollar signs.
- Numbers are not allowed as the first character.
- Mathematical or logical operators are not allowed. For instance, 2*interest, abercrombie+fitch, my%num, num+, are not allowed.
- Spaces and hyphens in names are not allowed JavaScript.
- Don't use reserved keywords <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords> like do, catch, case, abstract, break, etc.  Tip: if you write in camelcase this will never be a problem.

*examples of incorrect variable names*
`let my favorite_cat; // can't have a space`
`let 1market; // can't start with a number`
`let my-proper-name; // hyphens aren't allowed as they are used for subtraction`
`let bartle&james; // can't use comparision or mathmatical operators`


## ECMA6
JavaScript now has two additional ways to declare variables: let and const.

#### let
let is the successor to var. Although var is still available, let limits the scope of variables to the block (rather than the function) they’re declared within, which reduces the room for error:

`// ES5
for (var i = 1; i < 5; i++) {
  console.log(i);
}
// <-- logs the numbers 1 to 4
console.log(i);
// <-- 5 (variable i still exists outside the loop)`

`// ES2015 now write this
for (let j = 1; j < 5; j++) {
  console.log(j);
}
console.log(j);
// <-- 'Uncaught ReferenceError: j is not defined'`

#### const
Using const allows you to define a variables that cannot be changed to new values. For primitive values such as strings and numbers, this results in something similar to a constant, as you cannot change the value once it has been declared:


*example*
`const myBirthday = '18.04.1982';`

*example*
`const name = 'Bill';
name = 'Steve';
// <-- 'Uncaught TypeError: Assignment to constant variable.'`


`// try again
const person = { name: 'Bill' };
person.name = 'Steve';
// person.name is now Steve.
// As we're not changing the object that person is bound to, JavaScript doesn't complain.`

#### Uppercase constants
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution.

Such constants are named using capital letters and underscores.

*example*
`const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";`

`// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00`



### Summary
We can declare variables to store data by using the var, let, or const keywords.

- let – is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
- var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
- const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.

***
## Tasks
#### Working with variables

1. Declare two variables: admin and name.
2. Assign the value "John" to name.
3. Copy the value from name to admin.
4. Show the value of admin using alert (must output “John”).




### Data Types

Data type refers to the type of values a program can accept. JavaScript variables can hold many data types, such as numbers, strings, arrays, and more. There are seven data types in JavaScript. Six of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

In contrast, objects are used to store keyed collections of various data.

let x;
x = 1;   // x is a number
x = '1'; // x is a string
x = [1]; // x is an array

- Floating point numbers can have decimal points.

- Strings store text. Be sure to match your quotes.
var text = "My name is 'John' ";

Or you can escape your quotes like this for doubkle quotes: 
\" or \' inside of single quotes.

var sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';
document.write(sayHello);

- Booleans - True or False
The Boolean value of 0 (zero), null, undefined, empty string is false. Everything with a "real" value is true.

- Arithmetic Operators
`+, -, *, /, %, ++, --`

*example*
`var x = 10 + 5 (100/5);
document.write(x);`

`// Outputs 15`

Modulus (%) operator returns the division remainder (what is left over).

- Assignment Operators
`=, +=, -=, *=, /=, %=`

`var result= 20;
result *= 5;`

`answer: 100;`

- Comparison Operators
`==, ===, !=, !==, >, >=, <, <=`

 Comparison operators are used in logical statements to determine equality or difference between variables or values and  they always return true or false.

 5 == 10 false - equal to
 5===10 false - identical
 5!=10 true - not equal to
 10!==10 false - not identical
 10> 5 true - greater than
 10>=5 true - greater than or equal to
 10<5 false - less than
 10<=5 false - less than or equal to

- Logic Operators
`&&, !!, ! `
and, or , not

Logical operators allow you to connect as many expressions as you wish.

Conditional Ternary Operator

`var isAdult = (age < 18) ? "Too young": "Old enough";`

-String Operators
The most useful operator for strings is concatenation, represented by the + sign. 
Concatenation can be used to build strings by joining together multiple strings, or by joining strings with other types: 


`var mystring1 = "I am learning ";
var mystring2 = "JavaScript with SoloLearn.";
document.write(mystring1 + mystring2);`

Numbers in quotes are treated as strings: "42" is not the number 42, it is a string that includes two characters, 4 and 2.

What is the output of the following code:
`var x = "50";
var y = "100";
document.write(x+y);`

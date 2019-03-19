***

# Introduction to JavaScript - Review

-Auto-update content, like twitter or facebook feed  🐋
-Animate visual elements 🐈
-Add visual feedback on user interactions ✅
-Add interactive maps 🚀
-Trigger pop-ups/offers after user actions, such as modal windows

**1.) What is JavaScript?**<br/>
A. JavaScript is used only for web apps<br/>
*B. You can use JavaScript to create interactive web elements*<br/>
C. JavaScript is a server-side only language

**2). What extension is used for the JavaScript file?**\
*JavaScript files have the file extension .js.*

**3.) What tag contains the JavaScript code?**\
A. body<br/>
*B. script*<br/>
C. style<br/>
D. code<br/>

>Tip: you no longer need to indicate language or type:
`<script language="javascript" type="text/javascript">`

### Where is the "script" tag typically placed?
Inside the `<head>` tag.

### Where else? Inside the body
Remember that the script which is placed in the head section, will be executed before the `<body>` is rendered. It's a good idea to place scripts at the bottom of the `<body>` element to let the web page fully load in the browser window. This can also improve page load, because the HTML display is not blocked by waiting for scripts to load.

### And? Link to External file
Link to an external created custom script file in the head or to a hosted library:

    `<script src="demo.js"></script>`
    
    `<script src="modernizer.js"></script>`
    
    `<script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>`

- External scripts are useful and practical when the same code is applied to different web pages.
- Placing a JavaScript in an external file separates HTML and code  and make it easier to read and maintain.
- Cached JavaScript files can speed up page loads.

### Basics

>alert("This is an alert box!");

Every written "instruction" is called a statement. <br/>
JavaScript statements are separated by semicolons.<br/>
The document.write() function writes a string into our HTML document. This function can be used to write text, HTML, or both. 

    ` <script>`<br/>
      ` document.write("Hello World!");`<br/>
     `</script>`

You can also format text:

    `<script>`<br/>
       `document.write("<h1>Hello World!</h1>");`<br/>
     `</script>`

**6.)  Which choice can be added within the text to be displayed?**<br/>
*A. Formatting tags*<br/>
B. JavaScript commands<br/>
C. Folders<br/>


### Commenting

Comments are used to describe and explain what the code is doing. <br/>
Comments are ignored by the browser and are not executed.<br/>

Single line comments use double slashes.

`<script>`<br/>
   `// This is a single line comment`<br/>
   `alert("This is an alert box!");`<br/>
`</script>`

Multiple line comments use slash star and star slash pairings

`<script>`<br/>
   `/* This code` <br/>
  ` creates an `<br/>
  ` alert box */`<br/>
  ` alert("This is an alert box!");`<br/>
`</script>`


**7.)  How does the single line comment look like?**<br/>
`*A. // this is a comment*`<br/>
`B. <!--this is a comment--`<br/>
`C. **this is a comment`<br/>
`D. %%this is a comment`<br/>`

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

Variables are containers for storing data values. The value of a variable can change throughout the program. <br/>
Here we assign the variable a value of 10.

`var x = 10;`

A variable can be declared without a value. The value might require some calculation, something that will be provided later, like user input. A variable declared without a value will have the value undefined.

`var x = 100;`<br/>
`document.write(x);`

**Rules to naming variables:**
- JavaScript is case sensitive. The variable lastName is a different variable than lastname.
- camelCase is commonly used. That is: words go one after another, each new word starts with a capital letter: myFavoriteFoods. Use logical names with purpose like firstName or shoppingCart.
- The first character for a variable can be a letter, or an underscore, or a dollar sign. Subsequent characters may be letters, digits, underscores, or dollar signs.
- Numbers are not allowed as the first character.
- Mathematical or logical operators are not allowed. For instance, 2*interest, abercrombie+fitch, my%num, num+, are not allowed.
- Spaces and hyphens in names are not allowed JavaScript.
- Don't use reserved keywords <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords> like do, catch, case, abstract, break, etc.  Tip: if you write in camelcase this will never be a problem.

*examples of incorrect variable names*

`let my favorite_cat; // can't have a space`<br/>
`let 1market; // can't start with a number`<br/>
`let my-proper-name; // hyphens aren't allowed as they are used for subtraction`<br/>
`let bartle&james; // can't use comparision or mathmatical operators`


## New Kinds of Variables  ECMAScript 6
JavaScript now has two additional ways to declare variables: let and const.

#### let
let is the successor to var. Although var is still available, let limits the scope of variables to the block (rather than the function) they’re declared within.

*old style ES5*

`for (var i = 1; i < 5; i++) {`<br/>
  `console.log(i);`<br/>
`}`
`// <-- logs the numbers 1 to 4`<br/>
`console.log(i);`<br/>
`// <-- 5 (variable i still exists outside the loop)`


*ECMAScript 6*

`for (let j = 1; j < 5; j++) {`<br/>
  `console.log(j);`<br/>
`}`<br/>
`console.log(j);`<br/>
`// <-- won't work - j is not defined'`


#### const

Using const allows you to define a variables that cannot be changed to new values. A const can’t be declared without a value, unlike a var or let variable.

*example*

`var x; // valid`<br/>
`let y; //valid`<br/>
`const z; // error`


*example*

`const myDivorce = '14.12.1987';`

*example*

`const name = 'Casey';`<br/>
`name = 'Parker';`<br/>
`// <-- this won't work`

*better approach*

`const person = { name: 'Casey' }; ` <br/>
`person.name = 'Parker';`<br/>
`// As we're not changing the object person this works.`


#### All Uppercase constants
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known prior to execution. Such constants are named using capital letters and underscores.

*example*

`const COLOR_RED = "#F00";`<br/>
`const COLOR_GREEN = "#0F0";`<br/>
`const COLOR_BLUE = "#00F";`<br/>
`const COLOR_ORANGE = "#FF7F00";`<br/>


`let color = COLOR_ORANGE;`<br/>
`alert(color); // #FF7F00`


### Summary
We can declare variables to store data by using the var, let, or const keywords.

- let – is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
- var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
- const – is like let, but the value of the variable can’t be changed.
Variables should be named in a way that allows us to easily understand what’s inside them.

***
## Exercises: Working with variables

**Exercise 1**
1. Declare two variables: admin and name.
2. Assign the value "John" to name.
3. Copy the value from name to admin.
4. Show the value of admin using alert (must output “John”).


**Exercise 2 - Giving the right name**
1. Create a variable with the name of our planet. How would you name such a variable?
2. Create a variable to store the name of a current visitor to a website. How would you name that variable?


**Exercise 3 - Uppercase const**

1. Examine the following code:

`const birthday = '18.04.1982';`
`const age = someCode(birthday);`

Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

Q. Would it be right to use upper case for birthday? For age? Or even for both?

`const BIRTHDAY = '18.04.1982'; // make uppercase?`
`const AGE = someCode(BIRTHDAY); // make uppercase?`

### Data Types

Data type refers to the type of values a program can accept. JavaScript variables can hold many data types, such as numbers, strings, arrays, and more.  Six of the data types are called “primitive”, because their values contain only a single thing. Symbol is new to  ECMAScript 6, Null and Undefined are also data types.
(By contrast, objects are used to store keyed collections of various data.)

`let x;`<br/>
`x = 1;   // x is a number `<br/>
`x = '1'; // x is a string`<br/>
`x = " my fav number" // is another string`<br/>
`x = [1]; // x is an array`<br/>
`x = true // is Boolean`<br/>

- Floating point numbers can have decimal points.
- Strings store text. Be sure to match your quotes.

`var text = "My name is 'John' ";`

Or you can escape your quotes like this for double quotes: \" or \' inside of single quotes.

`var sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';`<br/>
`document.write(sayHello);`

### Booleans - True or False
The Boolean value of 0 (zero), null, undefined, empty string is false. Everything with a "real" value is true.

### Arithmetic Operators
`+, -, *, /, %, ++, --`

*example*
`var x = 10 + 5 (100/5);`<br/>
`document.write(x);`<br/>

`// Outputs 15`

Modulus (%) operator returns the division remainder (what is left over).

- Assignment Operators
`=, +=, -=, *=, /=, %=`

`var result= 20;`<br/>
`result *= 5;`<br/>

`answer: 100;`

### Comparison Operators
`==, ===, !=, !==, >, >=, <, <=`

Comparison operators are used in logical statements to determine equality or difference between variables or values and  they always return true or false.

` 5 == 10 false - equal to`
` 5===10 false - identical`
 `5!=10 true - not equal to`
 `10!==10 false - not identical`
 `10> 5 true - greater than`
 `10>=5 true - greater than or equal to`
 `10<5 false - less than`
 `10<=5 false - less than or equal to`

### Logic Operators
`&&, !!, ! ` = and, or, not

Logical operators allow you to connect as many expressions as you wish.

### Conditional Ternary Operator

`var isAdult = (age < 18) ? "Too young": "Old enough";`

### String Operators
The most useful operator for strings is concatenation, represented by the + sign. 
Concatenation can be used to build strings by joining together multiple strings, or by joining strings with other types: 

`var mystring1 = "I am learning ";`<br/>
`var mystring2 = "JavaScript with SoloLearn.";`<br/>
`document.write(mystring1 + mystring2);`

Numbers in quotes are treated as strings: "42" is not the number 42, it is a string that includes two characters, 4 and 2.

***
**Exercise 4**
What is the output of the following code?

`var x = "50";`<br/>
`var y = "100";`<br/>
`document.write(x+y);`

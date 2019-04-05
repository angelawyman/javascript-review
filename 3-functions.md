~ Table of Contents ~

1. JavaScript Overview, Variables and Datatypes
2. Conditionals and Loops     
3. [FUNCTIONS](#javascript-functions)  
- [How to Create a Function](#how-to-create-a-function)
- [How to Call a Function](#how-to-call-a-function)
- [What are Function Parameters?](#function-parameters)
- [ES6 Default Parameters aka Shortcuts](#es6-default-parameters)
- [Using Multiple Parameters with Functions](#using-multiple-parameters-with-functions)
- [The Return Statement](#the-return-statement)
- [The Scope of Local Variables](#the-scope-of-local-variables)
- [Hoisting- What does this mean?](#hoisting)
- [WTF is a Function Expression?](#function-expression)
- [Arrow Functions Look Cool](#arrow-functions)
- [Summary](#summary)
4. Objects   
5. Arrays  
6. DOM   
7. ECMA Script and Resources  

###

---
References: 

- [JavaScript First Steps](https://javascript.info/first-steps)
- [W3 Schools on Functions](https://www.w3schools.com/js/js_functions.asp)
- [Youtube Tutorial New Boston on Functions](https://www.youtube.com/watch?v=5nuqALOHN1M)
---

## JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task. The main advantages of using functions:
is you can use the same code many times with different arguments, to produce different results.

A JavaScript function is executed when "something" invokes, or calls, the function.
* When an event occurs (when a user clicks a button)
* When it is invoked (called) from JavaScript code
* Automatically (self invoked)
---
###### FUNCTIONS
### How to Create a Function

To declare a JavaScript function, use the function keyword, followed by a name, followed by a set of parentheses (). You name functions much like you name variables, names can contain letters, digits, underscores, and dollar signs. Enclosed in the function’s curly brackets, is the function body or block, consisting of statements.

```javascript
< syntax >

function name() { 
  //code to be executed
}
```
* Function parameters are listed inside the parentheses () in the function definition.
* Function arguments are the values received by the function when it is invoked.
* Inside the function, the arguments (the parameters) behave as local variables.


---
###### FUNCTIONS
### How to Call a Function


To run or execute the function, you need to call or invoke the function.
As simple as: write the name of the function, follow with parentheses with or without the arguments, finish off with a semi-colon, job done!

```javascript
- example -

function myVeganPizzaOrder() {
  alert("Did you want toppings?");
}

myVeganPizzaOrder();
// alerts "Did you want toppings?"
```

Once the function is defined, JavaScript allows you to call it as many times as you want to.

You can also call a function using this dot notation syntax:

`myBestFunction.call();`

The difference here is that when using this technique, you're passing the 'this' keyword to a function. You'll learn all about that later.

---
*Exercise: Declare a function called greet and give it a parameter of name.
Have the function alert a message that says Hi plus the name. You will need to create a variable. Be sure to call the function.*

```javascript
function greet(name) {
  var message = 'Hi ' + name;
  alert(message);
}
greet('Happy Student name');
```
---
###### FUNCTIONS
### Function Parameters and Arguments

We use parameters as placeholders for information that will be passed to the function when it is called. 

When calling a function we specify the values in the parentheses, the parameters. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.

Parameters are treated like variables inside the function.

```javascript
- syntax -

function functionName(parameter) {
  //some code that will get run
}
 ```
As with variables, parameters can be given names, which are separated by commas within the parentheses. Here width and height act as placeholders for values to be multiplied. The order in which the arguments are passed and assigned matches the same order as the declared parameters.

After defining the parameters, you can use them inside the function.

```javascript
- example -

function sayHello(name) {
   alert("Hi, " + name);
}
sayHello("Namjoon");
// alerts "Hi, Namjoon"
```

This function takes in a parameter called name. When calling the function, we provide the parameter's value (argument) inside the parentheses. Here the argument is Namjoon. Function arguments are the values passed to the function when it is called.

```javascript
- example -

function sayHello(name) {
   alert("Hi, " + name);
}
sayHello("Jin");
sayHello("Yoongi");
sayHello("Hoesok");
sayHello("Taehyung");
sayHello("Jimin");
sayHello("Jungkook");
```

This will execute the function's code each time for the provided argument.

---
###### FUNCTIONS
### Using Multiple Parameters with Functions

You can define multiple parameters for a function by comma-separating them.


```javascript
-syntax-
function functionName(parameter1, parameter2) {
  //some code that will get run
}

function howBig(width, height) {
  console.log(width * height);
}
```

```javascript
- example -

function sayHello(name, age) {
  document.write( name + " is " + age + " years old.");
}
```
Function parameters are the names listed in the function definition

*Q.) What is the output of this code?*

```javascript
function test(x, y) {
  if(x>y) {
    document.write(x);
  }
  else {
    document.write(y);
  }
}
test(5, 8);
```

```javascript
- example -

function sayHello(name, age) {
  document.write( name + " is " + age + " years old.");
}
```

```javascript
sayHello("Chiquita", 20)
// outputs "Chiquita is 20 years old."
```
If you pass more arguments than are defined, they will be assigned to an array called arguments. They can be used like this: arguments[0], arguments[1], etc.


```javascript
- example -

function sayHello(name, age) {
    document.write( arguments[0] + " is " + arguments[1] + " years old and live in " + arguments[2]);
}
sayHello("Chiquita", 20, "California");
// Chiquita is 20 years old and live in California`
```
---
###### FUNCTIONS
### ES6 Default Parameters

```javascript
-syntax-

function functionName(parameter = 'default value', parameter2 = 100, parameter3  = true) {
 // function block here
}
```

ES6 allows us to use default parameters; parameters that have a predetermined value. Here, we assigned the parameter name a default value of 'friend'. 

```javascript
function bffOrFriend(name = 'friend') {
  console.log('Hello, ${name}!');
}

bffOrFriend('Bee'); // output: Hello, Bee!

bffOrFriend(); // output: Hello, friend!
```

Now call the function: the value of the argument ('Bee') is passed in and will supplant the default parameter of 'friend' to log 'Hello, Bee!' to the console.

If instead, there isn’t an argument for bffOrFriend(), the default value is used, and 'Hello, friend!' will be logged to the console.

Default parameters, allows us to supply a repsonse for situations when an argument isn’t passed into a function.


---
###### FUNCTIONS
### The return statement

```javascript
function myLoft(width, length) {
  let area = width * length; 
};

console.log(myLoft(16, 90)); 
// prints undefined
```

In the code above, as the value is originally omitted, undefined will be returned. While the computer will calculate the area as 1440, it won't share that information. How do we get an answer? With the keyword return!

To pass back information from the function call, we use a return statement. To create a return statement, we use the return keyword followed by the value that we wish to return. 

When a return statement is used in a function body, the execution of the function is STOPPED and the code that follows it will not be executed. 

```javascript
function myLoft(width, length) {
  if (width < 0 || length < 0) {
    return 'You live in a shoebox!';
  }
  return width * length;
}
```

If an argument for width or height is less than 0, then myLoft() will return 'You live in a shoebox!'. The second return statement width * len gth will not run.

The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

Let's calculate the product of two numbers, and return the result.


```javascript

function myPetGerbils(a = male, b = female) {
   return a * b;
}

var x = myPetGerbils(5, 6); 
// return value will end up in x
// x equals 30
```
Note: if you do not return anything from a function, it will return undefined.

```javascript
- another example -

function bloomingFlowers(a, b) {
   var spring = a+b;
   return spring;
}
document.write( bloomingFlowers(10, 2) );
//outputs 12
```
---
###### FUNCTIONS
### The Scope of Local Variables

Reference: [On Scope](https://htmldog.com/guides/javascript/intermediate/scope/)

Variables declared within a JavaScript function, become LOCAL to the function. Local variables can only be accessed from within the function. 

The var keyword defines a variable globally, or locally to an entire function regardless of block scope. While the let keyword allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. 

Easiest to say: var is function scoped and let is block scoped. A variable declared with var is defined throughout the program as compared to let.


```javascript
- example -

// code here can NOT use myMacLipstick
function myFunction() {
  var myMacLipstick = "Ruby Woo";
  // code here CAN use myMacLipstick
}
// NOR can code here use myMacLipstick
```
---
###### FUNCTIONS
### Hoisting

Hoisting happens in JavaScript where  access to function declarations are allowed before they’re defined. Variables and function declarations are moved to the top of their scope before code execution. Therefore, no matter where the functions and variables are declared, they will be moved to the top of their scope regardless of whether their scope is global or local.

Take a look at example of hoisting:

```javascript
console.log(curlyBangs()); 
// output: Curly bangs look good on everyone!

function curlyBangs() {
  console.log('Curly bangs looks good on everyone!');
}
```
Notice how hoisting allowed curlyBangs() to be called *before* the curlyBangs() function was defined! 

Later we will learn about *function expressions* in JavaScript which are not hoisted, unlike these function declarations. You are not able to use a *function expression* before you define it.

---
###### FUNCTIONS
### Function Expression

**References**
- https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/
- https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

---

In a function expression, the function name is usually omitted. A function with no name is called an "anonymous function". A function expression is often used to store a variable in order to refer to it. 

```javascript
const brushMyTeeth = function(){
}
```
How to Write a function expression
1. Don't start with the word function, start with a variable, like const or let.
2. Assign the variable an anonymous function - it doesn't have a name!! 
3. Add the usual set of curly braces for the code block.

To invoke the function, call the variable.

```javascript
brushMyTeeth('after lunch');
```

```javascript
- another example -

const liftWeights = function(day){
  if(day === 'Monday'){
    return true;
  } else {
    return false;
  }
};

liftWeights('Tuesday');

console.log(liftWeights('Tuesday'));
```
---
###### FUNCTIONS
### Arrow Functions

**Reference**
[ES6 Arrow Function SitePoint](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

---

```javascript
-syntax-

const newFunction = () => {
  // Function body goes here
};
```

Courtesy of ES6 we now have the arrow function syntax; a much shorter way to write functions! You can skip writing out the word function everytime you need to create one.

Start with a set of parentheses () that are filled with your parameters, then follow with an arrow symbol => and lastly add a set of curly braces that contain the usual function code body. 

```javascript
const myLoft = (width, length) => {
  let area = width * length;
  return area;
};
```

### Refactoring the Arrow Function
Fact is, if you have only one parameter you don't even need the parentheses. Plus, in this case you don't need the word 'return' either, as it is all considered an *implicit return* using *concise body* syntax.

```javascript
// before

var phraseSplitter = function phraseSplitter(phrase) {
  return phrase.split(' ');
};

//after ES6 refactoring

const phraseSplitter = phrase => phrase.split(" ");

console.log(phraseSplitter("So Awesome!"));  // outputs "So", "Awesome!"
```
Another example.
We can refactor the function to:

```javascript
let unmatchedSocks = (3) => {
  return 3 % 2 ;
};

//refactored
let unmatchedSocks = 3 => 3 % 2;

console.log("unmatchedSocks");
// returns 1
```

---
###### FUNCTIONS
### Summary


Good job! If you have made it this far you have learned a lot of ways to write functions.

Let's review the bigger concepts!!

- A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

```javascript
//this is a fuction declaration

function madeUpName() {
  console.log("Daylight is burning");
};
```

- A parameter is a  variable inside a function’s block. This gets assigned a value from the argument passed in when the function is invoked.You can have multiple parameters.

- To call a function write:
the function's name and parentheses.  `elmo();`

- ES6 allow us to assign a default value to a parameter in case no argument is passed into the function.

- To return a value from a function, we use a return statement.

- To define a function we can use function expressions, see above.

- To define a function using arrow function notation, see above.

- You can be concise by using concise arrow notation, see above.



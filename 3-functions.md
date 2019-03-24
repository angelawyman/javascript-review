###

***

## MODULE 4: Functions

***
References: <https://javascript.info/first-steps>, <https://www.w3schools.com/js/js_functions.asp>

### JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task. The main advantages of using functions:
is you can use the same code many times with different arguments, to produce different results.

A JavaScript function is executed when "something" invokes, or calls, the function.
* When an event occurs (when a user clicks a button)
* When it is invoked (called) from JavaScript code
* Automatically (self invoked)

### User-Defined Functions

To define a JavaScript function, use the function keyword, followed by a name, followed by a set of parentheses (). You name functions much like you name variables, names can contain letters, digits, underscores, and dollar signs.

*Syntax*

```bash
function name() { 
  //code to be executed
}
```
* Function parameters are listed inside the parentheses () in the function definition.
* Function arguments are the values received by the function when it is invoked.
* Inside the function, the arguments (the parameters) behave as local variables.

**Calling a Function**

To execute the function, you need to call/invoke it.
To call a function, start with the name of the function, then follow it with the arguments in parentheses.

*example*

```bash
function myVeganPizzaOrder() {
  alert("Did you want toppings?");
}
myVeganPizzaOrder();
// alerts "Did you want toppings?"
```

Once the function is defined, JavaScript allows you to call it as many times as you want to.

You can also call a function using this syntax

`myBestFunction.call();`

The difference is that when calling in this way, you're passing the 'this' keyword to a function. You'll learn all about it later.

**Exercise**

Declare a function called greet and give it a parameter of name.
Have the function alert a message that says Hi plus the name. You will need to create a variable.
Now call the function.

*answer*

```bash
function greet(name) {
  var message = 'Hi ' + name;
  alert(message);
}
greet('Happy Student name');
```

### Function Parameters

Functions can take parameters. 
Function parameters are the names listed in the function's definition.

*syntax*

```bash
functionName(param1, param2, param3) {
   // some code
}
 ```
As with variables, parameters should be given names, which are separated by commas within the parentheses.

After defining the parameters, you can use them inside the function.

*example*

```bash
function sayHello(name) {
   alert("Hi, " + name);
}
sayHello("Namjoon");
// alerts "Hi, Namjoon"
```

This function takes in a parameter called name. When calling the function, provide the parameter's value (argument) inside the parentheses. Function arguments are the real values passed to (and received by) the function.

*example*

```bash
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



### Using Multiple Parameters with Functions

You can define multiple parameters for a function by comma-separating them.

*Syntax*

```bash
function myFunc(x, y) {
   // some code
}
```
*example*

```bash
function sayHello(name, age) {
  document.write( name + " is " + age + " years old.");
}
```
Function parameters are the names listed in the function definition

Q.) What is the output of this code?

```bash
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

*example*

```bash
function sayHello(name, age) {
  document.write( name + " is " + age + " years old.");
}
```

```bash
sayHello("Chiquita", 20)
// outputs "Chiquita is 20 years old."
```

If you pass more arguments than are defined, they will be assigned to an array called arguments. They can be used like this: arguments[0], arguments[1], etc.

*example*

```bash
function sayHello(name, age) {
    document.write( arguments[0] + " is " + arguments[1] + " years old and live in " + arguments[2]);
}
sayHello("Chiquita", 20, "California");
// Chiquita is 20 years old and live in California`
```

### The return statement

Functions often compute a return value. The return value is "returned" back to the "caller":

`var x = myDisagreeableFunction(4, 3);`   

```bash
function myDisagreeableFunction(a, b) {
  return a * b;
}
```
Let's calculate the product of two numbers, and return the result.

*example*

```bash
function myFavFunction(a, b) {
   return a * b;
}
var x = myFavFunction(5, 6); 
// Return value will end up in x
// x equals 30
```

Note: if you do not return anything from a function, it will return undefined.

*another example*

```bash
function addNumbers(a, b) {
   var c = a+b;
   return c;
}
document.write( addNumbers(40, 2) );
//outputs 42
```

### Scope Local Variables

reference:<https://htmldog.com/guides/javascript/intermediate/scope/>

Variables declared within a JavaScript function, become LOCAL to the function. Local variables can only be accessed from within the function. 

The var keyword defines a variable globally, or locally to an entire function regardless of block scope. While the let keyword allows you to declare variables that are limited in scope to the block, statement, or expression on which it is used. Easiest to say: var is function scoped and let is block scoped. A variable declared with var is defined throughout the program as compared to let.

*example*

`// code here can NOT use myMacLipstick`
```bash
function myFunction() {
  var myMacLipstick = "Ruby Woo";
  // code here CAN use myMacLipstick
}
```
`// NOR can code here use myMacLipstick`


### Using Alert, Prompt and Confirm

>alert("Do you really want to leave this page?"); 

** Alert Box** 

An alert box is used when you want to ensure that information gets through to the user.
When an alert box pops up, the user must click OK to proceed.
The alert function takes a single parameter, which is the text displayed in the popup box.


** Prompt Box** 

is often used to have the user input a value before entering a page.
When a prompt box pops up, the user will have to click either OK or Cancel to proceed after entering the input value.
If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null.

The prompt() method takes two parameters. 
* The first is the label, which you want to display in the text box.
* The second is a default string to display in the text box (optional).

*example*
```bash
var user = prompt("Please enter your name");
alert(user);
```

*example*
```bash
var name = prompt
("Enter your name:");
alert(name);`
```

**Confirm Box**

When a confirm box pops up, the user must click either OK or Cancel to proceed. If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false.

*example*
```bash
var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}
```



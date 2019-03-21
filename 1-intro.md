
---
# JavaScript Review

## MODULE 1: JavaScript Overview
We use JavaScript to make a site more dynamic and interactive.  
Such features might include slide carousels, lightbox gallery, scroll to top, and others. 
- Auto-update social media content, like twitter or facebook feed 🐋
- Animate visual elements 🐈
- Add visual feedback on user interactions ✅
- Place interactive maps 🚀
- Trigger pop-ups after user actions, such as modal windows

***
**Q1.) What is JavaScript?**  
A. JavaScript is used only for web apps  
B. You can use JavaScript to create interactive web elements  
C. JavaScript is a server-side only language

**Q2.) What extension is used for the JavaScript file?**\
JavaScript files have the file extension _____

**Q3.) What tag contains the JavaScript code?**\
A. body<br/>
B. script<br/>
C. style<br/>
D. code<br/>

Tip: you no longer need to indicate language or type. Don't do this!!  
`--<script language="javascript" type="text/javascript"></script>--`
***

### Where is the "script" tag typically placed?
Inside the `<head>` tag between `<script>` and `</script>`

### Where else? Inside the body
Remember that the script which is placed in the head section, will be executed before the `<body>` is rendered. It can be a good idea to place scripts at the **bottom** of the `<body>` element to let the web page fully load in the browser window. This can also improve page load, because the HTML display is not blocked while waiting for scripts to load.

### And? Link to External file
For longer pages of code link to an external created custom script file in the head.   
Also, you can link to hosted libraries, such as JQuery:

```bash
    <script src="bowser-demo.js"></script>
    <script src="modernizer.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </script>
```

- External scripts are useful and practical when the same code is applied to different web pages.
- Placing a JavaScript in an external file separates HTML and code  and make it easier to read and maintain.
- Cached JavaScript files can speed up page loads.

---


### Basics

`alert("This is an alert box!");`

Every written "instruction" is called a statement.  
JavaScript statements are separated by semicolons.  
A bunch of statements listed are referred to as a block of code.  
The document.write() function writes a string into our HTML document. This function can be used to add text.

```bash
    <script>
       document.write("Hello World!");
     </script>
```
You can also format the text with HTML.

```bash
    <script>
       document.write("<h1>Hello World!</h1>");
     </script>
```
***
**Q4.)  Which choice can be added within the text to be displayed?**\ 
A. Formatting tags\  
B. JavaScript commands\ 
C. Folders  
***

### Commenting

Comments are used to describe and explain what the code is doing. <br/>
Comments are ignored by the browser and are not executed.<br/>

Use double slashes for single line comments.
```bash
<script><br/>
   // This is a single line comment<br/>
   alert("This is an alert box!");<br/>
</script>
```

Use slash star and star slash pairings for multiple comments

```bash
  <script> <br/>
    /* This code <br/>
    creates an <br/>
    alert box */<br/>
    alert("This is an alert box!");<br/>
</script>
```
***
**Q5.)  How does the single line comment look like?**\
`A. // this is a comment`\
`B. <!--this is a comment--`\
`C. **this is a comment`\
`D. %%this is a comment`\

***
## MODULE 2: Basic Concepts

* Variables
* Data Types
* Math Operators 
* Assignment Operators
* Comparision Operators
* Boolean Operators
* String Operators
***

### Variables

Variables are containers for storing data values. The value of a variable can change throughout the program. Information stored in variables, such as a username, account number, or even a personalized greeting can then be found in memory.<br/>
Variables also allow us to label data with a descriptive name, so our code can be more easily understood. 

There are only a few things you can do with variables:

- You can create and descriptively name your variable.
- Store the variable's data and update it.
- Retrieve the information stored in a variable.

`var newVariable = 10;`

You can also declare a variable without a value. 

`var favoriteFood;`

In this case, maybe the value might require some calculation, something that will be provided later, like user input. When you declare a variable without a value it will return the value undefined.  

Now that I have declared my variable I can assign it.

`favoriteFood = "artichokes";`


Later I can reassign the value and output the value:
```bash
var favoriteFood = 'bananas';
document.write(favoriteFood);
```

**Rules to naming variables:**
* The first character for a variable can be letters, underscores, or dollar signs. Subsequent characters may be numbers, letters, underscores, or dollar signs. Numbers are not allowed as the first character.
* Mathematical or logical operators are not allowed. For instance, 2/interest, abercrombie+fitch, my%num, num+, are not allowed.
* Spaces and hyphens in names are not allowed
* JavaScript is case sensitive. The variable lastName is a different variable than lastname.
* camelCase is commonly used. Start with lowercase adding each new word with a capital letter: myFavoriteFoodsIAteLastYear. Use logical names with purpose like firstName or shoppingCart.
* Don't use reserved keywords, such as do, catch, case, break. Here is a list from [Mozilla](
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords).
< Tip: if you write your variable in camelCase reserved words will never be a problem.

*examples of incorrect variable names*
```bash
let my favorite_cat; // can't have a space\  
let 1market; // can't start with a number\  
let my-proper-name; // hyphens aren't allowed as they are used for subtraction\ 
let bartle&james; // can't use comparision or mathmatical operators 
```

## New Kinds of Variables  ECMAScript 6
JavaScript now has two additional ways to declare variables: let and const.

#### let
let is the successor to var. Although var is still available, let limits the scope of variables to the block (rather than the function) they’re declared within.

*old style ES5*

```bash
for (var i = 1; i < 5; i++) {\ 
  console.log(i);\
}
// will output the numbers 1 to 4\

console.log(i);\
// will output 5 as the variable i still exists outside the loop)
```

*ECMAScript 6*
```bash
for (let j = 1; j < 5; j++) 
  console.log(j);<br/>
}
console.log(j);
// this won't work as j is not defined
```

#### const

Using const allows you to define a variables that cannot be changed to new values. A const can’t be declared without a value, unlike a var or a let variable.

*example*
```bash
var x; // valid
let y; // valid
const z; // will throw an error
```

*example*
```bash
`const myDivorce = '14.12.1987';`
`const momBirthday = '15.12';`
```

*example*
```bash
const name = 'Casey';
name = 'Parker';
// this won't work
```
*but this will work*
```bash
const person = { name: 'Casey' }; 
person.name = 'Parker';
// As we're not changing the object named 'person' this works.
```

#### All Uppercase Constants
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

* let – is a modern variable declaration. The code must be in strict mode to use let in Chrome (V8).
* var – is an old-school variable declaration. Normally we don’t use it at all, but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.
* const – is like let, but the value of the variable can’t be changed.
* Variables should be named in a way that allows us to easily understand what’s inside them.

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
```bash
const birthday = '18.04.1982';
const age = someCode(birthday);
```
Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here). Would it be right to use upper case for birthday? For age? Or even for both?
```bash
const BIRTHDAY = '18.04.1982'; // make uppercase?
const AGE = someCode(BIRTHDAY); // make uppercase?
```

### Data Types

Data type refers to the type of values a program can accept. JavaScript variables can hold many data types, such as numbers, strings, arrays, and more.  Six of the data types are called “primitive”, because their values contain only a single thing. Symbol is new to  ECMAScript 6, Null and Undefined are also data types. By contrast, objects are used to store keyed collections of various data.

`let x;`<br/>
`x = 1;   // x is a number `<br/>
`x = '1'; // x is a string`<br/>
`x = " my fav number" // is another string`<br/>
`x = [1]; // x is an array`<br/>
`x = true // is Boolean`<br/>

- Floating point numbers can have decimal points.
- Strings store text. Be sure to match your quotes.

`var text = "Call me 'Ishmael' ";`

Or you can escape your quotes like this for double quotes: \" or \' inside of single quotes.
```bash
var sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';  
document.write(sayHello);
```
### Booleans - True or False
The Boolean value of 0 (zero), null, undefined, empty string is false. Everything with a "real" value is true.

### Arithmetic Operators
`+, -, *, /, %, ++, --`

*example*
```bash
var x = 10 + 5 (100/5);
document.write(x);
// outputs 15
```
Modulus (%) operator returns the division remainder (what is left over).

### Assignment Operators
`=, +=, -=, *=, /=, %=`
```bash
var result= 20;
result *= 5;
answer: 100;
```

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
Concatenation can be used to build strings by joining together multiple strings, or by joining strings with other types. Notice you need to provide spaces before your ending quotes and the + sign for this to read properly.
```bash
var myString1 = "I am learning ";  
var myString2 = "JavaScript with Professor Angela.";  
document.write(myString1 + myString2);  
```
Numbers in quotes are treated as strings: "42" is not the same as number 42, it is a string that includes two characters, 4 and 2.

***

**Q6). What is the output of the following code?**
```bash
var x = "50";
var y = "100";
document.write(x+y);
```

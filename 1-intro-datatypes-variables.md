~ Table of Contents ~

1. [JavaScript](#get-started)
    -  [Commenting](#commenting)
    - [Using Alert, Prompt and Confirm](#using-alert-prompt-and-confirm)
    - [Summary](#javascript-summary)
- [Data Types and Operators](#data-types)
  - [Boolean Operators - True or False Values](#boolean-operators-true-or-false-values)
  - [Arithmetic Operators](#arithmetic-operators) 
  - [Assignment Operators](#assignment-operators)
  - [Relational Comparision Operators](#relational-comparison-operators)
  - [Logic Operators](#logic-operators)
  - [Conditional Ternary Operator](#conditional-ternary-operator)
  - [String Operators](#string-operators-and-concatenation)

 [Big Concept: Variables](#big-concept-variables)
  -  [Let](#let)
  -  [Const](#const)
  -  [Summary](#summary)
  -  [Exercises: Working with variables](#exercises-working-with-variables)

2. Conditionals and Loops<br/>   
3. Functions<br/> 
4. Objects<br/>  
5. Arrays<br/> 
6. Math Object and Generators
7. DOM<br/> 
8. ECMA Script and Resources

---
# JavaScript

## Get Started
We use JavaScript to make a site more dynamic and interactive. Among such features might be slide carousels, a lightbox gallery, an icon to scroll to top, among others. 
- Auto-update social media content, like twitter or facebook feed 🐦
- Animate visual elements 🐈
- Add visual feedback on user interactions ✅
- Place interactive maps ⛈
- Trigger pop-ups after user actions, such as modal windows 🤢

***

Q1.) What is JavaScript?  
- A. JavaScript is used only for web apps  
- B. You can use JavaScript to create interactive web elements  
- C. JavaScript is a server-side only language  


Q2.) What extension is used for the JavaScript file?
- JavaScript files have the file extension _____  



Q3.) What tag contains the JavaScript code? 
- A. body  
- B. script  
- C. style  
- D. ~~code~~

> Tip: you no longer need to indicate language or type. 
```javascript
Don't do this!!    
<script language="javascript" type="text/javascript"></script>
```
***

## Adding Your Scripts to the Document
## Where is the "script" tag typically placed?
Inside the head section between `<script>` and `</script>`

## Where else? Inside the body!
Notice that if the script is placed in the head section, it will be executed before the `<body>` is rendered. It therefore can be a good idea to place scripts at the **bottom** of the `<body>` element to let the web page fully load in the browser window. This can also improve page load time, because the HTML display is not blocked while waiting for scripts to load.

## And where else? Link to an External file
For longer pages of code link to an external created custom script file in the head. You may have several javascript files. Also, you can link to hosted libraries, such as JQuery:

```javascript
<script src="bowser-demo.js"></script>
<script src="modernizer.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```

- External scripts are useful and practical when the same code is applied to many different web pages.
- Placing JavaScript in an external file helps separate the HTML and code and can make it easier to read and maintain.
- Cached JavaScript files can also speed up page loads.

---


## JavaScript Summary

`alert("This is an alert box!");`

- Every written "instruction" is called a statement.  
- JavaScript statements are separated by semicolons.  
- A bunch of statements listed are referred to as a block of code.  
- The document.write() function will write a string into our HTML document. This function can be used to add text.
- The console.log() function will write into our console developer tools panel. The keyboard shortcut Ctrl Option J (on Mac) or Ctrl Shift J (on Windows).

```javascript
<script>
  document.write("Hello World!");
</script>
```
You can also format the text with HTML.

```javascript
<script>
  document.write("<h1>Hello World!</h1>");
</script>
```
---

**Q4.) Which choice can be added within the text to be displayed?**     
A. Formatting tags     
B. JavaScript commands   
C. Folders  

---

## Commenting

Comments are used to describe and explain what the code is doing.  
Comments are ignored by the browser and are not executed.

Use double slashes for single line comments.
```javascript
<script>
   // This is a single line comment
   alert("This is an alert box!");
</script>
```

Use slash star and star slash pairings for multiple comments

```javascript
  <script> 
    /* This code 
    creates an 
    alert box */
    alert("This is an alert box!");
</script>
```
---
**Q5.) Which one of these looks like the single line comment?**    
```javascript
A. // this is a comment    
B. <!--this is a comment-->
C. **this is a comment**
D. %%this is a comment
```
---

### Using Alert, Prompt and Confirm

>alert("Do you really want to leave this page?"); 

### Alert Box

An alert box is used when you want to ensure that information gets through to the user.
When an alert box pops up, the user must click OK to proceed.
The alert function takes a single parameter, which is the text displayed in the popup box.

---
### Prompt Box

is often used to have the user input a value before entering a page.
When a prompt box pops up, the user will have to click either OK or Cancel to proceed after entering the input value.
If the user clicks OK, the box returns the input value. If the user clicks Cancel, the box returns null.

The prompt() method takes two parameters. 
* The first is the label, which you want to display in the text box.
* The second is a default string to display in the text box (optional).


```javascript
- example -

var user = prompt("Please enter your name");
alert(user);
```


```javascript
- example -

var name = prompt
("Enter your name:");
alert(name);`
```
---
### Confirm Box

When a confirm box pops up, the user must click either OK or Cancel to proceed. If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false.

```javascript
- example -

var result = confirm("Do you really want to leave this page?");
if (result == true) {
  alert("Thanks for visiting");
}
else {
  alert("Thanks for staying with us");
}
```
---
## Data Types
  - Boolean Operators
  - Math Operators 
  - Assignment Operators
  - Comparision Operators
  - String Operators
---

## The Various Data Types

Data type refers to the type of values a program can accept. JavaScript variables can hold many data types, such as numbers, strings, arrays, and more.  Six of the data types are called “primitive”, because their values contain only a single thing. Symbol is new to  ECMAScript 6, Null and Undefined are also data types. By contrast, objects are used to store keyed collections of various data.

```javascript
let x; 

x = 1;   
// x is a number 

x = '1'; 
// x is a string 

x = " my fav number" 
// is another string 

x = [1]; 
// x is an array 

x = true 
//  x is a Boolean value
```
- Floating point numbers can have decimal points.
- Strings store text. Be sure to match your quotation marks; double to double or single to single. Below we have a set of single quotes inside of a string.

`var text = "Call me 'Ishmael' ";`

You can also escape your quotes like the following for double quotes:` \" ` or ` \'` inside of single quotes.

```javascript
var sayHello = 'Hello world! \'I am a JavaScript programmer.\' ';  
document.write(sayHello);
```
---
### Boolean Operators:  True or False Values

The Boolean value of 0 (zero), null, undefined, empty string returns false. Everything with a "real" value is true.
```javascript
10 = 5 + 5;
//<==outputs true

10 > 11;
//<==outputs false
```
---
### Arithmetic Operators
`+, -, *, /, %, ++, --`

```javascript
var x = 10 + 5;
document.write(x);
// outputs 15
```
The modulus (%) operator returns the division remainder (what is left over).
```javascript
var y = 33 % 10;
// outputs 3
```

PEMDAS is an acronym for the words parenthesis, exponents, multiplication, division, addition, subtraction. This helps you determine what the order of operations is for more complex probelms, Given two or more operations in a single expression, the order of the letters in PEMDAS tells you which to calculate first and so on until the calculation is complete. The mnemonic device for PEMDAS is Please Excuse My Dear Aunt Sally.

Below the mathematical order is respected: first 5 * 3 is calculated, then 9 + 15. 

*example*
```javascript
alert(9 + 5 * 3);
//this will output what?
```
---
### Assignment Operators
`=, +=, -=, *=, /=, %=`

```javascript
var result= 20;
result *= 5;
//<== outputs 100;
```
---
### Relational Comparison Operators
`==, ===, !=, !==, >, >=, <, <=`

```javascript
== equal to
=== equal to 
!== not equal to
>	greater than
>= 	greater than or equal to
<	less than
<= 	less than or equal to
```
Comparison operators — operators that compare values and return true or false.

= One equal sign 'assigns' a value.  
== Two equal signs is the equality operator. It checks to see if numerical values are equal to one another. It will convert the operands if they are not of the same type, then appluy strict comparison. If both operands are objects, then JavaScript compares internal references which are equal when operands refer to the same object in memory.  
=== Three equal signs is a comparison and also checks if they are the same type.

Comparison operators are used in logical statements to determine equality or difference between variables or values.


```javascript
5 == 10 false - equal to
5===10 false - identical
5!=10 true - not equal to
10!==10 false - not identical
10> 5 true - greater than
10>=5 true - greater than or equal to
10<5 false - less than
10<=5 false - less than or equal to
```

```javascript
alert(window.innerWidth > 400);
//<== what is the output? or what will be the value returned?
```
---
### Logic Operators
`&&, !!, ! ` = and, or, not

Logical operators allow you to connect as many expressions as you wish.

```javascript
var isTrue = ('yellow' === 'green') && (4 >= 4);
//<== here yellow is not equal to green so it is false, while 4 is greater than or equal to 4 which is true however with the && operands both expressions must evaluate to true so this expression is falsy and will evaluate to false
```
Instead, how would you make this statement evaluate to true?

---
### Conditional Ternary Operator
Take a look at this if...else statement example:

```javascript
let dayLight = true;

if (dayLight) {
  console.log('Drink your coffee!');
} else {
  console.log('Go to bed!');
}
```

We can rewrite this code block using a ternary operator. A ternary operator takes three arguments. 

```javascript
dayTime ? console.log('I made coffee!') : console.log('Go to bed!');
```

Things to notice in the example above:

- The condition, dayLight, is followed by a question mark.
- Following the question mark are two expressions which are separated by a colon.
- If the condition is true, the ternary operator returns the value of the first expression.
- Otherwise, it returns the value of the second expression.
- Just as with like if...else statements, ternary operators will evaluate conditions to true or false.

Here is another example:

```javascript
var isAdult = (age < 18) ? "Too young": "Old enough";
```
Here is an example using a string, and check out that back escaped character!!

```javascript
let adultAge = 'Legal and Deadly!';

adultAge === 'Legal and Deadly!' ? console.log('I\'m legal and deadly!') : console.log("Someday I will drink");
```

* Exercise*

*How would you write a variable that asks if it the garbage needs taking out. If it does respond "It's your turn." otherwise write "Can you do the dishes instead?". *


---

### String Operators and Concatenation

The most useful operator for strings is concatenation, represented by the + sign. 
Concatenation can be used to build strings by joining together multiple strings, or by joining strings with other types. Notice watch out for spaces before your ending quotes and the + sign, you will need to provide these for your string to read properly.


```javascript
var myString1 = "I am learning ";  
var myString2 = "JavaScript with Professor Angela.";  
document.write(myString1 + myString2);  
```
Numbers in quotes are treated as strings: "42" is not the same as number 42, it is a string that includes two characters, 4 and 2.

---

## Big Concept: Variables

Variables are containers for storing data values. The value of a variable can change throughout the program. Information stored in variables, such as a username, account number, or even a personalized greeting can then be found in memory.<br/>
Variables also allow us to label our data with a descriptive name, so our code can be more easily understood. 

There are only a few things you can do with variables:

- You can create and descriptively name your variable.
- You can store the variable's data and update the data later.
- Lastly, you can retrieve the information stored in a variable.

`var bowserFavNumber = 10;`

Above we created a variable called 'bowserFavNumber' and assigned it the number 10. You could also declare a variable without a value, like below. 

```javascript
var favoriteFood;
```

In this case, maybe the value might require some calculation, something that will be provided later, from user input. When you declare a variable without a value it will return the value undefined.  

Now that I have declared my variable I can assign it.

```javascript
favoriteFood = "artichokes";
```

This is how to invoke it:
```javascript
favoriteFoods;  
//<==this will display or return the value artichokes
```
Later you can reassign the value and output the value. Bowser decided he likes bananas better.

```javascript
var favoriteFood = 'bananas';
document.write(favoriteFood);
```

Answer: what will I get now if I invoke my variable?

Note: you can declare many variables in just one statement.

```javascript
var person = "Ursain Bolt", olympicWinner = "Gold", prize = 200;
document.getElementById("demo").innerHTML = olympicWinner;
```

**Rules to naming variables:**
* The first character for a variable can be letters, underscores, or dollar signs. Subsequent characters may be numbers, letters, underscores, or dollar signs. Numbers are not allowed as the first character.
* Mathematical or logical operators are *not* allowed. For instance, 2/interest, abercrombie+fitch, my%num, num+, are not allowed.
* Spaces and hyphens in names are not allowed. fav-foods won't work
* JavaScript is case sensitive. The variable lastName is a different variable than lastname or LastName.
* camelCase is commonly used. Start with lowercase adding each new word with a capital letter: myFavoriteFoodsIAteLastYear. Use logical names with purpose like firstName or shoppingCart.
* Don't use reserved keywords, such as do, catch, case, break. Here is a list from [Mozilla](
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords).  
>  Tip: if you write your variable in camelCase reserved words will never be a problem.

<br/>

*examples of incorrect variable names*
```javascript
var my favorite_cat; 
//<== can't have a space  

var 1market; 
// can't start with a number   

var my-proper-name; 
//<== hyphens aren't allowed as they are used for subtraction 

var bartle&james; 
//<== can't use comparision or mathmatical operators 
```

---
## Introducing Two New Kinds of Variables in ECMA Script 6
JavaScript now has two additional ways to declare variables: let and const.

###### VARIABLES
#### let
let is the successor to var. Although var is still available, let limits the scope of variables to the block (rather than the function inside the block) they’re declared within.

*old style ES5*

```javascript
for (var i = 1; i < 5; i++) { 
  console.log(i);
}
//<==will output the numbers 1 to 4  

console.log(i);
//<== now this will output 5 as the variable i still exists outside the loop
```

*ECMAScript 6*

```javascript
for (let j = 1; j < 5; j++) 
  console.log(j);
}
console.log(j);
// this won't work as j is not defined
```
###### VARIABLES
#### const

Using const allows you to define a variables that cannot be changed to new values. A const can’t be declared without a value, unlike a var or a let variable.

*oops*

```javascript
var x; // valid
let y; // valid
const z; // will throw an error
```

*a good use of const*

```javascript
const myDivorce = '14.12.1987';
const momBirthday = '15.12';
```

*oops*

```javascript
const name = 'Dalai';
name = 'Lama';
// this won't work
```

*but this will work*

```javascript
const person = { name: 'Dalai' }; 
person.name = 'Lama';
// as we're not changing the object named 'person' this works.
```

### Summary

We can declare variables to store data by using the var, let, or const keywords.

* let – is a modern variable declaration. The code must be in 'strict mode' to use let in Chrome. We will talk about that more.
* var – is an old-school variable declaration. Normally we don’t use it at all, but there are some cases that merit its use still.
* const – is a variable like let, but the value of the variable can never be changed.
* Select names for variables that allows us to easily understand what’s inside them.

---
## Exercises: Working with variables

**Exercise 1**

1. Declare two variables: admin and name.
2. Assign the value "Cher" to name.
3. Copy the value from name to admin.
4. Show the value of admin using alert (must output “Cher”).


**Exercise 2 - Practicing good name choices**

1. Create a variable with the name of our planet. How would you name such a variable?
2. Create a variable to store the name of a current visitor to a website. How would you name that variable?


**Exercise 3 - Uppercase const**

1. Examine the following code:
```javascript
const birthday = '18.04.1982';
const age = someCode(birthday);
```
Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here). Would it be right to use upper case for birthday? For age? Or even for both?
```javascript
const BIRTHDAY = '18.04.1982'; // make uppercase?
const AGE = someCode(BIRTHDAY); // make uppercase?
```


---
Last quiz!

**Q6). What will be the output of the following code?**
```javascript
var x = "50";
var y = "100";
document.write(x+y);
```

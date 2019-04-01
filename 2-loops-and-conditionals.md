TOC Javascript Modules


1. JavaScript Overview
   - Data Types and Operators    
   - Naming Variables

2. CONDITIONALS AND LOOPS   
3. Functions   
4. Objects    
5. Arrays   
6. DOM  
7. ECMA Script and Resources  


---

## Module: Conditionals and Loops

---

## Conditionals

### The if statement
Use if to specify a block of code that will be executed if a specified condition is true.

```javascript
* syntax *

if (condition) {
   statements
}
```


```javascript
* example *

var myNum1 = 7;  
var myNum2 = 10;  
if (myNum1 < myNum2) {  
   alert("JavaScript is easy to learn.");  
}
```

```javascript
* try this out *

if (window.location.hostname != 'google.com') {
  alert('🤗')
}
```
---
### The else statement


```javascript
* syntax *

if (expression) {
   // executed if condition is true
}
else {
   // executed if condition is false
}
```

```javascript
* example *

var myNum1 = 7;
var myNum2 = 10;
if (myNum1 > myNum2) {
   alert("This is my first condition");
}
else {
   alert("This is my second condition");
}
```


```javascript
* example *

var age = 25;
if (age >= 18) {
   alert("Allowed.");
}
else {
   alert("Not allowed.");
}
```

```javascript
if (window.location.hostname == 'google.com') {
  alert('Welcome to Google! 🤗')
} else {
  alert('Please come back soon! 😉')
}
```

```javascript
* basic *

if (userName) {
  logIn (userName);
}
 else {
   signUp ();
}
```

```javascript
* note: this can also be written like *

userName && logIn (userName) || signUp ();
```
---
### The else if statement
You can use the else if statement to specify a new condition if the first condition is false.
You can write as many else if statements as you need.

```javascript
var course = 1;
if (course == 1) {
   document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
   document.write("<h1>CSS Tutorial</h1>");
} else {
   document.write("<h1>JavaScript Tutorial</h1>");
}
```

```javascript
* example *

var status = 1;
var msg;
if (status == 1) {
   msg = "Online";
} else if (status == 2) {
   msg = "Away";
} 
else {
   msg = "Offline";
}
```
---
### Switch statement

In cases when you need to test for multiple conditions, writing if else statements for each condition might not be the best solution. 

The switch statement is used to perform different actions based on different conditions. The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed. You can have as many case statements as needed.


```javascript
* syntax *

switch (expression) {
  case n1:
     statements
     break;
  case n2:
     statements
     break;
  default: 
     statements
}
```

```javascript
* example *

var day = 2;
switch (day) {
  case 1:
    document.write("Monday");
    break;
  case 2:
    document.write("Tuesday");
    break;
  case 3:
    document.write("Wednesday");
    break;
  default:
    document.write("Another day");
}
/* outputs "Tuesday" */
```
---

#### The break Keyword

When JavaScript code reaches a break keyword, it breaks out of the switch block. This will stop the execution of more code and case testing inside the block. Usually, a break should be put in each case statement.

*What is the output of this code?*

```javascript
var x = 3;
switch (x) {
  case 1:
    document.write(x);
    break;
  case 2:
    document.write(x+2);
    break;
  default:
    document.write(x+5);
}
```

*explanation*

- "Case 1" and "Case 2" looks like a numbering system for the cases, but it's not.
- Case 1 means "Does x match 1?" x is 3, so it doesn't match 1. So the document won't write x.
- Case 2 means "Does x match 2?" x is 3, so it doesn't match 2 So the document won't write x+2.
- The default will execute: The document will write x + 5 (3 + 5), which is 8.

---

#### The default Keyword

The default keyword specifies the code to run if there is no case match.

*example*

```javascript
var color ="yellow";
switch(color) { 
   case "blue":
     document.write("This is blue.");
     break;
   case "red": 
    document.write("This is red.");
     break;
   case "green": 
     document.write("This is green."); 
     break;
   case "orange": 
      document.write("This is orange."); 
      break;
   default: 
      document.write("Color not found.");
}
//outputs "Color not found."
```
---
## Loops
Loops can execute a block of code a number of times. They are handy in cases in which you want to run the same code repeatedly, adding a different value each time.

JavaScript has three types of loops: for, while, and do while. 
ES6 introduces other for loop types; you can learn about them in the ES6 course later.

---
### The for loop



```javascript
* syntax *

for (statement 1; statement 2; statement 3) {
   code block to be executed
}
```

```javascript
* example *

for (var i = 1; i<=5; i++) {  
   document.write(i + "<br />");  
}
```

- (var i = 1) is the **initial state** It sets a variable before the loop starts (var i = 1) to one.
- i<=5; is a **conditional statement**. It defines the condition for the loop to run (it must be less than or equal to 5).  
- On every iteration of the loop, we check this comparison.  
- If it's true, we execute the code in the block.  
- If it's false, we exit the loop.  
- If you omit this statement, then you must provide a break inside the loop. Otherwise, the loop will never end.
- i++ is the **increment expresssion**. It increases a value (i++) each time the code block in the loop has been executed.  
- Statement 3 is also optional, and it can be omitted if you increment your values inside the loop.

```javascript
var i = 0;
for (; i < 10; ) {
   document.write(i);
   i++;
}
```

```javascript
* example *

var i = 1;
for (k=1; k<10; k++){
   i += k;
   document.write(i++"<br />");
}
```
---
### The while loop


```javascript
* syntax *

while (condition) {   
   code block
}
```

```javascript
* example *

var i=0;
  while (i<=10) {
    document.write(i + "<br />");
    i++;
}
```
The loop will continue to run as long as i is less than, or equal to, 10. Each time the loop runs, it will increase by 1.
This will output the values from 0 to 10.

```javascript
* another example *

var x=1;
  while (x<=10) {
    document.write(x + "<br />");
    x = x + 1;
}
```
Be sure to be careful when writing conditions. If a condition is always true, the loop will run forever.

---
### The Do...While Loop

The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true. 
The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested.

```javascript
* syntax *

do {
   code block
}
while (condition);
```

```javascript
* example *

var i=20;
do { document.write(i + "<br />");
  i++;  
}
while (i<=25);
//this will print out numbers from 20 to 25.
```

```javascript
* example *

var count=1;
do {
  document.write("hello <br />");
  count++;
} 
while (count<=10);
```
---
### **Break**

The break statement "jumps out" of a loop and continues executing the code after the loop. You can use the return keyword to return some value immediately from the loop inside of a function. This will also break the loop.

```javascript
for (i = 0; i <= 10; i++) {
   if (i == 5) {
     break;
   }
   document.write(i + "<br />");
}
```
---
### **Continue**

The continue statement breaks only one iteration in the loop, and continues with the next iteration.

```javascript
for (i = 0; i <= 10; i++) {
   if (i == 5) {
      continue; 
   }
  document.write(i + "<br />");
}
```

The value 5 is not printed, because continue skips that iteration of the loop.

---
Q.) What is the output of this code?

```javascript
var sum=0; 
for(i=4; i<8; i++) {
  if (i == 6) {
    continue; 
  }
  sum += i;
}
document.write(sum);
```

Explanation: the "loop" will loop three times according to loop condition. 
at the first loop "i" will equal "4".
at the second loop i = 5 
the third i = 7 (since the 6 is skipped with the "continue statement")
so "sum" will be iterated this way: 
1- sum = 0 + 4 = 4.
2- sum = 4 + 5 = 9.
3- sum = 9 + 7 = 16.
so sum equals 16

---
#### Quiz

Q.) What is the output of this code?

```javascript
var x = 0;
  while(x<6) {
  x++;
}
document.write(x);
```

Answer 6. The value is incremented AFTER the condition is checked, so in this case when x reaches 5 is true according to the condition, so it is allowed to be incremented. The loop now will stop because the condition is not true

Q.) Fill in the right keywords to test the conditions:

```javascript
_______(day_of_week) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    document.write("Working Days");
_______;
;
  case 6:
    document.write("Saturday");
_____;
;
  default:
    document.write("Today is Sunday");
    break;
}
```

Q.) Fill in the right keywords to compose a loop:

```javascript
var i=0;
__do____{
   document.write(i);
    i++;
}
 __while____(i < 10);
```


###

***

# Conditionals and Loops

***

## Conditionals

### The if statement
Use if to specify a block of code that will be executed if a specified condition is true.
*Syntax*
`if (condition) {`<br/>
   `statements`<br/>
`}`

*example*
`var myNum1 = 7;`<br/>
`var myNum2 = 10;`<br/>
`if (myNum1 < myNum2) {`<br/>
   `alert("JavaScript is easy to learn.");`<br/>
`}`

### The else statement
*Syntax*
`if (expression) {`<br/>
   `// executed if condition is true`<br/>
`}`<br/>
`else {`<br/>
   `// executed if condition is false`<br/>
`}`

*example*

`var myNum1 = 7;`<br/>
`var myNum2 = 10;`<br/>
`if (myNum1 > myNum2) {`<br/>
`   alert("This is my first condition");`<br/>
`}`<br/>
`else {`<br/>
`   alert("This is my second condition");`<br/>
`}`


*example*
`var age = 25;`<br/>
`if (age >= 18) {`<br/>
`   alert("Allowed.");`<br/>
`} `<br/>
`else {`<br/>
`   alert("Not allowed.");`<br/>
`}`

### The else if statement
You can use the else if statement to specify a new condition if the first condition is false.
You can write as many else if statements as you need.

`var course = 1;`<br/>
`if (course == 1) {`<br/>
`   document.write("<h1>HTML Tutorial</h1>");`<br/>
`} else if (course == 2) {`<br/>
`   document.write("<h1>CSS Tutorial</h1>");`<br/>
`} else {`<br/>
`   document.write("<h1>JavaScript Tutorial</h1>");`<br/>
`}`

*example*

`var status = 1;`<br/>
`var msg;`<br/>
`if (status == 1) {`<br/>
`   msg = "Online";`<br/>
`} else if (status == 2) {`<br/>
`   msg = "Away";`<br/>
`} `<br/>
`else {`<br/>
`   msg = "Offline";`<br/>
`}`


### Switch statement

In cases when you need to test for multiple conditions, writing if else statements for each condition might not be the best solution. 

The switch statement is used to perform different actions based on different conditions. The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed. You can have as many case statements as needed.

*Syntax:*

`switch (expression) {`<br/>
`  case n1: `<br/>
`     statements`<br/>
`     break;`<br/>
`  case n2: `<br/>
`     statements`<br/>
`     break;`<br/>
`  default: `<br/>
`     statements`<br/>
`}`

*example*

`var day = 2;`<br/>
`switch (day) {`<br/>
`  case 1:`<br/>
`    document.write("Monday");`<br/>
`    break;`<br/>
`  case 2:`<br/>
`    document.write("Tuesday");`<br/>
`    break;`<br/>
`  case 3:`<br/>
`    document.write("Wednesday");`<br/>
`    break;`<br/>
`  default:`<br/>
`    document.write("Another day");`<br/>
`}`<br/>
`/* Outputs "Tuesday" */`



##### The break Keyword

When JavaScript code reaches a break keyword, it breaks out of the switch block. This will stop the execution of more code and case testing inside the block. Usually, a break should be put in each case statement.

*example*

What is the output of this code?
`var x = 3;`<br/>
`switch (x) {`<br/>
`  case 1:`<br/>
`    document.write(x);`<br/>
`    break;`<br/>
`  case 2:`<br/>
`    document.write(x+2);`<br/>
`    break;`<br/>
`  default:`<br/>
`    document.write(x+5);`<br/>
`}`

*Explanation*

- "Case 1" and "Case 2" looks like a numbering system for the cases, but it's not.
- Case 1 means "Does x match 1?" x is 3, so it doesn't match 1. So the document won't write x.
- Case 2 means "Does x match 2?" x is 3, so it doesn't match 2 So the document won't write x+2.
- So the default will execute: The document will write x + 5 (3 + 5), which is 8.


#### The default Keyword

The default keyword specifies the code to run if there is no case match.
*example*

`var color ="yellow";`<br/>
`switch(color) {`<br/>
`   case "blue": `<br/>
`     document.write("This is blue.");`<br/>
`     break;`<br/>
`   case "red": `<br/>
`     document.write("This is red.");`<br/>
`     break;`<br/>
`   case "green": `<br/>
`     document.write("This is green."); `<br/>
`     break;`<br/>
`   case "orange": `<br/>
`      document.write("This is orange."); `<br/>
`      break;`<br/>
`   default: `<br/>
`      document.write("Color not found.");`<br/>
`}`<br/>
`//Outputs "Color not found."`

***
## Loops
Loops can execute a block of code a number of times. They are handy in cases in which you want to run the same code repeatedly, adding a different value each time.

JavaScript has three types of loops: for, while, and do while. 
ES6 introduces other for loop types; you can learn about them in the ES6 course later.

### The for loop

*The syntax*

`for (statement 1; statement 2; statement 3) {`<br/>
`   code block to be executed`<br/>
`}`

*example*

`for (i=1; i<=5; i++) {`<br/>
`   document.write(i + "<br />");`<br/>
`}`

* Statement 1 sets a variable before the loop starts (var i = 1).
* Statement 2 defines the condition for the loop to run (i must be less than or equal to 5). If you omit statement 2, you must provide a break inside the loop. Otherwise, the loop will never end.
* Statement 3 increases a value (i++) each time the code block in the loop has been executed.

Statement 3 is also optional, and it can be omitted if you increment your values inside the loop.

`var i = 0;`<br/>
`for (; i < 10; ) {`<br/>
`   document.write(i);`<br/>
`   i++;`<br/>
`}`

*example*

`var i = 1;`<br/>
`for (k=1; k<10; k++){`<br/>
`   i += k;`<br/>
`   document.write(i++"<br />");`<br/>
`}`

### The while loop

*Syntax*

`while (condition) { `<br/>  
`   code block`<br/>
`}`<br/>

*example*

`var i=0;`<br/>
`  while (i<=10) {`<br/>
`    document.write(i + "<br />");`<br/>
`    i++;`<br/>
`}`

The loop will continue to run as long as i is less than, or equal to, 10. Each time the loop runs, it will increase by 1.
This will output the values from 0 to 10.

*another example*

`var x=1;`<br/>
`  while (x<=10) {`<br/>
`    document.write(x + "<br />");`<br/>
`    x = x + 1;`<br/>
`}`

Be sure to be careful when writing conditions. If a condition is always true, the loop will run forever.

### The Do...While Loop

The do...while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true. 
The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested.

*Syntax*

`do {`<br/>
`   code block`<br/>
`}`<br/>
`while (condition);`<br/>

*example*

`var i=20;`<br/>
`do { document.write(i + "<br />");`<br/>
`  i++;  `<br/>
`}`<br/>
`while (i<=25); `<br/>
`//This prints out numbers from 20 to 25.`<br/>

*example*

`var count=1;`<br/>
`do {`<br/>
`  document.write("hello <br />");`<br/>
`  count++;`<br/>
`} `<br/>
`while (count<=10);`<br/>

#### **Break**

The break statement "jumps out" of a loop and continues executing the code after the loop. You can use the return keyword to return some value immediately from the loop inside of a function. This will also break the loop.

`for (i = 0; i <= 10; i++) {`<br/>
`   if (i == 5) {`<br/>
`     break; `<br/>
`   }`<br/>
`   document.write(i + "<br />");`<br/>
`}`<br/>

#### **Continue**

The continue statement breaks only one iteration in the loop, and continues with the next iteration.

`for (i = 0; i <= 10; i++) {`<br/>
`   if (i == 5) {`<br/>
`      continue; `<br/>
`   }`<br/>
`   document.write(i + "<br />");`<br/>
`}`<br/>

The value 5 is not printed, because continue skips that iteration of the loop.


Q.) What is the output of this code?

`var sum=0; `<br/>
`for(i=4; i<8; i++) {`<br/>
`  if (i == 6) {`<br/>
`    continue; `<br/>
`  }`<br/>
`  sum += i;`<br/>
`}`<br/>
`document.write(sum);`

Explanation: the "loop" will loop three times according to loop condition. 
at the first loop "i" will equal "4".
at the second loop i = 5 
the third i = 7 (since the 6 is skipped with the "continue statement")
so "sum" will be iterated this way: 
1- sum = 0 + 4 = 4.
2- sum = 4 + 5 = 9.
3- sum = 9 + 7 = 16.
so sum equals 16


#### Quiz
Q.) What is the output of this code?

`var x = 0;`<br/>
`  while(x<6) {`<br/>
`  x++;`<br/>
`}`<br/>
`document.write(x);`<br/>


Answer 6. the value is incremented AFTER the condition is checked, so in this case when x reaches 5 is true according to the condition, so it is allowed to be incremented. The loop now will stop because the condition is not true

Q.) Please fill in the right keywords to test the conditions:

`_______(day_of_week) {`<br/>
`  case 1:`<br/>
`  case 2:`<br/>
`  case 3:`<br/>
`  case 4:`<br/>
`  case 5:`<br/>
`    document.write("Working Days");`<br/>
`_______;`<br/>
`;`<br/>
`  case 6:`<br/>
`    document.write("Saturday");`<br/>
`_____;`<br/>
`;`<br/>
`  default:`<br/>
`    document.write("Today is Sunday");`<br/>
`    break;`<br/>
`}`

Q.) Please fill in the right keywords to compose a loop:

`var i=0;`<br/>
`__do____{`<br/>
`   document.write(i);`<br/>
`    i++;`<br/>
`}`<br/>
` __while____(i < 10);`<br/>

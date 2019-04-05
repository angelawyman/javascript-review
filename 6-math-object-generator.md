~ Table of Contents ~

[The Math Object](#the-math-object)
- [Math Random Number](#math.random)
- [Math.floor](#math.floor)
- [Math.round](#math.round)
- [Math.ceil](#math-ceiling)
- [Add an Array](#now-let\'s-add-an-array-to-our-generator
)
- [The Date Object](#the-date-object)  
- [Challenge](#challenge)
----
Reference

- [W3 Schools The Math Object](https://www.w3schools.com/jsref/jsref_obj_math.asp)
- [Kanye West Self Confidence Generator](www.gannett-cdn.com/experiments/usatoday/2016/01/kanye-west-confidence/kanye.html)
- [Another Random Quote Generator(codepen.io/kkoutoup/pen/zxmGLE?editors=1010)

---
# The Math Object

```javascript
document.write(Math.PI);
// outputs 3.141592653589793
```

The Math object allows you to perform mathematical tasks, and includes over 30 properties. The Math object contains a number of methods that are used for calculations, for instance:

* E Euler's Constant
* PI value of pi
* SQRT Square root
* Max Returns the number with the highest value.
* Min Returns the number with the lowest value.

JavaScript includes a Math object that has a number of methods, remember a method is basically a function stored as a property.
You can access any of the Math object's methods following this syntax: ```Math.methodName();```

We will be covering these following methods while looking to build random generators.
* math.random
* math.floor
* math.round
* math ceiling

---
## Math.random

```html
<button onclick="randomNumberGenerator()">Display a random number</button>
<span id="demo1"></span>
```

When you click this button, JavaScript will generate a random number and display the number in the box. Each time you click the button, JavaScript will displays a different random number.

Here is the function that generates and displays the random number.

```javascript
function randomNumberMaker() {  
    var randomNumber = Math.random();
    document.getElementById("demo-1").innerHTML = randomNumber;
}
```

The Math.random() method will generate a random decimal number between 0 and 1 and assign it to the variable randomNumber. Such numbers generated might look like: 
- 0.46902962837914575, 
- 0.22414006927413577, 
- 0.5933164070908199 , etc.

But, what if instead you want to generate *whole* random numbers, say between 0 and 10? We can use another one of the Math object's methods to get rid of the numbers to the right of the decimal: Math.floor().

---
### Math.floor

 Math.floor() will round a number down to the nearest whole number.

```html
<button onclick="randomNumberGenerator2()">Display a random whole number between 0 and 10</button>
<span id="demo2"></span>
 ```

```javascript
function randomNumberGenerator2() {
    var randomNumber = Math.floor(Math.random() * 11);
    document.getElementById("demo2").innerHTML = randomNumber;
    }
```

This code also shows you can nest one Math method inside of another! In this case, JavaScript will first generate a random number between 0 and 1, then multiply it by 11, then submit that value to the Math.floor() function. 

Now you know how to generate random whole numbers within a specific range. How could this help you select a random word from a list of words? You could construct a list of words that are indexed by whole numbers – known as an array.

---
## Math.round

Math.floor() will always round down, it will return a LESSER integer. While Math.round() will return the NEAREST integer. Use which method will get you the result you expect.


```Math.round(2.8) = 3 ```

```Math.floor(2.8) = 2```


When it comes to generating random numbers though, Math.floor() has a more even distribution than Math.round() and is more popular in use.

[Stack overflow](https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range) recommends this code for generating random whole numbers in JavaScript in a specific range:

```javascript
var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
```
 
---
## Math Ceiling

```Math.ceil(2.34) = 3```

```Math.floor(2.34) = 2```


Of course, where there is a floor there is a ceiling. The ceil() method rounds a number UPWARDS to the nearest integer, and returns the result.

---
### Now Let's Add an Array to Our Generator

Want to play ROCK, PAPER, SCISSORS?


```html
<button onclick="randomList()">Rock, Paper, Scissors!!</button>
<span id="demo-3"></span>
```

```javascript
    function randomList() {
        var things = ['Rock', 'Paper', 'Scissor'];
        var thing = things[Math.floor(Math.random()*things.length)];
        document.getElementById("demo-3").innerHTML = things;
        }
```
Here you see Math.floor method, Math.random method and length used to randomly call one of the 'things'.

Below we create 3 variables that hold arrays, concatenate (or add) the strings together to form sentences, and use Math.random, Math.round and length methods. 

We also used the HTML DOM *innerHTML* Property. The *innerHTML* property sets or returns the HTML content of an element.

```javascript
function excuses() {
        var myDog = ['dog', 'hamster', 'chinchilla', 'iguana', 'turtle','sister', 'brother', 'gerbil', 'bunny', 'fish', ];
        var ate = ['ate', 'peer-reviewed', 'deleted', 'livetweeted', 'barfed on', 'spilled water on', 'stepped on', 'craigslisted', 'instagrammed', 'vlogged',];
        var myHomework = ['homework', 'project', 'flash cards',  'diorama', 'poster', 'laptop', 'tablet', 'slide deck',  'portfolio', 'blog post', ];
var who = myDog[Math.round(Math.random()*(myDog.length-1))];
var did = ate[Math.round(Math.random()*(ate.length-1))];
var what = myHomework[Math.round(Math.random()*(myHomework.length-1))];

document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + '<br> my ' + what + '.</div>'      
}
```

---
# The Date Object

When a Date object is created, a number of methods make it possible to perform operations on it.

```javascript
var d = new Date();
var hours = d.getHours();
//hours is equal to the current hour
```
```javascript
function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);
```

---

### *Challenge*

This is an onclick event running a function. Can you figure out how to randomize the color?  As it is, if the user clicks in the window,  the background color of the <body> will be set to hotpink.

```javascript
window.onclick = colorFun;

function colorFun() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "hotpink";
}
```
TOC  

ARRAYS

* Properties and Methods
* Associative Arrays  

The Math Object  
The Date Object

---
## Module: Arrays

Arrays store multiple values in a single variable. To store three names, you need three variables.

```javascript
var course1 = "Korean";
var course2 = "Japanese";
var course3 = "Chinese"; 
```

But what if you had 500 courses?   
The solution would be to use an array.

```javascript
var courses = new Array("Korean", "Japanese", "Chinese"); 
```

----
### Using Array Literal

For simplicity, readability and execution speed, you can use the array literal method.👇

Guess which approach is preferred?

```javascript
var courses = ["Korean", "Japanese", "Chinese"];
```

*Q.) What two keywords do you need to create an Array?*  
<br/>

### Indexing Arrays

* You refer to an array element by referring to the index number written in square brackets.
* Array indexes start with 0. Therefore [0] is the first element in an array. [1] is the second, [2] is the third, etc. 

```javascript
var courses = [ "Korean", "Japanese", "Chinese" ]; 
var course = courses[1];
//<== will output to what?
```

```javascript
course[2] = "Tagalog";
//<==now what happens?
```


*Q.) What is the output of this code?*

```javascript
var listNew = new Array(3, 6, 8);
document.write(listNew[1]);
```

*Q.) What happens if you ask for an array item that doesn't exist?*

```javascript
document.write(listNew[10]);
// will return undefined
```


**How else can you create an Array?**
solo learn example
```javascript
var courses = new Array(3);
  courses[0] = "Korean";
  courses[1] = "Japanese";
  courses[2] = "Chinese";
```
but, better syntax to do this:

```javascript
var courses = [ ];
  courses[0] = "Korean";
  courses[1] = "Japanese";
  courses[2] = "Chinese";
document.write(courses);
```
or use a literal
`var courses = [ "Korean", "Japanese", "Chinese" ]; `

how to run through the array

```javascript
var courses = ["Korean", "Japanese", "Chinese"];
var x = courses.length;
for (var i=0; i<x; i++){
	document.write(i +1 + ". " + courses[i] + " ");
	document.write("<br>");
};
```

* You can declare an array, tell it the number of elements it will store, and add the elements later. 
* An array is a special type of object.
* An array uses numbers to access its elements, and an object uses names to access its members.
* You can add dynamically as many elements as you need to.



*Q.) Please insert the missing characters to output the third member of the array:*

'document.write(example____);`



---
### The Length Property

JavaScript arrays have useful built-in properties and methods.
An array's length property returns the number of it's elements.

```javascript
var courses = ["Korean", "Japanese", "Chinese"]; 
document.write(courses.length);
// will output 3
```
---
### Combining Arrays- Concatenation

JavaScript's concat() method allows you to join arrays and create an entirely new array.

```javascript
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);
```

*Exercise*

Create a variable, assign it an array of your favorite deserts.
Now write an alert that will show each item.

Answer:
```javascript
var fav_desserts = ['cheesecake', 'chocolate', 'apple pie'];
for (var i = 0; i < fav_desserts.length; i++) {
  alert(fav_desserts[i]);
}
```

Alternative answer: this uses the forEach method
```javascript
var my_things = [2 + 5, 'samurai', true];
my_things.forEach(function(item) {
  alert(item);
});
```
So far, we've used a functions and a method:

- the alert() function (or window method)
- the forEach() array method

---
### Associative Array

You can use the named array syntax, to produce an object.
Now, person is treated as an object, instead of being an array.
The named indexes "name" and "age" become properties of the person object. Why would you want to do this, really?
```javascript
var person = []; 
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);
// will output "46"`
```
### Summary

The only difference between an Object and an Array in JS is that Arrays use numerical keys and objects use names. So an Array is really just an object using numerical keys.
---
### The Math Object

The Math object allows you to perform mathematical tasks, and includes several properties.

* E Euler's Constant
* PI value of pi
* LN2 Natural log of the value 2
* LN10 Natural log of the value 10
* LOG2E The base 2 log of Euler's constant
* LOG10E The base 10 log of Euler's constant

```javascript
document.write(Math.PI);
// outputs 3.141592653589793
```

The Math object contains a number of methods that are used for calculations:

---
### Date Object

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
## Extra Credit Working with Arrays

### toString() method
The Javasript method toString() converts an array to String of(comma separated) array values.

```javascript
var x =["Hello" ,"good ", "people ","of ","Earth! ","Welcome!!"];
var y =x.toString();
var z = typeof y;
```
---
### the join() method
Will join all array elements into string, and returns the string.
The Element will be separated by a specified separator.
The default separator is comma(,) .

```javascript
var x = ["Welcome "," to ", " Mars."];
var y = x.join(" ");
var z = x.join(" * ");
```
---
### the pop() method
```javascript
Will remove the last element from an array.
var x = ["javascript "," is easy"," to Learn."];
var y = x.pop(); //The value of y is "to learn."
var z = x ;
```
---
### the push() method 
Will add a new element to an array(at the end):

```javascript
var x = [" Javascript " , " is "];
var y = x.push(" easy "); //The value of y is 3 .
var z = x;
```
---
### the shift() method
Shifting is equivalent to popping, it works on the first element instead of the last. The shift() method removes the first array element and "shifts" all other elements to a lower index.

```javascript
var x = ["one","two","three","four"];
var y = x.shift();//Removes first element(one) from x
var z = x;
```
### the unshift() method 
Will add a new element to an array(at the beginning), and "unshifts" older elements.

```javascript
var x = ["one","two","three","four"];
var y = x.unshift("zero");
var z = x;
// this example Y adds a new element(zero) to x .
// Y will return the new Array Length
```

Since Javascript arrays are objects,
elements can be deleted by using the Javascript operator delete.

```javascript
var x = ["games", "girls", "coding", "sololearn"];
delete x[1];
var y = x;
```

>NOTICE: using delete() on array elements leaves undefined whole in the array. choose to use pop() or shift() instead.
---
### the splice() method
Can be used to add new items to an array.
This method changes the original array.

```javascript
array.splice(2 , 0 , "krumping" , "clowning");
```

1) The first parameter(2) defines the position Where new elements should be added(spliced in).
2) The second parameter(0) defines How many elements should be removed.
3) The rest of the parameters("buck talk", "kill-off" , "spazz meter") define the new elements to be added.

```javascript
var battle = ["concepts","materials"];
battle.splice(0 , 0 , "buck talk" );
var y = battle;
battle.splice(2 , 0 , "kill-off","spazz meter");
var z = battle;
```
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array.

```javascript
array.splice( 1 , 2 );
```

The first parameter listed defines the position where elements should be added(splice in).
The second parameter defines how many elements should be removed.


```javascript
var lilHomie = ["Tight Eyez", "Baby Tight Eyez", "Lil Tight Eyez", "Jr Tight Eyez", "Kid Tight Eyez" ];
var y = lilHomie.splice(1,2);
lilHomie;
//<== outputs (3) ["Tight Eyez", "Jr Tight Eyez", "Kid Tight Eyez"]
```

---
### the sort method
The sort() method sorts an array alphabetically.

```javascript
var streetDance = ["vogue", "popping","c-walk","krump","turfing","freestyle","robot",];
var y = streetDance.sort();
```

By default, the sort() method sorts values as strings, for instance, "apples" will come before "bananas".
However, if numbers are sorted as strings, "25" will be bigger than "100" , because the number "2" is bigger than number "1".

For this reason, the sort() method will produce incorrect result when working with numbers. The best way to fix this is by providing a compare function.

```javascript
var arr = [20 , 50 , 120 , 160 , 80 , 100];
w = arr.sort();
x1 = arr.sort(function(a,b) {return a < b});
x2 = arr.sort(function(a,b) {return b - a});
z1 = arr.sort(function(a,b) {return a > b});
z2 = arr.sort(function(a,b) {return b < a});
Show Output
Default sort :(w):
Descending sort (x1):
```
---
### the reverse() method 
Will reverse the elements in array.
You can use this to sort() an array in descending order:

```javascript
var x = ["E","B","C","D","A"];
var y = x.sort();
var z = x.reverse();
```

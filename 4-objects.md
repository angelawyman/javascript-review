

## Module: Objects

***

#### References 

- [W3Schools] (https://www.w3schools.com/js/js_functions.asp) 
- [Javascript Info] (https://javascript.info/object)


## How to create an object:

*syntax - you can use either*

```bash
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax- this is more commonly used
 ```

An object can be created with an optional list of properties. A property is a “key: value” pair, where the key or property name is a string and the value can be anything.

Let us take a real life example of an object, say, a siamese. The properties of the object cat can include that he has legs = 4, color = "lilac-point", eyes = "blue", ears = 2, tail: true, etc. 

The methods of our object can include things the cat can do, actions such as meow(), drink(), eat(), sleep(), etc. When an object's property is a function, it's called a method instead. 

By now you are familiar with alerts. An alert is a method of a window object.

```bash
window.alert('For realz');
```

Because window is the top-level object in the browser you can access the properties and methods directly.  
So `alert();` is the same as `window.alert();`

*example - create an object*
```bash
let user = {
    name: "Rafael",   
    age: 30, 
    turtle: true,
    "likes Leonardo": false  // note: a multi-word property name must be quoted
};
```

#### Dot Notation

Property values are accessible using the dot notation:
```bash
alert( user.name ); // Rafael
alert( user.age ); // 30
```

The exception is this won't work with multi-word property names.

*here is a multi-word property name that gives a syntax error*

`user.likes Leonardo = true`

For these cases, use square bracket notation:

```bash
let user = {};
user["likes Leonardo"] = true;
alert(user["likes Leonardo"]);
//outputs true
```

To delete properties, write like so:
```bash
delete user.age;
delete user["likes Leonardo"];
```

Variables are objects, too. That means they will also have properties and methods.

Our earlier variable favoriteFoods has a property called length.
```bash
alert(favoriteFoods.length);
```
It also has methods. Push here adds an item to your array.

```bash
var favoriteFoods = ['artichokes', 'bananas', true];
alert(favoriteFoods);
favoriteFoods.push('pizza');
alert(favoriteFoods);
```

```bash
var favoriteFoods = ['artichokes', 'bananas', true, 'pizza'];
alert(favoriteFoods.includes('marshamallows'));
// will return false
```
**Review**

* We have an “OBJECT”.
* Objects contain “PROPERTIES”.  
* Properties have “NAME and VALUES” key pairs. 
* A value could be a method/function or other data type.
* Object methods are associated to the function in order to make it accomplish a specific task. For example console.log() or document.write() in this case .log () and .write () are built-in methods, the console and the document are objects.

#### Using Square Brackets for Computed Properties

*example -the property name is taken from the variable*
```bash
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, 
};
alert( bag.apple ); 
// outputs 5 if fruit = "apple"`
```

This is the same as:
```bash
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};
bag[fruit] = 5;
```

**Exercise 4 - The window object**

Try out

`alert(window.innerWidth);`

Now try out 

`alert(window.innerHeight);`


What is window? You can find out by using the typeof method

'console.log(typeof window);'


Answer: window is a JavaScript object.


innerWidth is a property of the window object. 
To access this property, you used a dot . to specify you wanted the innerWidth that exists within the window object.

The JavaScript object is basically a type that contains other things.

For example, window also has:

- window.origin which is a string
- window.scrollY which is a number \\will give you the current scroll position.
- window.location which is an object

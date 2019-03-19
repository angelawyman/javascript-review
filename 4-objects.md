
###

***

## MODULE 4: Objects

***

<https://javascript.info/object>

How to create an object:

*"object constructor" syntax*

`let user = new Object();`<br/>

*but, cool kids use "object literal" syntax*

`let user = {}; `<br/>

An object can be created with an optional list of properties. A property is a “key: value” pair, where the key or property name is a string and the value can be anything.

Let us take a real life example of an object, say, a siamese cat. The properties of the object "siamese" can include: legs = 4, color = "lilac-point", eyes = "blue", ears = 2, etc. The methods of our object can include things the cat can do, such as meow(), drink(), eat(), sleep(), etc. 

So for practical purposes, methods are actions of an object, while properties are innate features of it. Methods are basically a function of an object, it can only be called on an object.

*example - create an object*

`let user = {`<br/>
`    name: "John",   `<br/>
`    age: 30, `<br/>
`    adult: true;`<br/>
`    "likes birds": false;  // note: a multi-word property name must be quoted`<br/>
`};`

#### Dot Notation

Property values are accessible using the dot notation:

`alert( user.name ); // John`<br/>
`alert( user.age ); // 30`


The exception is this won't work with multi-word property names.

*here is a multi-word property name that gives a syntax error*

`user.likes birds = true`

For these cases, use square bracket notation:

`let user = {};`<br/>
`user["likes birds"] = true;`<br/>
`alert(user["likes birds"]);`
`//outputs true`


To delete properties, write like so:

`delete user.age;`<br/>
`delete user["likes birds"];`


**Review**

* We have an “OBJECT”.
* Objects contain “PROPERTIES”.  
* Properties have “NAME and VALUES” key pairs. 
* A value could be a method/function or other data type.
* Object methods are associated to the function in order to make it accomplish a specific task. For example console.log() or document.write() in this case .log () and .write () are built-in methods, the console and the document are objects.

#### Using Square Brackets for Computed Properties

*example -the property name is taken from the variable*

`let fruit = prompt("Which fruit to buy?", "apple");`
`let bag = {`<br/>
`  [fruit]: 5, `<br/>
`};`<br/>
`alert( bag.apple ); `<br/>
`// outputs 5 if fruit = "apple"`

This is the same as:

`let fruit = prompt("Which fruit to buy?", "apple");`<br/>
`let bag = {};`<br/>
`bag[fruit] = 5;`<br/>


###

***

## MODULE 5: Objects

***

<https://javascript.info/object>

*syntax - use either*

`let user = new Object(); // "object constructor" syntax`<br/>
`let user = {};  // "object literal" syntax- more commonly used`<br/>

An object can be created with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

Let us take a real life example of an object, say, a siamese. 
The properties of the object cat can include that he has legs = 4, color = "lilac-point", eyes = "blue", ears = 2, etc. 

The methods of our object can include things the cat can do, such as meow(), drink(), eat(), sleep(), etc. 
So for practical purposes, methods are actions of an object, while properties are innate features of it. Methods are basically a function of an object, it can only be called on an object.

*example*

`let user = {       // an object`<br/>
`    name: "John",   // by key "name" store value "John"`<br/>
`    age: 30,        // by key "age" store value 30`<br/>
`    adult: true     // boolean value`<br/>
`    "likes birds": false  // multi-word property name must be quoted`<br/>
`};`

#### Dot Notation
Property values are accessible using the dot notation:

`// get fields of the object:`<br/>
`alert( user.name ); // John`<br/>
`alert( user.age ); // 30`


But this won't work with multi-word property names.

`// this would give a syntax error`<br/>
`user.likes birds = true`

#### Square Brackets advantage
However, square notation will work:

`let user = {};`<br/>
`user["likes birds"] = true;`<br/>
`alert(user["likes birds"]); // true`

You can delete properties:

`// delete`<br/>
`delete user.age;`<br/>
`delete user["likes birds"];`


**Review

* We have an “OBJECT”.
* Objects contain “PROPERTIES”.  
* Properties have “NAME and VALUES” key pairs. 
* A value could be a method/function or other data type.
* Object methods are associated to the function in order to make it accomplish a specific task. For example console.log() or document.write() in this case .log () and .write () are methods, the console and the document are objects.

#### Using Square Brackets for Computed Properties

*example*

`let fruit = prompt("Which fruit to buy?", "apple");`
`let bag = {`<br/>
`  [fruit]: 5, // the name of the property is taken from the variable fruit`<br/>
`};`<br/>
`alert( bag.apple ); // 5 if fruit="apple"`

This is the same as:

`let fruit = prompt("Which fruit to buy?", "apple");`<br/>
`let bag = {};`

`// take property name from the fruit variable`<br/>
`bag[fruit] = 5;``<br/>

- Table of Contents - 

[Intro to jQuery](#)
[Events](#)
[Events with Forms](#)

# Intro to jQuery
We use jQuery to make it easier to code in Javascript. jQuery is a lightweight JavaScript library that helps make code simple, concise and reusable. It
takes a lot multi-line JavaScript code and wraps them into functions to call with a single line of code. It can be easier for a designer to learn jQuery as it employs a more familiar CSS syntax.

JQuery is particulary useful for 
- easy DOM access and traversal and manipulation
- CSS manipulation
- event handling
- effects and complex animations
- working with Ajax. With Ajax you can load files in the background and display data on the webpage, without reloading the page. AJAX based applications include, Google Maps, Youtube, and Facebook.
- ​helps with cross browser issues as JavaScript works slightly differently in each browser, jQuery helps address this issue.
- jQuery is probably not the right choice for a more web heavy apps that is state-heavy with a complex UI, in that case use a framework, most likely React, which comes with a bunch more files, packages, etc.

Instead of hosting the jQuery source code, you can link to it remotely. This ensures the fastest possible download time of the source code, since users visiting your site might have the file already cached in their browser. Use the script element to link to the jQuery at Google's 'hosted library.'  

<script src= "//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script src="script.js"></script>
​
Note in the example above, you place the JavaScript file AFTER the jQuery file. Keeping to this order lets the JS file reference the jQuery functions already defined. You’ll want to create a custom file, script.js as this is where we’ll put our jQuery code.

Looking above, notice where is the leading http?! The http has been omitted intentionally to allow both http and https connections. (If you are working locally, without the benefit of a web server, add the leading http to prevent attempting the system from trying to locate the file on the disk drive.)

You can download jQuery from their site or you can link to a hosted library at Google.
Check to see if you have the latest version. At the time of this writing it the following.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
```
Place that code in the head. 

You call jQuery with either keyword JQuery or the dollar bill sign. Most everyone uses the $ sign.

```javascript
$('p');
//this will select all the p tags
```
Let's set some HTML content

```javascript
$('.bio').HTML('Early Days');
```
Does that look familiar? You might remember that in JavaScript we would write something similar.

```javascript
//jQuery
var myElement.html("<p>Hello World</p>");

//JavaScript
var myElement.innerHTML = "<p>Hello World</p>";
```

Here are some other comparisions:

#### For ​Styling HTML Elements
Here we change the font size of an HTML element:
```javascript
//JQuery
myElement.css("font-size","35px");

//JavaScript
myElement.style.fontSize = "35px";
header.CSS
```

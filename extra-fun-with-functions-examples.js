    // examples 👍🏻

    length_prop, 
    to String, 
    join, 
    pop, 
    pushing, 
    shift, 
    unshift, 
    delete element, 
    splice, 
    splice remove , 
    sort reverse, 
    min max, 
    number reverse, 
    concat, 
    slice, 
    value, 
    last index of, 
    calculate squareList, 
    need to ReorderInv1, 
    for forEach, 

    
function change_elem(){
        var x = ["java","css","c++","php"];
     x[0] = "html";
     x[2] = "javascript";
    var y = x;
       var x = ["java","css","c++","php"];
     var  fir = document.getElementById("arr_change");
     var sec = document.getElementById("fir_change");
     if(fir.innerHTML == x){
     sec.innerHTML = y;
     }
    else if(sec.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
    
    
function length_prop(){
        var x = ["one","two","three","four"];
     x[x.length] = "five";
     var y = x;
        var x = ["one","two","three","four"];
     var  fir = document.getElementById("arr_length_prop");
     var sec = document.getElementById("fir_length_prop");
     if(fir.innerHTML == x){
     sec.innerHTML = y;
     }
        else if(sec.innerHTML == 0){
    fir.innerHTML = x;
    }
    }


function toStr(){
        var x = ["hello" , "friends","welcome","to","Sololearn"];
    var y =x.toString();
    var z = typeof y;
     var  fir = document.getElementById("arr_toString");
     var sec = document.getElementById("fir_toString");
     var thir = document.getElementById("sec_toString");
     if(sec.innerHTML == y){
     thir.innerHTML  = z ;
     }
     else if(fir.innerHTML == x){
     sec.innerHTML = y;
     }
        else if(thir.innerHTML == 0){
    fir.innerHTML = x;
    }
    }
    
    
function join(){
        var x = ["welcome "," to ", " Sololearn."];
    var y = x.join("  ");
    var z = x.join(" * ");
     var  fir = document.getElementById("arr_join");
     var sec = document.getElementById("fir_join");
     var thir = document.getElementById("sec_join");
     if(sec.innerHTML == y){
     thir.innerHTML = z;
     }
        else if(fir.innerHTML == x){
    sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
 
 
function pop(){
       var x = ["javascript "," is easy"," to Learn."];
    var y = x.pop();
    var z = x ;
     var x = ["javascript "," is easy"," to Learn."];
     var  fir = document.getElementById("arr_pop");
     var sec = document.getElementById("fir_pop");
     var thir = document.getElementById("sec_pop");
     if(sec.innerHTML == y){
     thir.innerHTML = z;
     }
        else if(fir.innerHTML == x){
    sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
  
  
function pushing(){
        var x = [" Javascript " , " is "];
    var y = x.push(" easy ");
    var z = x;
     var x = [" Javascript " , " is "];

     var  fir = document.getElementById("arr_push");
     var sec = document.getElementById("fir_push");
     var thir = document.getElementById("sec_push");
     if(sec.innerHTML == y){
     thir.innerHTML = z;
     }
        else if(fir.innerHTML == x){
    sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
  
  
function shift(){
        var x = ["one","two","three","four"];
    var y = x.shift();
    var z = x;
       var x = ["one","two","three","four"];
     var  fir = document.getElementById("arr_shift");
     var sec = document.getElementById("fir_shift");
     var thir = document.getElementById("sec_shift");
     if(sec.innerHTML == y){
     thir.innerHTML = z;
     }
        else if(fir.innerHTML == x){
    sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
  
  
function unshift(){
        var x = ["one","two","three","four"];
    var y = x.unshift("zero");
    var z = x;
    var x = ["one","two","three","four"];
     var  fir = document.getElementById("arr_unshift");
     var sec = document.getElementById("fir_unshift");
     var thir = document.getElementById("sec_unshift");
     if(sec.innerHTML == y){
     thir.innerHTML = z;
     }
        else if(fir.innerHTML == x){
    sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
  
  
function del_elem(){
          var x = ["games","girls","coding","sololearn"];
       delete x[1];
       var y = x;
       var x = ["games","girls","coding","sololearn"];
     var  fir = document.getElementById("arr_del_elem");
     var sec = document.getElementById("fir_del_elem");
        if(fir.innerHTML == x){
    sec.innerHTML = y;
    }
    else if(sec.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
  
  
function splice(){
        var x = ["css","sql"];
    x.splice(0 , 0 , "<strong>html</strong>" );
    var y = x;
        var x = ["<strong>html</strong>","css","sql"];
    x.splice(2 , 0 , "<strong>js</strong>","<strong>php</strong>");
    var z = x;
    var x = ["css","sql"];
     var  fir = document.getElementById("arr_splice");
     var sec = document.getElementById("fir_splice");
     var thir = document.getElementById("sec_splice");
     if(sec.innerHTML == y){
     thir.innerHTML = z;
     }
        else if(fir.innerHTML == x){
    sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
function splice_rm(){
         var x = ["html","css","js","php","sql"];
      var y = x.splice(1,2);
      var z = x;
      var x = ["html","css","js","php","sql"];
     var  fir = document.getElementById("arr_splice_rm");
     var sec = document.getElementById("fir_splice_rm");
     var thir = document.getElementById("sec_splice_rm");
     if(sec.innerHTML == y){
     thir.innerHTML = z;
     }
        else if(fir.innerHTML == x){
    sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
 
 
 
function sort(){
        var x = ["samsung","sony","htc","huawei","oppo","lg","apple"];
     var  fir = document.getElementById("arr_sort");
     var sec = document.getElementById("fir_sort");
     if(fir.innerHTML == x){
      var y = x.sort();
     sec.innerHTML = y;
     }
        else if(sec.innerHTML == 0){
    fir.innerHTML = x;
    }
    }



function reverse(){
         var x = ["E","B","C","D","A"];
     var  fir = document.getElementById("arr_reverse");
     var sec = document.getElementById("fir_reverse");
     var thir = document.getElementById("sec_reverse");

     if(sec.innerHTML != 0){
     var a = sec.innerHTML;
     var b = a.split(",");
     var c = b.reverse();
        thir.innerHTML = c;
     }
        else if(fir.innerHTML == x){
        var  y = x.sort();
         sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
 
 
 
function num_sort(){
        var arr = [20 , 50 , 120 , 160 , 80 , 100];
     var  fir = document.getElementById("fir_num_sort");
     var sec = document.getElementById("sec_num_sort");
     var thir = document.getElementById("thir_num_sort");
     var four = document.getElementById("four_num_sort");
     var fif = document.getElementById("fif_num_sort");
           if(four.innerHTML != 0){
          var z2 = arr.sort(function(a,b){return b < a});
          fif.innerHTML = z2;
           }
      else if(thir.innerHTML != 0){
           var z1 = arr.sort(function(a,b){return a>b});
           four.innerHTML = z1;
           }
     else if(sec.innerHTML != 0){
           var x2 = arr.sort(function(a,b){return b-a});
               thir.innerHTML = x2;
     }
        else if(fir.innerHTML != 0){
        var x1 = arr.sort(function (a,b){return a<b});
         sec.innerHTML = x1;
    }
    else if(fif.innerHTML == 0){
        var w =  arr.sort();
     fir.innerHTML = w;
    }
    }
  
  
function min_max(){
        var arr = [20 , 100 , 230 , 80 , 50 , 160];
     var  fir = document.getElementById("arr_min_max");
     var sec = document.getElementById("fir_min_max");
     var thir = document.getElementById("sec_min_max");

     if(sec.innerHTML != 0){
     var a = sec.innerHTML;
     var b = a.split(",");
    var  x =  arr.sort(function(a,b){return b-a});
    var max = x[0];
        thir.innerHTML = max;
     }
        else if(fir.innerHTML == "[" + arr + "]"){
    var y = arr.sort(function(a,b){return a-b});
    var min = y[0];
         sec.innerHTML = min;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = "[" + arr + "]";
    }
    }
 
 
 
function concat(){
         var x = ["Android" , "Windows" , "Ios"];
      var y = [1,2,3];
      var z = ["Html","Css","Js"];
     var fir = document.getElementById("fir_concat");
     var sec = document.getElementById("sec_concat");
        if(fir.innerHTML != 0){
            var x_y_z = x.concat(y , z);
         sec.innerHTML = x_y_z;
    }
    else if(sec.innerHTML == 0){
    var x_y = x.concat(y);
     fir.innerHTML = x_y;
    }
    }
  
  
  
function slice(){
         var arr = ["Html","Css","Keep","Learning","Javascript"];   //array
     var  fir = document.getElementById("arr_slice");
     var sec = document.getElementById("fir_slice");
     var thir = document.getElementById("sec_slice");
     var fou = document.getElementById("thir_slice");

     if(thir.innerHTML != 0){
     var c = thir.innerHTML;
     var d = c.split(",");
     var  z = arr.slice(2,5);      //slice 2 to 5
        fou.innerHTML = z;
     }
     else if(sec.innerHTML != 0){
     var a = sec.innerHTML;
     var b = a.split(",");
     var y = arr.slice(3);       //slice 3
        thir.innerHTML = y;
     }
        else if(fir.innerHTML == arr){
         var x = arr.slice(1);     //slice 1
         sec.innerHTML = x;
    }
    else if(fou.innerHTML == 0){
     fir.innerHTML = arr;        //arr
    }
    }
  
  
  
function value_Of(){
          var arr = ["Html","Css","Js"];
     var  fir = document.getElementById("arr_valueOf");
     var sec = document.getElementById("fir_valueOf");
     var thir = document.getElementById("sec_valueOf");
     
         if(sec.innerHTML != 0){
     var a = sec.innerHTML;
     var b = a.split(",");
         var y = arr.toString();    //toString
        thir.innerHTML = y ;
     }
        else if(fir.innerHTML != 0 ){
            var x = arr.valueOf();     //valueOf
         sec.innerHTML = x;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = arr;      //array
    }
    }
  
  
  
function lastIndexOf(){
           var x = ["Python","C++","C","Java"];
        var y = x.lastIndexOf("Java");
        var z = x.lastIndexOf("C" , 4);
     var  fir = document.getElementById("arr_lastIndexOf");
     var sec = document.getElementById("fir_lastIndexOf");
     var thir = document.getElementById("sec_lastIndexOf");

     if(sec.innerHTML != 0){
     var a = sec.innerHTML;
     var b = a.split(",");

        thir.innerHTML = z;
     }
        else if(fir.innerHTML == x){

         sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
  
  
  
  function calculateSquare(element , index , array){
  return ( element * element );
  }
  var squareList =  [1,2,3,4,5];
  var x = squareList.map(calculateSquare);
            function map(){
    var fir = document.getElementById("arr_map");
    var sec = document.getElementById("fir_map");
    if(fir.innerHTML != 0){
                sec.innerHTML = x;
    }
    else if(sec.innerHTML == 0){
          fir.innerHTML = squareList;
    }
    }
        
    function needToReorder(element , index , array){
    return (element < 4);
    }
    var a = [5 , 6 , 8 , 5 , 14];
    var b = [11 , 2 , 7 , 14 , 5];
    var ReorderInv1 = a.some(needToReorder);
    var ReorderInv2 = b.some(needToReorder);

    function some(){ 
                  var fir = document.getElementById("arr_some");
               var sec = document.getElementById("fir_some");
           if(fir.innerHTML != 0){
         sec.innerHTML = ReorderInv1;
           }
         else if(sec.innerHTML == 0){
        fir.innerHTML = ReorderInv2;
         }
        }
        
        
     function every_test( element , index , array){
     return ( element > 4)
     }
    var x = [5 , 6 , 8 , 5 , 14];
    var y = [11 , 2 , 7 , 14 , 5];
    var fir_every = x.every(every_test);
    var sec_every = y.every(every_test);
    
    function every(){
        var fir = document.getElementById("fir_inner");
           var sec = document.getElementById("sec_inner");
    if(fir.innerHTML != 0){
    sec.innerHTML  = sec_every;
    }
    else if(sec.innerHTML == 0){
     fir.innerHTML = fir_every;
    }
    }
    
    
 function testing_filter1(element , index , array){
  return (element > 5);
 }
 function testing_filter2(element , index , array){
  return (element < 5);
 }
  var num = [1 ,7 , 4 , 2, 6, 5 , 9 , 3];
  var x = num.filter(testing_filter1);
  var y = num.filter(testing_filter2);
  
  function filter(){
  var arr = document.getElementById("arr_filter");
  var fir = document.getElementById("fir_filter");
  var sec = document.getElementById("sec_filter");
      if(fir.innerHTML == x){
      sec.innerHTML = y;
      }
       else if(arr.innerHTML == num){
       fir.innerHTML = x;
       }
    else if(sec.innerHTML == 0){
    arr.innerHTML = num;
    }
  }



     function forEach_test(element , index , array){
         alert("arr[" + index + "] = " + element + " ;");
     }
    function for_Each(){
     var x = [1,2,3];
            x.forEach(forEach_test);
         document.getElementById("fir_forEach").innerHTML = x;    
    }
    
    
    
          function reduce_test1(previousValue , currentValue , index , array){
          return  (previousValue + currentValue);
          }
    function reduce_test2(previousValue , currentValue , index, array){
            return (currentValue - previousValue);
    }
          function reduceTest(){
          var arr = [2,4,6,8,10];
           var x = arr.reduce(reduce_test1);
           var y = arr.reduce(reduce_test2);
    var fir = document.getElementById("arr_reduce");
    var sec = document.getElementById("fir_reduce");
    var thir = document.getElementById("sec_reduce");
             if(sec.innerHTML  != 0){
             thir.innerHTML = y;
             }
            else if(fir.innerHTML != 0){
            sec.innerHTML = x;
            }
           else if(thir.innerHTML == 0){
            fir.innerHTML = arr;
           }
          }
    
   
 function reduceRight_test1(previousValue , currentValue , index , array){
    return previousValue + currentValue;
 }
 function reduceRight_test2(previousValue , currentValue , index, array){
   return currentValue - previousValue;
 }
function reduce_right(){
                  var arr = [2,4,6,8,10];
                  var x = arr.reduceRight(reduceRight_test1);
                  var y = arr.reduceRight(reduceRight_test2);
         var  fir = document.getElementById("arr_reduceRight");
         var sec = document.getElementById("fir_reduceRight");
         var thir = document.getElementById("sec_reduceRight");
     if(sec.innerHTML != 0){
        thir.innerHTML = y;
     }
        else if(fir.innerHTML != 0 ){
         sec.innerHTML = x;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = arr;
    }
    }
 
 
 
function copyWithin(){
          var arr = ["Hello","Friend","How","are","You"];
     var  fir = document.getElementById("arr_copyWithin");
     var sec = document.getElementById("fir_copyWithin");
     var thir = document.getElementById("sec_copyWithin");

     if(sec.innerHTML != 0){
     var a = sec.innerHTML;
     var b = a.split(",");
       var y = arr.copyWithin(1,2,4);
        thir.innerHTML = y;
     }
        else if(fir.innerHTML == arr){
       var x = arr.copyWithin(2, 0);//mulinma index 2 wenakan typw wenawa.itapasse 0 idan issarahata type wenawa.
         sec.innerHTML = x;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = arr;
    }
    }
 
 
 
    var ages = [10,15,20,25,30,35];
   function testing_find(age){
   return age >= document.getElementById("age_value").value;
   }
function find(){
            var x = ages.find(testing_find);
     var  fir = document.getElementById("arr_find");
     var sec = document.getElementById("fir_find");
     var thir = document.getElementById("age_value");
        if(fir.innerHTML == 0){
         fir.innerHTML = "[" + ages + "]";
        }
        else if(sec.innerHTML == 0 && thir.value == 0){
                sec.innerHTML = "Undefined ,please enter your age";
    }
    else if(thir.value != 0 ){
    sec.innerHTML = x;
    }
    }



  var ages = [10,15,20,25,30,35,40,45];
 function fI_testing(age){
    return age >= document.getElementById("age_value2").value;
 }
function find_Index(){
           var x = ages.findIndex(fI_testing);
     var  fir = document.getElementById("arr_findIndex");
     var sec = document.getElementById("fir_findIndex");
     var thir = document.getElementById("age_value2");
     if(fir.innerHTML == 0){
     fir.innerHTML = ages;
     }
        else if(sec.innerHTML == 0 && thir.value == 0){
        sec.innerHTML = "Undefined, Please enter your age";
    }
    else if(thir.value != 0){
      var a = fir.innerHTML;
     var b = a.split(",");
       b[x] = "<strong>" + b[x] + "</strong>";
        fir.innerHTML = b;
    // b[x] = "<strong>" + ages[x] + "</strong>";
         sec.innerHTML = x;
    }
    }
  
  
  
 function is_Array(){
          var x = ['Hello','World!'];
       var y = Array.isArray(x);
     var  fir = document.getElementById("arr_isArray");
     var sec = document.getElementById("fir_isArray");
        if(fir.innerHTML != 0){
         sec.innerHTML = y;
    }
    else if(sec.innerHTML == 0){
     fir.innerHTML = "['" + x[0] + "','" + x[1] + "']";
    }
    }



function fill_test(){
     var arr = ["Mint","Arch","Kali","Suse"];
     var fir = document.getElementById("arr_fill");
     var sec = document.getElementById("fir_fill");
     var thir = document.getElementById("sec_fill");

     if(sec.innerHTML != 0){
     var a = sec.innerHTML;
     var b = a.split(",");
     var z = arr.fill("<strong>Debian</strong>");
         thir.innerHTML = z;
     }
        else if(fir.innerHTML != 0){
        var y = arr.fill("<strong>Fedora</strong>", 0 , 2);
         sec.innerHTML = y;
    }
    else if(thir.innerHTML == 0){
     var x = arr
         fir.innerHTML = x;
    }
    }



function keys_test(){
     var arr = ["xp","vista","win7","win10"];
     var fir = document.getElementById("arr_keys");
     var sec = document.getElementById("fir_keys");
     if(fir.innerHTML == arr){
         var x = arr.keys();
     sec.innerHTML = x;
     }
        else if(sec.innerHTML == 0){
    fir.innerHTML = arr;
    }
    }




function entries_test(){
     var arr = ["xp","vista","win7","win10"];
     var fir = document.getElementById("arr_entries");
     var sec = document.getElementById("fir_entries");
     if(fir.innerHTML == arr){
     var x = arr.entries();
     sec.innerHTML = x;
     }
        else if(sec.innerHTML == 0){
    fir.innerHTML = arr;
    }
    }



function from_test(){
     var x = Array.from("Keep Learning.Good Luck!");
     var arr_map = new Map([[2,4],[4,6],[6,8]]);
     var fir = document.getElementById("fir_from");
     var sec = document.getElementById("arr_from");
     var thir = document.getElementById("sec_from");

     if(sec.innerHTML != 0){
        var y = Array.from(arr_map);
        thir.innerHTML = y;
     }
        else if(fir.innerHTML == x){

         sec.innerHTML = arr_map;
    }
    else if(thir.innerHTML == 0){
     fir.innerHTML = x;
    }
    }
    ```
---
### More function examples
    let runTime = 35;
let runDistance = 3.5;

if (runTime <= 30 && runDistance > 3.5) {
  console.log("You're super fast!");
} else if (runTime >= 30 && runDistance <= 3) {
  console.log("You're not making your pace!");
} else if (runTime > 30 || runDistance > 3) {
  console.log("Nice workout!"); 
} else {
  console.log("Keep on running!");
}

### 2. examples

let weather = "spring";
let clothingChoice = "";

if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice);

### examples
let needTacos = true;

if (needTacos) {
    console.log("Finding tacos");
} else {
    console.log("Keep on keeping on!");
}

*Question: what will this evaluate to?*



let groceryItem = "apple";

switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item");
    break;
}


functions using return

FUNCTIONS
Helper Functions
We can also use the return value of a function inside another function. These functions being called within another function are often referred to as helper functions. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.

If we wanted to define a function that converts the temperature from Celsius to Fahrenheit, we could write two functions like:

function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59
In the example above:

getFahrenheit() is called and 15 is passed as an argument.
The code block inside of getFahrenheit() calls multiplyByNineFifths() and passes 15 as an argument.
multiplyByNineFifths() takes the argument of 15 for the number parameter.
The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
27 is returned back to the function call in getFahrenheit().
getFahrenheit() continues to execute. It adds 32 to 27, which evaluates to 59.
Finally, 59 is returned back to the function call getFahrenheit(15).
We can use functions to section off small bits of logic or tasks, then use them when we need to. Writing helper functions can help take large and difficult tasks and break them into smaller and more manageable tasks.
let pencilPrice = 10;
let penPrice = 5;
// let output = "the total price is =" + (penPrice + pencilPrice) + "Rupees" ;
console.log( `the total price is : ${penPrice + pencilPrice} Rupees`);
// console.log("total price is =", penPrice + pencilPrice , "rupees");
  
 
// Arithmetic Operations
let a = 10;
let b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b%a);
console.log(b**a);

//Unary Operation
console.log(a++); // 10
console.log(++a); // 12

//Assignment operation
b = a;
console.log(b);

// Comparison operatio
 let age_ = 16;
 console.log(age_ <= 18); //false
  
 // Condition Statement 

 // 1. If Statement 

 console.log("befor my if statement");
 let age = 22;
 if(age >= 18){
console.log("you can vote");
console.log("you can drive");
 }
 if(age <18){
    console.log("you cannot vote")
    console.log("you cannot drive")
 }
 console.log("after my if statement");
 if(age > 20){
    console.log("you are in your 20s");
 }

//  let name = "Radha";
//  if (name == "krishna"){
//  console.log(`welcome ${name} to my heart`);
//  }
//  if(name == "Radha"){
// console.log(`welcome ${name} to my heart`);
//  }

 //traffic light system
   console.log("traffic light system");

 let color = "yello" ;
 if(color == "red"){
   console.log("stop, light color is red");
} else if(color =="yellow"){
    console.log("slow down, light color is yellow");
 } else if(color == "green"){
     console.log("go,Light is green");
  } else {
    console.log("traffic ligh is broken")
  }

  
 // Else if statement
 let a_ge = 14;
 if (a_ge >= 18){
    console.log("you can vote");
 } else if(a_ge < 18 ){
    console.log("you can't vote");
 }

 let marks = 75;
 if(marks >=80){
    console.log("A+");
 } else if(marks >= 60){
    console.log("A");
 } else if(marks >= 30){
    console.log("B");
 } else if(marks < 30){
    console.log("F");
 }
 
 // Else statement

 let ag_e = 18;
 if (age >= 18) {
    console.log("you can vote")
 } else {
    console.log("you can't vote")
 }

// Nested if-esle

  let u = 6;
  let v = 9;
  let w = 10;
  if(u > v){
   if(u > w){
   console.log( u, "is larger"); 
  } else {
   console.log( w, "is larger");
  } 
} else {
   if(v > w){
      console.log(v, "is larger");
   } else {
      console.log( w, "is larger");
   }
}

//Logical Operators

let num = 12;
if((num%3 ===0) && ((num+1 == 15) || (num-1 == 11))){
   console.log("safe")
} else {
   console.log(unsafe)
}
  
let goodString = "app";
if ( (goodString[0] === "a" ) && (goodString.length > 3) ) {
   console.log("it is a good string");
} else { 
   console.log("not a good word");
}

// truthy & falsy  
if(""){
   console.log("it has ture value");
} else {
   console.log("it has false value");
}
if(" "){
   console.log("it has ture value");
} else {
   console.log("it has false value");
}
let num1 = 1;
if (num1) {
   console.log("num is not equal to zero");
} else {
   console.log("num is equal to number")
}

// Switch Statement 
let lightColor = "green";
switch(lightColor){
   case "red":
      console.log("stop");
      break;
   case "yellow":
      console.log("slow down")
      break;
   case "green":
      console.log("go");
      break;
   default:
      console.log("light is broken")
}

// Alert and Prompt

//Alert
alert("something is wrong");
console.log("this is an alert")
console.error("this is an simple error");
console.warn("this is a warning");

//prompt
let firstName = prompt("enter your firstname");
console.log(firstName)
let lastName = prompt("enter your lastname");
console.log(lastName)

let mes ="welcom"+ firstName + " " + lastName;
alert(mes);
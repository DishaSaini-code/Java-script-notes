// Methord of string
// Trim methord 

// let msg = " He llo ";
let password = prompt(" set your password");
 // make password giving in starting and end to see use of trim methord
 // console,log( password.trim());
 let newPass = password.trim();
 console.log(newPass);

 // to uppercase and tolowercase methord
 let name = "Apna Collage";
 console.log(name.toLowerCase());
 console.log( name.toUpperCase());  

 // String Metord with Arguments
 // indexOf 

 let msg_ = "ILoveCoding";
 let serchLetter = msg_.indexOf( "Coding" );
 console.log(serchLetter);

// Methord chaining
 let _msg = "    hello";
//  let newMsg = _msg.trim();
//  console.log( newMsg);
//  newMsg = newMsg.toUpperCase();
//  console.log( newMsg);
let newMsg = _msg.trim().toUpperCase();
console.log( newMsg);
 
// Slice

let greet = "Hello Dear";
console.log(greet.slice(0 , 4));
console.log(greet.slice( 11 , 1));
console.log(greet.slice(0));
console.log( greet.slice(-4 , -2)); // 10 - 1 => 9

// Replace 
let hobby = "ilovehumming";
let newHobby = hobby.replace( "humming" , "singing");
console.log(newHobby);
 let lastName = "kimkimkim";
 console.log(lastName.replace( "kim" , "shani"))

 // Repeat

 let str = "Mango";
 console.log( str.repeat(5));






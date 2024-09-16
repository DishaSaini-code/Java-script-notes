  // forEach

let arr = [ 1, 2, 3, 4, 5,];

// let print = function(el){
//   console.log(el);
// }
// arr.forEach(print);

arr.forEach(function(el){
  console.log(el);
});


let arrOb = [
  {
    name : "Taehyung",
    marks : 95
  },
  {
    name : "Disha",
    marks : 93.6
  },
  {
    name : "Gopal",
    marks : 94
  }

];

arrOb.forEach((student)=> {
  console.log(student.marks);
});

 // Map


let double =  arr.map((el) => {
  return el*2
 })
 
 console.log(double);
 
 let gpa = arrOb.map((el) => {
  return el.marks /10 ;
 });

 console.log(gpa);

 let num = [ 1, 4, 3, 6, 2, 9, 16 , 12, 18];

 let ans = num.filter((el) => {
  return el % 2 == 0 ; // even -> true, odd -> false
 });

 console.log(ans); 

 // Every  
 console.log([2, 4 , 8, 6].every((el) => el%2 == 0));

 console.log([2, 1 , 8, 6].every((el) => el%2 == 0));
 
 // Reduce

 let nums = [1, 2, 3, 4];
 let finalVal = nums.reduce((res , el) => res + el );
 console.log(finalVal);


 
 // Finding the max el in an arrey 

 let arr_  = [ 1, 2, 34, 8, 12, 13, 9];
 
 let max = arr_.reduce((max, el) => {
  if(max < el){
    return el;
  } else {
    return max;
  }
 });

 console.log(max);

 let arrEl = [ 2, -1, - 4, 1];
 
 let minVal = arrEl.reduce((min, el) => {
  if(min < el){
    return min;
  } else {
    return el;
  }
 })
 console.log(minVal);


 // Default Paraameter

 function func(a, b = 9){
  return a + b;
 }
  
// Spread 
 
let ary = [1, 2, 3, 4, 5];
let newAry = [...ary];
console.log(newAry);

let chars = [..."hello"];
console.log(chars);

let odd = [ 1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let odEv = [ ...odd,...even];
console.log(odEv); 

// With object literals

let data = {
  email: "taehyungkim@gmail.com",
  password: "abcd",
};

const dataCopy = {...data , id: 123};

ary = [1, 2, 3, 4, 5];

let obj1 = { ...ary};// object -> key : value
let obj2 = {..."helloJS "}

 

// Rest  

function add(...args){
  //arguments
  for(let i = 0; i <args.length; i++){
    console.log("you give us :", args[i]);
  }
};
 

function mins(a, b, c, d){
  console.log(arguments); // argument is collection , not an arry 
  console.log(arguments.length);
};
 mins(1,2,5,4,9,7);

//  function sum(){
//   return arguments.reduce((sum , el) => sum + el);
//  };  Would not work 

function sum(...args){
    return args.reduce((sum , el) => sum + el);
   };  
  
   function miniMum( msg, ...args){
    console.log(msg);
    return args.reduce((min, el) => {
      if(min < el){
        return min;
      } else {
        return el;
      }})
   }; 

   // Destructturing
   
   let names = [ "toney", "bruce", "taehyung", "steve", "xuv", "pyq"];
   
   let [actor , runnerup , winner, ...left] = names;
   left.push("bbq")
   console.log(left);
   
 // Object

 const studentInfo = {
  name : "Nikhil",
  age: 14,
  class: 9,
  subject: ["hindi", "english", "math", "sceince"],
  username: "nikhil@110",
  password: "abcd",
  location : "NCR"
 };

 let {username, password: secrate, city = "delhi",} = studentInfo;
 console.log(username);
 console.log(secrate);
 console.log(location);













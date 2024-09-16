// let student1 = "Taehyung";
// let student2 = "Disha";
// let student3 = "jimin";
let student = ["Taehyung","Disha" ,"Jimin"];
console.log(student[0][0]);

// Array are mutable
let fruits = ["mango", "apple", "litchi"];
fruits[0]= "banana";

fruits[10] = "avocado";
console.log(fruits);

//Methord of Array
let cars = ["porche", "tesla", "toyota"]
cars.push("uvx");
console.log(cars);
cars.pop();
console.log(cars);
let followers = ['a','b','c','d'];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);
let newFollower = followers.unshift("z");
console.log(followers);
console.log(newFollower);

// indexOf
console.log(cars.indexOf("tesla"));
console.log(cars.indexOf("xuv"))
console.log(cars.includes("tesla"));
console.log(cars.includes("xuv"));

// cpncetenation and reverse
let primary =["red","yellow","blue"];
let secondary =["orange", "green","voilet"];
let allColor =primary.concat(secondary);
console.log(allColor);

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.reverse());

// Slice Methord
  let color =  [ "red", "yellow","blue", "orange","pink","white"];
  console.log(color.slice(2));
  console.log(color.slice(4));
  console.log(color.slice(9));

  // splice Methord

  let fang = [ "apple", "microsoft", "facebook","atlassian" ,"open AI","google", "xyz"];
  console.log(fang.splice(6));
  console.log(fang.splice(0, 2));
  console.log(fang.splice(2, 3));
  let fangSpl = fang.splice(0, 0, "amazon","samsung");
  console.log(fangSpl);
  console.log(fang);
  let fangSpl_1 = fang.splice(2, 0 , "meta", "yy");
  let fangSpl_2 = fang.splice(3,1, "UV ")

  let char = ["f", "v", "r" , "c" , "a"];  
  console.log( char.sort());
  
  // Array references

  let arr = [ "a", "b","c"];
  let arrcopy = arr;
  arr.push("d");
  console.log(arrcopy);
   
  // Constant array 
  const arr_ = [ 1, 2, 3,];
  arr_.push(9);

// Nested Array
let games = [[ "X", "null", "O"], ["null", "X","null"], ["O", "null", "X"]];
games[0][1] = "O";
         



  





  
     


  










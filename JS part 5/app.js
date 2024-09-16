 const  post = {
    username: "@dishasaini",
    content: "this is my #first post",
    like: 150,
    repost: 5,
    tags: ["@thv", "@skipper"]
 };

 // get value
 const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d", 
    undefined: "e"
 }; 
 console.log(obj[1])
 const student = {
    name: "taehung",
    age: 28,
    marks: 94.4,
    city: "seol"
 };
 student.city= "daegu"; // value of city has been changed
student.gender = "male"; // another key is added
delete student.marks;

// Object of Object 
// const classInfo = {
//     aman: {
//         grade: "A",
//         city: "haryana"
//     },
//     shaddha: {
//         grade: "A+",
//         city: "delhi"
//     },
//     alakh: {
//         grade: "A++",
//         city: "prayag"
//     }
// }


// Array of Object
const classInfo = [
    {
        name: "Alakh",
        age: 28
    },
    {
        name: "rajwant" ,
        age: 31
    },
    {
        name: "samapti",
        age: 27
    }
]
classInfo[0].personlity = "cute";



// Random Integer
let step1 = Math.random();

let step2 = Math.floor(Math.random() * 10);

// guess the number
const max = prompt("enter the max number");
console.log(max);

const random = Math.floor(Math.random() * max);
let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("you quit the game");
        break;

    }
    if(guess == random){
        console.log("congratulations !!! you win the game", random);
         break;
    } else if(guess < random){
        guess = prompt(" HINT : your guess was too small, please try again")
    }
    else {
        guess = prompt("HINT : your guess was too larg, please try again");
    }
}



 




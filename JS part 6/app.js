 // Function in JS


function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();

// function arguments 

function printInfo( name , age) {
    console.log(`${name}'s age is ${age}`)

}
printInfo("disha", 19);
printInfo("taehyung",28);
printInfo(18); // Order is important


 function printAverage(a,b,c){
    let avg = (a+b+c)/3;
    console.log(avg);
 }
 printAverage(21,4,5);

function printTable(n){
    for(let i = n; i<=n*10; i+= n ){
        console.log(i);
    }
}

printTable(5);
 
// Return

function sum(a,b){
    console.log("hello1");
   return a+b;
//    console.log("hello"); can't detect this code
}
console.log(sum(sum(1,3), 4));

function isAdult(age) {
    if(age >= 18) {
        return"adult";
    } else {
        return "not adult";
    }
}

console.log(isAdult(12));
console.log(isAdult(19));

function getSum(n){
    let sum = 0;
for(let i = 1; i<=n; i++){
    sum+= i; 
}
return sum;
}

 
let arr = ["hi", "how","are", "you","!"];

function concat(arr) {
    let result = "";

    for(let i = 0; i<arr.length; i++){
        result += arr[i];
    }
    
    return result;
}
 console.log(concat(arr));
  



let greets = [ "hello", "namaste", "bye"];

function newGreet(greets){
    let sum = "";
    for(let i = 0; i<greets.length; i++){
        let idx = greets[i];
        sum += idx
    }

}






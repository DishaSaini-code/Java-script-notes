// function scope
let sum = 23; // Global scope

function calsum (a,b){
    let sum = a+b; // function Scop
    console.log(sum);
}
calsum(2,3);
console.log(sum);

//  Block scope
// {
//     let a = 1;
// }
// console.log(a);

for(let i =1; i<=3; i++){
    console.log(i);
}
//console.log(i);

// Lexical Scope

function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFun() {// funtion scope
        console.log(x);
        console.log(y);

    }
    innerFun()
}
outerFunc(); 

let add = function(a,b) {
    return a+b;
}
 let hello =function(){
    console.log("hello")
 }
 hello =function(){
    console.log("Namaste")
 } 
hello();

 // Higher Order function

 function multipleGreet(func,count){
    for(let i =1; i<=count; i++){
        func();
     }
 }
 let greet = function(){
    console.log("hello")
 }
multipleGreet(greet,10);


// Higher Order function(return)


//let odd = function(n){
//     console.log(!(n%2 == 0));
// }
// let even = function(n){
//     console.log(n%2 == 0);
// }


// 
// function oddOrEvenFactory(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2 == 0));
//         }
//         return odd;
//     }else if(request == "even"){
//         let even = function(n){
//             console.log(n%2 == 0)
//         }
//         return even;
//     }else {
//         console.log("wrong request")
//     }

// }



function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }else if(request == "even"){
         return function(n){
            console.log(n%2 == 0)
        }
    }else {
        console.log("wrong request")
    }

}
let request = "even"; // odd

let func = oddOrEvenFactory(request);
func(9); 



// Methods

const calculator = {
    num : 55,
add (a, b){
    return a + b;
},
sub (a, b){
    return a - b;
},
mult (a , b){
    return a*b
}
};
console.log(calculator.add(2,6));


 




 




















 









 





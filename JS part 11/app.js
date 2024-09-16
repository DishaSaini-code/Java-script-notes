// function hello (){
//     console.log("inside hello fnx");//3
//     console.log("hello");
// }

// function demo() {
//     // hello();
//     console.log("calling hello fnx");//2
//       hello();
// }

// console.log("calling demo fnx");
// demo();// 1
// console.log("Done, bye!")

// visulizing the call stack 
function one (){

    return 1;
}

function two (){
    return one() + one();
}
 
function three (){
    let ans = two() + one();
    console.log(ans);
}

three();
 

// Js in single threaded

// setTimeout(()=>{
//     console.log("apna collage"); // 1st call stack added
// }, 2000);
// setTimeout(()=>{
//     console.log("Hello world");// 2nd call stack added
// }, 2000);
// console.log("hello...");   


// callback hell
 let h1 = document.querySelector("h1");

 function changeColor(color, delay){
   return new Promise((resolve, reject) =>{
    setTimeout(() =>{
        h1.style.color = color;
     resolve("color change");
    }, delay);
});
 }

changeColor("red",1000)
.then(()=>{
    console.log("red color was complete");
   return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was complete");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("orange was complete")
})




  // callbacks nesting -> callback hell  

// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed >4){
//          success();
//     } else {
//         failure();
//     }
// };  
   
// savetoDb("Apna Collage", 
//     ()=> {
//     console.log("your data is saved");
//     savetoDb(
//     "hello next Db",
//     () =>{
//         console.log("success2 : data2 saved");
//     savetoDb(   
//          "hello im.....",
//      ()=>{
//         console.log("sucess3 : data3 saved");
//      },
//      ()=>{
//         console.log("failure3 : your date not saved");
//      } 
//     )
//     }, 
//     ()=> {
//         console.log(" failure2 : weak connecton data not save");
//     }
// );
// },
// ()=> {
//     console.log(" failure : weak connecton data not saved");
// }
// );

 // promises
  
 function savetoDb(data){
    return new Promise((success, failure)=>{
        let internetSpeed = Math.floor(Math.random()*10)+ 1;  
    if (internetSpeed >4){
        success("sucess : data was saved");
    } else{
        failure("failure: weak connection");
    }  })
 };
 
 savetoDb("apna collage").then((result) => {
    console.log("data1 saved");
    console.log(result);
   return savetoDb("my taetae");
})
.then((result)=>{
    console.log("data2 saved");
    console.log(result);
    return savetoDb("my taeta ");
   })
   .then((result)=>{
    console.log("data3 saved");
    console.log(result)
   })
.catch((error) =>{
    console.log("promise was rejected");
    console.log(error); 
});




















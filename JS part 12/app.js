async function greet(params) {
    throw "404 page not found";
    return "hello";
};

greet()
.then((result)=>{
    console.log("result was:",result)
})
.catch((err)=>{
    console.log("promise was rejected with err:", err);
})

let func = async() => {
    return 5;
}; 

//Await

let h1 = document.querySelector("h1");

 function changeColor(color, delay){
   return new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let num = Math.floor(Math.random()*5)+1;
       if(num > 3){
        reject();
        console.log("promice rejected"); 
       }
        h1.style.color = color;
        console.log(`color change to ${color}`)
        resolve("color change");
    }, delay);
});
 }

async function demo() {
   try {
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
}catch(err){
    console.log("error caught");
    console.log(err);
}
   // due to rejection furtuer will aslo reject 
   // eventhough its not promice
    let a = 3;
    console.log("new number:",a+3); 
}

demo();















let btns = document.querySelectorAll(".btn");
// console.dir(btns);
// btns.onclick = function (){
//     alert("button was clicked");
// } 
for (btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function(){
    //     console.log("you enter a button")}
    
    // event listener

    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName); 
}
function sayHello(){
    alert("button was clicked");
}
function sayName (){
    alert("WorkHard");
}



let box = document.querySelector(".box");

box.addEventListener( "mouseenter", function(){
    console.log("mouse inside box")
    box.innerHTML ="it is effect of mouse";
});
 
//this Event listener

let newBtn = document.querySelector("#newBtn");
newBtn.addEventListener("click",function(){
    console.log(this );
    console.log(this.innerText);
});



//keyboard Events

let inpt = document.querySelector("input");


inpt.addEventListener("keydown", function (event){
    console.log(event)
    console.log( `key = ${event.key}`);
    console.log( `code = ${event.code}`);//ArrowRight/Up/Left/Right

});
 

let form = document.querySelector("form");
let user = form.children[0];  //element can replace children
let pass = form.children[1];

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(user);
   console.log(user.value);
   console.log(pass.value);
   alert(` hi ${user.value}, your password is ${pass.value}`)

});
 
user.addEventListener("change", function(){
    console.log("change event");
    console.log("final value= ", this.value);
});

user.addEventListener("input", function(){
    console.log("input event");
    console.log("final value= ", this.value); 
});


let text = document.querySelector("#text");
let p = document.querySelector('p');
text.addEventListener("input", function(){
    console.log(text.value);
    p.innerText = text.value ;
})












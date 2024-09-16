// let todo = [];

// let req = prompt("please enter your request");

// console.log(req);


// while(true) {
//     if(req == "quit") {
//         console.log("qutting app");
//         break; 

//     }

//     if(req == "list") {
//         console.log("-----------------");
//         for (let i=0; i<todo.length; i++) {
//             console.log(i , todo[i]);
//         }
//         console.log("--------------------");
//     } else if (req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(req == "delete"){
//         let idx = prompt("please enter the task you want to delete");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     } else {
//         console.log("wrong request");
//     }

//     req = prompt("please enter your request");
// }

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");


btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value ;
    ul.appendChild(item);
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn);
    inp.value = "";

});


 ul.addEventListener("click",function(event){
    console.log(event.target.nodeName); // tell the targeted element
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        console.log("delete");
        console.log(listItem);
        listItem.remove();
    }
 });




















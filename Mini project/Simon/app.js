let gameSeq =[];
let userSeq = [];

let btns = ["red", "yellow", "purple", "green"];

let started = false ;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
   if(started == false){
    console.log("game is  started");
    started = true; 

    levelUp();
   }
 
})


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
  },250);
}

function userFlash (btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    }, 300)
}




function levelUp () {
    level++;
     userSeq = []; 
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);// to excess color of that button

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameFlash(randBtn);
    gameSeq.push(randColor );
    console.log(gameSeq);
}

function checkAns (idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! your score was <u>${level}</u> <br> Press any key to start `;
        let body = document.querySelector("body");
        
            body.classList.add("lose");
            setTimeout(function(){
                body.classList.remove("lose");
            }, 2500 );
        reset();
    }
}





function btnPress(){
    console.log(this);
    let btn = this ;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset (){
    started = false ;
    gameSeq = [];
    userSeq = [];
    level = 0;
}







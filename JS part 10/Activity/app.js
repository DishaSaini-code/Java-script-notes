let btn = document.querySelector("button");
let hOne = document.querySelector("h1");



btn.addEventListener("click",function(){
    console.log("generate random color");
    let rendomColor = getRamdomColor();
    hOne.innerText = rendomColor;
    let div = document.querySelector("div");
    div.style.backgroundColor = rendomColor;

    console.log("color updated");
})


function getRamdomColor(){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);
    
    let color = `rgb(${red}, ${green},${blue})`;
    return color;
}
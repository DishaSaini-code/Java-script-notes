  // let samllImgs = document.getElementsByClassName("oldimg")

  // for(let i = 0; i<samllImgs.length; i++){  
  //   // console.dir(samllImgs[i].src);
  //   samllImgs[i].src = "OIP.jpeg";
  //   console.log(`value of image no. ${i} is change`)
  // }
 
// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldimg"));
// console.dir(document.querySelectorAll("div a"));

//know difference of display property
let para = document.querySelector("p");
console.log(para.innerHTML);
console.dir(para.textContent);
console.dir(para.innerText);
para.innerHTML =`<u> ${para.innerText} </u>`


let headLine = document.querySelector("h1");
headLine.innerHTML = "<u> Spider Man </u>" 
 headLine.style.color ="green" // Menupulation Style
headLine.style.backgroundColor = "yellow"; // camel case for css property



let links = document.querySelectorAll(".box a");

// for(let i = 0; i <links.length; i++){
//     links[i].style.color ="green";
// }

for(links of links){
    links.style.color =" green"; // inline style
}

// Using Classlist

let headingTwo = document.querySelector("h2");
headingTwo.classList.add("green");
headingTwo.classList.add("underline");
headingTwo.classList.remove("green"); 
headingTwo.classList.contains("green"); // False
 headingTwo.classList.toggle("green"); // dosen't exist so add


 // Adding element 
 
 // Append child
 let bttn = document.createElement('button');
 bttn.innerText = "click me";
 let box = document.querySelector(".box");
 box.appendChild(bttn);

// Append
 let newP = document.createElement('p');
  newP.innerText = "hi i m new P"
  box.appendChild(newP); 
  
  newP.append(" this is new text i create new text by using append");
//   newP.append(bttn);
        




 












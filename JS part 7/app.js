const student ={
    name : "disha" ,
    age : 19,
    eng: 96,
    math: 98,
    phy: 100,
    getAvg(){
        let avg = (this.eng + this.math + this.phy)/3; 
        console.log(`${this.name} got avg marks = ${avg}`); 
        // can't directly acess any key of object
    }

}

function check(){
    console.log(this);
}


// Try And Catch


console.log("hello1");
console.log("hello1");
// let a = 3;
 try {
    console.log(a)
}catch(err) {
    console.log("caught an error... a is not defined");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
 
// Arrow Function
 const sum = (a , b) => (a + b);
 sum(77,22);


 let arr  = [3, 3, 3, 3, 3,3];

 const arrayAvg = (arr) =>{
     let total =0 ;
     for(let number of arr){
         total += number
     }
     return total / arr.length
 }

const print = () => {
    console.log("Hello World");
};

const mult = (a,b) => ( a * b );

// Set Time out

 console.log("hi there");
 setTimeout(() => {
    console.log("apna collage");
 }, 4000);
 console.log("welcome ");
 console.log("welcome");



// let id1 = setInterval(() => {
//     console.log("disha saini")
//  } , 4000);

//  console.log(id1);
  
// let id2 = setInterval(() => {
//     console.log("Kim taehyung")
//  } , 5000);

//  console.log(id2)
 // use clearInteval(id2); to stop 


 // This in Arrow

 
 let student2 = {
    name : "aman",
    age : 24,
    marks : 122,
    prop : this ,
    getName : function(){
        console.log(this);
        return this.name;
    },
    getMarks : () =>{
        console.log(this); // parent's scope ---> window
        return this.marks;
    },

    getInfo1 : function(){
        setTimeout(() => {
            console.log(this ); // Student object
        }, 2000);

    },
    getInfo2 : function(){ 
        setTimeout(function()  {
            console.log(this); // Window object
        }, 2000);

    },
    
 };



 let id = setInterval(() => {
    console.log("hello World")
}, 2000);
setTimeout(() => {
     clearInterval(id); 
}, 11000 );


 

 

 






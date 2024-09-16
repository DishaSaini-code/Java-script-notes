

//  for(let i=5; i>=1; i--){
//    console.log(i);
//  }


 console.log("for prime number")
 for(let i = 1; i<=15; i = i+2){
   console.log(i);
 }
 console.log("even number")
  for(let i=2; i<=10; i=i+2){
   console.log(i);
  }

//   let n = prompt("write your number ");
//   n = parseInt(n);
// for(let i=n;  i<=n*10; i=i+n){ 
//   console.log(i);
// }
  // for(let i = 5; i<=50; i=i+5){
  //   console.log(i);
  // }
   

  // Nested for loop
  for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`)
    for(let j=1; j<=3; j++){
      console.log(j);
    }
  }  

 // While Loop
 console.log("while loop");
   let i =5;
   while(i>=1){
    console.log(i);
    i--;
   }


   // Break loop keyword
   let j = 1;
   while(j<=5){
    if(j==3){
        break;
    }
    console.log(j);
    j++;
   }
   console.log("we use break for '3'");
 
   //favourate movie game
   console.log("favourate movie");
   const favMovie = "brave";
   let guess = prompt("guess my favourate movie");

   while(guess != favMovie){
    if(guess=="quit"){
        console.log("you quit")
        break;
    }
    guess = prompt("wrong guess. please try again");
   }
   if(guess == favMovie){
    console.log("congrats!!");
   }

  
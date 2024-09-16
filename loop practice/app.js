 let num = 28517;
 let count = 0;
 let sum = 0;
 let copy = num;
 
//  while(copy > 0){
//     copy = Math.floor(copy/10); 
//     count++;
//  }
//  console.log(count); 


   while(copy > 0){
      digit = copy % 10;
      sum += digit;
      copy = Math.floor(copy/10); 
   }
    
  console.log(sum);

let n  = 4;
let fectorial = 1;
let i = 1;
 while(i<=n){
  fectorial*= i;
  i++ 
 }
 console.log(fectorial)

 let arr =[ 2, 4, 6, 1, 9, 7];
 let largest = 0;

 for(let i = 0; i<= arr.length; i++){
   if(largest < arr[i]){
      largest = arr[i];
   }
 }
 console.log(largest);
 
  


 
  
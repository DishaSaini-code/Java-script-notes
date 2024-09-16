// let arr = [ 1, 4, 6, 19, 9, 12, 8, 5];
// let num = 5;
// function getElement(arr, num){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > num){
//             console.log(arr[i]);
//         }
//     }
// }
// getElement(arr, num);
 
// let str = "adewdaajhhjdlslsalaw";

// function getunique(str){
//     let newstr = ""; 
//     for(let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if(newstr.indexOf(currChar) == -1){
//             newstr+= currChar; // newstr = newstr + currChar;
//         }
       
//     }
//     return newstr;
// }

//  let country = ["India", "united state of America", "South korea", "nepal" ];

//  function longestName(country){
//     let ansIdx = 0;
//     for(let i = 0; i<country.length; i++){
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length; 
//         if( currLen > ansLen){
//             ansIdx = i ; 
//         }
//     }
//     return country[ansIdx];
//  }
 
// let str = "akiiiooaahhkklwwu";

// function vowelsCount(str){
// let count = 0;
// for(let i = 0; i<str.length; i++){
//     if( str[i] == "a"||
//         str[i] == "e"||
//         str[i] == "i"||
//         str[i] == "o"||
//         str[i] == "u"
// ){
//       count++;
//     }
// }
// return count
// }


 

function createHelloWorld() {
    return function() {
       return "hello world";
    };
}

console.log(createHelloWorld());











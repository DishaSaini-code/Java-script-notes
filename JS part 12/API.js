 let jsonRes = 
 '{"fact":"Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.","length":114} '; 

 let validRes = JSON.parse(jsonRes);   
 
 console.log(validRes);
 console.log(validRes.fact);

let student = {
    name : "disha",
    marks :"100",
    pc : "JNFT"
};

let jsonSt = JSON.stringify(student);
// trying it on console window would show it with single cotts'' 
console.log(jsonSt)


// // our first request
let url = "https://catfact.ninja/fact"

fetch(url)
.then((Response)=>{
 console.log(Response);
 return Response.json();
})
.then((data1) => {
    console.log(data1);
    console.log("data 1 =",data1.fact);
    return fetch(url);
})
.then((Response)=> {
    return Response.json();
})
.then((data2)=>{
    console.log("data2 =" ,data2.fact);
})
.catch((err)=>{
    console.log("ERROR -",err);
})

async function getFacts() {
   try { 
    let res1 = await fetch(url);
    let data1 = await res1.json();
    console.log(res1);
    console.log(data1.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(res2);
    console.log(data2.fact);
    
} catch (e){
    console.log("error-",)
}
}
 















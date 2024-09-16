let btn = document.querySelector("button");

btn.addEventListener( "click", async()=>{
    let fact =  await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
})



let url = "https://catfact.ninja/fact";


async function getFacts() {
    try {
        let res = await axios.get(url);
        // console.log(res);
        // console.log(res.data);
        return res.data.fact;
    } catch (e) {
       console.log("error -",e) 
       return "NO fact found";
    }
}

// getFacts();
let url2 = "https://icanhazdadjoke.com";
async function getJokes() {
    try{
        const confige = {headers: {Accept : "application/json"}};
        let res = await axios.get(url2, confige);
        console.log(res);
        console.log(res.data);// it was giving data in html formate without headers
    } catch(err) {
        console.log(err);
    }
}
  

//query string

let url3 = "http://universities.hipolabs.com/search?name=";
let button = document.querySelector("#btn");



button.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let clgArr= await getCollage(country);
    console.log(clgArr);
     show(clgArr); 
})
function show(clgArr){
    let list = document.querySelector("#list");
    list.innerText ="";
    for(clg of clgArr){
        console.log(clg.name);
        let li = document.createElement("li");
        li.innerText = clg.name;
        list.appendChild(li);
    }
};


async function getCollage(country) {
    try {
    let res =  await axios.get(url3 + country);
    return res.data;

    } catch(e) {
        console.log("error :",e);
    }
};
 
      























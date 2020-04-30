let data=[
    {
        name:"suraj",
        class:"b",
        age:35,
        foods:["chinese","indian","rajma"]
    },
    {
        name:"suraj",
        class:"b",
        age:35,
        foods:["chinese","indian","rajma"]
    },
    {
        name:"suraj",
        class:"b",
        age:35,
        foods:["chinese","indian","rajma"]
    },
    {
        name:"suraj",
        class:"b",
        age:35,
        foods:["chinese","indian","rajma"]
    }
];

function food(foodss){
    return `
    <h4>fav food</h4>
    <ul class="foods-list">
    ${foodss.map((v)=>{
        return `
        <li> ${v}</li>
        `
    }).join('')}
  
    </ul>
    `

}

function petTemplate(v){
    return `
    <div class="animal">
    <img src="${v.age}">
    <h2>${v.name} (${v.class})</h2>
    ${v.foods ? food(v.foods): ""}

    </div>
    `

}

document.getElementById("app").innerHTML=`
<h1 class="app-title">name (${data.length})</h1>

${data.map(petTemplate).join("")}
`

var form=document.getElementById("myform");
var input=document.getElementById("ourField");

form.addEventListener("submit",function(e){
    e.preventDefault()
   console.log(input.value);
})


var date =new Date();
console.log(date.setFullYear(28-04-2010));
setTimeout(function(){
    console.log("suraj mishra");
},1000);

var str=[
    {
        name:"suraj",
        class:"b",
        age:35,
        hobby:["cricket","badminton","carrom"]
    },
    {
        name:"suraj",
        class:"b",
        age:35,
        hobby:["cricket","badminton","carrom"]
    },
    {
        name:"suraj",
        class:"b",
        age:35,
        hobby:["cricket","badminton","carrom"]
    }
];
document.getElementById("info").innerHTML=`
${str.map(dt).join("")}
`;
function dt(v){
    return `
    <h1>hello ${v.name}</h1>
    <h2>hell${v.age}</h2>
    ${v.hobby.map(hby).join(" ")}
    `
}
function hby(v){
    return`
    <ul>
    <li>${v}</li>
    </ul>
    `
}
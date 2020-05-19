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

function sel(x){
    console.log(x.value);
    document.getElementById("bdy").style.backgroundColor=x.value;
}
var form=document.querySelector("#myForm");
var input=document.querySelector("#ourField");
form.addEventListener("submit",onSubmit);
function onSubmit(e){
    e.preventDefault();
    console.log(input.value)
}

function asy(message){

    return new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log(message);
            resolve();
        },500)

    })
  
}

function finduser(){
    return  asy('find')
   
}

function hello(){
   return asy("hello")
    
}

function dostuff(){
   return asy("do stuff")
}

asy('i am good')
.then(finduser)
.then(hello) 
.then(dostuff)
.then(function( ){})

function cl(cb){
    cb()
}

function my(){
    console.log("suraj")
}
cl(my)

var a={name:"Suraj"}
    // a.__proto__.class="b";
    console.log(a.class)



    class mys {constructor(name,age){
        this.name=name;this.age=age;
        this.display=function(){
            console.log(this.name)}} }
             class he extends mys{
                  constructor(name,age,field){ 
                 super(name,age);
                  this.field=field;
                  this.ab=function(){
                      console.log(this.field)
                  }
                }
             } 
                 
                 var c=new he("suraj",25,"myfield");
                  console.log(c.ab());

                  var h1=document.querySelector("#head");
                  var btn=document.getElementById("btn");
                  var inp=document.querySelector("#txt")
                  h1.innerText="krishan"
                 
                  
                  console.dir(h1)

             btn.addEventListener("click",function(){
                h1.style.color="green";
                console.log(inp.value);
             })
             inp.addEventListener("keypress",function(){
                h1.innerText=inp.value;
                //  console.log(inp.value);
             })


var me=document.querySelector(".me");
console.log(me)

setTimeout(function(){
    console.log("setTimeout")
},1000)

function hl(ms,cb){
    setTimeout(function(){
        console.log(ms);
        cb();
    },3000)
}
function yy(){
    console.log("kuch ho na ho")
}
function fir(){
 console.log("first")
}
function sec(){
    console.log("first")
   }
   function third(){
    console.log("first")
   }
hl("i ahve a msg for u", function(){
    console.log("hello");
},sec,third);

function firse(thik){
    console.log("surajjjjjjjjjjjj")
   console.log(thik)
}


firse("dd");

var promise = new Promise(function(resolve, reject) { 
    var statusCode=404
    if(statusCode==404) { 
      resolve(); 
    } else { 
      reject(); 
    } 
  }); 
    
  promise. 
      then(function () { 
          console.log('Success, You are a GEEK'); 
      }). 
      catch(function () { 
          console.log('Some error has occured'); 
      });

      function my(){
          console.log("it is a promise")
      }
      var promise =new Promise( my )   
      promise.then(function(r) { 
              console.log(r); 
          }). 
          catch(function () { 
              console.log('Some error has occured'); 
          });


          
    
    


















// function aa(callback){
//     callback()
// }
// function ab(){
//     console.log("suraj")
// }
// aa(ab);


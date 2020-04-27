const express=require('express');
const path=require('path');
const logger=require('./middleware/logger');

const app=express();



app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs'); 

//set a static folder
// app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.get('/',(req,res)=>{
//     // res.send("hello world");
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })


//iniit middleware
app.use(logger);

app.use('/',require('./routes/index'));


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server is on 5000");
})
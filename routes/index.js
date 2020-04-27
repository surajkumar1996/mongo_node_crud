var express=require('express');
var router=express.Router();
const uuid=require('uuid');
const student=require('../Student');
const db=require('../db');
const collection ="todo";



router.get("/db",function(req,res,next){
    db.getDB().collection(collection).find({}).toArray((err,documents)=>{
        if(err){
            console.log(err)
        }else{
            console.log(documents);
            res.json(documents);
        }
    })
})

router.put('/:id',(req,res)=>{
    const todoID=req.params.id;
    const userInput=req.body;
    db.getDB().collection(collection).findOneAndUpdate({_id:db.getPrimaryKey(todoID)},{$set:{todo:userInput.todo}},{returnOriginal:false },(err,result)=>{
        if(err)
        console.log(err)
        else{   
            res.json(result);
        }
    })
})


router.post('/dbpost',(req,res)=>{
    const userInput=req.body;
    db.getDB().collection(collection).insertOne(userInput,(err,result)=>{
        if(err){
           res.json({msg:err})
        }else{
            res.json({result:result,document:result.ops[0]})
        }
    })
})


router.delete('/:id',(req,res)=>{
    const todoID=req.params.id;
    db.getDB().collection(collection).findOneAndDelete({_id:db.getPrimaryKey(todoID)},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.json(result)
        }
    })
})

router.get("/alldb",(req,res)=>{
    res.render("mongo",{

    })
})
db.connect((err)=>{
    if(err){
        console.log("unable to connect  to db");

    }
    else{
        console.log("it is connected");
    }
})





var people={
    1:{
        name:"suraj",
        hobby:["cricket","hockey","mve"]
    },
    2:{
        name:"rahul",
        hobby:["mvve","badminton"]
    }
}

//routing for render page

router.get("/suraj/:id",(req,res)=>{
    res.render("index",{
        name:people[req.params.id].name,
        hobby:people[req.params.id].hobby,
        id:req.params.id
    })
});


//gets all students
router.get('/api',(req,res)=>{
    res.json(student);

})
router.get('/api/:id',(req,res)=>{
    const found=student.some((v)=>v.id=== parseInt(req.params.id));

    if(found){
        
   res.json(student.filter((v)=>v.id=== parseInt(req.params.id)));
    }
    else{
        res.status(400).json({message:`message is not found with given ${req.params.id}`});
    }


});

router.post("/",(req,res)=>{
    // res.send(req.body);
    const newStudent={
        id: uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:'active'
    }

    if(!newStudent.name || !newStudent.email){
       return res.status(400).json({ msg:'please includea name and email '})
    }
   student.push(newStudent);
   res.json(student);
})

router.put("/api/:id",(req,res)=>{
    const found=student.some((student)=>student.id===parseInt(req.params.id));
if(found){
    var up=req.body;
    student.forEach((student)=>{
        if(student.id===parseInt(req.params.id)){
            student.name=up.name?up.name:student.name;
            student.email=up.email?up.email:up.email;

            res.json({ msg:'Member updated', student});
        }
    });

}else{
    res.status(400).json({message:`message is not found with given ${req.params.id}`});

}


});


module.exports=router;

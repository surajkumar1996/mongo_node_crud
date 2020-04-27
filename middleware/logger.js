const logger=(req,res,next)=>{
    console.log(`${req.protocol} ${req.url}`);
    next();
}


module.exports=logger;
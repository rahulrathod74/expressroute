const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send("Wlcome to the Express.js server!");
    
})

module.exports=router
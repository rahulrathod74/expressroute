const express=require("express")
const router=express.Router()

router.get('/',(req,res)=>{
    const randomNumber=Math.floor(Math.random()*100)+1
    res.send(`randomNumber:${randomNumber}`)
})

module.exports=router
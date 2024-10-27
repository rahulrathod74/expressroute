const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('This is a sample web server built using Express.js')
})

module.exports=router
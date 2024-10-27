const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.json({
        "email":"student@exmaple.com",
        "phone":"123-456-7890"
    })
})

module.exports=router
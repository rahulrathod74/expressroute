const express=require('express')
const server=express()
const Port=3000

const homeroute=require("./routes/indexroute")
const aboutroute=require("./routes/aboutroute")
const contactroute=require('./routes/contactroute')
const randomroute=require('./routes/randomroute')

server.use('/',homeroute)
server.use("/about",aboutroute)
server.use("/contact",contactroute)
server.use("/random",randomroute)
server.use((req,res)=>{
    res.status(404).send('404-Page Not Found')
})

server.listen(Port,()=>{
    console.log(`server is running http://localhost:${Port}`);
    
})
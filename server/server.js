const express = require('express');

const app=express();

app.get("/getRestaurants",(req,res)=>{
    res.send("These are the restaurants");
})
const port=process.env.PORT ||5001;
app.listen(port,()=>{
    console.log('Server connected launch the fireworks!')
})
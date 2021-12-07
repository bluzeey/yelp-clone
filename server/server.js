const express = require('express');

const app=express();


app.get("/api/v1/restaurants",(req,res)=>{
    res.status(200).json({
        status:"success",
    data:{
        restaurant:['Mcdonalds','BurgerFarm']
    }});
})

app.get("api/v1/restaurants/:id",(req,res)=>(
    console.log(req)
))

app.post("api/v1/restaurants",(req,res)=>{
    console.log(req)
})
const PORT=process.env.PORT||5001;
app.listen(PORT,()=>{
    console.log(`Server connected launch the fireworks!${PORT}`)
})
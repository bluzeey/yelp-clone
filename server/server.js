const express = require('express');
const app=express();
const cors=require('cors');

app.use(cors())
app.use( express.urlencoded({ extended: true }) )
app.use(express.json());
app.get("/api/v1/restaurants",(req,res)=>{
    res.status(200).json({
        status:"success",
    data:{
        restaurant:['Mcdonalds','BurgerFarm']
    }});
})

app.get("/api/v1/restaurants/:id",(req,res)=>{
    console.log(req.params,req.body);
    res.status(200).json({
        status:"success",
    data:{
        restaurant:['Mcdonalds','BurgerFarm']
    }})
})

app.post("/api/v1/restaurants",(req,res)=>{
    console.log(req.body)
})

app.put("api/v1/restaurants/:id",(req,res)=>{
    console.log(req.body,req.params.id)
})
const PORT=process.env.PORT||5001;
app.listen(PORT,()=>{
    console.log(`Server connected launch the fireworks!${PORT}`)
})
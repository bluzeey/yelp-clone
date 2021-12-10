const express = require('express');
const morgan = require('morgan');
const app=express();

app.use(morgan('dev'))
app.use((req,res,next)=>{
    console.log('Making a middleware');
    next();
});
app.get("/api/v1/restaurants",(req,res)=>{
    res.status(200).json({
        status:"success",
    data:{
        restaurant:['Mcdonalds','BurgerFarm']
    }});
})

app.get("api/v1/restaurants/:id",(req,res)=>(
    console.log(req.params)
))

app.post("api/v1/restaurants",(req,res)=>{
    console.log(req)
})

app.put("api/v1/restaurants/:id",(req,res)=>{
    console.log(req.body,req.params.id)
})
const PORT=process.env.PORT||5001;
app.listen(PORT,()=>{
    console.log(`Server connected launch the fireworks!${PORT}`)
})
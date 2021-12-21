const express = require('express');
const app=express();
const cors=require('cors');
const db=require('./db')
require('dotenv').config();

app.use(cors())
app.use(express.urlencoded({ extended: true }) )
app.use(express.json());
app.get("/api/v1/restaurants",async(req,res)=>{
    try {
        const results=await db.query("select * from restaurants");
        console.log(results)
        res.status(200).json({
            status:"success",
            results: results.rows.length,
        data:{
            restaurant:results.rows
        }});
    } catch (error) {
        console.log(error)
    }
})

app.get("/api/v1/restaurants/:id",async(req,res)=>{
    try {
        console.log(req.params,req.body);
        const results=await db.query(`select * from restaurants where id=$1`,[req.params.id])
        console.log(results)
        res.status(200).json({
            status:"success",
        data:{
            restaurant:results.rows[0]
        }})
    } catch (error) {
        
    }
})

app.post("/api/v1/restaurants",async(req,res)=>{
    try {
        const results=await db.query("INSERT INTO restaurants (name,location,price_range) VALUES ($1,$2,$3) returning *",
        [req.body.name,req.body.location,req.body.price_range])
        res.status(201).json({
            status:"success",
            data:{
                restaurant:results.rows[0]
            }
        })
    } catch (error) {
        console.log(error)
    }
})

app.put("/api/v1/restaurants/:id",async(req,res)=>{
     try {
         const results=await db.query("UPDATE restaurants SET name =$1 , location =$2 , price_range =$3 WHERE id=$4 returning *",[req.body.name,req.body.location,req.body.price_range,req.params.id])
         console.log(results)
         res.status(201).json({
             status:"success",
             data:{
                 restaurant:results.rows[0]
             }
         })
     } catch (error) {
         console.log(error)
     }
     console.log(req.body,req.params.id)
})

app.delete("/api/v1/restaurants/:id",async(req,res)=>{
    try {
        const results =await db.query("DELETE from restaurants WHERE id=$1",[req.params.id])       
        res.status(204).json({
            status:"success"
        })
    } catch (error) {
         console.log(error)
    }
})
const PORT=process.env.PORT||5001;
app.listen(PORT,()=>{
    console.log(`Server connected launch the fireworks!${PORT}`)
})
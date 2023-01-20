const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()

// Middle wares
app.use(express.json({limit:"5mb"}))
app.use(cors({
    origin:"*"
}))

app.post("/register",async(req,res)=>{
    try {
        const {email,username,password} = req.body
        console.log(email,username,password)
    } catch (error) {
        console.log(error.message)
    }
})

app.post("/login",async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error.message)
    }
})

mongoose.connect(process.env.DB,()=>{
    console.log("Database Successful")
},()=>{
    console.log("Database Error")
})

app.listen(4500,()=>{
    console.log("Server running on port 4500...")
})
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userModel = require("./models/userModel")
const bcrypt = require("bcrypt")
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
        // Check if username already exist in Database
        const user = await userModel.findOne({username})
        if(user) return res.json({msg:"Username already exist"})
        // Use bcrypt to hash password
        const saltRounds = 12
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        // Save in Database
        const responseFromDatabase = await userModel.create({
            email,
            username,
            password:hashedPassword
        })
        console.log(responseFromDatabase)
        res.json({msg:"User created successfully"})
    } catch (error) {
        console.log(error.message)
    }
})

app.post("/login",async(req,res)=>{
    try {
        const {username,password} = req.body
        // Check if username exist in Database
        const responseFromDatabase = await userModel.findOne({username})
        if(!responseFromDatabase) return res.json({msg:"Username does not exist"})
        // Check if password is right
        const hashedPasswordResponse = await bcrypt.compare(password,responseFromDatabase.password)
        if(hashedPasswordResponse) return res.json({msg:"Login successful"})
        res.json({msg:"Wrong password"})
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
import React,{useState} from 'react'
import { motion } from 'framer-motion'
import loginImage from "../Assets/Register.jpg"
import { Link } from 'react-router-dom'
function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const sendToServer = async(data)=>{
        try {
            const response = await fetch("http://127.0.0.1:4500/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            })
            const result = await response.json()
            console.log(result)
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <motion.div
    initial={{transform:"translateX(100%)"}}
    animate={{transform:"translateX(0%)"}}
    exit={{transform:"translateX(-100%)"}}
     className='md:flex'>
        <div className='md:flex-1 p-2 hidden md:block' style={{height:"100vh"}}>
            <img src={loginImage} style={{width:"100%",height:"100%",objectFit:"cover"}} alt="" />
        </div>
        <div className='flex-1 flex items-center justify-center login-text bg-green-300 md:bg-white p-10 md:p-0'>
            <div>
                <h1 className='text-4xl'>Welcome to this page,</h1>
                <h1 className='text-gray-500 text-lg'>Sign in to continue</h1>
                <div className='my-5 text-sm text-gray-500 login-create-account-prompt'>
                    <p className=''>Don't have an account? <Link to="/register" className='font-extrabold text-green-800 '>Create an account</Link></p>
                    <p>It takes less than a minute</p>
                </div>
            <form action="" className='my-5'>
                <div className=''>
                    <label htmlFor="username" className='font-mono'>Username</label>
                    <input onChange={(e)=>{
                        setUsername(e.target.value)
                    }} autoComplete={false} value={username} required={true} type="text" name="" className='md:w-[80%] w-full block p-2 border-2 border-black focus:outline-none' id="username" />
                </div>
                <div className='mt-10'>
                    <label htmlFor="password" className='font-mono'>Password</label>
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }} value={password} type="password" required={true} name="" className='md:w-[80%] w-full block p-2 border-2 border-black focus:outline-none' id="password" />
                </div>
                <button onClick={(e)=>{
                    e.preventDefault()
                    const data={username,password}
                    sendToServer(data)
                }} className='mt-10 block bg-black md:w-[80%] w-full text-white text-sm font-mono p-3 hover:bg-gray-700'>Sign In</button>
            </form>
            </div>
        </div>
    </motion.div>
  )
}

export default Login
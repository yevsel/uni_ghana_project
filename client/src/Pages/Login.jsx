import React from 'react'
import { motion } from 'framer-motion'
import loginImage from "../Assets/Register.jpg"
import { Link } from 'react-router-dom'
function Login() {
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
                    <input autoComplete={false} required={true} type="text" name="" className='md:w-[80%] w-full block p-2 border-2 border-black focus:outline-none' id="username" />
                </div>
                <div className='mt-10'>
                    <label htmlFor="password" className='font-mono'>Password</label>
                    <input type="password" required={true} name="" className='md:w-[80%] w-full block p-2 border-2 border-black focus:outline-none' id="password" />
                </div>
                <button className='mt-10 block bg-black md:w-[80%] w-full text-white text-sm font-mono p-3 hover:bg-gray-700'>Sign In</button>
            </form>
            </div>
        </div>
    </motion.div>
  )
}

export default Login
import React,{useState} from 'react'
import { motion } from 'framer-motion'
import registerImage from "../Assets/Login.jpg"
import { useNavigate } from 'react-router-dom'
function Register() {

    const [email,setEmail] = useState("")
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()

    const sendToServer = async(data)=>{
        try {
            setLoading(true)
            const response = await fetch("https://uni-ghana-server.onrender.com/register",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(data)
            })
            const result = await response.json()
            if (result.msg==="User created successfully"){
                alert("Congratulations Account Successfully Created")
                setTimeout(()=>{
                    navigate("/")
                },1000)
            }else if(result.msg==="Username already exist"){
                alert(result.msg)
            }
            setLoading(false)
            // console.log(result)
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
    }

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
     className='flex '>
        <div className='flex-1 flex items-center justify-center register-intro p-10 md:p-0'>
            <div className='p-5'>
                <div>
                    <h1 className='text-4xl'>Registration is very simple</h1>
                    <h1 className='text-lg text-gray-500'>Follow the steps to complete😉</h1>
                </div>
                <form action="" className='mt-5'>
                    <div>
                        <label htmlFor="email" className='font-mono'>Email</label>
                        <input onChange={(e)=>{
                            setEmail(e.target.value)
                        }} type="email" required={true} value={email} className="md:w-[80%] w-full block p-2 border-2 border-black focus:outline-none" name="" id="email" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="username" className='font-mono'>Username</label>
                        <input onChange={(e)=>{
                            setUsername(e.target.value)
                        }} type="text" required={true} value={username} className="md:w-[80%] w-full block p-2 border-2 border-black focus:outline-none" name="" id="username" />
                    </div>
                    <div>
                        <label htmlFor="password" className='font-mono'>Password</label>
                        <input onChange={(e)=>{
                            setPassword(e.target.value)
                        }} type="password" required={true} value={password} className="md:w-[80%] w-full block p-2 border-2 border-black focus:outline-none" name="" id="password" />
                    </div>
                    <div className='my-5'>
                        <label htmlFor="confirm-password" className='font-mono'>Confirm Password</label>
                        <input onChange={(e)=>{
                            setConfirmPassword(e.target.value)
                        }} type="password" required={true} value={confirmPassword} className="md:w-[80%] w-full block p-2 border-2 border-black focus:outline-none" name="" id="confirm-password" />
                    </div>
                    <button onClick={(e)=>{
                        e.preventDefault()
                        if(confirmPassword===password && email && username){
                            const data ={email,username,password}
                            sendToServer(data)
                        }else if(!email || !username){
                            alert("Please provide your information")
                        }
                        else{
                            alert("Passwords do not match")
                        }
                    }} className='mt-10 block bg-black md:w-[80%] w-full text-white text-sm font-mono p-3 hover:bg-gray-700'>{loading?"Loading...":"Register"}</button>
                </form>
            </div>
        </div>
        <div className='flex-1 p-2 hidden md:block' style={{height:"100vh"}}>
            <img src={registerImage} style={{width:"100%",height:"100%",objectFit:"cover"}} alt="" />
        </div>
    </motion.div>
  )
}

export default Register
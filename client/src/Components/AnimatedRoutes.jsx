import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import { useLocation } from 'react-router-dom'
import {AnimatePresence} from "framer-motion"
function AnimatedRoutes() {
    const location = useLocation()
  return (
    <div>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
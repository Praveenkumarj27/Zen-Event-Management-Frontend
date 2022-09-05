import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from "../Navbar/Navbar"

function Dashboard() {
  const navigate=useNavigate()
  let doLogout=()=>{
    localStorage.removeItem("react_app_token")
    navigate("/")
  }
  return (
    <>
   
    {/* <Navbar></Navbar>
    <Sidebar></Sidebar> */}
    <h2>Dashboard Page</h2>
  
   </>
  )
}

export default Dashboard
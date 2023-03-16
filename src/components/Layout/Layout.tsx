import React from 'react'
import './Layout.css'
import Navbar from '../Navbar/Navbar'
import Views from '../Views/Views'
const Layout = () => {
  return (
    <div className='layout'>
        <Navbar />
        <Views />
    </div>
  )
}

export default Layout
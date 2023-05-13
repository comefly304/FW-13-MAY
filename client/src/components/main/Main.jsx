import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'

const Main = () => {
const handlelogout=async()=>{
  localStorage.removeItem("token")
  window.location.reload()
}

  return (
    <div className='main'>
        <nav>
            <ul>
                <Link to="/home" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                <Link to="/products" style={{ textDecoration: 'none' }}> <li>Products</li></Link>
                <Link to="/services" style={{ textDecoration: 'none' }}><li>Services</li></Link>
                <Link to="/about" style={{ textDecoration: 'none' }}> <li>About</li> </Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}> <li>Contact us</li></Link>
                <button className='logout-btn' onClick={handlelogout}>LogOut</button>
            </ul>
        
        </nav>
        </div>
  )
}

export default Main
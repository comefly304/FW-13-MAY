import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Login from './components/login/Login'
import Main from './components/main/Main'
import Signup from './components/signup/Signup'
import Home from './components/main/home/Home'
import { Services } from './components/main/services/Services'
import About from './components/main/about/About'
import Contact from './components/main/Contactus/Contact'
import Producst from './components/main/products/Producst'


const App = () => {
  const user=localStorage.getItem("token")

  return (
    <Routes>
      {user && <Route path='/' element={<Main/>}/> }
       <Route path='/' element={<Navigate replace to="/login"/>}/>
       <Route path="/login" element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
     <Route path='/about' element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Producst/>}/>

    </Routes>
  )
}

export default App
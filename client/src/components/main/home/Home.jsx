import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Home = () => {

  const[inputtext,setInputtext]=useState('')
  const[listitems,setlistitems]=useState([])

const additem=async(e)=>{
  e.preventDefault()
  try{
    const res=await axios.post('')
  }catch(err){
    console.log(err)
  }
}

  return (
    <div>
        <h1>Your Todo-list</h1>
        <form onSubmit={(e)=>additem(e)}>
          <input type='text' placeholder='add a todo' onChange={(e)=>setInputtext(e.target.value)} value={inputtext}/>
          <button type='submit'>Add to database</button>
        </form>
    </div>
  )
}

export default Home
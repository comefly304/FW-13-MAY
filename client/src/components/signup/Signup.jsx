import {React, useState} from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom';
import styles from './Signup.module.css'


function Signup() {

const[formdata,setformdata]=useState({
  firstname:"",
  lastname:"",
  email:"",
  password:""
})
const navigate=useNavigate()

const handlechange=async(event)=>{
  const{name,value}=event.target;
  setformdata((prevdata)=>({...prevdata,
  [name]:value
  }))
}

const handlesubmit=async(e)=>{
  e.preventDefault()
     const res=await axios.post('http://localhost:8100/api/register',formdata)
     console.log(res.data)
     navigate("/login")
}

  return (
    <div className={styles.main}>
      <div className={styles.left_container}>
        <h1>Create a new account</h1>
        <form onSubmit={e=>handlesubmit(e)}>
            <div>
          <input 
          type='text'
          placeholder='First Name'
          name="firstname"
          required
          onChange={handlechange}
          value={formdata.firstname}
          /></div> <div>
           <input 
          type='text'
          placeholder='Last Name'
          name="lastname"
          required
          onChange={handlechange}
          value={formdata.lastname}
          /> </div><div>
           <input 
          type='text'
          placeholder='Email'
          name="email"
          required
          onChange={handlechange}
          value={formdata.email}
          /></div> <div>
           <input 
          type='text'
          placeholder='Password'
          name="password"
          required
          onChange={handlechange}
          value={formdata.password}
          /></div>
         <button type='submit' className={styles.signup_btn}>SignUp</button>
        </form>
      </div>
      <div className={styles.right_container}>
        <h1>Already have an account?</h1>
        <Link to="/login">
          <button className={styles.signin_btn}>SignIn</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;

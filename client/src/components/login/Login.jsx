import {React, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import styles from'./Login.module.css'


function Login() {

const[formdata,setformdata]=useState({
  email:"",
  password:""
})
// const navigate=useNavigate()


const handlechange=async(event)=>{
  const{name,value}=event.target;
  setformdata((prevdata)=>({...prevdata,
  [name]:value
  }))
}

const handlesubmit=async(e)=>{
  e.preventDefault()
     const res=await axios.post('http://localhost:8100/api/login',formdata)
     localStorage.setItem("token",JSON.stringify(res.data.token))
     if(res.data.success===true){
      window.location="/"
     }
    
}
  return (
    <div className={styles.main}>
      <div className={styles.contaier}>
        <h1>Login</h1>
        <form onSubmit={e=>handlesubmit(e)}>
            <div>
           <input 
          type='text'
          placeholder='Email'
          name="email"
          required
          onChange={handlechange}
          value={formdata.email}
          /></div>
          <div>
           <input 
          type='text'
          placeholder='Password'
          name="password"
          required
          onChange={handlechange}
          value={formdata.password}
          />
          </div>
         <button type='submit' className={styles.signin_btn}>SignIn</button>
        </form>
      </div>
      <div className={styles.left_container}>
        <h1>Dont have an account?</h1>
        <Link to="/signup">
          <button className={styles.signup_btn}>SignUp</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

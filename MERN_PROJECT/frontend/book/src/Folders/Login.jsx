import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'
function Login() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [err, seterr] = useState(false)
    const navigate=useNavigate();
    const Login =async (e) => {
        e.preventDefault();
        const user=await axios.post('http://localhost:3000/login',{Email,Password})
          console.log(user.data )
          if(user.data.Token)
             {navigate('/dashboard_book');seterr(false)}
          else 
          {seterr(true)} 
    };
  return (
    <div className='parent'> 
    <div class=" d-flex justify-content-center align-items-center loginbkg" 
     style={{minHeight:'100vh'}}>
      <form className='bookform  p-5'>
      <h3 className='text-white m-4'>ADMIN LOGIN</h3>
      <div class="mb-3">
      <label for="username" class="form-label">Email</label>
      <input type="text" class="form-control" value={Email} onClick={()=>seterr(false)} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" value={Password} onClick={()=>seterr(false)} onChange={(e) => setPassword(e.target.value)}  />
       </div>
      {err&&<p style={{color:'red'}}>User doesnot exist</p>}
      <button type="submit" class="btn btn-success" onClick={Login}>LOGIN</button>
      </form>
      </div>
    </div>
  )
}

export default Login
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css'

function Siginuser() {
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [ThirdName, setThirdName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [err, seterr] = useState(false)
    const navigate=useNavigate();
    const SIGNUP =async (e) => {
        e.preventDefault();
        const user=await axios.post('http://localhost:3000/signin_user',{Email,Password})
          console.log(user.data )
          if(user.data=="Already exist!")
          {seterr(true)} 
             
          else 
          {navigate('/login_user');seterr(false)} 
    };
  return (
    <div className='parent'> 
    <div class=" d-flex justify-content-center align-items-center loginbkg" 
     style={{minHeight:'100vh'}}>
      <form className='bookform  p-5'>
      <h3 className='text-white m-4'>CREATE ACCOUNT</h3>
      <div class="mb-3">
      <label for="username" class="form-label">First Name</label>
      <input type="text" class="form-control" value={FirstName} onClick={()=>seterr(false)} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div class="mb-3">
      <label for="username" class="form-label">Second Name</label>
      <input type="text" class="form-control" value={SecondName} onClick={()=>seterr(false)} onChange={(e) => setSecondName(e.target.value)} />
      </div>
      <div class="mb-3">
      <label for="username" class="form-label">Third Name</label>
      <input type="text" class="form-control" value={ThirdName} onClick={()=>seterr(false)} onChange={(e) => setThirdName(e.target.value)} />
      </div>
      <div class="mb-3">
      <label for="username" class="form-label">Email</label>
      <input type="text" class="form-control" value={Email} onClick={()=>seterr(false)} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" value={Password} onClick={()=>seterr(false)} onChange={(e) => setPassword(e.target.value)}  />
       </div>
      {err&&<p style={{color:'red'}}>User  exist</p>}
      <button type="submit" class="btn btn-success" onClick={SIGNUP}>SIGN UP</button>
      </form>
      </div>
    </div>
  )
}

export default Siginuser
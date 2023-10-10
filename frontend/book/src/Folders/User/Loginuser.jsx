import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../App.css'

function Loginuser() {
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const navigate=useNavigate();
    const Login =async (e) => {
        e.preventDefault();
        const user=await axios.post('http://localhost:3000/login_user',{Email,Password})
          
          if(user.data.Token)
             {navigate('/select_book');
             localStorage.setItem('user', JSON.stringify(user.data));
            }
          else 
          {navigate('/sigin_user')} 
    };
  return (
    <div className='parent'> 
    <div class=" d-flex justify-content-center align-items-center loginbkg" 
     style={{minHeight:'100vh'}}>
      
      
       
      <form className='bookform  p-5'>
      <h3 className='text-white m-4'>USER LOGIN</h3>
      <div class="mb-3">
      <label for="username" class="form-label">Email</label>
      <input type="text" class="form-control" value={Email}  onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" value={Password} onChange={(e) => setPassword(e.target.value)}  />
       </div>
     
      <button type="submit" class="btn btn-success" onClick={Login}>LOGIN</button>
      </form>
      </div>
    </div>
  
  )
}

export default Loginuser
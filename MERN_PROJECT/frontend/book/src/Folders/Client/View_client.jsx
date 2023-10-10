import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sideindex from '../Sideindex'
import axios from 'axios'
import Side from '../Side';
import '../Style_frony.css'

function View_client() {
    const {id}=useParams();
    console.log(id)
    const [currentclient, setcurrentclient] = useState([])
    
    const navigate=useNavigate();

    async function fetchData1(){
   let response=await axios.get(`http://localhost:3000/getclient/${id}`);
   let currentclient1 =await response.data
   setcurrentclient(currentclient1)
   
 }
console.log(currentclient)
 useEffect(()=>{
fetchData1();

},[])
 

    
    const back=(e)=>{
        navigate('/dashboard_client')
    }
  return (
    <div className='d-flex'>
    
    <div className='parent ' style={{width:'100%'}}> 
<div class=" d-flex justify-content-center align-items-center bookform"  style={{minHeight:'100vh'}}>
 <form className='border p-5 text-white' style={{fontWeight:'700'}} >

 <div class="mb-3">
 
 <p>First Name&nbsp;:&nbsp;{currentclient.FirstName}</p>
  </div>
  <div class="mb-3">
 <p  class="form-label">Last Name&nbsp;:&nbsp;{currentclient.LastName}</p>

 </div>
 <div class="mb-3">
 <p  class="form-label">Email&nbsp;:&nbsp;{currentclient.Email}</p>
 
 </div>


  <div class="mb-3">
 <p class="form-label">Phone Number&nbsp;:&nbsp;{currentclient.PhoneNumber}</p>

 </div>
 <div class="mb-3">
 <label class="form-label">Address&nbsp;:&nbsp;{currentclient.Address}</label>

  </div>
 <button type="submit" class="btn btn-secondary" onClick={back}>BACK</button>
 </form>
 </div>
</div>
</div>
  )
}

export default View_client
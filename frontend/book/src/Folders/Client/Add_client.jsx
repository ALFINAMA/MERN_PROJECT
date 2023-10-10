import axios from 'axios'
import React, { useState } from 'react'
import Sideindex from '../Sideindex'
import '../Style_frony.css'
import Side from '../Side'

function Add_client() {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Address, setAddress] = useState("")
    const addclient =async (e) => {
        e.preventDefault();
        const user=await axios.post('http://localhost:3000/createclient',{FirstName,
        LastName,
        Email,
         PhoneNumber,
         Address})
        console.log(user.data)
       
        
    };
  return (
    <div className='d-flex'>
      <div ><Side/></div>
        <div className='parent ' style={{width:'100%'}}> 
      <div class=" d-flex justify-content-center align-items-center bookform"  style={{minHeight:'100vh'}}>
      <form className='bookform border p-3' >
        
        <div className="row">
          <div className="col">
          <label  class="form-label m-3">First Name</label>
          <input type="text" class="form-control" value={FirstName} onChange={(e) => setFirstName(e.target.value)} required  />     
          </div>
          <div className="col">
          <label  class="form-label m-3">Last Name</label>
      <input type="text" class="form-control" value={LastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
        </div>
     
      

      
     
      <label  class="form-label m-3">Email</label>
      <input type="text" class="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} required />
      
       <div className="row">
        <div className="col">
        <label class="form-label m-3">Phone Number</label>
       <input type="text" class="form-control" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required /> 
        </div>
        <div className="col">
        <label class="form-label m-3">Address</label>
      <input type="text" class="form-control" value={Address} onChange={(e) => setAddress(e.target.value)} required  />
        </div>
       </div>
      
     
      
      
 
      
    
      <button type="submit" class="btn btn-secondary m-3" onClick={addclient}>Add Client</button>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Add_client
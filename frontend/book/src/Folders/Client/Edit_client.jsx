import React, { useEffect, useState } from 'react'
import Sideindex from '../Sideindex'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Side from '../Side';
import '../Style_frony.css'

function Edit_client() {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [PhoneNumber, setPhoneNumber] = useState("")
    const [Address, setAddress] = useState("")
    const [currentclient, setcurrentclient] = useState([])

    const {id}=useParams();
    const navigate=useNavigate();
    async function fetchData2(){
        let response=await axios.get(`http://localhost:3000/getclient/${id}`);
        let currentclient2 =await response.data
        setcurrentclient(currentclient2)
        
      }
     
      useEffect(()=>{
     fetchData2();
     
     },[])
    
     useEffect(() => {
     const {FirstName,
        LastName,
        Email,
         PhoneNumber,
         Address}=currentclient;
    setFirstName(FirstName);setLastName(LastName);setEmail(Email);setAddress(Address);setPhoneNumber(PhoneNumber);
    
       
     }, [currentclient])
    
    
    

    const save =async (e) => {
        e.preventDefault();
        const user=await axios.put(`http://localhost:3000/updateclient/${id}`,{
            FirstName,
            LastName,
            Email,
             PhoneNumber,
             Address})
          console.log(user.data)
          setFirstName("");setLastName("");setEmail("");setAddress("");setPhoneNumber("");
    };
 
    const back=(e)=>{
      navigate('/dashboard_client')
  }
  return (
    <div className='d-flex'>
   
         <div className='parent ' style={{width:'100%'}}> 
    <div class=" d-flex justify-content-center align-items-center bookform"  style={{minHeight:'100vh'}}>
      <form className='border p-3 text-white'>
     
      <div className="row">
          <div className="col">
          <label  class="form-label m-3">First Name</label>
          <input type="text" class="form-control" value={FirstName} onChange={(e) => setFirstName(e.target.value)}  />     
          </div>
          <div className="col">
          <label  class="form-label m-3">Last Name</label>
      <input type="text" class="form-control" value={LastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
     
        <label  class="form-label m-3">Email</label>
      <input type="text" class="form-control" value={Email} onChange={(e) => setEmail(e.target.value)} />
      
    


       <div className="row">
        <div className="col">
        <label class="form-label m-3">Phone Number</label>
       <input type="number" class="form-control" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} /> 
        </div>
        <div className="col">
        <label class="form-label m-3">Address</label>
      <input type="number" class="form-control" value={Address} onChange={(e) => setAddress(e.target.value)}  />
        </div>
       </div>
       <button type="submit" class="btn btn-secondary m-3" onClick={save}>Update</button>
       <button type="submit" class="btn btn-secondary m-3 " onClick={back}>Back</button>
       </form>

      </div>
    </div>
    </div>
  )
}

export default Edit_client
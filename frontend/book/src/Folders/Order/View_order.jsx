import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sideindex from '../Sideindex'
import axios from 'axios'
import Side from '../Side';
import '../Style_frony.css'

function View_order() {
    const {id}=useParams();
    console.log(id)
    const [currentorder, setcurrentorder] = useState([])
    
    const navigate=useNavigate();

    async function fetchData1(){
   let response=await axios.get(`http://localhost:3000/getorder/${id}`);
   let currentorder1 =await response.data
   setcurrentorder(currentorder1)
   
 }
console.log(currentorder)
 useEffect(()=>{
fetchData1();

},[])
 

    
    const back=(e)=>{
        navigate('/dashboard_orders')
    }
  return (
    <div className='d-flex'>
    
    <div className='parent ' style={{width:'100%'}}> 
<div class=" d-flex justify-content-center align-items-center bookform"  style={{minHeight:'100vh'}}>
 <form className='border p-5 text-white' style={{fontWeight:'700'}} >

 <div class="mb-3">
 
 <p>Book Name&nbsp;:&nbsp;{currentorder.BookName}</p>
  </div>
  <div class="mb-3">
 <p  class="form-label">Customer Name&nbsp;:&nbsp;{currentorder.FirstName}</p>

 </div>
 <div class="mb-3">
 <p  class="form-label">Quantity&nbsp;:&nbsp;{currentorder.Quantity}</p>
 
 </div>


  <div class="mb-3">
 <p class="form-label">Unit Price&nbsp;:&nbsp;{currentorder.Unitprice}</p>

 </div>
 <div class="mb-3">
 <label class="form-label">Total Amount&nbsp;:&nbsp;{currentorder.TotalAmount}</label>

  </div>
 <button type="submit" class="btn btn-secondary" onClick={back}>BACK</button>
 </form>
 </div>
</div>
</div>
  )
}

export default View_order
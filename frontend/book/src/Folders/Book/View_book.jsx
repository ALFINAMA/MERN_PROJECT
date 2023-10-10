import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sideindex from '../Sideindex'
import axios from 'axios'
import Side from '../Side';
import '../Style_frony.css'
function View_book() {
    const {id}=useParams();
    console.log(id)
    const [currentbook, setcurrentbook] = useState([])
    
    const navigate=useNavigate();

    async function fetchData1(){
   let response=await axios.get(`http://localhost:3000/getbook/${id}`);
   let currentbook1 =await response.data
   setcurrentbook(currentbook1)
   
 }
console.log(currentbook)
 useEffect(()=>{
fetchData1();

},[])
 

    
    const back=(e)=>{
        navigate('/dashboard_book')
    }
  return (
  
    <div className='d-flex'>
    
          <div className='parent ' style={{width:'100%'}}> 
     <div class=" d-flex justify-content-center align-items-center bookform"  style={{minHeight:'100vh'}}>
       <form className='border p-5 text-white' style={{fontWeight:'700'}} >
      
       <div class="mb-3">
       
       <p>Book Name&nbsp;:&nbsp;{currentbook.BookName}</p>
        </div>
        <div class="mb-3">
       <p  class="form-label">Publication Name&nbsp;:&nbsp;{currentbook.PublicationName}</p>
      
       </div>
       <div class="mb-3">
       <p  class="form-label">Author Name&nbsp;:&nbsp;{currentbook.AuthorName}</p>
       
       </div>
     
       <div class="mb-3">
       <p class="form-label">Availability&nbsp;:&nbsp;{currentbook.Availability?"yes":"no"}</p>
     
        
        </div>
        <div class="mb-3">
       <p class="form-label">Price&nbsp;:&nbsp;{currentbook.Price}</p>
    
       </div>
       <div class="mb-3">
       <label class="form-label">Year&nbsp;:&nbsp;{currentbook.Year}</label>
      
        </div>
       <button type="submit" class="btn btn-secondary" onClick={back}>BACK</button>
       </form>
       </div>
     </div>
     </div>
  )
}

export default View_book
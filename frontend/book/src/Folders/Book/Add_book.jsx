import axios from 'axios'
import React, { useState } from 'react'
import Sideindex from '../Sideindex'
import '../Style_frony.css'
import Side from '../Side'
import { useAccordionButton } from 'react-bootstrap'

function Add_book() {
    const [AuthorName,setAuthorName] = useState("")
    const [BookName, setBookName] = useState("")
    const [PublicationName, setPublicationName] = useState("")
    const [Availability, setAvailability] = useState(null)
    const [Price, setPrice] = useState(0)
    const [Year, setYear] = useState(0)
  

    const [isYesChecked, setIsYesChecked] = useState(false);
    const [isNoChecked, setIsNoChecked] = useState(false);

    const addBook =async (e) => {
        e.preventDefault();
        const user=await axios.post('http://localhost:3000/createbook',{AuthorName,BookName,PublicationName,Availability,Price,Year})
        console.log(user.data)
        setAuthorName("");setBookName("");setPublicationName("");setAvailability(null);setPrice(0);setYear(0);
        
    };
  
    const handleYesCheckboxChange = () => {
      
      setIsYesChecked(!isYesChecked);
      setAvailability(true);
      setIsNoChecked(false); // Uncheck "No"
    };
  
    const handleNoCheckboxChange = () => {
      setIsNoChecked(!isNoChecked);
      setAvailability(false)
      setIsYesChecked(false); // Uncheck "Yes"
    };
   
  return (

      <div className='d-flex'>
      <div ><Side/></div>
        <div className='parent ' style={{width:'100%'}}> 
      <div class=" d-flex justify-content-center align-items-center bookform"  style={{minHeight:'100vh'}}>
      <form className='bookform border p-3' >
        
        <div className="row">
          <div className="col">
          <label  class="form-label m-3">Book Name</label>
          <input type="text" class="form-control" value={BookName} onChange={(e) => setBookName(e.target.value)} required  />     
          </div>
          <div className="col">
          <label  class="form-label m-3">Publication Name</label>
      <input type="text" class="form-control" value={PublicationName} onChange={(e) => setPublicationName(e.target.value)} required />
          </div>
        </div>
     
      

      
     
      <label  class="form-label m-3">Author Name</label>
      <input type="text" class="form-control" value={AuthorName} onChange={(e) => setAuthorName(e.target.value)} required />
      
      <label  class="form-label m-3">Availability</label>
     
       <div className=" form-check form-check-inline ">
       <input type="checkbox" className="form-check-input "
                value={Availability}
                onChange={handleYesCheckboxChange} checked={Availability===true}  />
        <label className="form-check-label">  Yes</label>
       </div>

       <div className="form-check form-check-inline">
       <input type="checkbox" className="form-check-input" 
               value={Availability}
               onChange={handleNoCheckboxChange} checked={Availability===false}  />
        <label className="form-check-label"> No</label>
       </div>

       <div className="row">
        <div className="col">
        <label class="form-label m-3">Price</label>
       <input type="number" class="form-control" value={Price} onChange={(e) => setPrice(e.target.value)} required /> 
        </div>
        <div className="col">
        <label class="form-label m-3">Year</label>
      <input type="number" class="form-control" value={Year} onChange={(e) => setYear(e.target.value)} required  />
        </div>
       </div>
      
     
      
      
 
      
    
      <button type="submit" class="btn btn-secondary m-3" onClick={addBook}>Add Book</button>
      </form>
      </div>
    </div>
    </div>
   
  )
}

export default Add_book
import React, { useEffect, useState } from 'react'
import Sideindex from '../Sideindex'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Side from '../Side';
import '../Style_frony.css'
function Edit_book() {
    const [currentbook, setcurrentbook] = useState([])
    const [AuthorName, setAuthorName] = useState("")
    const [BookName, setBookName] = useState("")
    const [PublicationName, setPublicationName] = useState("")
    const [Availability, setAvailability] = useState("")
    const [Price, setPrice] = useState(0)
    const [Year, setYear] = useState(0)

    

    const {id}=useParams();
    const navigate=useNavigate();
    async function fetchData2(){
        let response=await axios.get(`http://localhost:3000/getbook/${id}`);
        let currentbook2 =await response.data
        setcurrentbook(currentbook2)
        
      }
     console.log(currentbook)
      useEffect(()=>{
     fetchData2();
     
     },[])
    
     useEffect(() => {
     const {AuthorName,BookName,PublicationName,Availability,Price,Year}=currentbook;
     setAuthorName(AuthorName);setBookName(BookName);setPublicationName(PublicationName);
     setAvailability(Availability);setPrice(Price);setYear(Year);
    
       
     }, [currentbook])
    
    
    

    const save =async (e) => {
        e.preventDefault();
        const user=await axios.put(`http://localhost:3000/updatebook/${id}`,{
            AuthorName,BookName,PublicationName,
            Availability,Price,Year})
          console.log(user.data)
          setAuthorName("");setBookName("");setPublicationName("");setAvailability("");setPrice(0);setYear(0)
    };
 
    const back=(e)=>{
      navigate('/dashboard_book')
  }
  const handleYesCheckboxChange = () => {
   
    setAvailability(true);
 
  };

  const handleNoCheckboxChange = () => {
   
    setAvailability(false)
    
  };
  return (
    <div className='d-flex'>
   
         <div className='parent ' style={{width:'100%'}}> 
    <div class=" d-flex justify-content-center align-items-center bookform"  style={{minHeight:'100vh'}}>
      <form className='border p-3 text-white'>
     
      <div className="row">
          <div className="col">
          <label  class="form-label m-3">Book Name</label>
          <input type="text" class="form-control" value={BookName} onChange={(e) => setBookName(e.target.value)}  />     
          </div>
          <div className="col">
          <label  class="form-label m-3">Publication Name</label>
      <input type="text" class="form-control" value={PublicationName} onChange={(e) => setPublicationName(e.target.value)} />
          </div>
        </div>
     
        <label  class="form-label m-3">Author Name</label>
      <input type="text" class="form-control" value={AuthorName} onChange={(e) => setAuthorName(e.target.value)} />
      
      <label  class="form-label m-3">Availability</label>
     
      <div className=" form-check form-check-inline ">
       <input type="checkbox" className="form-check-input " value={Availability}
          onChange={handleYesCheckboxChange} checked={Availability===true} />
        <label className="form-check-label">  Yes</label>
       </div>

       <div className="form-check form-check-inline">
       <input type="checkbox" className="form-check-input" value={Availability}
          onChange={handleNoCheckboxChange}  checked={Availability===false}/>
        <label className="form-check-label"> No</label>
       </div>


       <div className="row">
        <div className="col">
        <label class="form-label m-3">Price</label>
       <input type="number" class="form-control" value={Price} onChange={(e) => setPrice(e.target.value)} /> 
        </div>
        <div className="col">
        <label class="form-label m-3">Year</label>
      <input type="number" class="form-control" value={Year} onChange={(e) => setYear(e.target.value)}  />
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

export default Edit_book
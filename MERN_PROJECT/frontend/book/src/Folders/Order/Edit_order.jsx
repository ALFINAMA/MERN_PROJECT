import React, { useEffect, useState } from 'react'
import Sideindex from '../Sideindex'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Side from '../Side';
import '../Style_frony.css'

function Edit_order() {
  const [BookName, setBookName] = useState('');

  const [FirstName,setFirstName ] = useState("")
  const [Quantity, setQuantity] = useState(0)
  const [Unitprice, setUnitprice] = useState("")
  const [TotalAmount, setTotalAmount] = useState("")
  const [currentorder, setcurrentorder] = useState({})

  const [options1, setOptions1] = useState([]);
  const [options, setOptions] = useState([]);
  const {id}=useParams();
  const navigate=useNavigate();
  async function fetchData2(){
      let response=await axios.get(`http://localhost:3000/getorder/${id}`);
      let currentorder2 =await response.data
      setcurrentorder(currentorder2)
      
    }
   
    useEffect(()=>{
   fetchData2();
   
   },[])
  
   useEffect(() => {
   const {BookName,
    FirstName,
  
   Quantity,
    Unitprice,
    TotalAmount}=currentorder;
setBookName(BookName);setFirstName(FirstName);setQuantity(Quantity);setUnitprice(Unitprice);setTotalAmount(TotalAmount);
  
     
   }, [currentorder])
   console.log(BookName)
  
   async function fetchbooknames(){
    let response=await axios.get("http://localhost:3000/getAllbooksname");
    let names =await response.data
    setOptions(names)
    
   }
   async function fetchclientnames(){
    let response=await axios.get("http://localhost:3000/getAllclientsname");
    let names =await response.data
    setOptions1(names)
    
   }
  
   useEffect(()=>{
   fetchbooknames();
   fetchclientnames();
   },[])

   useEffect(() => {
    // Calculate total amount whenever Quantity or Unitprice changes
    if (Quantity && Unitprice) {
      setTotalAmount(Quantity * Unitprice);
    } else {
      setTotalAmount(0);
    }
  }, [Quantity, Unitprice]);
   const filterselectedbook = async () => {
    if (BookName) {
      const response = await axios.get(`http://localhost:3000/filterbyname/${BookName}`);
    let price=response.data
    console.log(price)
    setUnitprice(price);
    }
   
  };

   const handleSelectChange = (event) => {
    setBookName(event.target.value);
    
    filterselectedbook();
  };
  const handleSelectChange1 = (event) => {
    setFirstName(event.target.value);
    
    
  };
  
  const quantity=(e)=>{
    
   let val= e.target.value
   if(val>0)
   {
    setQuantity(val)
   }
    else{
      setQuantity(0)
    }
  }
 

  const save =async (e) => {
      e.preventDefault();
      const user=await axios.put(`http://localhost:3000/updateorder/${id}`,{
        BookName,
        FirstName,
       Quantity,
        Unitprice,
        TotalAmount})
        console.log(user.data)
     setBookName("");setFirstName("");setQuantity(0);setUnitprice("");setTotalAmount("");
  };

  const back=(e)=>{
    navigate('/dashboard_orders')
}
  return (
    <div className='d-flex'>
    <div ><Side/></div>
      <div className='parent ' style={{width:'100%'}}> 
    <div class=" d-flex justify-content-center align-items-center bookform"  style={{minHeight:'100vh'}}>
    <form className='bookform border p-3' >
      
      <div className="row">
        <div className="col">
        <label  class="form-label m-3">Book Name</label>
        <select className='form-control'
        id="dropdown"
        name="dropdown"
        value={BookName}
        onChange={handleSelectChange}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.BookName}>
            {option.BookName}
          </option>
        ))}
      </select>


        </div>
        <div className="col">
        <label  class="form-label m-3">Customer Name</label>
        <select className='form-control'
        id="dropdown"
        value={FirstName}
      
        onChange={handleSelectChange1}
      >
        <option value="">Select an option</option>
        {options1.map((option) => (
          <option key={option._id} value={option.FirstName}>
            {option.FirstName}
          </option>
        ))}
      </select>
        </div>
      </div>
   
    

    
   
   
    
     <div className="row">
      <div className="col">
      <label  class="form-label m-3">Quantity</label>
    <input type="Number" class="form-control" value={Quantity} onChange={quantity}  required />
      </div>
      <div className="col">
      <label class="form-label m-3">Unit Price </label>
     <input type="text" class="form-control" value={Unitprice} onChange={(e) => setUnitprice(e.target.value)} disabled /> 
      </div>
      <div className="col">
      <label class="form-label m-3">Total Amount</label>
    <input type="text" class="form-control" value={TotalAmount} onChange={(e) => setTotalAmount(e.target.value)} disabled  />
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

export default Edit_order
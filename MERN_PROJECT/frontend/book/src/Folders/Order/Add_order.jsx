import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sideindex from '../Sideindex'
import '../Style_frony.css'
import Side from '../Side'

function Add_order() {
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [BookName, setBookName] = useState('');

  const [FirstName, setFirstName] = useState("")
  const [Quantity, setQuantity] = useState(0)
  const [Unitprice, setUnitprice] = useState("")
  const [TotalAmount, setTotalAmount] = useState("")
  

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
   fetchclientnames()
   },[])

   useEffect(() => {
    // Calculate total amount whenever Quantity or Unitprice changes
    if (Quantity && Unitprice) {
      setTotalAmount(Quantity * Unitprice);
    } else {
      setTotalAmount(0);
    }
  }, [Quantity, Unitprice]);

   const filterselectedbook = async (x) => {
   
    if (x) {
      const response = await axios.get(`http://localhost:3000/filterbyname/${x}`);
      
      
    let price=response.data
  
    setUnitprice(price);
  
    }
   
  };

   const handleSelectChange = (event) => {
    setBookName(event.target.value);
    let bknme=event.target.value;
    filterselectedbook(bknme)
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
  const addorder =async (e) => {
    e.preventDefault();
    const user=await axios.post('http://localhost:3000/createorders',{BookName,
    FirstName,
   Quantity,
    Unitprice,
    TotalAmount})
    console.log(user.data)
   
    
};
console.log(Quantity,Unitprice,TotalAmount)
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
        name="dropdown"
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
    <input type="text" class="form-control" value={TotalAmount} disabled  />
      </div>
     </div>
    
   
    
    

    
  
    <button type="submit" class="btn btn-secondary m-3" onClick={addorder}>Add order</button>
    </form>
    </div>
  </div>
  </div>
  )
}

export default Add_order
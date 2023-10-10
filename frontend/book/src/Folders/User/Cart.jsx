import React, { useEffect, useState } from 'react'
import './styleuser.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
function Cart() {
  let user= JSON.parse(localStorage.getItem('user')) ;
    const [carts, setcarts] = useState([])
    const navigate=useNavigate();
    async function fetchData(){
      let response=await axios.get(`http://localhost:3000/getcart1/${user.id}`);
        let cart =await response.data
        setcarts(cart)
       
      }
      
      useEffect(()=>{
       fetchData();
     
     },[])
     const getTotalPrice = () => {
        return carts.reduce((total, item) => total + item.Price * item.Quantity, 0);
      };
      const getTotalQuantity = () => {
        return carts.reduce((total, item) => total + item.Quantity, 0);
      };
     
      const remove = async (id) => {
        if (id) {
          const response = await axios.delete(`http://localhost:3000/deletebookcart/${id}`);
          fetchData();
        }
         
      };
        
      const deleteproducts = async () => {
       debugger;
          const response = await axios.delete('http://localhost:3000/delete_all');
         
          fetchData();
        
         
      };
      
      const increment = async (id,item,num) => {
        debugger;
        if(num<1){
            remove(id)
        }
        else if (num>=1) {
           let BookName=item.BookName;
   
            let Price=item.Price;
            let Quantity=item.Quantity+1;
            const response = await axios.put(`http://localhost:3000/increment/${id}`,{BookName,Price,Quantity});
            fetchData();
          }
         
      };
      const decrement = async (id,item,num) => {
        debugger;
        if(num<1){
            remove(id)
        }
        else if (num>=1) {
            let BookName=item.BookName;
    
             let Price=item.Price;
             let Quantity=item.Quantity-1;
             const response = await axios.put(`http://localhost:3000/increment/${id}`,{BookName,Price,Quantity});
             fetchData();
           }
      };
      const back=()=>{
        navigate('/select_book')
    }
    
  return (
  <div className=' loginbkg'  style={{ minHeight: '97vh',color:'white'}}>
    <div className="row justify-content-center" >
        <div className="col-12 " style={{margin:'30px'}}>
            <h1 className='text-center'>MY CART({getTotalQuantity()})</h1>
            {carts.length==0 && 
            <div className='d-flex justify-content-center align-items-center' style={{flexDirection:'column'}}>
                <h4 className='text-center'>My Cart is empty</h4>
            <button onClick={back} className='btn btn-warning 
            '>BACK </button></div>}
           { carts.length>0 && <table className='  carttable '>
               
                <tr>
                      <th>Book Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
               
               
             {
                carts.map((item,index)=>{
                    return(

                    <tr key={index}>
                      <td>{item.BookName}</td>
                      <td>{item.Price}</td>
                      <td>
                        <button className='btn btn-secondary ms-2' onClick={()=>decrement(item._id,item,item.Quantity-1)}>-</button>
                        &nbsp;{item.Quantity}
                        <button className='btn btn-secondary ms-2' onClick={()=>increment(item._id,item,item.Quantity+1)}>+</button>
                        </td>
                      <td>
                        <button className='btn btn-danger ms-2 ' onClick={()=>remove(item._id)}>Remove</button>
                      </td>
                    </tr>
                 ) })
             }
            
            </table>}
           
        </div>
       {carts.length>0 &&
       <div>
         <div className="d-flex">
  <h2>Total Amount:{getTotalPrice()}</h2>
  </div>
  <div className="button">
  <button onClick={deleteproducts}  className='btn btn-warning ms-5'>CLEAR ALL</button>
  <button onClick={back} className='btn btn-warning ms-5'>BACK </button>
  </div>
       </div>
        }
 
    

    </div>

  </div>
  )
}

export default Cart
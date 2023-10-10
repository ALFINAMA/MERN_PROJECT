import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sideindex from '../Sideindex';
import { AiOutlineFolderView } from 'react-icons/ai';
import { FaTrash,FaEdit,FaSearch } from 'react-icons/fa';
import { Link, useNavigate,  } from 'react-router-dom';
import '../Style_frony.css'
import { Button, Modal } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Side from '../Side';


function Order_dashboard() {
  const [Orders, setOrders] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
const itemsPerPage = 5; // Number of items to display per page
const pageCount = Math.ceil(Orders.length / itemsPerPage);
const [showDeleteModal, setShowDeleteModal] = useState(false); // State for modal visibility
const [OrderToDelete, setOrderToDelete] = useState(null);

 
  const navigate=useNavigate();
  async function fetchData(){
 let response=await axios.get("http://localhost:3000/getorders");
 let odr =await response.data
 setOrders(odr)
 
}

useEffect(()=>{
fetchData();

},[])

const deleteorder = async () => {
if (OrderToDelete) {
  const response = await axios.delete(`http://localhost:3000/deleteorder/${OrderToDelete}`);
  fetchData();
}
setShowDeleteModal(false); 
};
const handlePageChange = ({ selected }) => {
setCurrentPage(selected);
};


const offset = currentPage * itemsPerPage;
const currentOrders = Orders.slice(offset, offset + itemsPerPage);


  return (
    <div className='d-flex bckgd'>
    <div ><Side/></div>
     <div className='booktable  d-flex justify-content-center align-items-center  ' style={{flexDirection:'column'}}>
   
       
      <table className='table table-bordered   ' style={{width:'80%'}} >
         <thead>
            <tr>
             <td>Book Name</td>
             <td>Custome Name</td>
             <td>Quantity</td>
            
          
             <td>Unitprice</td>
             <td>TotalAmount</td>
             <td>Actions</td>
            </tr>
         </thead>
         <tbody>
         {currentOrders.map((data,index)=>
               <tr>
               <td>{data.BookName}</td>
               <td>{data.FirstName}</td>
               <td>{data.Quantity}</td>
               <td>{data.Unitprice }</td>
               
               <td>{data.TotalAmount}</td>
               <td>
                 <Link to={`/vieworder/${data._id}`}> <FaSearch color='white' /></Link>&nbsp;
                  <Link to={`/editorder/${data._id}`}>  <FaEdit color='white'/></Link>&nbsp;
                  <FaTrash
                   color='white'
                   onClick={() => {
                     setOrderToDelete(data._id); // Set the book to be deleted
                     setShowDeleteModal(true); // Show the delete confirmation modal
                   }}
                 />
                      
               </td>
             </tr>
         )}
         
         </tbody>
      </table>
      <ReactPaginate
         previousLabel={'Previous'}
         nextLabel={'Next'}
         breakLabel={'...'}
         pageCount={pageCount}
         marginPagesDisplayed={2}
         pageRangeDisplayed={5}
         onPageChange={handlePageChange}
         containerClassName={'pagination'}
         activeClassName={'active'}
         color='WHITE'
       />
           <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
         <Modal.Header closeButton>
           <Modal.Title>Confirm Delete</Modal.Title>
         </Modal.Header>
         <Modal.Body>Are you sure you want to delete the record?</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
             Close
           </Button>
           <Button variant="danger" onClick={deleteorder}>
             Delete
           </Button>
         </Modal.Footer>
       </Modal>
     </div>
     
     
     </div>
  )
}

export default Order_dashboard
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


function Client_dashboard() {
    const [Clients, setClients] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(Clients.length / itemsPerPage);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for modal visibility
  const [clientToDelete, setClientToDelete] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
   
    const navigate=useNavigate();
    async function fetchData(){
   let response=await axios.get("http://localhost:3000/getclients");
   let client =await response.data
   setClients(client)
   
 }
 
 useEffect(()=>{
  fetchData();

},[])

const deleteclient = async () => {
  if (clientToDelete) {
    const response = await axios.delete(`http://localhost:3000/deleteclient/${clientToDelete}`);
    fetchData();
  }
  setShowDeleteModal(false); 
};
 const handlePageChange = ({ selected }) => {
  setCurrentPage(selected);
};
const filteredclients = Clients.filter((data) =>
data.FirstName.toLowerCase().includes(searchQuery.toLowerCase())
);

const offset = currentPage * itemsPerPage;
const currentclients = filteredclients.slice(offset, offset + itemsPerPage);
  return (
    <div className='d-flex bckgd'>
    <div ><Side/></div>
     <div className='booktable  d-flex justify-content-center align-items-center  ' style={{flexDirection:'column'}}>
     <div className="search-box  mb-3" style={{width:'80%'}}>
         <input className='form-control'
           type="text"
           placeholder="Search by name"
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
         />
         
       </div>
       
      <table className='table table-bordered   ' style={{width:'80%'}} >
         <thead>
            <tr>
             <td>First Name</td>
             <td>Last Name</td>
             <td>Email</td>
            
             <td>Phone Number</td>
             <td>Address</td>
             <td>Action</td>
            </tr>
         </thead>
         <tbody>
         {currentclients.map((data,index)=>
               <tr>
               <td>{data.FirstName}</td>
               <td>{data.LastName}</td>
               <td>{data.Email}</td>
               <td>{data.PhoneNumber }</td>
               
               <td>{data.Address}</td>
               <td>
                 <Link to={`/viewclient/${data._id}`}> <FaSearch color='white' /></Link>&nbsp;
                  <Link to={`/editclient/${data._id}`}>  <FaEdit color='white'/></Link>&nbsp;
                  <FaTrash
                   color='white'
                   onClick={() => {
                     setClientToDelete(data._id); // Set the book to be deleted
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
           <Button variant="danger" onClick={deleteclient}>
             Delete
           </Button>
         </Modal.Footer>
       </Modal>
     </div>
     
     
     </div>
  )
}

export default Client_dashboard
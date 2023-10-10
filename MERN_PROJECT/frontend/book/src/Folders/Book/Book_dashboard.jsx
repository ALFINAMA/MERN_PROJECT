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

function Book_dashboard() {
    const [Books, setBooks] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5; // Number of items to display per page
  const pageCount = Math.ceil(Books.length / itemsPerPage);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for modal visibility
  const [bookToDelete, setBookToDelete] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
   
    const navigate=useNavigate();
    async function fetchData(){
   let response=await axios.get("http://localhost:3000/getbooks");
   let book =await response.data
   setBooks(book)
   
 }
 
 useEffect(()=>{
  fetchData();

},[])

const deleteBook = async () => {
  if (bookToDelete) {
    const response = await axios.delete(`http://localhost:3000/deletebook/${bookToDelete}`);
    fetchData();
  }
  setShowDeleteModal(false); // Close the modal
};
 const handlePageChange = ({ selected }) => {
  setCurrentPage(selected);
};
const filteredBooks = Books.filter((data) =>
data.BookName.toLowerCase().includes(searchQuery.toLowerCase())
);

const offset = currentPage * itemsPerPage;
const currentBooks = filteredBooks.slice(offset, offset + itemsPerPage);
 
console.log(pageCount,itemsPerPage,offset)
  return (
    <div className='d-flex bckgd'>
   <div ><Side/></div>
    <div className='booktable  d-flex justify-content-center align-items-center  ' style={{flexDirection:'column'}}>
    <div className="search-box  mb-3" style={{width:'80%'}}>
        <input className='form-control'
          type="text"
          placeholder="Search by book name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
      </div>
      
     <table className='table table-bordered   ' style={{width:'80%'}} >
        <thead>
           <tr>
            <td>Book Name</td>
            <td>Publication Name</td>
            <td>Author Name</td>
            <td>Year of Publication</td>
            <td>Availablility</td>
            <td>Price</td>
            <td>Actions</td>
           </tr>
        </thead>
        <tbody>
        {currentBooks.map((data,index)=>
              <tr>
              <td>{data.BookName}</td>
              <td>{data.PublicationName}</td>
              <td>{data.AuthorName}</td>
              <td>{data.Year }</td>
              <td>{data.Availability?"yes":"no"}</td>
              <td>{data.Price}</td>
              <td>
                <Link to={`/viewbook/${data._id}`}> <FaSearch color='white' /></Link>&nbsp;
                 <Link to={`/editbook/${data._id}`}>  <FaEdit color='white'/></Link>&nbsp;
                 <FaTrash
                  color='white'
                  onClick={() => {
                    setBookToDelete(data._id); // Set the book to be deleted
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
          <Button variant="danger" onClick={deleteBook}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    
    
    </div>
  )
}

export default Book_dashboard
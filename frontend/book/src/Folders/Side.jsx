import React, { useState } from 'react'
import './style.css'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsBook, BsDash } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
function Side() {

    const [isOpen, setIsOpen] = useState(false);


    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    
  return (
    <div>
       
        <div className="navbar-menu" onClick={toggleMenu}>
        {isOpen ? <FaTimes  color='white' /> : <FaBars color='white' />}
        </div>
        <div className={isOpen?'sidebar-menu1':'sidebar-menu'}>
    <div className='mb-5'>
    <Link  to='/dashboard_book' ><BsBook/><a>BOOK</a></Link><br></br>
     <Link to='/addbook'><AiOutlinePlusCircle/><a>Add Book</a></Link>
    </div>
    <div className='mb-5'>
    <Link to='/dashboard_client'><BsBook/><a>CLIENT</a></Link><br></br>
     <Link to='/addclient'><AiOutlinePlusCircle/><a>Add Client</a></Link>
    </div>
    <div className='mb-5'>
    <Link to='/dashboard_orders'><BsBook/><a>ORDERS</a></Link><br></br>
     <Link to='/addorders'><AiOutlinePlusCircle/><a>Add Orders</a></Link>
    </div>

    <div className='mb-5'>
    <Link to='/'><BsBook/><a>Logout</a></Link><br></br>
    
    </div>
       
      </div>
    
      
      
     
    </div>
  )
}

export default Side
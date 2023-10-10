import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { FaHome, FaUser, FaFolder, FaQuestionCircle, FaBars } from 'react-icons/fa';
import { Link, Route, Routes } from 'react-router-dom';
import './Style_frony.css'
import { BsBook } from 'react-icons/bs';
import Book_dashboard from './Book/Book_dashboard';


function Sideindex() {
 


  return (
    <div style={{ display: 'flex',height:'100vh' }}  className='app'>
    
     
        <Menu>
          <MenuItem className="menu1">
            <h2>MY BOOKS</h2>
          </MenuItem>
          
          <MenuItem
            component={<Link to="/dashboard" className="link" />}
            icon={<BsBook />}
          > <h6>BOOKS</h6> </MenuItem>
           <MenuItem
            component={<Link to="/addbook" className="link" />}
            icon={<BsBook />}
          > 
           Add Book </MenuItem>
         
        </Menu>
     
      
      
 
  </div>
  )
}

export default Sideindex

import axios from 'axios';
import './App.css';
import Book_dashboard from './Folders/Book/Book_dashboard';
import Login from './Folders/Login';

import { useEffect, useState } from 'react';
import Add_book from './Folders/Book/Add_book';
import View_book from './Folders/Book/View_book';
import Edit_book from './Folders/Book/Edit_book';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from 'react-pro-sidebar';
import Sideindex from './Folders/Sideindex';
import Home from './Folders/Home';
import Side from './Folders/Side';
import Client_dashboard from './Folders/Client/Client_dashboard';
import Add_client from './Folders/Client/Add_client';

import Edit_client from './Folders/Client/Edit_client';
import View_client from './Folders/Client/View_client';
import Order_dashboard from './Folders/Order/Order_dashboard';
import Add_order from './Folders/Order/Add_order';
import Edit_order from './Folders/Order/Edit_order';
import View_order from './Folders/Order/View_order';
import Loginuser from './Folders/User/Loginuser';
import Siginuser from './Folders/User/Siginuser';
import User_bkdasbrd from './Folders/User/User_bkdasbrd';
import Cart from './Folders/User/Cart';

function App() {

  return (
    <div>
    
      <BrowserRouter> 
     
     
    

     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/dashboard_book' element={<Book_dashboard/>}></Route>
     <Route path='/addbook' element={<Add_book/>}></Route>
     <Route path='/editbook/:id' element={<Edit_book/>}></Route>
     <Route path='/viewbook/:id' element={<View_book/>}></Route>

     <Route path='/login_user' element={<Loginuser/>}></Route>
     <Route path='/sigin_user' element={<Siginuser/>}></Route>
     <Route path='/select_book' element={<User_bkdasbrd/>}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
  
  
      <Route path='/dashboard_client' element={<Client_dashboard/>}></Route>
     <Route path='/addclient' element={<Add_client/>}></Route> 
     <Route path='/editclient/:id' element={<Edit_client/>}></Route>
     <Route path='/viewclient/:id' element={<View_client/>}></Route>

   
     <Route path='/dashboard_orders' element={<Order_dashboard/>}></Route>
     <Route path='/addorders' element={<Add_order/>}></Route>
      <Route path='/editorder/:id' element={<Edit_order/>}></Route>
     <Route path='/vieworder/:id' element={<View_order/>}></Route>  
  
    </Routes>
  
     </BrowserRouter> 
     
     
    
    
    </div>
  );
}

export default App;

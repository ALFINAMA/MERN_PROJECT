import React, { useEffect, useState } from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import '../../App.css'
import '../Style_frony.css'
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

function User_bkdasbrd() {
    const [Books, setBooks] = useState([])
    const navigate=useNavigate()
    const [carts, setcarts] = useState([])
  
    async function fetchData1(){
     
        let response=await axios.get(`http://localhost:3000/getcart1/${user.id}`);
        let cart =await response.data
      
        setcarts(cart)
       
      }
      console.log(carts)
    async function fetchData(){
        let response=await axios.get("http://localhost:3000/getbooks");
        let book =await response.data
        setBooks(book)
        
      }
      
      useEffect(()=>{
       fetchData();
     
     },[])
     useEffect(()=>{
        fetchData1()
     },[carts])
    let user= JSON.parse(localStorage.getItem('user')) ;
     
 console.log(user.id)
    //  const handleAddToCart=async(e)=>{
      
    //     let BookName=e.BookName
    //     let Price=e.Price
    //     let Quantity=1
       
    //     const product=await axios.post('http://localhost:3000/addtocart',{BookName,Price,Quantity})
          
    //  }
    const handleAddToCart = async (e) => {
        let BookName = e.BookName;
        let Price = e.Price;
      
        // Check if the product is already in the cart
        const existingProduct = carts.find((item) => item.BookName === BookName);
       
        debugger
        if (existingProduct) {
          // If the product is already in the cart, update its quantity
          const updatedQuantity = existingProduct.Quantity + 1;
      
          // Make a PUT request to update the quantity of the existing product
          await axios.put(`http://localhost:3000/increment/${existingProduct._id}`, {BookName,Price,
            Quantity: updatedQuantity,
          });
        } else {
          // If the product is not in the cart, add it
          let Quantity = 1;
      
          // Make a POST request to add the product to the cart
          await axios.post(`http://localhost:3000/addtocart1/${user.id}`, { BookName, Price, Quantity });
        }
      };
      
     const getTotalQuantity = () => {
    
        return carts.reduce((total, item) => total + item.Quantity, 0);
      };
      const gotocart=()=>{
        navigate('/cart')
    }
    const logout=()=>{
        navigate('/')
    }
  return (
<div className="loginbkg"  style={{ minHeight: '97vh'}}>

  <div className="d-flex justify-content-end">
    <div style={{marginRight:'10px'}}>
        <Button onClick={gotocart}>  <FaShoppingCart color='white'/>&nbsp;&nbsp;({getTotalQuantity()})</Button>
      <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>
      
      </Link>
    </div>
    <div>
      <Button onClick={logout}>Logout</Button>
    </div>
  </div>

<div className='dashboard'>
       { Books.map((item)=>
            <Card  className='col-lg-3 card '>
      
      <Card.Body>
        <Card.Title>{item.BookName}</Card.Title>
        <Card.Text>{item.BookName} written by {item.AuthorName} in the year {item.Year}.
        
        </Card.Text>
      </Card.Body>

        <ListGroup.Item>Author Name:{item.AuthorName}</ListGroup.Item>
        <ListGroup.Item>Publication Name:{item.PublicationName}</ListGroup.Item>
        <ListGroup.Item>Price:{item.Price}</ListGroup.Item>
 
      <Card.Body>
      <Button  variant="primary" onClick={()=>handleAddToCart(item)}>Add To Cart</Button>
      
      {/* {(item.Addedtocart!='true') && <Button  variant="primary" onClick={()=>handleAddToCart(item)}>Add To Cart</Button>}
      {(item.Addedtocart == 'true') && <Button  variant="primary" onClick={gotocart}>Go To Cart</Button>} */}
      </Card.Body>
    </Card>
        )}
        
    </div>
</div>
  )
}

export default User_bkdasbrd
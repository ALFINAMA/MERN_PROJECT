import React from 'react'
import '../App.css'
import { Container, Dropdown } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsBook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
          {/* <Navbar expand="lg"  style={{backgroundColor:'yellowgreen'}}>
      <Container>
        <Navbar.Brand href="#home"><Link to='/' style={{textDecoration:'none',color:'black'}} >Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <Nav.Link href="#link"><Link to='/login' style={{textDecoration:'none',color:'black'}} >Admin</Link></Nav.Link>
            <Nav.Link href="#link"><Link to='/log' style={{textDecoration:'none',color:'black'}} >User</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <div className='black p-3' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div>
        <a href="#" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
            <BsBook />&nbsp;<span>MY BOOKS</span>
        </a>
    </div>
    <div className='d-flex'>
        <div style={{ padding: '0 10px' }}>
            <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Admin</Link>
        </div>
        <div style={{ padding: '0 10px' }}>
        <Dropdown>
      <Dropdown.Toggle size="sm"
            variant="secondary" id="dropdown-basic">
       User
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to='/login_user' style={{ textDecoration: 'none', color: 'black' }}>Login</Link></Dropdown.Item>
        <Dropdown.Item ><Link to='/sigin_user' style={{ textDecoration: 'none', color: 'black' }}>Sigin</Link> </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
        </div>
    </div>
</div>
<div className='bg' style={{ minHeight: '90vh' }}></div>
        
    </div>
  )
}

export default Home
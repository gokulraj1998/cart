import React from 'react'
import {Nav,Navbar,Container,Form,NavDropdown,Button} from 'react-bootstrap'

function Header({size}) {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='fw-bold  fs-4'>La Collections</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Products</Nav.Link>
           
            <Nav.Link href="#actiob3" >
              About
            </Nav.Link>
            <Nav.Link href="#action4" >
              Contact
            </Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      <Nav.Link href="#action5" >
              <div className='button'>  <a href='#a' className= "btn  btn-outline-dark"><i className='fa fa-login'></i>Login</a></div>
              
            </Nav.Link>
            <Nav.Link href="#action5" >
              <div className='button'>  <a href='#a' className= "btn  btn-outline-dark ms-2"><i className='fa fa-login'></i>Register</a></div>
              
            </Nav.Link>
            <Nav.Link href="#action5" >
              <div className='button'>  <a href='#a' className= "btn  btn-outline-dark ms-2"><i className='fa fa-login'></i>Cart({size})</a></div>
              
            </Nav.Link>
            

    </Navbar>
  )
}

export default Header
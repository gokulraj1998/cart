import React from 'react'
import{ useState, useEffect} from 'react'
import{Row,Col,Image,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import {Nav,Navbar,Container} from 'react-bootstrap'

function Cart({props,handleClick}) {
    const params = useParams()
    const [productdata,setData]=useState([])
    
    const  fetchdata=async()=>
    {
      const data = await fetch("https://fakestoreapi.com/products")
       const listitem=await data.json()
       setData(listitem)
    }
    useEffect(()=>{fetchdata()},[])
    const details =productdata.find((i)=>i.id==params.id)
    
  return (
    <div>
        

         {details? (
   <Row className='my-3'>
              <Col md={3}>
            <Image className= "img" src={details.image} alt={details.name} fluid/>
          
          </Col>
         <Row className='mx-3'><h4>{
                details.title}</h4></Row>
                <Row className='mx-3'><h4>Price:{
                details.price}</h4></Row>
                <Col>
                <Nav.Link href="#action5" >
              <div className='button my-3 p-3'>  <a href='#a' className= "btn  btn-outline-dark" onClick={()=>handleClick(productdata)}><i className='fa fa-login'>
                </i>Add To Cart</a></div>
              
            </Nav.Link></Col>
            <Col>
            <Nav.Link href="#action5" >
              <div className='button mx-3 p-3'>  <Link to="/cart" className= "btn  btn-outline-dark ms-2 bg-dark text-light">
                <i className='fa fa-login'>
                </i>View Cart</Link></div>
              
            </Nav.Link></Col>
                

   </Row>):null}

    </div>
  )
}

export default Cart
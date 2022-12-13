import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from './Product'

function Productlist() {

     const [productdata,setData]=useState([])
     const  fetchdata=async()=>
     {
       const data = await fetch("https://fakestoreapi.com/products")
        const listitem=await data.json()
        setData(listitem)
     }
     useEffect(()=>{fetchdata()},[])
  return (
    <Row>
    {productdata.map((products)=>(<Col sm={12} md={8} lg={6} xl={3}>
  <Product item={products} /></Col>))}</Row>
  )
}

export default Productlist
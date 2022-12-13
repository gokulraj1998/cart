import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react'
function Product(props) {
    
   
  
  return (
    <div>
    <Card className="my-3 p-3 rounded">
    <Card.Img src={props.item.image} className="p-3" />

    <Card.Body>

        <Card.Title>

            <h4>{props.item. title}</h4>
            
            </Card.Title>

            <Card.Text>

                <p>Price:{props.item.price}</p></Card.Text>
                <Card.Text></Card.Text><p> Category:{props.item. category} </p><Card.Text/>
                <Card.Text><p>Discription:{props.item.  description}</p></Card.Text>
            <Link className="btn btn-outline-dark rounded my-2 btn-sm" to={`p/${props.item.id}`}> Buy Now </Link>

</Card.Body>
</Card></div>
  )
}

export default Product
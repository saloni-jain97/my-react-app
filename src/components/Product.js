import React from 'react'
import { Card, CardImg } from 'react-bootstrap'

function Product({product}) {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={'/product/${product._id}'}></a>
        <Card.Img src={product.image}/>
        <Card.Body>
        <a href={'/product/${product._id}'}></a>
        <Card.Title as="div">
            <strong> {product.name}</strong>
            </Card.Title>
            <Card.Text as="div">
                <div className="my-3">
                    {product.rating} from {product.numReviews} reviews
                </div>
                </Card.Text>

                <Card.Text as="h3">
                ${product.price}
                </Card.Text>
        </Card.Body>

    </Card>
  )
}

export default Product

import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Product({ product, onBuy, onLike, onDislike, index }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={product.quantity === 0 ? "/images/sold_out.png" : product.img || "/images/placeholder.jpg"} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>Prix : {product.price} TND</Card.Text>
        <Card.Text>Stock restant : {product.quantity}</Card.Text>
        <Card.Text>Likes : {product.like}</Card.Text>

        <Button variant="primary" onClick={() => onBuy(index)} disabled={product.quantity === 0}>
          {product.quantity > 0 ? "Acheter" : "Rupture de stock"}
        </Button>

        <Button 
          variant="success" 
          onClick={() => onLike(index)} 
          disabled={product.liked} 
          className="ms-2"
        >
          Like 
        </Button>

        <Button 
          variant="danger" 
          onClick={() => onDislike(index)} 
          disabled={!product.liked} 
          className="ms-2"
        >
          Dislike 
        </Button>

      </Card.Body>
    </Card>
  );
}

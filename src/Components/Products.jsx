import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Product from "./Product";
import productsData from "../products.json";

export default function Products() {
  const [products, setProducts] = useState(productsData);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setMessage(""), 3000);
    return () => clearTimeout(timer);
  }, [message]);

  useEffect(() => {
    setTimeout(() => setMessage("Bienvenue dans la boutique !"), 2000);
  }, []);

  const buyProduct = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((p, i) =>
        i === index && p.quantity > 0
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
    setMessage("You have purchased a product!");
  };

  const likeProduct = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((p, i) =>
        i === index
          ? { ...p, like: p.like + 1, liked: true }
          : p
      )
    );
  };

  const dislikeProduct = (index) => {
    setProducts((prevProducts) =>
      prevProducts.map((p, i) =>
        i === index
          ? { ...p, like: p.like - 1, liked: false }
          : p
      )
    );
  };

  return (
    <Container>
      {message && <Alert variant="success">{message}</Alert>}
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={4}>
            <Product 
              product={product} 
              index={index} 
              onBuy={buyProduct} 
              onLike={likeProduct} 
              onDislike={dislikeProduct} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Event({ event, onBook, onLike, index }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={event.nbTickets === 0 ? '/images/sold_out.png' : event.img || "/images/placeholder.jpg"} />
      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>{event.description}</Card.Text>
        <Card.Text>Prix : {event.price} TND</Card.Text>
        <Card.Text>Tickets restants : {event.nbTickets}</Card.Text>
        <Card.Text>Participants : {event.nbParticipants}</Card.Text>

        <Button variant="primary" onClick={() => onBook(index)} disabled={event.nbTickets === 0}>
        {event.nbTickets > 0 ? "Book an event" : "Sold Out"}
        </Button>

        <Button variant={event.like ? "danger" : "success"} onClick={() => onLike(index)} className="ms-2">
        {event.like ? "Dislike" : "Like"}
        </Button>



      </Card.Body>
    </Card>
  );
}

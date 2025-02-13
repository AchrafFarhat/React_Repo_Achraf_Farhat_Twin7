import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import Event from "./Event";
import eventsData from "../event.json";

export default function Events() {
  const [events, setEvents] = useState(eventsData);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setMessage(""), 3000);
    return () => clearTimeout(timer);
  }, [message]);

  useEffect(() => {
    setTimeout(() => setMessage("Bienvenue aux événements !"), 2000);
  }, []);

  const bookEvent = (index) => {
    setEvents((prevEvents) =>
      prevEvents.map((e, i) =>
        i === index && e.nbTickets > 0
          ? { ...e, nbParticipants: e.nbParticipants + 1, nbTickets: e.nbTickets - 1 }
          : e
      )
    );
    setMessage("You have booked an event");
  };
  
  
  const toggleLike = (index) => {
    setEvents((prevEvents) =>
      prevEvents.map((e, i) =>
        i === index ? { ...e, like: !e.like } : e
      )
    );
  };
  
  
  

  return (
    <Container>
      {message && <Alert variant="success">{message}</Alert>}
        <Row>
        {events.map((event, index) => (
            <Col key={index} md={4}>
            <Event event={event} index={index} onBook={bookEvent} onLike={toggleLike} />
            </Col>
        ))}
        </Row>


    </Container>
  );
}

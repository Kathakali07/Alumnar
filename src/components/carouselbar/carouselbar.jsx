import React from "react";
import { Carousel } from "react-bootstrap";
import "./carouselbar.css"; // Import custom styles

const CarouselBar = ({ events }) => {
  return (
    <div className="carousel-container">
      <Carousel>
        {events.map((event) => (
          <Carousel.Item key={event.id}>
            <img
              className="d-block w-100 event-image"
              src={event.image}
              alt={event.alt}
            />
            <Carousel.Caption>
              <h3>{event.name}</h3>
              <p>{event.details}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBar;

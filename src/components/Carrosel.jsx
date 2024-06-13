import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/header.css';
import Carousel from 'react-bootstrap/Carousel';


const Carrosel = (props) => {
  return (
<section>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={props.img1}
            alt="First slide"
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={props.img2}
            alt="Second slide"
          />
          <Carousel.Caption>
      
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.img3} 
            alt="Third slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Carrosel;

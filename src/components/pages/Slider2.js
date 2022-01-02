import React from 'react'
import Ad12 from '../image/Ad12.jpg';
import Ad13 from '../image/Ad13.jpg';
import Ad14 from '../image/Ad14.jpg';
import Carousel from 'react-bootstrap/Carousel'
import {useState} from 'react'



const Slider2 = () => {
    return (
       <div>
            
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Ad14}
                  alt="First slide"
                />
                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Ad12}
                  alt="Second slide"
                />

                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={Ad13}
                  alt="Third slide"
                />

                <Carousel.Caption>
                 
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
      </div>
    )
}

export default Slider2


import Ad10 from '../image/Ad10.png';
import Ad11 from '../image/Ad11.png';
import A7 from '../image/A7.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import r2 from '../CSS/r2.css'
import "../CSS/Slider.css"
import { height } from 'dom-helpers';

export default class Resizable2 extends Component {
    state = {
        display: true,
        width: 400,
        height:400
    };
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div id="slider">
                
                <Slider {...settings}>
                    <div>
                    <img  class= "card-img"  src={Ad10}  alt="..."/> 
                        <div id="content1"><h5>Fabulous Face Cleanser</h5></div>
                        <p id="p">For skin requiring gentle cleansing</p>
                        
                    </div>
                    <div>
                    <img  class= "card-img"  src={Ad11}  alt="..." /> 
                    <div id="content2"><h5>Parsley Seed Facial Cleanser</h5></div>
                    <p id="p">Ideal for city dwellers</p>
                    </div>
                    <div>
                    <img  class= "card-img"  src={Ad10}  alt="..." /> 
                    <div id="content3"><h5>Geranium Leaf Body Cleanser</h5></div>
                    <p id="p">A gentle,invigorating gel cleanser</p>
                    </div>
                    <div>
                    <img  class= "card-img"  src={Ad11}  alt="..." /> 
                    <div id="content2"><h5>Parsley Seed Facial Cleanser</h5></div>
                    <p id="p">Ideal for city dwellers</p>
                    </div>
                   
                   
                </Slider>
            </div>

        );
    }
}

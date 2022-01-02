
import Ad5 from '../image/Ad5.png';
import Ad6 from '../image/Ad6.png';
import A7 from '../image/A7.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import resizable from '../CSS/resizable.css'
import "../CSS/Slider.css"
import { height } from 'dom-helpers';

export default class Resizable extends Component {
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
                    <img  class= "card-img"  src={Ad5}  alt="..." /> 
                        <div id="content1"><h5>The Listner</h5></div>
                        <p id="p">Cleanser,balm,scrub</p>
                        
                    </div>
                    <div>
                    <img  class= "card-img"  src={Ad6}  alt="..." /> 
                    <div id="content2"><h5>The Frog</h5></div>
                    <p id="p">Two invigorating body care staples</p>
                    </div>
                    <div>
                    <img  class= "card-img"  src={A7}  alt="..." /> 
                    <div id="content3"><h5>The Adocate</h5></div>
                    <p id="p">Four hand and body care staoles</p>
                    </div>
                    <div>
                    <img  class= "card-img"  src={Ad6}  alt="..." /> 
                    <div id="content2"><h5>The Frog</h5></div>
                    </div>
                   
                   
                </Slider>
            </div>

        );
    }
}

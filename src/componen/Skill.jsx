import React from "react";
import Python from '../assets/img/py.png'
import Cpp from '../assets/img/cpp.png'
import HTML from '../assets/img/HTML.png'
import CSS from '../assets/img/css.png'
import Figma from '../assets/img/figma.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skill = () => {

    const setting = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
      }
    return (
    <section id="skill" className="skill">
        <h2 className="header1">Skill</h2>
        <p className="paragrap">Here are some programming languages and design tool that im good at.</p>
        <div className="card-containe pt-5 text-center" style={{'width' : '1200px', 'margin': '0 auto'}}>
            <Slider {...setting}>

            <div className="card">
                <img src={Python} alt="#"/>
                <div className="card-content">
                    <h3>Python</h3>
                </div>
            </div> 

            <div className="card">
                <img src={Cpp} alt="#"/>
                <div className="card-content">
                    <h3>C++</h3>
                </div>
            </div>

            <div className="card">
                <img src={HTML} alt="#"/>
                <div className="card-content">
                    <h3>HTML</h3>
                </div>
            </div>

            <div className="card">
                <img src={CSS} alt="#"/>
                <div className="card-content">
                    <h3>CSS</h3>
                </div>
            </div>

            <div className="card">
                <img src={Figma } alt="#"/>
                <div className="card-content">
                    <h3>Figma</h3>
                </div>
            </div>
            </Slider>
        </div>
    </section>
    )
  }
  
export default Skill
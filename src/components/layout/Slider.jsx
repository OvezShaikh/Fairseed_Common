import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import images from "../../constants/images";
let sliderData = [
  {
    
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
  {
    Image:images.sliderimg,
    sliderText: "Early Childhood Education",
  },
];



export default class MultipleRows extends Component {
  render() {
    // this.props.data
    const settings = {
      dots: true,
      className: "center  ",
      centerMode: false,
      infinite: false,
      // variableWidth: true,
      // centerPadding: "100px",
      slidesToShow: 6,
      speed: 1000,
      rows: 2,
      slidesPerRow: 1
    };

    return (
      <div className="slider-container">
        <Slider {...settings} >
          {sliderData.map((items) => {
            return (
              <>

                <div>
                <img style={{ width: '250px', height: '200px', background: 'linear-gradient(0deg, #EBEBEB 0%, #EBEBEB 100%)', borderRadius: 12 }} src={items.Image} />
                  
                </div>
                <div className="p-3 text-xl w-[90%] text-center" style={{ fontFamily: 'Satoshi ' ,color: '#383A42',fontWeight: '500' }}>
                <h3>{items.sliderText}</h3>
                </div>

              </>
            )
          })}
          {/* <h2>Multiple Rows</h2> */}
        </Slider>
      </div>
    );
  }
}


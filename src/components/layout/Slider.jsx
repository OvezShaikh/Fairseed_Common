import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const MultipleRows = () => {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const limit = 20;

// const MultipleRows = () => {
//   const [sliderData, setSliderData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [totalPages, setTotalPages] = useState(1);
//   const [page, setPage] = useState(1);
//   const limit = 20;

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const API_ENDPOINT = `${process.env.REACT_APP_API_URL}/campaign/campaign-category?page=${page}&limit=${limit}`;
        const response = await axios.get(API_ENDPOINT);
        setSliderData(response.data.rows);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchSliderData();
  }, []);

  //  useEffect (()=>{
  //   axios.get(`${process.env.REACT_APP_API_URL}/campaign/campaign-category?page=${page}&limit=${limit}`).then((response)=>{
  //     setSliderData(response.data.rows);
  //   setLoading(false);
  //   })

  // } ,[])

  const settings = {
    dots: true,
    className: "center overflow:hidden pb-5",
    centerMode: false,
    infinite: false,
    slidesToShow: 6,
    speed: 1000,
    rows: 2,
    slidesPerRow: 1,
    
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          rows: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 3,
          rows: 4,
        },
      },
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 4,
          rows: 2,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container pb-2 w-[90%]">
      <Slider style={{gap:"30px"}} {...settings}>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading &&
          !error &&
          sliderData.map((item, index) => (
            <>
              <Link to={`/Home/CampaignsByCategory/${item.id}`}>
                <div className="pb-5 flex flex-col justify-center items-center text-center mr-2">
                <div key={index} className="mb-[20px] desktop:w-[220px] desktop:h-[220px] max-desktop:max-w-[170px] max-desktop:h-[170px]">
                  <img
                    style={{
                      width:'100%',
                      height:'100%',
                      background:
                        "linear-gradient(0deg, #EBEBEB 0%, #EBEBEB 100%)",
                      borderRadius: 12,
                    }}
                    src={`${process.env.REACT_APP_API_URL}` + item.image}
                    alt={`Image ${index + 1}`}
                  />
                </div>
                <div
                  className="py-2 text-[24px] w-[100%] text-center "
                  style={{
                    fontFamily: "Satoshi",
                    color: "#383A42",
                    fontWeight: "500",
                  }}
                >
                  <h3>{item.name}</h3>
                  </div>
                </div>
              </Link>
            </>
          ))}
      </Slider>
    </div>
  );
}; 


export default MultipleRows;
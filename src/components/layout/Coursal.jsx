import { Navigation, Pagination, A11y } from "swiper/modules";
import PrimaryButton from "../inputs/PrimaryButton";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from "../../constants/images";
import "./Homestyles.css";
import { Link } from "react-router-dom";
import { useGetAll } from "../../Hooks";
import { useState } from "react";






export default () => {
  const [allCards, setAllCards] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(100);




  useGetAll({
    key: `/campaign/featured-campaign?page=${page}&limit=${perPage}`,
    enabled: true,
    select: (data) => {
      console.log(data?.data?.rows,">>>>>>>>>>>");
      return data?.data?.rows;
      

    },
    onSuccess: (data) => {
      setAllCards(data);
    },
    onerror: () => {
      console.error('Error fetching card titles:')
    }
  })


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}

      pagination={{
        el: '.swiper-pagination',

        type: 'custom',

        clickable: true,


        renderCustom: function (swiper, current, total) {

          const bullets = [];
          for (let i = 1; i <= total; i++) {
            const isActive = i === current ? 'active' : '';
            const bulletContent = isActive ? `${i}/${total}` : '';
            bullets.push(
              `<li class="bullet ${isActive}" data-index="${i}">${bulletContent}</li>`
            );
          }

          return `<ul class="custom-pagination">${bullets.join('')}</ul>`;



        
        },
      }

      }

      navigation




      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>




        <div className="home-hero-desktop hero-slider slide-container grid grid-cols-1 max-desktop:grid-cols-2 place-content-center desktop:h-[750px] desktop:bg-right pl-[10%] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${images.HomePageHero})` }}>

          <div className="max-w-[646px]">
            <h1
              className="max-[999px]:text-center text-4xl mx-auto min-[1000px]:text-left"
              style={{
                color: "#25272C",
                fontSize: 46,
                fontFamily: "Satoshi",
                fontWeight: "900",
                lineHeight: "64px",
              }}
            >
              Help rebuild earthquake hit schools in Morocco! 
            </h1>
            <p
              className="max-[999px]:text-center text-4xl  mx-auto min-[1000px]:text-left"
              style={{
                color: "#8E95A2",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
              }}
            >
              Schools in Morocco are damaged severely with the recent
              earthquake. Help us rebuilt schools and get children back to
              School
            </p>
            <div className="mx-auto max-[999px]:text-center">
              <Link to="/Home/OnGoingCampaigns" className="mx-auto">
                <PrimaryButton
                  className="p-3 text-white mt-4 font-bold text-xl max-[999px]:mx-auto"
                  style={{ borderRadius: 8 }}

                >
                  <h1 className="text-[24px] font-[satoshi] font-black max-tablet:text-[16px] max-tablet:font-bold" >
                    Donate for the Cause
                  </h1>
                </PrimaryButton>
              </Link>
            </div>


          </div>
        </div>



        <div className="slide-container homeHerotab max-tablet:px-[15px] max-tablet:bg-right" style={{ backgroundImage: `url(${images.HomePageHeroTab})` }}>

          <div className="max-w-[646px] mx-auto">
            <h1
              className="text-center max-desktop:text-[56px] max-desktop:max-w-[630px] mx-auto mb-[38px] max-tablet:text-[28px] max-tablet:leading-[36px]"
              style={{
                color: "#25272C",

                fontFamily: "Satoshi",
                fontWeight: "900",

              }}
            >
              Help rebuild earthquake hit school in Morocco!
            </h1>
            <p
              className="text-center max-desktop:text-[28px] mx-auto mb-[28px] max-tablet:text-[18px] max-tablet:px-[60px] max-tablet:mb-0 max-desktop:max-w-[630px]"
              style={{
                color: "#8E95A2",

                fontFamily: "Satoshi",
                fontWeight: "500",
              }}
            >
              Schools in Morocco are damaged severely with the recent
              earthquake. Help us rebuilt schools and get children back to
              School
            </p>
            <div className="mx-auto text-center">
              <Link to="/Home/OnGoingCampaigns" className="mx-auto">
                <PrimaryButton
                  className="p-3 text-white mt-4 font-bold text-xl mx-auto"
                  style={{ borderRadius: 8 }}

                >
                  <h1 className="text-[24px] font-[satoshi] font-black max-tablet:text-[16px] max-tablet:font-bold" >
                    Donate for the Cause
                  </h1>
                </PrimaryButton>
              </Link>
            </div>


          </div>
        </div>


      </SwiperSlide>
      <SwiperSlide>
        <div className="home-hero-desktop hero-slider slide-container grid grid-cols-1 max-desktop:grid-cols-2 place-content-center desktop:h-[750px] desktop:bg-right pl-[10%] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${images.HomePageHero})` }}>

          <div className="max-w-[646px]">
            <h1
              className="max-[999px]:text-center text-4xl mx-auto min-[1000px]:text-left"
              style={{
                color: "#25272C",
                fontSize: 46,
                fontFamily: "Satoshi",
                fontWeight: "900",
                lineHeight: "64px",
              }}
            >
              Help rebuild earthquake hit schools in Morocco!
            </h1>
            <p
              className="max-[999px]:text-center text-4xl  mx-auto min-[1000px]:text-left"
              style={{
                color: "#8E95A2",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
              }}
            >
              Schools in Morocco are damaged severely with the recent
              earthquake. Help us rebuilt schools and get children back to
              School
            </p>
            <div className="mx-auto max-[999px]:text-center">
              <Link to="/Home/OnGoingCampaigns" className="mx-auto">
                <PrimaryButton
                  className="p-3 text-white mt-4 font-bold text-xl max-[999px]:mx-auto"
                  style={{ borderRadius: 8 }}

                >
                  <h1 className="text-[24px] font-[satoshi] font-black max-tablet:text-[16px] max-tablet:font-bold" >
                    Donate for the Cause
                  </h1>
                </PrimaryButton>
              </Link>
            </div>


          </div>
        </div>



        <div className="slide-container homeHerotab max-tablet:px-[15px] max-tablet:bg-right" style={{ backgroundImage: `url(${images.HomePageHeroTab})` }}>

          <div className="max-w-[646px] mx-auto">
            <h1
              className="text-center max-desktop:text-[56px] max-desktop:max-w-[630px] mx-auto mb-[38px] max-tablet:text-[28px] max-tablet:leading-[36px]"
              style={{
                color: "#25272C",

                fontFamily: "Satoshi",
                fontWeight: "900",

              }}
            >
              Help rebuild earthquake hit school in Morocco!
            </h1>
            <p
              className="text-center max-desktop:text-[28px] mx-auto mb-[28px] max-tablet:text-[18px] max-tablet:px-[60px] max-tablet:mb-0 max-desktop:max-w-[630px]"
              style={{
                color: "#8E95A2",

                fontFamily: "Satoshi",
                fontWeight: "500",
              }}
            >
              Schools in Morocco are damaged severely with the recent
              earthquake. Help us rebuilt schools and get children back to
              School
            </p>
            <div className="mx-auto text-center">
              <Link to="/Home/OnGoingCampaigns" className="mx-auto">
                <PrimaryButton
                  className="p-3 text-white mt-4 font-bold text-xl mx-auto"
                  style={{ borderRadius: 8 }}

                >
                  <h1 className="text-[24px] font-[satoshi] font-black max-tablet:text-[16px] max-tablet:font-bold" >
                    Donate for the Cause
                  </h1>
                </PrimaryButton>
              </Link>
            </div>


          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-hero-desktop hero-slider slide-container grid grid-cols-1 max-desktop:grid-cols-2 place-content-center desktop:h-[750px] desktop:bg-right pl-[10%] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${images.HomePageHero})` }}>

          <div className="max-w-[646px]">
            <h1
              className="max-[999px]:text-center text-4xl mx-auto min-[1000px]:text-left"
              style={{
                color: "#25272C",
                fontSize: 46,
                fontFamily: "Satoshi",
                fontWeight: "900",
                lineHeight: "64px",
              }}
            >
              Help rebuild earthquake hit schools in Morocco!
            </h1>
            <p
              className="max-[999px]:text-center text-4xl  mx-auto min-[1000px]:text-left"
              style={{
                color: "#8E95A2",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
              }}
            >
              Schools in Morocco are damaged severely with the recent
              earthquake. Help us rebuilt schools and get children back to
              School
            </p>
            <div className="mx-auto max-[999px]:text-center">
              <Link to="/Home/OnGoingCampaigns" className="mx-auto">
                <PrimaryButton
                  className="p-3 text-white mt-4 font-bold text-xl max-[999px]:mx-auto"
                  style={{ borderRadius: 8 }}

                >
                  <h1 className="text-[24px] font-[satoshi] font-black max-tablet:text-[16px] max-tablet:font-bold" >
                    Donate for the Cause
                  </h1>
                </PrimaryButton>
              </Link>
            </div>


          </div>
        </div>



        <div className="slide-container homeHerotab max-tablet:px-[15px] max-tablet:bg-right" style={{ backgroundImage: `url(${images.HomePageHeroTab})` }}>

          <div className="max-w-[646px] mx-auto">
            <h1
              className="text-center max-desktop:text-[56px] max-desktop:max-w-[630px] mx-auto mb-[38px] max-tablet:text-[28px] max-tablet:leading-[36px]"
              style={{
                color: "#25272C",

                fontFamily: "Satoshi",
                fontWeight: "900",

              }}
            >
              Help rebuild earthquake hit school in Morocco!
            </h1>
            <p
              className="text-center max-desktop:text-[28px] mx-auto mb-[28px] max-tablet:text-[18px] max-tablet:px-[60px] max-tablet:mb-0 max-desktop:max-w-[630px]"
              style={{
                color: "#8E95A2",

                fontFamily: "Satoshi",
                fontWeight: "500",
              }}
            >
              Schools in Morocco are damaged severely with the recent
              earthquake. Help us rebuilt schools and get children back to
              School
            </p>
            <div className="mx-auto text-center">
              <Link to="/Home/OnGoingCampaigns" className="mx-auto">
                <PrimaryButton
                  className="p-3 text-white mt-4 font-bold text-xl mx-auto"
                  style={{ borderRadius: 8 }}

                >
                  <h1 className="text-[24px] font-[satoshi] font-black max-tablet:text-[16px] max-tablet:font-bold" >
                    Donate for the Cause
                  </h1>
                </PrimaryButton>
              </Link>
            </div>


          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="home-hero-desktop hero-slider slide-container grid grid-cols-1 max-desktop:grid-cols-2 place-content-center desktop:h-[750px] desktop:bg-right pl-[10%] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${images.HomePageHero})` }}>

          <div className="max-w-[646px]">
            <h1
              className="max-[999px]:text-center text-4xl mx-auto min-[1000px]:text-left"
              style={{
                color: "#25272C",
                fontSize: 46,
                fontFamily: "Satoshi",
                fontWeight: "900",
                lineHeight: "64px",
              }}
            >
              Help rebuild earthquake hit schools in Morocco!
            </h1>
            <p
              className="max-[999px]:text-center text-4xl  mx-auto min-[1000px]:text-left"
              style={{
                color: "#8E95A2",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
              }}
            >
              Schools in Morocco are damaged severely with the recent
              earthquake. Help us rebuilt schools and get children back to
              School
            </p>
            <div className="mx-auto max-[999px]:text-center">
              <Link to="/Home/OnGoingCampaigns" className="mx-auto">
                <PrimaryButton
                  className="p-3 text-white mt-4 font-bold text-xl max-[999px]:mx-auto"
                  style={{ borderRadius: 8 }}

                >
                  <h1 className="text-[24px] font-[satoshi] font-black max-tablet:text-[16px] max-tablet:font-bold" >
                    Donate for the Cause
                  </h1>
                </PrimaryButton>
              </Link>
            </div>


          </div>
        </div>



        <div className="slide-container homeHerotab max-tablet:px-[15px] max-tablet:bg-right" style={{ backgroundImage: `url(${images.HomePageHeroTab})` }}>

          <div className="max-w-[646px] mx-auto">
            <h1
              className="text-center max-desktop:text-[56px] max-desktop:max-w-[630px] mx-auto mb-[38px] max-tablet:text-[28px] max-tablet:leading-[36px]"
              style={{
                color: "#25272C",

                fontFamily: "Satoshi",
                fontWeight: "900",

              }}
            >
              Help rebuild earthquake hit school in Morocco!
            </h1>
            <p
              className="text-center max-desktop:text-[28px] mx-auto mb-[28px] max-tablet:text-[18px] max-tablet:px-[60px] max-tablet:mb-0 max-desktop:max-w-[630px]"
              style={{
                color: "#8E95A2",

                fontFamily: "Satoshi",
                fontWeight: "500",
              }}
            >
              Schools in Morocco are damaged severely with the recent
              earthquake. Help us rebuilt schools and get children back to
              School
            </p>
            <div className="mx-auto text-center">
              <Link to="/Home/OnGoingCampaigns" className="mx-auto">
                <PrimaryButton
                  className="p-3 text-white mt-4 font-bold text-xl mx-auto"
                  style={{ borderRadius: 8 }}

                >
                  <h1 className="text-[24px] font-[satoshi] font-black max-tablet:text-[16px] max-tablet:font-bold" >
                    Donate for the Cause
                  </h1>
                </PrimaryButton>
              </Link>
            </div>


          </div>
        </div>
      </SwiperSlide>

      <div className="swiper-pagination"></div>


    </Swiper>
  );
};

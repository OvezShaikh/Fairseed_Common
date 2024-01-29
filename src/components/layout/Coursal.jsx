import { Navigation, Pagination, A11y } from "swiper/modules";
import PrimaryButton from "../inputs/PrimaryButton";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from "../../constants/images";


export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="flex relative w-full h-full">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <img src={images.sliderimg} />
          </div>
          <div
            className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full "
            style={{
              background:
                "linear-gradient(to right,    rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 45%,rgba(255, 255, 255, 0.8) 45.01%,  rgba(255, 255, 255, 0.8) 70%,rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <img src={images.HeaderColor} alt="" />
          </div>
          <div className="absolute z-[2] w-1/2  top-0 left-0 bottom-0 flex flex-col px-20 gap-2 justify-center">
            <div className="">
              {" "}
              <h1
                className="  "
                style={{
                  height: 136,
                  color: "#25272C",
                  fontSize: 56,
                  fontFamily: "Satoshi",
                  fontWeight: "900",
                  flex: "1 0 0",
                  rowGap: 16,
                  display:"flex",
                  
                  
                }}
              >
                Help rebuild earthquake hit school in Morocco!
              </h1>
              <p
                style={{
                  color: "#8E95A2",
                  fontSize: 24,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  paddingTop: 48,
                }}
              >
                Schools in Morocco are damaged severely with the recent
                earthquake. Help us rebuilt schools and get children back to
                School
              </p>
              <a href="/Home/OnGoingCampaigns">
              <PrimaryButton
                className="p-3 text-white  font-bold text-xl"
                style={{ borderRadius: 8, marginTop: 28}}
                
              >
                <h1 className="text-[20px] font-[satoshi] p-1" style={{fontWeight:900 , }}>
                Donate for the Cause
                </h1>
              </PrimaryButton>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex relative w-full h-full">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <img src={images.sliderimg} />
          </div>
          <div
            className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full "
            style={{
              background:
                "linear-gradient(to right,    rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 45%,rgba(255, 255, 255, 0.8) 45.01%,  rgba(255, 255, 255, 0.8) 70%,rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <img src={images.HeaderColor} alt="" />
          </div>
          <div className="absolute z-[2] w-1/2  top-0 left-0 bottom-0 flex flex-col px-20 gap-2 justify-center">
            <div className="">
              {" "}
              <h1
                className="  "
                style={{
                  height: 136,
                  color: "#25272C",
                  fontSize: 56,
                  fontFamily: "Satoshi",
                  fontWeight: "900",
                  flex: "1 0 0",
                  rowGap: 16,
                  display:"flex",
                  
                  
                }}
              >
                Help rebuild earthquake hit school in Morocco!
              </h1>
              <p
                style={{
                  color: "#8E95A2",
                  fontSize: 24,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  paddingTop: 48,
                }}
              >
                Schools in Morocco are damaged severely with the recent
                earthquake. Help us rebuilt schools and get children back to
                School
              </p>
              <a href="/Home/OnGoingCampaigns">
              <PrimaryButton
                className="p-3 text-white  font-bold text-xl"
                style={{ borderRadius: 8, marginTop: 28}}
                
              >
                <h1 className="text-[20px] font-[satoshi] p-1" style={{fontWeight:900 , }}>
                Donate for the Cause
                </h1>
              </PrimaryButton>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex relative w-full h-full">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <img src={images.sliderimg} />
          </div>
          <div
            className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full "
            style={{
              background:
                "linear-gradient(to right,    rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 45%,rgba(255, 255, 255, 0.8) 45.01%,  rgba(255, 255, 255, 0.8) 70%,rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <img src={images.HeaderColor} alt="" />
          </div>
          <div className="absolute z-[2] w-1/2  top-0 left-0 bottom-0 flex flex-col px-20 gap-2 justify-center">
            <div className="">
              {" "}
              <h1
                className="  "
                style={{
                  height: 136,
                  color: "#25272C",
                  fontSize: 56,
                  fontFamily: "Satoshi",
                  fontWeight: "900",
                  flex: "1 0 0",
                  rowGap: 16,
                  display:"flex",
                  
                  
                }}
              >
                Help rebuild earthquake hit school in Morocco!
              </h1>
              <p
                style={{
                  color: "#8E95A2",
                  fontSize: 24,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  paddingTop: 48,
                }}
              >
                Schools in Morocco are damaged severely with the recent
                earthquake. Help us rebuilt schools and get children back to
                School
              </p>
              <a href="/Home/OnGoingCampaigns">
              <PrimaryButton
                className="p-3 text-white  font-bold text-xl"
                style={{ borderRadius: 8, marginTop: 28}}
                
              >
                <h1 className="text-[20px] font-[satoshi] p-1" style={{fontWeight:900 , }}>
                Donate for the Cause
                </h1>
              </PrimaryButton>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex relative w-full h-full">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <img src={images.sliderimg} />
          </div>
          <div
            className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full "
            style={{
              background:
                "linear-gradient(to right,    rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 1) 45%,rgba(255, 255, 255, 0.8) 45.01%,  rgba(255, 255, 255, 0.8) 70%,rgba(255, 255, 255, 0) 100%)",
            }}
          >
            <img src={images.HeaderColor} alt="" />
          </div>
          <div className="absolute z-[2] w-1/2  top-0 left-0 bottom-0 flex flex-col px-20 gap-2 justify-center">
            <div className="">
              {" "}
              <h1
                className="  "
                style={{
                  height: 136,
                  color: "#25272C",
                  fontSize: 56,
                  fontFamily: "Satoshi",
                  fontWeight: "900",
                  flex: "1 0 0",
                  rowGap: 16,
                  display:"flex",
                  
                  
                }}
              >
                Help rebuild earthquake hit school in Morocco!
              </h1>
              <p
                style={{
                  color: "#8E95A2",
                  fontSize: 24,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                  paddingTop: 48,
                }}
              >
                Schools in Morocco are damaged severely with the recent
                earthquake. Help us rebuilt schools and get children back to
                School
              </p>
              <a href="/Home/OnGoingCampaigns">
              <PrimaryButton
                className="p-3 text-white  font-bold text-xl"
                style={{ borderRadius: 8, marginTop: 28}}
                
              >
                <h1 className="text-[20px] font-[satoshi] p-1" style={{fontWeight:900 , }}>
                Donate for the Cause
                </h1>
              </PrimaryButton>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

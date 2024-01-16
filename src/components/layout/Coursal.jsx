// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import PrimaryButton from "../inputs/PrimaryButton";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import images from "../../constants/images";
// let slides = [
//   {
//     src: "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
//     Component: (
//       <div className="w-[100%]">
//         <h1 className="w-[799px]  h-[136px] text-white/70 text-[56px] font-extrabold font-['Plus Jakarta Sans'] ">
//           Help rebuild earthquake hit schools in Morocco!
//         </h1>
//         <p className="w-[699px] text-gray-500 text-[24px] font-normal font-['Encode Sans'] leading-8">
//           Schools in Morocco are damaged severely with the recent earthquake.
//           Help us rebuilt schools and get children back to School
//         </p>
//         <button className="px-3 cursor-pointer py-2 mt-4 bg-gradient-to-r from-amber-500 to-rose-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
//           <a className=" text-white text-xl font-black font-['Satoshi'] leading-9">
//             Donate for the cause
//           </a>
//         </button>
//       </div>
//     ),
//   },
// ];

export default () => {
  return (
    <Swiper
      // install Swiper modules
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
          <div className="absolute z-[2] w-1/2 h-full top-0 left-0 bottom-0 flex flex-col px-10 justify-center">
            <div className="h-fit my-auto">
              {" "}
              <h1
                className="text-4xl"
                style={{
                  height: 106,
                  color: "#25272C",
                  fontSize: 46,
                  fontFamily: "Satoshi",
                  fontWeight: "900",
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
                }}
              >
                Schools in Morocco are damaged severely with the recent
                earthquake. Help us rebuilt schools and get children back to
                School
              </p>
              <button
                className="p-3 text-white mt-3 font-bold text-xl"
                style={{
                  background:
                    "linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)",
                  borderRadius: 8,
                }}
              >
                Donate for the Cause
              </button>
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
          <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full "></div>
          <div className="absolute z-[2] w-1/2 h-full top-0 left-0 bottom-0 flex flex-col px-10 justify-center">
            <div className="h-fit my-auto">
              {" "}
              <h1
                className="text-4xl"
                style={{
                  height: 106,
                  color: "#25272C",
                  fontSize: 46,
                  fontFamily: "Satoshi",
                  fontWeight: "900",
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
                }}
              >
                Schools in Morocco are damaged severely with the recent
                earthquake. Help us rebuilt schools and get children back to
                School
              </p>
              <button
                className="p-3 text-white mt-3 font-bold text-xl"
                style={{
                  background:
                    "linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)",
                  borderRadius: 8,
                }}
              >
                Donate for the Cause
              </button>
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
          <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full "></div>
          <div className="absolute z-[2] w-1/2 h-full top-0 left-0 bottom-0 flex flex-col px-10 justify-center">
            <div className="h-fit my-auto">
              {" "}
              <h1
                className="text-4xl"
                style={{
                  height: 106,
                  color: "#25272C",
                  fontSize: 46,
                  fontFamily: "Satoshi",
                  fontWeight: "900",
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
                }}
              >
                Schools in Morocco are damaged severely with the recent
                earthquake. Help us rebuilt schools and get children back to
                School
              </p>
              <PrimaryButton
                className="p-3 text-white mt-3 font-bold text-xl"
                style={{ borderRadius: 8 }}
              >
                Donate for the Cause
              </PrimaryButton>
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
          <div className="absolute z-[1] top-0 bottom-0 left-0 right-0 h-full w-full  ">
            <img src={images.HeaderColor} alt="" />
          </div>
          <div className="absolute z-[2]  h-full top-0 left-0 bottom-0 flex flex-col px-10 w-1/2 justify-center">
            <div className="h-fit my-auto">
              {" "}
              <h1
                className="text-4xl"
                style={{
                  height: 106,
                  color: "#25272C",
                  fontSize: 46,
                  fontFamily: "Satoshi",
                  fontWeight: "900",
                }}
              >
                Help rebuild earthquake hit
                <br /> school in Morocco!
              </h1>
              <p
                style={{
                  color: "#8E95A2",
                  fontSize: 24,
                  fontFamily: "Satoshi",
                  fontWeight: "500",
                }}
              >
                Schools in Morocco are damaged severely with the recent
                <br /> earthquake. Help us rebuilt schools and get children back
                to School
              </p>
              <button
                className="p-3 text-white mt-4 font-bold text-xl"
                style={{
                  background:
                    "linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%),",
                  fontFamily: "satoshi",
                  borderRadius: 8,
                }}
              >
                Donate for the Cause
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

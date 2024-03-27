import { Navigation, Pagination, A11y } from "swiper/modules";
import PrimaryButton from "../inputs/PrimaryButton";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Homestyles.css";
import { Link } from "react-router-dom";
import { useGetAll } from "../../Hooks";
import { useState } from "react";

export default () => {
  const [allCards, setAllCards] = useState([]);
  const page =1;
  const perPage = 100;
  
  useGetAll({
    key: `/campaign/featured-campaign?page=${page}&limit=${perPage}`,
    enabled: true,
    select: (data) => {
      return data?.data?.rows;
    },
    onSuccess: (data) => {
      setAllCards(data);
    },
    onerror: () => {
      console.error('Error fetching card data')
    }
  })

  return (
    <Swiper
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
      {allCards.map((item) => {
        const image= `${process.env.REACT_APP_API_URL}${item?.campaign_image}`;
        console.log(image,'campaign image');
        return (
      <SwiperSlide key={item.id}>
        <div className="home-hero-desktop hero-slider slide-container grid grid-cols-1 max-desktop:grid-cols-2 place-content-center desktop:h-[750px] desktop:bg-right pl-[10%] bg-cover bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>

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
              {item?.title}
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
              {item?.summary}
            </p>
            <div className="mx-auto max-[999px]:text-center">
              <Link to={`/Home/donate/${item?.id}`} className="mx-auto">
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
      </SwiperSlide>
        );
      })}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

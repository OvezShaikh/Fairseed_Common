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
import images from "../../constants/images";

const style = {
  fontSize: "24px",
  fontWeight: 900,
  fontFamily: "satoshi",
  color: "#FFFFFF",
  padding: "16px 25px",
  borderRadius: "8px",
};
const style1 = {
  fontSize: "16px",
  fontWeight: 900,
  fontFamily: "satoshi",
  color: "#FFFFFF",
  padding: "12px 20px",
  borderRadius: "8px",
};
const HomeSwiper = () => {
  const [allCards, setAllCards] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(100);

  useGetAll({
    key: `/campaign/featured-campaign?page=${page}&limit=${perPage}`,
    enabled: true,
    select: (data) => {
      console.log(data?.data?.rows, ">>>>>>>>>>>");
      return data?.data?.rows;
    },
    onSuccess: (data) => {
      setAllCards(data);
    },
    onerror: () => {
      console.error("Error fetching card data");
    },
  });

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        el: ".swiper-pagination",
        type: "custom",
        clickable: true,
        renderCustom: function (swiper, current, total) {
          const bullets = [];
          for (let i = 1; i <= total; i++) {
            const isActive = i === current ? "active" : "";
            const bulletContent = isActive ? `${i}/${total}` : "";
            bullets.push(
              `<li class="bullet ${isActive}" data-index="${i}">${bulletContent}</li>`
            );
          }

          return `<ul class="custom-pagination">${bullets.join("")}</ul>`;
        },
      }}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {allCards.map((item) => {
        const image = `${process.env.REACT_APP_API_URL}${item?.campaign_image}`;
        console.log(image, "campaign image");
        return (
          <SwiperSlide key={item.id}>
            <div className="max-w-[1920px] max-desktop:w-full max-tablet:w-full w-full h-[753px] relative max-desktop:hidden max-tablet:hidden">
              <div className="max-w-[1920px] max-desktop:w-full max-desktop:flex  max-tablet:w-full  w-full h-[753px] flex  z-16 top-0 left-0 absolute  ">
                <div
                  className="w-1/2   bg-no-repeat bg-cover "
                  style={{ backgroundImage: `url(${images.HeaderImage2})` }}
                ></div>
                <div
                  className="w-1/2 bg-no-repeat bg-cover "
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>

              <div className="max-w-[815px] max-tablet:left-3.5 bg-transparent max-tablet:top-[6%] max-tablet:w-[343px] h-[408px] max-desktop:flex max-desktop:flex-col space-y-6 top-[29%] left-[14rem] max-desktop:top-[5%] max-desktop:left-[4rem] z-20 absolute max-desktop:text-center max-desktop:justify-center">
                <h1 className="text-[56px] font-black font-[satoshi] max-tablet:text-[28px] max-desktop:w-[630px] max-tablet:w-full  text-[#25272C]">
                  {item?.title}
                </h1>
                <p className="text-[28px] font-medium font-[satoshi]  max-tablet:text-[18px]  max-desktop:w-[630px] max-tablet:w-full text-[#8E95A2] ">
                  {item?.summary}
                </p>
                <div className="">
                  <Link to={`/Home/donate/${item?.id}`} className="mx-auto">
                    <PrimaryButton
                      className="hidden max-tablet::block"
                      sx={style}
                    >
                      Donate for the Cause
                    </PrimaryButton>
                  </Link>
                </div>
              </div>
              <div className="max-w-[1920px] max-desktop:w-full max-tablet:w-full w-full h-[753px]  z-18 absolute top-0 left-0 bg-gradient-to-b from-transparent via-blur-white to-transparent lg:bg-gradient-to-r"></div>
            </div>
            <div className="w-full h-[753px] flex flex-col relative desktop:hidden">
              <div
                className="w-full bg-cover flex-col items-center flex h-[400px]  pt-[120px]"
                style={{ backgroundImage: `url(${images.HeaderImage2})` }}
              >
                <div className="flex flex-col  w-[70%] items-center gap-4 absolute z-50 text-center">
                  <h1 className="text-[56px] font-black font-[satoshi] max-tablet:text-[28px]  max-tablet:w-full  text-[#25272C]">
                    {item?.title}
                  </h1>
                  <p className="text-[28px] font-medium font-[satoshi]  max-tablet:text-[18px]  max-tablet:w-full text-[#8E95A2] ">
                    {item?.summary}
                  </p>
                  <div className="max-tablet:hidden">
                    <Link to={`/Home/donate/${item?.id}`} className="mx-auto">
                      <PrimaryButton
                        className="hidden max-tablet:block"
                        sx={style}
                      >
                        Donate for the Cause
                      </PrimaryButton>
                    </Link>
                  </div>
                  <div className="max-tablet:block max-desktop:hidden">
                    <Link to={`/Home/donate/${item?.id}`} className="mx-auto">
                      <PrimaryButton className="block" sx={style1}>
                        Donate for the Cause
                      </PrimaryButton>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="w-full h-[383px] bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="max-w-[1920px]  max-tablet:w-full w-full h-[753px]  z-18 absolute top-0 left-0 bg-gradient-to-b from-transparent via-blur-white to-transparent "></div>
            </div>
          </SwiperSlide>
        );
      })}
      <div className="swiper-pagination"></div>
    </Swiper>
  );
};

export default HomeSwiper;

import { Navigation, Pagination, A11y } from "swiper/modules";
import PrimaryButton from "../inputs/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Homestyles.css";
import { Link } from "react-router-dom";
import { useGetAll } from "../../Hooks";
import { useState, useEffect } from "react";
import images from "../../constants/images";
import removeTags from "../../utils/Removetag";

const style = {
  fontSize: "1.5rem",
  fontWeight: 900,
  fontFamily: "satoshi",
  color: "#FFFFFF",
  padding: "16px 25px",
  borderRadius: "8px",
};
const style1 = {
  fontSize: "1rem",
  fontWeight: 900,
  fontFamily: "satoshi",
  color: "#FFFFFF",
  padding: "12px 20px",
  borderRadius: "8px",
};
const HomeSwiper = () => {
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(100);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGetAll({
    key: `/campaign/featured-campaign?page=${page}&limit=${perPage}`,
    enabled: true,
    select: (data) => {
      return data?.data;
    },
    onSuccess: (data) => {
      setAllCards([
        // ...(data?.about_images.map((image, index) => ({
        //   campaign_image: image,
        // })) || []),
        ...(data?.rows || []),
      ]);
      setLoading(false);
    },
    onError: () => {
      console.error("Error fetching card data");
      setLoading(false);
      setError(true);
    },
  });

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[753px]'>
        <div className='loader'></div>
      </div>
    ); // Show loading indicator
  }

  if (error) {
    return (
      <div className=' flex flex-col items-center '>
        {/* Show classic style error image and message */}
        <img
          className='w-full h-[733px] max-tablet:h-[600px]'
          src={images.NoData}
          alt='Error'
        />
        <p className='text-[2.5rem] font-[satoshi] font-bold max-desktop:text-[1.4rem] max-tablet:text-[0.9rem]'>
          Oops! Something went wrong. Please try again later.
        </p>
      </div>
    );
  }

  console.log(allCards, "<======");

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
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {/* First slide */}
        <div className='max-w-[1920px] max-desktop:w-full max-tablet:w-full w-full h-[753px] relative '>
          <div className='max-w-[1920px] max-desktop:w-full max-desktop:flex  max-tablet:w-full  w-full h-[753px] flex  z-16 top-0 left-0 absolute  '>
            <div
              className={`w-full bg-no-repeat ${
                windowWidth < 751 ? "bg-cover" : "bg-contain"
              }`}
              style={{
                backgroundImage: `url(${
                  windowWidth < 751
                    ? images.WebsiteBannerMobile
                    : images.WebsiteBannerDesktop
                })`,
                backgroundPosition: "center 100px",
                backgroundSize: windowWidth >= 1365 ? "contain" : "contain",
              }}></div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* Second slide */}
        <div className='max-w-[1920px] max-desktop:w-full max-tablet:w-full w-full h-[753px] relative '>
          <div className='max-w-[1920px] max-desktop:w-full max-desktop:flex  max-tablet:w-full  w-full h-[753px] flex  z-16 top-0 left-0 absolute  '>
            <div
              className={`w-full bg-no-repeat ${
                windowWidth < 751
                  ? "bg-cover"
                  : windowWidth < 1365
                  ? "bg-contain"
                  : "bg-contain"
              }`}
              style={{
                backgroundImage: `url(${
                  windowWidth < 751
                    ? images.WhyChooseFairseedMobile
                    : images.WhyChooseFairseed
                })`,
                backgroundPosition:
                  windowWidth < 751
                    ? "center 50px"
                    : windowWidth < 1365
                    ? "center 100px"
                    : "center 36px",
              }}></div>
          </div>
        </div>
      </SwiperSlide>
      {allCards.map((item, index) => {
        const image = `${process.env.REACT_APP_API_URL}${item?.campaign_image}`;
        return (
          <SwiperSlide key={item.id}>
            <div className='max-w-[1920px] max-desktop:w-full max-tablet:w-full w-full h-[753px] relative max-desktop:hidden max-tablet:hidden'>
              <div className='max-w-[1920px] max-desktop:w-full max-desktop:flex  max-tablet:w-full  w-full h-[753px] flex  z-16 top-0 left-0 absolute  '>
                <div
                  className='w-1/2 bg-no-repeat bg-cover'
                  style={{
                    backgroundImage: `url(${images.HeaderImage2})`,
                  }}></div>
                <div
                  className='w-1/2 bg-no-repeat bg-cover'
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}></div>
              </div>

              <>
                <div className='max-w-[815px] max-tablet:left-3.5 bg-transparent max-tablet:top-[6%] max-tablet:w-[343px] h-[408px] max-desktop:flex max-desktop:flex-col space-y-6 top-[29%] left-[14rem] max-desktop:top-[5%] max-desktop:left-[4rem] z-20 absolute max-desktop:text-center max-desktop:justify-center'>
                  <h1 className='text-[3.5rem] font-black font-[satoshi] max-tablet:text-[1.75rem] max-desktop:w-[630px] max-tablet:w-full  text-[#25272C]'>
                    {item?.title}
                  </h1>
                  <p className='text-[1.75rem] font-medium font-[satoshi]  max-tablet:text-[1.1rem]  max-desktop:w-[630px] max-tablet:w-full text-[#8E95A2] max-h-[200px] line-clamp-3 !max-desktop:truncate'>
                    {item?.summary && removeTags(item?.summary)}
                  </p>
                  <div className=''>
                    <Link to={`/Home/donate/${item?.c_id}`} className='mx-auto'>
                      <PrimaryButton
                        className='hidden max-tablet::block'
                        sx={style}>
                        Donate
                      </PrimaryButton>
                    </Link>
                  </div>
                </div>
                <div className='max-w-[1920px] max-desktop:w-full max-tablet:w-full w-full h-[753px]  z-18 absolute top-0 left-0 bg-gradient-to-b from-transparent via-blur-white to-transparent lg:bg-gradient-to-r'></div>
              </>
            </div>

            <div className='w-full h-[753px] flex flex-col relative desktop:hidden'>
              <div
                className='w-full bg-cover flex-col items-center flex h-[400px] pt-[120px]'
                style={{
                  backgroundImage: `url(${images.HeaderImage2})`,
                }}>
                <div className='flex flex-col w-[70%] items-center gap-4 absolute z-50 text-center'>
                  <h1 className='text-[3.5em] font-black font-[satoshi] max-tablet:text-[1.75rem] max-tablet:w-full text-[#25272C]'>
                    {item?.title}
                  </h1>
                  <p className='text-[1.75rem] font-medium font-[satoshi] max-tablet:text-[1.1rem] max-tablet:w-full text-[#8E95A2]'>
                    {removeTags(item?.summary)}
                  </p>
                  <div className='max-tablet:hidden'>
                    <Link to={`/Home/donate/${item?.id}`} className='mx-auto'>
                      <PrimaryButton
                        className='hidden max-tablet:block'
                        sx={style}>
                        Donate
                      </PrimaryButton>
                    </Link>
                  </div>
                  <div className='max-tablet:block max-desktop:hidden'>
                    <Link to={`/Home/donate/${item?.id}`} className='mx-auto'>
                      <PrimaryButton className='block' sx={style1}>
                        Donate
                      </PrimaryButton>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className='w-full h-[383px] bg-no-repeat bg-cover'
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}></div>

              <div className='max-w-[1920px] max-tablet:w-full w-full h-[753px] z-18 absolute top-0 left-0 bg-gradient-to-b from-transparent via-blur-white to-transparent'></div>
            </div>

            {/* <div className='w-full h-[500px] flex flex-col relative desktop:hidden'>
             
              <div
                className='w-full h-[383px] bg-no-repeat bg-contain'
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  marginTop: "100px",
                }}
              ></div>


            </div> */}
          </SwiperSlide>
        );
      })}
      <div className='swiper-pagination'></div>
    </Swiper>
  );
};

export default HomeSwiper;

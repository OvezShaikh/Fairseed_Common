import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import images from "../../../constants/images";
import { LinearProgress } from "@mui/material";
import Doner from "../../../components/layout/Doner";
import PrimaryButton from "../../../components/inputs/PrimaryButton";
import { Grid, Typography } from "@mui/material";
import SecondaryButton from "../../../components/inputs/secondaryButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useContext, useMemo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";
import UserNavbar from '../../login/UserNavbar'

function CurrentCampaign({
  key,
  username,
  cardImage,
  goalAmount,
  fundRaised,
  daysLeft,
  userCount,
  location,
  og_id,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const [cardDetails, setCardDetails] = useState(null);

  // const perPage = 1;
  // const page=1;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_BASE_URL}/campaign/campaign-details/${id}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setCardDetails(res.data.data);
        // setDonor(res.data.donor)
      })
      .catch((error) => {
        console.error("API Error:", error);
        // Handle error if needed
      });
  }, [id]);

  const title = useMemo(
    () =>
      `${pathname
        // .replace("/", "")
        // .replace(/\/\[[^\]]]/g, "")
        // .replace(/-/g, " ")
        // .replace(/\//g, "  ")
        // .replace("General Settings"," ")
        .slice(1)}`,

    [pathname]
    // console.log(cardDetails,"cardDetailscardDetails")
  );

  return (
    <>
      <Navbar />

      <div
        className="px-[52px] gap-[48px] max-tablet:gap-[28px] pt-[100px] max-desktop:w-full max-desktop:px-[28px] max-desktop:place-content-center max-tablet:px-[16px]"
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",

          display: "inline-flex",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          fontSize={"1rem"}
          color={"black"}
          display="flex"
          flexDirection={"column"}
          alignItems="start"
          className=" "
        // title={title}
        >
          <div className="text-capitalize text-truncate max-tablet:flex max-tablet:flex-col-reverse max-desktop:flex max-desktop:flex-col-reverse">
            <div className="py-3" onClick={() => navigate(-1)}>
              <img src={images.ArrowBack} alt="" />
            </div>
            <div
              className="flex flex-col text-black/70 "
              style={{ fontFamily: "satoshi", fontSize: 20, fontWeight: 700, color: '#95999D' }}
            >
              <div className="flex">
                Home/<span className="text-[#61656A] w-[130px] truncate" style={{ textOverflow: 'ellipsis' }}>{cardDetails?.title}</span>
              </div>
            </div>
          </div>

        </Typography>
        <h1
          className="text-5xl text-black font-bold max-tablet:text-3xl max-desktop:text-[44px] max-tablet:text-[28px]"
          style={{ fontFamily: "satoshi" }}
        >
          {cardDetails?.title}
          {/* Help eradicate illiteracy from the Balkan region ! */}
        </h1>
        <div className="w-full desktop:h-[862px] max-desktop:gap-3 desktop:gap-[36px] desktop:flex max-desktop:flex-col  max-desktop:place-content-center max-desktop:w-full">
          <img
            className="w-[65%] rounded-3xl max-desktop:w-full desktop:object-cover max-desktop:pb-[48px]  max-desktop:rounded max-tablet:pb-[28px] max-tablet:rounded-[5px]"
            src={`${process.env.REACT_APP_API_URL}` + cardDetails?.campaign_image}
            alt="Img"
          />
          <div
            className="flex flex-col rounded-3xl justify-center items-center w-[35%] max-desktop:w-full pb-[24px] px-[48px]"
            style={{ border: "1px solid red" }}
          >
            <img className="desktop:mt-8 max-desktop:mt-8 max-tablet:mt-[24px] max-tablet:w-[94px]" src={images.Logo} alt="Logo" />
            <div
              className="m-10 max-tablet:mt-[24px] max-tablet:mb-[16px]"
              style={{
                paddingLeft: 12,
                paddingRight: 12,
                background: "#FAF7F0",
                borderRadius: 9,
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 16,
                display: "inline-flex",
              }}
            >
              <div style={{ width: 12, height: 12, position: "relative" }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    left: 0,
                    top: 0,
                    position: "absolute",
                    background: "#FF8A00",
                    borderRadius: 5,
                  }}
                />
              </div>
              <div
                className="desktop:text-[24px] max-desktop:text-[20px] max-tablet:text-[18px]"
                style={{
                  color: "#FF8A00",

                  fontFamily: "Satoshi ",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                {cardDetails?.status}
              </div>
            </div>
            <h1
              className="desktop:text-[72px] max-desktop:text-[54px] max-tablet:text-[32px] font-bold"
              style={{ fontFamily: "satoshi" }}
            >
              {cardDetails?.fund_raised}
            </h1>
            <p
              className="m-3 desktop:text-[36px] max-desktop:text-[28px] max-tablet:text-[18px]"
              style={{
                width: "100%",
                textAlign: "center",
                color: "#8E95A2",

                fontFamily: "Satoshi ",
                fontWeight: "500",
              }}
            >
              funded of ₹ {cardDetails?.goal_amount}
            </p>

            <div className="desktop:mb-5 max-desktop:mb-5 w-full h-[30px] max-desktop:w-full max-tablet:h-[11px] max-tablet:mb-[15px]">
              {/* <LinearWithValueLabel className='!h-9' height={'30px'} value={30} /> */}
              <LinearProgress
                style={{ backgroundColor: '#EDEEF1' }}
                variant="determinate"
                sx={{ height: "100%", borderRadius: "16px", background: `linear-gradient(to right, #0DC7B1, #0DC7B1 ${((fundRaised / goalAmount) * 100)}%, #e0e0e0 ${((fundRaised / goalAmount) * 100)}%)`, "& .MuiLinearProgress-bar": { backgroundColor: '#0DC7B1 !important' } }}
                value={(cardDetails?.fund_raised / cardDetails?.goal_amount) * 100}
              />
            </div>
            <div className="flex" style={{ display: "inline-flex" }}>
              <img className="w-[17%] pr-2 max-tablet:w-[20%]" src={images.SedalCheck} alt="" />
              <h1
                className="text-3xl w-[80%] flex justify-items-start  pb-2  "
                style={{
                  fontFamily: "satoshi",
                  fontWeight: 700,
                  background:
                    "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                <p className="text-2xl max-tablet:text-[20px] font-bold">Zakah Eligible !</p>
              </h1>
            </div>
            <p
              className="text-black/40 w-full text-2xl text-center py-10 max-desktop:w-full  max-tablet:text-[18px] max-tablet:py-[24px] font-medium max-tablet:leading-5"
              style={{ fontFamily: "satoshi" }}
            >
              <span className="font-bold " style={{ color: " #25272C" }}>
                Partial Funding
              </span>
              - This campaign will collect all funds raised by{" "}
              {cardDetails?.end_date}
            </p>
            <PrimaryButton className="w-full max-desktop:w-full"
              sx={{ padding: "16px", borderRadius: "8px" }}
            // style={{

            //   paddingTop: 16,
            //   paddingBottom: 16,
            //   background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)',
            //   borderRadius: 8,
            //   justifyContent: "center",
            //   alignItems: "center",
            //   gap: 10,
            //   display: "inline-flex",
            // }}
            >
              <div style={{ width: 38, position: "relative" }}>
                <img src={images.coins2} alt="" />
              </div>
              <div className="desktop:text-2xl max-desktop:text-[20px] max-tablet:text-base"
                style={{
                  color: "rgba(255, 255, 255, 0.90)",

                  fontFamily: "Satoshi ",
                  fontWeight: "900",
                  wordWrap: "break-word",
                }}
              >
                Support Cause
              </div>
            </PrimaryButton>
          </div>
        </div>
        <div className="flex justify-start gap-5 w-full max-desktop:flex-col">
          <div className="flex flex-col w-[70%] max-desktop:w-full">
            <div className="flex justify-between max-tablet:flex-col">

              <div className="flex">
                <div className="desktop:w-[96px] desktop:h-[96px] max-desktop:w-[70px] max-desktop:h-[70px]">
                  <Avatar

                    className="desktop:w-[96px] desktop:h-[96px] max-desktop:w-[70px]"
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: "100%", height: "100%" }}
                  />
                </div>
                <h1
                  className="text-[40px] flex items-center pl-6 font-bold max-desktop:text-3xl max-tablet:text-xl"
                  style={{ fontFamily: "satoshi" }}
                >
                  {cardDetails?.user}
                </h1>
              </div>

              <div className="grid place-items-center max-tablet:justify-items-end">
                <button
                  className="justify-center items-center desktop:px-4 desktop:py-2 max-tablet:py-2 max-desktop:px-[20px] max-desktop:py-[12px] max-tablet:px-[10px]"
                  style={{
                    background: "#FFF6F5",
                    borderRadius: 8,
                    border: "1px red solid",
                    gap: 12,
                    display: "inline-flex",
                  }}
                >
                  <div className="w-[32px] h-[32px] max-tablet:w-[20px] max-tablet:h-[20px]" style={{ position: "relative" }}>
                    <img src={images.ShareNetwork} alt="" />
                  </div>
                  <div
                    className="text-3xl max-tablet:text-lg "
                    style={{
                      color: "#FF9F0A",

                      fontFamily: "Satoshi ",
                      fontWeight: "700",
                      background:
                        "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                      "-webkit-background-clip": "text",
                      "-webkit-text-fill-color": "transparent",
                    }}
                  >
                    Share
                  </div>
                </button>
              </div>
            </div>
            <div className="pt-4" style={{
              fontFamily: "satoshi",
            }}>
              {cardDetails?.story && (
                <div className="pt-4" dangerouslySetInnerHTML={{ __html: cardDetails.story }} style={{ whiteSpace: "pre-line" }}></div>
              )}

            </div>
          </div>
          <div
            className="w-[37%] flex pt-2 pl-5  pb-12 max-desktop:pl-0 max-tablet:w-[100%] max-desktop:w-full"
            style={{
              background: "white",
              borderRadius: 20,
              flexDirection: "column",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <h1
              className="text-3xl w-[80%] flex justify-items-start  pb-2 max-tablet:w-[100%] "
              style={{
                fontFamily: "satoshi",
                fontWeight: 700,
                background:
                  "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
              }}
            >
              Recent Donors:
            </h1>
            <div className="">
              <Doner data={cardDetails?.donor} />
            </div>
          </div>
        </div>
      </div >
      <div className="flex justify-center gap-4 max-desktop:hidden pt-4">
        <PrimaryButton
          sx={{ padding: "16px", borderRadius: "8px", paddingLeft: "43px", paddingRight: "43px", }}
        // style={{

        //   paddingTop: 16,
        //   paddingBottom: 16,
        //   background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)',
        //   borderRadius: 8,
        //   justifyContent: "center",
        //   alignItems: "center",
        //   gap: 10,
        //   display: "inline-flex",
        // }}
        >
          <div style={{ width: 38, position: "relative" }}>
            <img src={images.coins2} alt="" />
          </div>
          <h1
            style={{
              color: "rgba(255, 255, 255, 0.90)",
              fontSize: 20,
              fontFamily: "Satoshi ",
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Support Cause
          </h1>
        </PrimaryButton>
        <SecondaryButton
          sx={{ padding: "16px", borderRadius: "8px", background: "#FFF6F5", paddingLeft: "30px", paddingRight: "30px", }}
        // style={{

        //   paddingTop: 16,
        //   paddingBottom: 16,
        //   background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)',
        //   borderRadius: 8,
        //   justifyContent: "center",
        //   alignItems: "center",
        //   gap: 10,
        //   display: "inline-flex",
        // }}
        >
          <div style={{ width: 38, position: "relative" }}>
            <img className="text-3xl font-[40px]" src={images?.Coins} alt="" />
          </div>

          <h1
            style={{
              color: "var(--Base-Colours-Text-Primary, #25272C)",
              fontSize: 20,
              fontFamily: "Satoshi ",
              fontWeight: 700,
              wordWrap: "break-word",
            }}
          >
            Launch Campaign
          </h1>
        </SecondaryButton>
      </div>
      <Footer />
    </>
  );
}

export default CurrentCampaign;

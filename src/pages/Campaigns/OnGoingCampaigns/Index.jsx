import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import images from "../../../constants/images";
import { LinearProgress } from "@mui/material";
import CampaignsTabs from "../../../components/layout/CampaignsTabs";
import Doner from "../../../components/layout/Doner";
import PrimaryButton from "../../../components/inputs/PrimaryButton";
import { Grid, Typography } from "@mui/material";
import SecondaryButton from "../../../components/inputs/secondaryButton";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useMemo } from "react";


function OnGoingCampaigns() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = useMemo(
    () =>
      `${pathname
        // .replace("/", "")
        // .replace(/\/*\[[^\]]*]/g, "")
        // .replace(/-/g, " ")
        // .replace(/\//g, "  ")
        // .replace("General Settings"," ")
      }`,

  [pathname]

  )
  return (
    <>
      <Navbar />
      <Grid sx={{ padding: "100px 45px 0px 45px" }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          fontSize={"1rem"}
          color={"black"}
          display="flex"
          flexDirection={"column"}
          alignItems="start"
          className="text-capitalize text-truncate"
          // title={title}
        >
          <div
            className="py-3"
            onClick={() => navigate(-1)}
          >
            <img src={images.ArrowBack} alt="" />
          </div>
          <div
            className="flex flex-col "
            style={{ fontFamily: "satoshi", fontSize: 20, fontWeight: 600 }}
          >
                  {title ? <>{title}</> : "Create Campaigns"}
          </div>
        </Typography>
      </Grid>
      <div
        className="px-5 py-5"
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 48,
          display: "inline-flex",
        }}
      >
        <h1
          className="text-5xl text-black  font-bold"
          style={{ fontFamily: "satoshi" }}
        >
          Help eradicate illiteracy from the Balkan region !
        </h1>
        <div className="w-full h-full  flex  gap-5">
          <img
            className="w-[65%]  rounded-3xl"
            src={images.sliderimg}
            alt="Img"
          />
          <div
            className="flex flex-col rounded-3xl justify-center items-center w-[35%] "
            style={{ border: "1px solid red" }}
          >
            <img className="mt-24" src={images.Logo} alt="Logo" />
            <div
              className="m-10"
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
                style={{
                  color: "#FF8A00",
                  fontSize: 24,
                  fontFamily: "Satoshi ",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                Campaign Ongoing
              </div>
            </div>
            <h1
              className="text-6xl  font-bold"
              style={{ fontFamily: "satoshi" }}
            >
              ₹ 49,743
            </h1>
            <p
              className="m-3"
              style={{
                width: "100%",
                textAlign: "center",
                color: "#8E95A2",
                fontSize: 30,
                fontFamily: "Satoshi ",
                fontWeight: "500",
              }}
            >
              funded of ₹ 1,24,000
            </p>

            <div className="mb-5 w-3/4">
              {/* <LinearWithValueLabel className='!h-9' height={'30px'} value={30} /> */}
              <LinearProgress
                color="success"
                variant="determinate"
                style={{ height: "30px", borderRadius: "16px" }}
                value={40}
              />
            </div>
            <div className="flex  " style={{ display: "inline-flex" }}>
              <img className="w-[17%] pr-2 " src={images.SedalCheck} alt="" />
              <h1
                style={{
                  background:
                    "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                <p className="text-2xl">Zakah Eligible !</p>
              </h1>
            </div>
            <p
              className="text-black/40 w-[60%] text-2xl text-center py-10"
              style={{ fontFamily: "satoshi" }}
            >
              <span className="font-bold " style={{ color: " #25272C" }}>
                Partial Funding
              </span>
              - This campaign will collect all funds raised by Mar 24, 2023 5:30
              AM.
            </p>
            <PrimaryButton
              sx={{ width: "80%", padding: "16px", borderRadius: "8px" }}
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
                  fontSize: 25,
                  fontFamily: "Satoshi ",
                  fontWeight: "900",
                  wordWrap: "break-word",
                }}
              >
                Support a Cause
              </h1>
            </PrimaryButton>
          </div>
        </div>
        <div className="flex justify-start gap-5 w-full">
          <div className="flex flex-col w-[70%]">
            <div className="grid grid-cols-12">
              <div className="col-span-10">
                <div className="grid grid-cols-8">
                  <img
                    className="col-span-1 w-[100%]"
                    src={images.Airlogo}
                    alt=""
                  />
                  <h1
                    className="col-span-7 text-5xl flex items-center pl-7 font-bold"
                    style={{ fontFamily: "satoshi" }}
                  >
                    Teach for India Foundation
                  </h1>
                </div>
              </div>
              <div className="col-span-2 flex justify-center items-center ">
                <div
                  className="justify-center items-center  px-4 py-2"
                  style={{
                    background: "#FFF6F5",
                    borderRadius: 8,
                    border: "1px red solid",
                    gap: 12,
                    display: "inline-flex",
                  }}
                >
                  <div style={{ width: 32, height: 32, position: "relative" }}>
                    <img src={images.ShareNetwork} alt="" />
                  </div>
                  <div
                    style={{
                      color: "#FF9F0A",
                      fontSize: 30,
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
                </div>
              </div>
            </div>
            <div className="pt-16">
              <CampaignsTabs />
            </div>
          </div>
          <div
            className="w-[37%] flex pt-2 pl-5  pb-12 "
            style={{
              background: "white",
              borderRadius: 20,
              flexDirection: "column",
              gap: 24,
              display: "inline-flex",
            }}
          >
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
              Recent Donors:
            </h1>
            <div className="">{<Doner />}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <PrimaryButton
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
          <h1
            style={{
              color: "rgba(255, 255, 255, 0.90)",
              fontSize: 20,
              fontFamily: "Satoshi ",
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Support a Cause
          </h1>
        </PrimaryButton>
        <SecondaryButton
          sx={{ padding: "16px", borderRadius: "8px",background:'#FFF6F5' }}
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

export default OnGoingCampaigns;

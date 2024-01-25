import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import images from "../../../constants/images";
import { LinearProgress } from "@mui/material";
import CampaignsTabs from "../../../components/layout/CampaignsTabs";
import Doner from "../../../components/layout/Doner";
import PrimaryButton from "../../../components/inputs/PrimaryButton";
import { Grid, Typography } from "@mui/material";
import SecondaryButton from "../../../components/inputs/secondaryButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useContext, useMemo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";

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
      .get(
        `${process.env.REACT_APP_BE_BASE_URL}/campaign/campaign-details/${id}`
      )
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
      <Grid sx={{ padding: "100px 25px 0px 25px" }}>
      <Grid >
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
          <div className="py-3 px-1 mb-4" onClick={() => navigate(-1)}>
            <img src={images.ArrowBack} alt="" />
          </div>
          <div
            className="flex flex-col text-black/70 ml-1 mb-12 font-extrabold"
            style={{ fontFamily: "satoshi", fontSize: 20, fontWeight: 600 }}
          >
            {title ? <>{title.split("/")[0]}</> : "Create Campaigns"}
          </div>
        </Typography>
      </Grid>
      <div
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
          {cardDetails?.title}
          {/* Help eradicate illiteracy from the Balkan region ! */}
        </h1>
        <div className="w-full h-full  flex  gap-5">
          <img
            className="w-[65%]  rounded-3xl"
            src={`${process.env.REACT_APP_API_URL}` + cardDetails?.campaign_image}
            alt="Img"
          />
          <div
            className="flex flex-col rounded-3xl justify-center items-center w-[35%] "
            style={{ border: "1px solid red" }}
          >
            <img className="mt-16 mb-5" src={images.Logo} alt="Logo" />
            <div
              className=""
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
                  paddingBottom: 5,
                }}
              >
                {cardDetails?.status}
              </div>
            </div>
            <h1
              className="text-6xl  font-bold mt-5"
              style={{ fontFamily: "satoshi" }}
            >
             ₹ {cardDetails?.fund_raised.toLocaleString()}
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
              funded of ₹ {cardDetails?.goal_amount.toLocaleString()}
            </p>

            <div className="mb-5 w-3/4">
              {/* <LinearWithValueLabel className='!h-9' height={'30px'} value={30} /> */}
              <LinearProgress
                
                variant="determinate"
                sx={{ height: "30px", borderRadius: "16px", background: `linear-gradient(to right, #0DC7B1, #0DC7B1 ${((fundRaised / goalAmount) * 100)}%, #EDEEF1 ${((fundRaised / goalAmount) * 100)}%)`, "& .MuiLinearProgress-bar":{  backgroundColor: '#0DC7B1 !important  '} }}
                value={(cardDetails?.fund_raised / cardDetails?.goal_amount) * 100}
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
              - This campaign will collect all funds raised by{" "}
              {cardDetails?.end_date}
            </p>
            <PrimaryButton
              sx={{ width: "80%", padding: "16px",marginBottom:'20px', borderRadius: "8px" }}
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
              <div
                style={{
                  color: "rgba(255, 255, 255, 0.90)",
                  fontSize: 25,
                  fontFamily: "Satoshi ",
                  fontWeight: "900",
                  wordWrap: "break-word",
                }}
              >
                Support a Cause
              </div>
            </PrimaryButton>
          </div>
        </div>
        <div className="flex justify-start gap-5 w-full">
          <div className="flex flex-col w-[70%]">
            <div className="grid grid-cols-12">
              <div className="col-span-10">
                <div className="grid grid-cols-8">
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 100, height: 100 }}
                  />
                  <h1
                    className="col-span-7 text-5xl flex items-center font-bold ml-3"
                    style={{ fontFamily: "satoshi" }}
                  >
                    {cardDetails?.user}
                  </h1>
                </div>
              </div>
              <div className="col-span-2 flex justify-center items-center ml-2">
                <button
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
                </button>
              </div>
            </div>
            <div className="pt-4">
            {cardDetails?.story && (
  <div className="pt-4" dangerouslySetInnerHTML={{ __html: cardDetails.story }} style={{whiteSpace:"pre-line"}}></div>
)}
             
            </div>
          </div>
          <div
            className="w-[37%] flex pt-2 pl-5  pb-12"
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
            <div className="">
              <Doner data={cardDetails?.donor} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mr-[73px] mt-5">
        <PrimaryButton
          sx={{width:"16%", padding: "16px", borderRadius: "8px" }}
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
          className = "mr-5"
          sx={{ padding: "16px", borderRadius: "8px", background: "#FFF6F5" }}
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
      </Grid>
      <Footer />
    </>
  );
}

export default CurrentCampaign;

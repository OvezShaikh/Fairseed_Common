import React, { useContext, useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import images from "../../../constants/images";
import SecondaryButton from "../../../components/inputs/secondaryButton";
import Card from "../../../components/layout/Card";
import icons from "../../../constants/icons";
import Navigation from '../../../components/layout/Navigation/Index'
import ScrollableTabsButtonAuto from "../../../components/layout/ScrollableTabsButtonAuto";
function Index() {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const title = useMemo(
  //   () =>
  //     `${
  //       pathname
  //       //   .replace("/", "")
  //       //   .replace(/\/*\[[^\]]*]/g, "")
  //       //   .replace(/-/g, " ")
  //       //   .replace(/\//g, "  ")
  //       // .replace("General Settings"," ")
  //     }`,

  //   [pathname]
  // );
  let bnk = [
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: 6700,
      totalMoney: 64000,
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: " 2700 ",
      totalMoney: " 64,000",
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
    
  ];
  return (
    <div>
      <Navbar />
      <div className="flex flex-col ">
    
          <Navigation label={"OnGoingCampaigns"} heading={"Ongoing Campaigns"}/>

        <div className="flex flex-col justify-center items-center ">
        
        <div className="flex w-[100%] px-24 justify-center items-center text-center pt-32">
          <div className="flex  gap-3">
           <ScrollableTabsButtonAuto/>
           </div>

          <button
            className="flex  items-center ml-2 px-3 py-2.5"
            style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
          >
            <img src={images.Funnel} />
            <img className="pl-2" src={images.Filter} />
          </button>
        </div>
        <div className="gap-4 pt-[2rem] flex flex-wrap w-full justify-center">
          {bnk?.map((item) => {
            return (
              <Card
                title={item?.title}
                cardImage={item?.img}
                actualMoney={item?.actualMoney}
                totalMoney={item?.totalMoney}
                daysLeft={item?.daysLeft}
                userCount={item?.userCount}
              />
            );
          })}
        </div>
        <button
          className="pt-[68px]"
          style={{
            width: "fit-content",
            textAlign: "center",
            color: "#FF9F0A",
            fontSize: 24,
            fontFamily: "Satoshi",
            fontWeight: "500",
            textDecoration: "underline",
            wordWrap: "break-word",
            background: "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
            textDecoration: "underline",
            position: "relative",
          }}
        >
          <p className="gradient-button mb-0">Load More</p>
        </button>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;

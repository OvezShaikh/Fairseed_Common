import React, { useContext, useMemo, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import images from "../../../constants/images";
import SecondaryButton from "../../../components/inputs/secondaryButton";
import Card from "../../../components/layout/Card";
import icons from "../../../constants/icons";
import Navigation from '../../../components/layout/Navigation/Index'
import ScrollableTabsButtonAuto from "../../../components/inputs/Filters/Index";
import UserNavbar from '../../login/UserNavbar'
import axios from "axios";
import ScrollableTabsButtonForce from '../../../components/layout/ScrollableTabsButtonAuto'


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
  const page = 4;
  const totalPages = 4;
  return (
    <div>
      {
        localStorage.getItem('token') ? (
          <UserNavbar />
        ) : (
          <Navbar />
        )
      }
      <div className="flex flex-col ">

        <Navigation label={"OnGoingCampaigns"} heading={"Ongoing Campaigns"} />

        <div className="flex flex-col justify-center items-center ">

          <div className="flex w-[100%]  justify-center items-center text-center pt-32">
            <div className="flex  pt-[20px] desktop:ml-[-37px] desktop:max-w-[1740px] desktop:w-full desktop:justify-end max-desktop:w-[90%]">
              <ScrollableTabsButtonForce />
              <button
                className="flex items-center ml-2 px-3 py-1.5 max-w-[115px]"
                style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
              >
                <img src={images.Funnel} />
                {/* <img src={images.Filter} /> */}
                <p style={{
                  background:
                    "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}>Filter</p>
              </button>
            </div>
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
              display: page >= totalPages ? "none" : "block",
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

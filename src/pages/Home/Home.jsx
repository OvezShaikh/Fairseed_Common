import React from "react";
import "./Home.css";
// import icons from "../constants/icons";
import button from "../../constants/button";
import Slider from "../../components/layout/Slider";
import Card from "../../components/layout/Card";
import ScrollableTabsButtonForce from "../../components/layout/ScrollableTabsButtonAuto";
import Coursal from "../../components/layout/Coursal";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import DashBoard from "../../components/layout/DashBoard";
import PrimaryButton from "../../components/inputs/PrimaryButton";
import { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from '../login/UserNavbar'

import images from "../../constants/images";

function Home() {
  const [userList, setUserList] = useState([]);
  const [visibleCards, setVisibleCards] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [campaignCount,setCampaignCount] = useState('');
  const fetchUserList = async () => {
    try {
      const perPage = 8;
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/campaign/campaign?page=${page}&limit=${perPage}`
        );
        const res = response.data;
        console.log(res, "cards");
        console.log(res.rows);
        // `${process.env.REACT_APP_API_URL}/campaign/campaign?page=${page}&limit=${perPage}`
        if (Array.isArray(res.rows)) {
        setTotalPages(res.pages_count);
        setUserList([...userList, ...res.rows]);
      } else {
        console.error("Invalid data structure. Expected an array:", res.data);
      }
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };
  useEffect(() => {
    fetchUserList();
  }, [page]);
  let bnk = [
    {
      title: "Help me fund my College Fees for Harvard University",
      img: "https://deih43ym53wif.cloudfront.net/large_blue-mosque-glorius-sunset-istanbul-sultan-ahmed-turkey-shutterstock_174067919.jpg_1404e76369.jpg",
      actualMoney: 6700,
      totalMoney: 64000,
      userCount: "1003",
      daysLeft: "10 Days Left",
    },
  ];
  return (
    <>
      <div className="">
        {
          (localStorage.getItem('user_role')==='Normal')
           ? 
           (
            <UserNavbar/>
          ) :
            (
              <Navbar/>
              )
          }
      </div>
      <div>
        <Coursal />
      </div>
      <div
        className="bg-[#FFF6F5] desktop:justify-between max-desktop:flex-wrap max-desktop:justify-center max-desktop:gap-y-[64px] desktop:px-[48px]"
        style={{
          width: "100%",
          height: "100%",
        
          paddingTop: 48,
          paddingBottom: 48,
          
          alignItems: "flex-start",
          display: "flex",
        }}
      >
        <DashBoard />
      </div>
      <div className="flex pt-[100px] ">
        <div className="w-full flex-wrap flex flex-col items-center mx-10">
          <h1
            className="font-extrabold pb-4 desktop:text-[48px] max-desktop:text-[36px] max-tablet:text-[24px]" 
            style={{ fontFamily: "Satoshi" }}
          >
            Ongoing Campaigns 
          </h1>
          <div className="flex flex-col  text-center text-black/100 mb-6">
            <button
              style={{
                width: "100%",
                textAlign: "center",
                fontSize: 24,
                fontFamily: "Satoshi",
                fontWeight: "500",
                wordWrap: "break-word",
                background:
                  "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                textDecoration: "underline",
                position: "relative",
              }}
            >
              <p className="gradient-button mb-0 underline max-tablet:text-[16px]">
              See all {campaignCount} active campaigns
              </p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-wrap w-full   py-6  mb-11 items-center">
        <div className="flex  pt-[20px] desktop:ml-[-37px] desktop:max-w-[1740px] desktop:w-full desktop:justify-end max-desktop:w-[90%]">
          <ScrollableTabsButtonForce />
          <button
            className="flex items-center ml-2 px-3 py-1.5 max-w-[115px]"
            style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
          >
            <img src={images.Funnel} />
            {/* <img src={images.Filter} /> */}
            <p style={{background:
                    "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",}}>Filter</p>
          </button>
        </div>
        <div className="gap-4 mt-4  flex flex-wrap w-full justify-center desktop:max-w-[1740px]">
          {userList?.map((item) => {
            return (
              <Card
                key={item.id}
                username={item.user.username}
                title={item.title}
                og_id={item.id}
                cardImage={item.campaign_image}
                goalAmount={item.goal_amount}
                fundRaised={item.fund_raised}
                daysLeft={item.days_left}
                userCount={item.donor_count}
                location={item.location}
              />
            );
          })}
        </div>
        <button
          className="pt-[68px]"
          onClick={() => setPage(page + 1)}
          disabled={page >= totalPages}
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
            display: page >= totalPages ? "none" : "block",
            position: "relative",
          }}
        >
          <p className="gradient-button mb-0">Load More</p>
        </button>
      </div>
      <section className="bg-[#FFF6F5]">
        <div
          className="flex flex-col flex-wrap w-full   py-8 px-7  items-center"
          style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
        >
          <h1
            className="font-bold pt-[4rem] text-[48px]"
            style={{ fontFamily: "Satoshi", fontWeight: 900 }}
          >
            How it Works
          </h1>
          <div className="flex desktop:max-w-[94%] desktop:justify-between mt-12 place-items-center w-full max-desktop:flex-col max-desktop:gap-y-[40px]">
            <div className="place-items-center">
              <div className="max-w-[120px] mx-auto max-tablet:max-w-[75px]">
                <img className="" src={images.person} alt="" />
              </div>
              {/* <div className="grid grid-cols-12 mt-4"> */}
              <div className="flex justify-between mt-4 gap-x-[30px]">
                <div>
                  <img className="mr-3 col-span-2" src={images.one} alt="" />
                </div>
                <div className=" ml-2 col-span-10">
                  <h1
                    className="text-[28px] max-tablet:text-[24px]"
                    style={{
                      color: "#4A4E5A",
                     
                      fontFamily: "Satoshi",
                      fontWeight: "900",
                      wordWrap: "break-word",
                    }}
                  >
                    Create your Profile
                  </h1>
                  <p
                    className="text-[24px]"
                    style={{
                      width: "100%",
                      color: "#6B7280",
                      
                      fontFamily: "Satoshi",
                      fontWeight: "500",
                      wordWrap: "break-word",
                      marginTop: 6,
                    }}
                  >
                    Start with the basics
                    <br /> Kick things off with your
                    <br /> name and location.
                  </p>
                </div>
              </div>
            </div>
            <img className="col-span-1 max-desktop:rotate-90" src={images.Arrow} />
            <div className="col-span-3 grid grid-cols-1 place-items-center">
              <div className="desktop:max-w-[120px] max-tablet:max-w-[75px]">
                <img className="" src={images.pencicon} alt="" />
              </div>
              {/* <div className="grid grid-cols-12 mt-4"> */}
              <div className="flex justify-between grid-cols-12 mt-4 gap-x-[30px]">
                <div>
                  <img className=" mr-3 col-span-2" src={images.two} alt="" />
                </div>
                <div className=" ml-2 col-span-10">
                  <h1 className="text-[28px] max-tablet:text-[24px]"
                    
                    style={{
                      color: "#4A4E5A",
                      
                      fontFamily: "Satoshi ",
                      fontWeight: "900",
                      wordWrap: "break-word",
                    }}
                  >
                    Fill Cause Information
                  </h1>
                  <p
                    className="text-[24px]"
                    style={{
                      width: "100%",
                      color: "#6B7280",
                      
                      fontFamily: "Satoshi",
                      fontWeight: "500",
                      wordWrap: "break-word",
                      marginTop: 6,
                    }}
                  >
                    Tell your story
                    <br /> We'll guide you with tips
                    <br /> along the way.
                  </p>
                </div>
              </div>
            </div>
            <img className="col-span-1 max-desktop:rotate-90" src={images.Arrow} />
            <div className="col-span-3 grid grid-cols-1  place-items-center">
              <div className="desktop:max-w-[120px] max-tablet:max-w-[75px]">
                <img className="" src={images.Home} alt="" />
              </div>
              {/* <div className="grid grid-cols-12 mt-4"> */}
              <div className="flex justify-between grid-cols-12 mt-4 gap-x-[30px]">
                <div className="desktop:max-w-[120px]">
                  <img className="" src={images.three} alt="" />
                </div>
                <div className=" ml-2 col-span-10">
                  <h1
                    className="text-[28px] max-tablet:text-[24px]"
                    style={{
                      color: "#4A4E5A",
                      
                      fontFamily: "Satoshi",
                      fontWeight: "900",
                      wordWrap: "break-word",
                    }}
                  >
                    Update Acc details
                  </h1>
                  <p
                    className="text-[24px]"
                    style={{
                      width: "100%",
                      color: "#6B7280",
                     
                      fontFamily: "Satoshi",
                      fontWeight: "500",
                      wordWrap: "break-word",
                      marginTop: 4,
                    }}
                  >
                    Upload ID and a valid
                    <br /> account number. Our team
                    <br /> will verify the same.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href="/Home/Create-Campaign">
            <PrimaryButton
              sx={{
                borderRadius: "var(--Pixels-8, 8px)",
                fontSize: 20,
                fontWeight: "900",
                padding: "8px",
                margin: "50px 0px 50px 0px",
              }}
              className="p-2 my-10"
            >
              <div className="mr-2" style={{ width: 32, height: 32, position: "relative" }}>
                <img src={images.RocketLaunch} alt="" />
              </div>
              <div className="max-tablet:text-[16px]">Launch a Campaign Now !</div>
            </PrimaryButton>
          </a>
        </div>
      </section>
      <div className="flex-col pt-[60px] pb-[50px] flex-wrap container flex w-full text-center items-center">
        <h1
          className="desktop:text-[48px] font-bold max-desktop:text-[36px] max-tablet:text-[24px]"
          style={{ fontFamily: "Satoshi", fontWeight: 900 }}
        >
          Causes by Category
        </h1>
        <p
          className="text-black/60 font-bold mt-3 max-w-[974px] desktop:text-[24px] desktop:font-bold capitalize text-[#8E95A2] max-desktop:text-[20px] max-tablet:text-[16px]"
          style={{ fontFamily: "Satoshi" }}
        >
          Be it for a personal need, social cause or a creative idea - you can
          count on us for the project that you want to raise funds for.
        </p>
      </div>
      <div className="flexDirection:'row' w-full justify-center items-center flex mt-[80px] gap-5 px-[50px] ">
        <Slider />
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
}

export default Home;
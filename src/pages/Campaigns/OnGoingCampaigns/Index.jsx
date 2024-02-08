import React, { useContext, useMemo, useState, useEffect } from "react";
import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import images from "../../../constants/images";
import Card from "../../../components/layout/Card";
import Navigation from '../../../components/layout/Navigation/Index'
import UserNavbar from '../../login/UserNavbar'
import axios from "axios";
import ScrollableTabsButtonForce from '../../../components/layout/ScrollableTabsButtonAuto'
// import {
//   PiTrendUpDuotone,
//   PiStudentDuotone,
//   PiHandCoinsDuotone,
//   PiGenderFemaleDuotone,
//   PiMegaphoneSimpleDuotone,
//   PiMosqueDuotone,
//   PiAlarmDuotone,
//   PiHeartDuotone,
// } from "react-icons/pi";


function Index() {
  const [userList, setUserList] = useState([]);
  const [visibleCards, setVisibleCards] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [campaignCount, setCampaignCount] = useState(0);
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
        setCampaignCount(res.count);
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



  // let Filter = [
  //   {
  //     name: 'needs love',
  //     icon: 'sjdfhjdskhf',
  //   }
  // ]

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

          <div className="flex pt-28  desktop:ml-[-30px] desktop:max-w-[1760px] desktop:w-full desktop:justify-end max-desktop:w-[90%] max-desktop:flex-col max-desktop:items-end max-desktop:gap-y-[48px] max-tablet:mb-[50px] max-tablet:gap-y-[20px] max-desktop:pt-20 max-tablet:pt-16 scrollable-tabs-class ">
            {/* {Filter?.map((item) => {
              return (
                <ScrollableTabsButtonForce name={item?.name} icon={item?.icon} />
              )
            })} */}
            <ScrollableTabsButtonForce />
            <button
              className="flex items-center ml-2 px-3 py-1.5 max-w-[115px] gap-x-[12px] max-desktop:px-[20px] max-desktop:py-[17px] max-tablet:py-[6px]"
              style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
            >
              <img src={images.Funnel} />
              {/* <img src={images.Filter} /> */}
              <p className="text-[18px]" style={{
                background:
                  "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                "font-family": 'Satoshi',
                "font-weight": "700",
              }
              }>Filter</p>
            </button>
          </div>
          <div className="gap-4 pt-[2rem] flex flex-wrap w-full justify-center">
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
            className="pt-[64px] max-tablet:pt-[24px]"
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
      </div>
      <Footer />
    </div>
  );
}

export default Index;

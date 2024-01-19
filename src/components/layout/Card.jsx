import React from "react";
import icons from "../../constants/icons";
import images from "../../constants/images";
// import ProgressBar from '../ProgressBar'
import { useState, useEffect } from 'react';
import { LinearProgress } from "@mui/material";

function Card({key,username,title,cardImage,goalAmount,fundRaised,daysLeft,userCount,location}) {
  const [campaignData, setCampaignData] = useState([]);
  console.log('Logging information for Card component:', key, title,daysLeft,userCount, location);
  return (
    <>
      <div
        key={key}
        className="card rounded-xl font-bold"
        style={{ width: "23rem", fontFamily: "satoshi" }}
      >
        <img src={process.env.REACT_APP_BE_BASE_URL + cardImage} className="card-img-top h-80" alt="..." />
        <div className="card-body">
          <div className="flex flex-row">
            <img className="w-[6%] h-[6%]" src={images.Airlogo} />
            <p className="text-black/40 pl-2 text-[15px]">
            {username}
            </p>
          </div>
          <p
            className="card-text w-full pt-2 pb-4  text-1xl font-bold"
            style={{ fontWeight: "700", fontSize: 20 }}
          >
            {title}
          </p>
          <p className="text-black/40">
            <span className="font-bold text-black">₹{fundRaised}{" "}</span>
            funded of ₹{goalAmount}
          </p>
          {/* <img className="pt-1 pb-6" src={images?.range2}></img> */}
          <div className="pt-1 pb-4 ">
          <LinearProgress
                color="success"
                variant="determinate"
                style={{ height: "10px", borderRadius: "16px" }}
                value={(  fundRaised / goalAmount) * 100}
              />
            {/* <ProgressBar/> */}
          </div>
          <div className="flex justify-center items-center text-center  overflow-hidden w-full">
            <div className="flex flex-col w-[65%]">
              <div className="flex flex-row">
            <img className=" pt-2 " src={icons.Threeuser} />
            <p className="text-black/40 pt-1.5 pl-1 text-[15px]">{userCount}</p>
            <img className=" pt-2 pl-3  " src={icons.Clock} />
            {/* <p className="text-black/40 pt-1.5 pl-1 text-[15px]">{daysLeft}</p> */}
            <p className="text-black/40 pt-1.5 pl-1 text-[15px]">17</p>
            </div>
            <div className="flex" >
            <img className="pt-2   " src={images.MapPin} />
            {/* <p className="text-black/40 pt-1.5 pl-1 text-[15px]">{location}</p> */}
            <p className="text-black/40 pt-1.5 pl-1 text-[15px]">Pune,India</p>
            </div>
            </div>
            <div className="w-[35%]">

            <button
              className=" border-2   rounded-lg border-red-400 px-2 py-1"
              style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
            >
              <div className="flex ">
                <img className="" src={images?.Coins} />
                <p className="pl-1   text-[17px] ">Donate</p>
              </div>
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;


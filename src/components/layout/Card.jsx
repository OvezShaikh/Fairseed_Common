import React from "react";
import icons from "../../constants/icons";
import images from "../../constants/images";
// import ProgressBar from '../ProgressBar'
import { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";

function Card({
  key,
  username,
  title,
  cardImage,
  goalAmount,
  fundRaised,
  daysLeft,
  userCount,
  location,
  og_id,
}) {
  const image = process.env.REACT_APP_API_URL + cardImage;
  const [campaignData, setCampaignData] = useState([]);
  return (
    <>
      <div
        key={key}
        className="card rounded-xl font-bold desktop:max-w-[408px] w-full max-desktop:max-w-[355px]"
        style={{ fontFamily: "satoshi" }}
      >
        {/* <div style={{backgroundImage:'url{blob:https://www.figma.com/23aaba04-b230-4e67-98b4-b1e815583174}'}} className="card-img-top" alt="..." >
                 <div className=' flex m-3 bg-transparent'>
                     <img src={images.TrendUp}/>
                     <p>Trending</p>
                 </div>
                 </div>    */}
        <Link to={`/campaign-details/${og_id}`}>
          {/* <img src={process.env.REACT_APP_API_URL + cardImage} className="card-img-top h-80" alt="..."  />  */}
          <img
            src={`${process.env.REACT_APP_API_URL}` + cardImage}
            className="card-img-top h-80"
            alt="..."
            
          />
        </Link>
        <div className="card-body">
          <div className="flex flex-row">
            <img className="w-[6%] h-[6%]" src={images.Airlogo} />
            <p className="text-black/40 pl-2 text-[15px]">{username}</p>
          </div>
          <p
            className="card-text w-full pt-2 pb-4  text-1xl font-bold"
            style={{ fontWeight: "700", fontSize: 20 }}
          >
            {title}
          </p>
          <p className="text-black/40">
            <span className="font-bold text-black ">₹{fundRaised} </span>
            funded of ₹{goalAmount}
          </p>
          {/* <img className="pt-1 pb-6" src={images?.range2}></img> */}
          <div className="pt-1 pb-4 ">
            <LinearProgress
              
              variant="determinate"   
              sx={{ height: "10px", borderRadius: "16px", background: `linear-gradient(to right, #0DC7B1, #0DC7B1 ${((fundRaised / goalAmount) * 100)}%, #e0e0e0 ${((fundRaised / goalAmount) * 100)}%)`, "& .MuiLinearProgress-bar":{  backgroundColor: '#0DC7B1 !important  '} }}
              value={(fundRaised / goalAmount) * 100}

            />
            {/* <ProgressBar/> */}
          </div>
          <div className="flex justify-center items-center text-center  overflow-hidden w-full max-desktop:flex-col max-desktop:justify-center">
            <div className="flex flex-col w-[65%]">
              <div className="flex pl-1  flex-row max-desktop:justify-center">
                <div className="flex justify-center items-center text-center ">
                  <img className=" pt-2 " src={icons?.Threeuser} />
                  <p className="text-black/40 pt-2 pl-1 text-[15px]">
                    {userCount}
                  </p>
                </div>
                <div className="flex pl-3 justify-center items-center text-center ">
                  <img className=" pt-2 pl-3  " src={icons?.Clock} />
                </div>
                <p className="text-black/40 pt-2 pl-1 text-[15px] ">
                  {daysLeft} days left
                </p>
                {/* <p className="text-black/40 pt-1.5 pl-1 text-[15px]">17</p> */}
              </div>
              <div className="flex justify-start max-desktop:justify-center">
                <img className="pt-2 w-7  h-7 " src={images?.MapPin2} />
                <p className="text-black/40 pt-2  text-[15px] ">{location}</p>
                {/* <p className="text-black/40 pt-1.5 pl-1 text-[15px]">Pune,India</p> */}
              </div>
            </div>
            <div className="w-[35%] max-desktop:w-full">
              <button
                className=" border-2   rounded-lg border-red-400 px-2 py-1 max-desktop:w-full max-desktop:mt-[16px]"
                style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
              >
                <div className="flex pl-1 pr-2 py-1 max-desktop:justify-center">
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

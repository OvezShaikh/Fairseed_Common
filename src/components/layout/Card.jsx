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

  const [titleLines, setTitleLines] = useState(1);

  useEffect(() => {
    // Count the number of lines in the title
    const lines = title.split(" ").length;
    setTitleLines(lines);
  }, [title]);

  const marginBottom = title.length > 41 ? "2.5rem" : "4.3rem";
  

  

  const [campaignData, setCampaignData] = useState([]);
  return (
    <>
      <div
        key={key}
        className="card rounded-xl font-bold"
        style={{ width: "25.5rem", height:"36.625rem" ,fontFamily: "satoshi",boxShadow: "0px 1px 8px 0px rgba(16, 24, 40, 0.10), 0px 1px 6px -1px rgba(16, 24, 40, 0.10)" }}
        
      >
        
        <Link to={`/campaign-details/${og_id}`}>
          {/* <img src={process.env.REACT_APP_API_URL + cardImage} className="card-img-top h-80" alt="..."  />  */}
          <img
            src={`${process.env.REACT_APP_API_URL}` + cardImage}
            className="card-img-top h-[265px] w-[483.351px]"
            alt="..."
            
          />
        </Link>
        <div className="card-body ">
          <div className="flex flex-row">
            <img className="w-[6%] h-[6%]" src={images.Airlogo} />
            <p className="text-black/40 pl-2 text-[15px]">{username}</p>
          </div>
          <p
            className="card-text w-full pt-2   text-1xl font-bold"
            style={{ fontWeight: "700", fontSize: 20, marginBottom }}
          >
            {title}
          </p>
          <p className="text-black/40 ">
            <span className="font-bold text-black">₹{fundRaised} </span>
            funded of ₹{goalAmount}
          </p>
          <div className="pt-1 pb-10 ">
            <LinearProgress
              
              variant="determinate"   
              sx={{ height: "10px", borderRadius: "16px", background: `linear-gradient(to right, #0DC7B1, #0DC7B1 ${((fundRaised / goalAmount) * 100)}%, #e0e0e0 ${((fundRaised / goalAmount) * 100)}%)`, "& .MuiLinearProgress-bar":{  backgroundColor: '#0DC7B1 !important  '} }}
              value={(fundRaised / goalAmount) * 100}

            />
           
          </div>
          <div className="flex justify-center items-center text-center  overflow-hidden w-full" >
            <div className="flex flex-col w-[65%]">
              <div className="flex pl-1  flex-row">
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
              <div className="flex justify-start">
                <img className="pt-2 w-7  h-7 " src={images?.MapPin2} />
                <p className="text-black/40 pt-2  text-[15px] ">{location}</p>
                {/* <p className="text-black/40 pt-1.5 pl-1 text-[15px]">Pune,India</p> */}
              </div>
            </div>
            <div className="w-[35%]">
              <button
                className=" border-1   rounded-lg border-red-400 px-2 py-1 "
                style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
              >
                <div className="flex pl-1 pr-2 py-1 ">
                  <img className="pr-1 pl-1" src={images?.Coins} />
                  <p className="pl-1  text-[17px] ">Donate</p>
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

import React from "react";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { LinearProgress } from "@mui/material";
// import ProgressBar from '../ProgressBar'

function Card({
  title,
  totalMoney,
  actualMoney,
  daysLeft,
  userCount,
  cardImage,
  avatarImage,
  avatarName,
}) {
  return (
    <>
      <div
        key={key}
        className="card rounded-xl font-bold"
        style={{ width: "23rem", fontFamily: "satoshi" }}
      >
        {/* <div style={{backgroundImage:'url{blob:https://www.figma.com/23aaba04-b230-4e67-98b4-b1e815583174}'}} className="card-img-top" alt="..." >
                 <div className=' flex m-3 bg-transparent'>
                     <img src={images.TrendUp}/>
                     <p>Trending</p>
                 </div>
                 </div>    */}
        <img src={images.Maskgroup} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="flex flex-row">
            <img className="w-[6%] h-[6%]" src={images.Airlogo} />
            <p className="text-black/40 pl-2 text-[15px]">
              Teach for india Foundation
            </p>
          </div>
          <p
            className="card-text w-full pt-2 pb-4  text-1xl font-bold"
            style={{ fontWeight: "700", fontSize: 20 }}
          >
            {title}
          </p>
          <p className="text-black/40">
            <span className="font-bold text-black">₹{actualMoney}{" "}</span>
            funded of ₹{totalMoney}
          </p>
          {/* <img className="pt-1 pb-6" src={images?.range2}></img> */}
          <div className="pt-1 pb-4 ">
          <LinearProgress
                color="success"
                variant="determinate"
                style={{ height: "10px", borderRadius: "16px" }}
                value={(  actualMoney / totalMoney) * 100}
              />
            {/* <ProgressBar/> */}
          </div>
          <div className="flex justify-center items-center text-center  overflow-hidden w-full">
            <div className="flex flex-col w-[65%]">
              <div className="flex flex-row">
            <img className=" pt-2 " src={icons.Threeuser} />
            <p className="text-black/40 pt-1.5 pl-1 text-[15px]">{userCount}</p>
            <img className=" pt-2 pl-3  " src={icons.Clock} />
            <p className="text-black/40 pt-1.5 pl-1 text-[15px]">{daysLeft}</p>
            </div>
            <div className="flex" >
            <img className="pt-2   " src={icons.Clock} />
            <p className="text-black/40 pt-1.5 pl-1 text-[15px]">{daysLeft}</p>
            </div>
            </div>
            <div className="w-[35%]">

            <button
              className=" border-2   rounded-lg border-red-400 px-3 py-2"
              style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
            >
              <div className="flex ">
                <img className="" src={images?.Coins} />
                <p className="pl-1   text-[18px] font-[satoshi] ">Donate</p>
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

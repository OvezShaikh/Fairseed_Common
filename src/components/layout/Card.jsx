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

{
  /* <div className="card rounded-xl" style={{ width: "23rem" }}>
            <img src={images.Maskgroup} className="card-img-top" alt="..." />
            <div className="card-body">
              <img className="w-[60%]" src={images.Frame1} />
              <p className="card-text pt-2 pb-4  text-1xl font-bold">
                Help me fund my College Fees for Harvard University
              </p>
              <p className="text-black/40">
                <span className="font-bold text-black">₹ 2700</span> funded of ₹
                64,000
              </p>
              <img className="pt-1 pb-6" src={images.range}></img>
              <div className="flex  overflow-hidden w-full">
                <img className="w-[5%] pt-2 h-[5%]" src={icons.Threeuser} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">2930</p>
                <img className="w-[9%] pt-2 pl-3  h-[5%]" src={icons.Clock} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">
                  21 days Left
                </p>
                <button
                  className=" border-2   ml-12 rounded-lg border-red-400 px-2 py-1"
                  style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
                >
                  <div className="flex ">
                    <img className="text-[1px]" src={images.Coins} />
                    <p className="pl-0.5  text-[15px] ">Donate</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-xl" style={{ width: "23rem" }}>
            <img src={images.Maskgroup2} className="card-img-top" alt="..." />
            <div className="card-body">
              <img className="w-[40%]" src={images.Frame2} />
              <p className="card-text w-[70%] pt-2 pb-4  text-1xl font-bold">
                Build a free for all library in Pune, India
              </p>
              <p className="text-black/40">
                <span className="font-bold text-black">₹ 40,005</span> funded of
                ₹ 72,000
              </p>
              <img className="pt-1 pb-6" src={images.range2}></img>
              <div className="flex  overflow-hidden w-full">
                <img className="w-[5%] pt-2 h-[5%]" src={icons.Threeuser} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">930</p>
                <img className="w-[9%] pt-2 pl-3  h-[5%]" src={icons.Clock} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">
                  2 ays Left
                </p>
                <button
                  className=" border-2   ml-12 rounded-lg border-red-400 px-2 py-1"
                  style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
                >
                  <div className="flex ">
                    <img className="text-[1px]" src={images.Coins} />
                    <p className="pl-0.5  text-[15px] ">Donate</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-xl" style={{ width: "23rem" }}>
            <img src={images.Maskgroup3} className="card-img-top" alt="..." />
            <div className="card-body">
              <img className="w-[40%]" src={images.Frame3} />
              <p className="card-text pt-2 pb-4  text-1xl font-bold">
                Gather to pay teachers salary in schools of Gaza
              </p>
              <p className="text-black/40">
                <span className="font-bold text-black">₹ 49,743</span> funded of
                ₹ 1,24,000
              </p>
              <img className="pt-1 pb-6" src={images.range3}></img>
              <div className="flex  overflow-hidden w-full">
                <img className="w-[5%] pt-2 h-[5%]" src={icons.Threeuser} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">1003</p>
                <img className="w-[9%] pt-2 pl-3  h-[5%]" src={icons.Clock} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">
                  10 Days Left
                </p>
                <button
                  className=" border-2   ml-12 rounded-lg border-red-400 px-2 py-1"
                  style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
                >
                  <div className="flex ">
                    <img className="text-[1px]" src={images.Coins} />
                    <p className="pl-0.5  text-[15px] ">Donate</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-xl" style={{ width: "23rem" }}>
            <img src={images.Maskgroup4} className="card-img-top" alt="..." />
            <div className="card-body">
              <img className="w-[30%]" src={images.Frame4} />
              <p className="card-text pt-2 pb-4  text-1xl font-bold">
                Let us build a state-of-the-art International School in Jakarta
              </p>
              <p className="text-black/40">
                <span className="font-bold text-black">₹ 71,200</span> funded of
                ₹ 72,000
              </p>
              <img className="pt-1 pb-6" src={images.range4}></img>
              <div className="flex  overflow-hidden w-full">
                <img className="w-[5%] pt-2 h-[5%]" src={icons.Threeuser} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">930</p>
                <img className="w-[9%] pt-2 pl-3  h-[5%]" src={icons.Clock} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">
                  2 Days Left
                </p>
                <button
                  className=" border-2   ml-12 rounded-lg border-red-400 px-2 py-1"
                  style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
                >
                  <div className="flex ">
                    <img className="text-[1px]" src={images.Coins} />
                    <p className="pl-0.5  text-[15px] ">Donate</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between mt-4  flex w-[90%] px-5">
          <div className="card rounded-xl" style={{ width: "23rem" }}>
            <img src={images.Maskgroup3} className="card-img-top" alt="..." />
            <div className="card-body">
              <img className="w-[40%]" src={images.Frame3} />
              <p className="card-text pt-2 pb-4  text-1xl font-bold">
                Gather to pay teachers salary in schools of Gaza
              </p>
              <p className="text-black/40">
                <span className="font-bold text-black">₹ 49,743</span> funded of
                ₹ 1,24,000
              </p>
              <img className="pt-1 pb-6" src={images.range3}></img>
              <div className="flex  overflow-hidden w-full">
                <img className="w-[5%] pt-2 h-[5%]" src={icons.Threeuser} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">1003</p>
                <img className="w-[9%] pt-2 pl-3  h-[5%]" src={icons.Clock} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">
                  10 Days Left
                </p>
                <button
                  className=" border-2   ml-12 rounded-lg border-red-400 px-2 py-1"
                  style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
                >
                  <div className="flex ">
                    <img className="text-[1px]" src={images.Coins} />
                    <p className="pl-0.5  text-[15px] ">Donate</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-xl" style={{ width: "23rem" }}>
            <img src={images.Maskgroup} className="card-img-top" alt="..." />
            <div className="card-body">
              <img className="w-[60%]" src={images.Frame1} />
              <p className="card-text pt-2 pb-4  text-1xl font-bold">
                Help me fund my College Fees for Harvard University
              </p>
              <p className="text-black/40">
                <span className="font-bold text-black">₹ 2700</span> funded of ₹
                64,000
              </p>
              <img className="pt-1 pb-6" src={images.range}></img>
              <div className="flex  overflow-hidden w-full">
                <img className="w-[5%] pt-2 h-[5%]" src={icons.Threeuser} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">2930</p>
                <img className="w-[9%] pt-2 pl-3  h-[5%]" src={icons.Clock} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">
                  21 days Left
                </p>
                <button
                  className=" border-2   ml-12 rounded-lg border-red-400 px-2 py-1"
                  style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
                >
                  <div className="flex ">
                    <img className="text-[1px]" src={images.Coins} />
                    <p className="pl-0.5  text-[15px] ">Donate</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="card rounded-xl" style={{ width: "23rem" }}>
            <img src={images.Maskgroup4} className="card-img-top" alt="..." />
            <div className="card-body">
              <img className="w-[30%]" src={images.Frame4} />
              <p className="card-text pt-2 pb-4  text-1xl font-bold">
                Let us build a state-of-the-art International School in Jakarta
              </p>
              <p className="text-black/40">
                <span className="font-bold text-black">₹ 71,200</span> funded of
                ₹ 72,000
              </p>
              <img className="pt-1 pb-6" src={images.range4}></img>
              <div className="flex  overflow-hidden w-full">
                <img className="w-[5%] pt-2 h-[5%]" src={icons.Threeuser} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">930</p>
                <img className="w-[9%] pt-2 pl-3  h-[5%]" src={icons.Clock} />
                <p className="text-black/40 pt-1.5 pl-1 text-[15px]">
                  2 Days Left
                </p>
                <button
                  className=" border-2   ml-12 rounded-lg border-red-400 px-2 py-1"
                  style={{ backgroundColor: "rgba(255, 246, 245, 1)" }}
                >
                  <div className="flex ">
                    <img className="text-[1px]" src={images.Coins} />
                    <p className="pl-0.5  text-[15px] ">Donate</p>
                  </div>
                </button>
              </div>
            </div>
          </div> */
}

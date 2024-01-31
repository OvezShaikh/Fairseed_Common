import React from "react";
import Profilepic from "../../assets/account.svg";
import { Avatar } from "@mui/material";

function Doner({ data }) {
  return (
    <div>
      {/* Use a div for outermost container */}
      {data !== null && data !== undefined
        ? data?.map((items) => {
            return (
              <div className="grid grid-cols-10 pt-4">
                <div className="col-span-7 pb-3">
                  <div className="grid grid-cols-7">
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 56, height: 56 }}
                    />
                    <h1
                      className="font-bold col-span-6 flex items-center pl-2"
                      style={{
                        fontFamily: "satoshi",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {items.full_name}
                    </h1>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex flex-col">
                    <div className="flex">
                  <h1 className="text-xl font-semibold font-[satoshi] text-[#1ABD54] ">
                     +
                   </h1>
                  <h1 className="text-xl font-semibold font-[satoshi] text-[#1ABD54] ml-3">
                    {items?.amount}
                   </h1></div>
                    <p className="text-black/40 pl-5 font-[satoshi] col-span-2 ml-1">{items.date}</p>{" "}
                    {/* Assuming it's 'donationDate' */}
                  </div>
                </div>
                <hr className="col-span-10" />
              </div>
            );
          })
        : null}{" "}
      {/* Use null for empty state */}
    </div>
  );
}

export default Doner;

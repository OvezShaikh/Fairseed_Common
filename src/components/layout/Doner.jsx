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
              <div className="grid grid-cols-10 pt-3">
                <div className="col-span-8 pb-2">
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
                <div className="col-span-2">
                  <div className="grid grid-cols-2">
                    <h1 className="text-xl font-semibold font-[satoshi] text-[#1ABD54] col-span-2">
                      + {items?.amount}
                    </h1>
                    <p className="text-black/40 font-[satoshi] col-span-2">{items.date}</p>{" "}
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

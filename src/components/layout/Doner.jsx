import React from "react";
import Profilepic from "../../assets/account.svg";
import { Avatar } from "@mui/material";
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  [theme.breakpoints.down('sm')]: {
    width: '46px',
    height: '46px',
  },
  // [theme.breakpoints.down('lg')]: {
  //   width: '67px',
  //   height: '67px'

  // }
}));

function Doner({ data }) {
  const isMaxTablet = useMediaQuery('(max-width: 667px)');
  return (
    <div className="max-desktop:w-full">
      {/* Use a div for outermost container */}
      {data !== null && data !== undefined
        ? data?.map((items) => {
          return (
            <div className="grid grid-cols-10 pt-4">
              <div className="col-span-7 pb-3">
                <div className="grid grid-cols-7">
                  <StyledAvatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <h1
                    className=" col-span-6 flex items-center pl-2 max-tablet:text-[18px]  font-[satoshi] font-semibold text-[24px] max-tablet:pl-5"
                  // style={{
                  //   fontFamily: "satoshi",
                  //   fontWeight: 700,
                  //   fontSize: 24,
                  // }}
                  >
                    {items.full_name}
                  </h1>
                </div>
              </div>
              <div className="col-span-3">
                <div className="flex flex-col max-desktop:items-end max-tablet:items-end">
                  <div className="flex">
                    <div className="max-desktop:flex  max-tablet:flex flex max-tablet:justify-end ">
                      <h1 className="text-xl font-semibold font-[satoshi] text-[#1ABD54] max-tablet:text-lg max-tablet:mr-2">
                        +
                      </h1>
                      <h1 className="text-xl font-semibold font-[satoshi] text-[#1ABD54] ml-3 max-tablet:ml-1 max-tablet:text-lg max-desktop:text-[24px]">
                        {items?.amount}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/40  font-[satoshi] col-span-2 ml-1 max-tablet:text-[16px] max-tablet:font-semibold max-desktop:text-[20px]">{items.date}</p>{" "}
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

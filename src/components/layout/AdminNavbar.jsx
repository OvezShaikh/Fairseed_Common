import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TuneIcon from "@mui/icons-material/Tune";
import HelpIcon from "@mui/icons-material/Help";
import images from "../../constants/images";
// import Logo from '../images/Logo.png'
import DropDown from "./navbar/DropDown";
import { useMediaQuery } from "@mui/material";
import Badge from "@mui/material/Badge";

import { Avatar, Grid, Stack } from "@mui/material";
import { Search } from "../inputs/Search";

const Navbar = () => {
  const isTab = useMediaQuery("(max-width: 1100px)");

  const sideBar = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <nav className=" fixed top-0 left-0 right-0 z-10 pl-5 pr-5 bg-white border-b-2 border-[#D8DBDF] border-solid justify-between  items-center inline-flex">
        <div className="w-[815.56px] self-stretch pt-2 pb-2 justify-start items-center gap-4 flex">
          <div className="w-24 h-9 relative">
            <img src={images.Logo} alt="" />
          </div>
        </div>
        <div className="w-auto self-stretch   pb-2 pt-2 rounded justify-start items-center flex">
          {/* <input className=' bg-gray-100 p-2 relative  ' placeholder='Search' /> */}
          {/* <Searchbar /> */}
          <Search sx={{
            width: '362px',
            background: '#F7F8F8',
            "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
              border: `none`,
            },
            "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: `none`,
            },
          }} />
          <div className="flex-row ps-2 justify-start items-center inline-flex ">
            <Badge badgeContent={17} style={{ cursor: 'pointer' }} color="error">
              <NotificationsIcon />
            </Badge>
            <button className="w-6 h-6 flex-1  ml-3">
              <TuneIcon />
            </button>
            <button className="w-6 h-6 flex-1 mx-3">
              <HelpIcon />
            </button>
            <Grid
              item
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems="center"
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-end"
                className="font-light"
                style={{
                  fontSize: "0.75rem",
                  marginRight: "10px",
                  color: "#828282",
                  fontWeight: "500",
                  width: `${isTab ? (sideBar ? "" : "130%") : "150%"}`,
                }}
              >
                <p className="text-truncate m-0" style={{ maxWidth: "100%" }}>
                  {"Username"}
                </p>
                <p className="text-truncate m-0" style={{ maxWidth: "100%" }}>
                  {"Designation"}
                </p>
              </Stack>
              <DropDown>
                <Avatar
                  sx={{
                    width: 35,
                    height: 35,
                    marginRight: `15px`,
                    color: "#fff",
                    background: "#0094AA",
                  }}
                  className="my-auto"
                />
                {/* <ProfileAvatar /> */}
              </DropDown>
            </Grid>
          </div>
        </div>
      </nav>
      {/* Side bar */}
    </>
  );
};

export default Navbar;

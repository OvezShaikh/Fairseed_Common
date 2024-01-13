import { Grid, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import images from "../../../constants/images";
import { useLocation, useNavigate } from "react-router-dom";
import SampleStepper from "./SampleStepper";
import Stepper from "./Stepper";

function CreateCampaigns() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = useMemo(
    () =>
      `${pathname
        .replace("/", "")
        .replace(/\/*\[[^\]]*]/g, "")
        .replace(/-/g, " ")
        .replace(/\//g, "  ")
        .replace("General Settings"," ")}`,

    [pathname]
  );
  return (
    <>
      <Grid sx={{ padding: "100px 45px 40px 45px" }}>
        <Typography
          variant="h6"
          noWrap
          component="div"
          fontSize={"1rem"}
          color={"black"}
          display="flex"
          flexDirection={"column"}
          alignItems="start"
          className="text-capitalize text-truncate"
          // title={title}
        >
          <div
            className="py-3"
            onClick={() => navigate(-1)}
          >
            <img src={images.ArrowBack} alt="" />
          </div>
          <div
            className="flex flex-col "
            style={{ fontFamily: "satoshi", fontSize: 20, fontWeight: 600 }}
          >
                  {title ? <>{title}</> : "Create Campaigns"}
          </div>
        </Typography>
      </Grid>
      <Grid
        className="bg-[#FFF6F5] w-full h-[100px]"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <h1
          style={{
            fontFamily: "satoshi",
            fontWeight: 900,
            fontSize: "48px",
            background: "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          Create Campaign
        </h1>
      </Grid>
      <Grid
        display={"flex"}
        justifyItems={"center"}
        justifyContent={"center"}
        className="pt-32 "
      >
        {/* <Stepper /> */}
        <SampleStepper/>
      </Grid>
    </>
  );
}

export default CreateCampaigns;

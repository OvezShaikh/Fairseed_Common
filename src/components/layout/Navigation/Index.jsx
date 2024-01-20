import React, { useContext, useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import images from "../../../constants/images";

function Index({ label, heading }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = useMemo(
    () =>
      `${pathname
        //   .replace("/", "")
        //   .replace(/\/*\[[^\]]*]/g, "")
        //   .replace(/-/g, " ")
        //   .replace(/\//g, "  ")
        // .replace("General Settings"," ")
        .slice(1)}`,

    [pathname]
  );
  return (
    <div>
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
          <div className="py-3" onClick={() => navigate(-1)}>
            <img src={images.ArrowBack} alt="" />
          </div>
          <div
            className="flex flex-col "
            style={{ fontFamily: "satoshi", fontSize: "28px", fontWeight: 500 }}
          >
            {title ? <>{title.split("/")[1]}</> : { label }}
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
          {heading}
        </h1>
      </Grid>
    </div>
  );
}

export default Index;

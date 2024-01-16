import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useMemo } from "react";
import SettingsTabs from "../../../../components/layout/SettingsTabs/Index";
import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";
import images from "../../../../constants/images";
import { Grid, Typography } from "@mui/material";
import PrimaryButton from "../../../../components/inputs/PrimaryButton";

function Index() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = useMemo(
    () =>
      `${
        pathname
        //   .replace("/", "")
        //   .replace(/\/*\[[^\]]*]/g, "")
        //   .replace(/-/g, " ")
        //   .replace(/\//g, "  ")
        // .replace("General Settings"," ")
      }`,

    [pathname]
  );
  return (
    <div>
      <Navbar />
      <div className="flex flex-col ">
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
              style={{ fontFamily: "satoshi", fontSize: 20, fontWeight: 600 }}
            >
              {title ? <>{title}</> : "Donet"}
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
              background:
                "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            Settings
          </h1>
        </Grid>
      </div>
      <div className="flex flex-col w-full py-24 justify-center items-center">
        <div className="w-[50%]">
          <SettingsTabs />
        </div>
        <PrimaryButton
          sx={{
            width: "20%",
            height: "62px",
            borderRadius: "var(--Spacing-12, 12px)",
          }}
        >
          <h1
            style={{
              color: "#FFF",
              fontFamily: "Satoshi",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 700,
            }}
          >
            Save Changes
          </h1>
        </PrimaryButton>
      </div>
      <Footer />
    </div>
  );
}

export default Index;

import { useLocation, useNavigate } from "react-router-dom";
import React, { useContext, useMemo } from "react";
import SettingsTabs from "../../../../components/layout/SettingsTabs/Index";
import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";
import images from "../../../../constants/images";
import { Grid, Typography } from "@mui/material";
import PrimaryButton from "../../../../components/inputs/PrimaryButton";
import Navigation from '../../../../components/layout/Navigation/Index'
function Index() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = useMemo(
    () =>
      `${
        pathname
      }`,

    [pathname]
  );
  return (
    <div>
      <Navbar />
      <div className="flex flex-col ">
        <Navigation label={'DonateSetting'} heading={"Settings"}/>
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

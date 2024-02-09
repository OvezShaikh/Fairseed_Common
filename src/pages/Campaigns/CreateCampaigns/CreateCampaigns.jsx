import { Grid, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import images from "../../../constants/images";
import { useLocation, useNavigate } from "react-router-dom";
// import IndexNew from '../../../components/layout/Stepper/IndexNew'
import Navigation from '../../../components/layout/Navigation/Index'
import Stepper from '../../../components/layout/Stepper/Index'


function CreateCampaigns() {
  // const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const title = useMemo(
  //   () =>
  //     `${pathname
  //     // .replace("/", "")
  //     // .replace(/\/*\[[^\]]*]/g, "")
  //     // .replace(/-/g, " ")
  //     // .replace(/\//g, "  ")
  //     // .replace("General Settings"," ")
  //     }`,

  //   [pathname]
  // );
  return (
    <div className="w-full justify-center items-center create-campaign-page">
      <Navigation label={'createCampaign'} heading={'Create a Campaign'} />
      <Grid
        display={"flex"}
        justifyItems={"center"}
        justifyContent={"center"}
        className="pt-[176px] pb-[50px] max-desktop:pt-[60px] max-desktop:pb-[0px]"
      >
        <div className="w-[60%] flex justify-center items-center max-desktop:w-[94%]">
          <Stepper />
        </div>
      </Grid>
    </div>
  );
}

export default CreateCampaigns;

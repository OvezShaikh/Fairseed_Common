import { Grid, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import images from "../../../constants/images";
import { useLocation, useNavigate } from "react-router-dom";
import Stepper from '../../../components/layout/Stepper/Index'
import Navigation from '../../../components/layout/Navigation/Index'

function CreateCampaigns() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const title = useMemo(
    () =>
      `${pathname
        // .replace("/", "")
        // .replace(/\/*\[[^\]]*]/g, "")
        // .replace(/-/g, " ")
        // .replace(/\//g, "  ")
        // .replace("General Settings"," ")
      }`,

    [pathname]
  );
  return (
    <>
      <Navigation label={'createCampaign'} heading={'Create Campaign'}/>
      <Grid
        display={"flex"}
        justifyItems={"center"}
        justifyContent={"center"}
        className="pt-32 "
      >
        <Stepper/>
      </Grid>
    </>
  );
}

export default CreateCampaigns;

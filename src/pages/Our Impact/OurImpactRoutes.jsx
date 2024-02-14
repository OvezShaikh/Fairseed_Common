import React from "react";
import { Route, Routes } from "react-router-dom";
import StoriesOfChange from "../StaticPages/StoriesOfChange/Index";
import Limit from "../../components/AdminPanelPages/General_Setting/Limit/Index";
import ProfilesSocial from "../../components/AdminPanelPages/General_Setting/ProfilesSocial/Index";

function OurImpactRoutes() {
  return (
    <Routes>
      <Route
        path="/StoriesOfChange"
        element={
          <StoriesOfChange />
        }
      />
      <Route
        path="/Limits"
        element={
          <Limit />
        }
      />
      <Route
        path="/Profiles-Social"
        element={
          <ProfilesSocial />
        }
      />
    </Routes>
  );
}

export default OurImpactRoutes;

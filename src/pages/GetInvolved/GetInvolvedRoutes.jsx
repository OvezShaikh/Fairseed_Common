import React from "react";
import { Route, Routes } from "react-router-dom";
import Supportacampaign from "../GetInvolved/Supportacampaign"
import Careers from "./Careers";
import Internship from "./Intership";
import Associateship from "./Associateship";
import Partnerwithus from "./Partnerwithus";

function OurImpactRoutes() {
  return (
    <Routes>
      <Route
        path="/Associateship"
        element={
          <Associateship />
        }
      />
      <Route
        path="/Support-a-campaign"
        element={
          <Supportacampaign />
        }
      />
      <Route
        path="/Careers"
        element={
          <Careers />
        }
      />
      <Route
        path="/Internship"
        element={
          <Internship />
        }
      />
      <Route
        path="/Partner-with-us"
        element={
          <Partnerwithus />
        }
      />
      <Route
        path="/Partner-with-us"
        element={
          <Partnerwithus />
        }
      />
    </Routes>
  );
}

export default OurImpactRoutes;

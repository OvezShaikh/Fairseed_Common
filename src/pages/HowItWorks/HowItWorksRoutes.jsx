import React from "react";
import { Route, Routes } from "react-router-dom";
import HowItWorks from "./HowItWorks";

function HowItWorksRoutes() {
  return (
    <Routes>
      <Route
        path="/How-It-Works"
        element={
          <HowItWorks />
        }
      />
    
    </Routes>
  );
}

export default HowItWorksRoutes;

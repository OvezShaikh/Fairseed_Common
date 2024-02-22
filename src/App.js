import React, { useEffect } from "react";
import "./App.css";
import AdminPage from "../src/pages/AdminPanel/AdminPage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import HomePage from "./pages/LandingPage/index";
import CreateCampaigns from "./pages/Campaigns/CreateCampaigns/Index";
import CurrentCampaign from "./pages/Campaigns/CurrentCampaign/Index";
import Donet from "./pages/Campaigns/Donet/Index";
import DonateSettings from "./pages/Campaigns/Donet/DonateSettings/Index";
import CampaignsByCategory from "./pages/Campaigns/CampaignsByCategory/Index";
import OnGoingCampaigns from "./pages/Campaigns/OnGoingCampaigns/Index";
import LoginOnSmallScreen from "./pages/login/Login_page/LoginOnSmallScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-image-crop/dist/ReactCrop.css'
import RegisterSmallScreen from "./pages/login/Sign_Up/RegisterSmallScreen";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="container p-0">
      {/* <OnGoingCampaigns/> */}
      {/* <CreateCampaigns/> */}
      {/* <BrowserRouter>
        <div className="container">
          <AdminPage />
        </div>
      </BrowserRouter> */}
 <ToastContainer
      autoClose={5000}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Home/Create-Campaign" element={<CreateCampaigns />} />
          <Route path="/Home/OnGoingCampaigns" element={<OnGoingCampaigns />} />
          <Route path="/AdminPanel/*" element={<AdminPage />} />
          <Route path="/Home/Donate" element={<Donet />} />
          <Route path="/Home/DonateSettings" element={<DonateSettings />} />
          <Route
            path="/Home/CampaignsByCategory/:id"
            element={<CampaignsByCategory />}
          />
          <Route
            path="/Home/LoginOnSmallScreen"
            element={<LoginOnSmallScreen />}
          />
          <Route
            path="/Home/RegisterSmallScreen"
            element={<RegisterSmallScreen />}
          />
          <Route path="/campaign-details/:id" element={<CurrentCampaign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
{
  /* <Route path='/Home/CurrentCampaign' element={<CurrentCampaign/>}/> */
}

{
  /* <Route path='/Home/ReligiousEducationCampaigns/:id' element={<ReligiousEducationCampaigns/>}/>  */
}

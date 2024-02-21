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
import RegisterSmallScreen from "./pages/login/Sign_Up/RegisterSmallScreen";
import UserEdit from "../src/components/AdminPanelPages/Froms/UserEdit/Index";
import AdminLayout from "./components/layout/AdminLayout/Index";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
import StoriesOfChange from "./pages/StaticPages/StoriesOfChange/Index";
import Associateship from "./pages/GetInvolved/Associateship";
import Supportacampaign from "./pages/GetInvolved/Supportacampaign";
import Internship from "./pages/GetInvolved/Intership";
import Careers from "./pages/GetInvolved/Careers";
import Partnerwithus from "./pages/GetInvolved/Partnerwithus";
import Reports from "./pages/Our Impact/Reports";
import KnowingFairseed from "./pages/AboutUs/KnowingFairseed";
import VisionMission from "./pages/AboutUs/Vision&mission";
import Objectivesandvalues from "./pages/AboutUs/Objectives&values";
import OurTeam from "./pages/AboutUs/OurTeam";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import PrivacyPolicy from "./pages/login/Sign_Up/PrivacyPolicy";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

          <Route path="/Home/Impact/StoriesOfChange" element={<StoriesOfChange />} />

          <Route path="/Home/GetInvolved/Associateship" element={<Associateship />} />
          
          <Route path="/Home/GetInvolved/Support-a-campaign" element={<Supportacampaign />} />

          <Route path="/Home/GetInvolved/Internship" element={<Internship />} />

          <Route path="/Home/GetInvolved/Careers" element={<Careers />} />

          <Route path="/Home/GetInvolved/Partner-with-us" element={<Partnerwithus />} />

          <Route path="/Home/Impact/Reports" element={<Reports />} />

          <Route path="/Home/About-Us/Knowing-Fairseed" element={<KnowingFairseed />} />

          <Route path="/Home/About-Us/Vision-&-Mission" element={<VisionMission />} />

          <Route path="/Home/About-Us/Objectives-&-values" element={<Objectivesandvalues />} />

          <Route path="/Home/About-Us/Our-Team" element={<OurTeam />} />

          <Route path="/Home/How-It-Works" element={<HowItWorks />} />

          <Route path="/Home/Sign-Up/Privacy-Policy" element={<PrivacyPolicy/>} />

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

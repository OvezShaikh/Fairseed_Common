import React, { useEffect, useState } from "react";
import "./App.css";
import AdminPage from "../src/pages/AdminPanel/AdminPage";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/LandingPage/index";
import CreateCampaigns from "./pages/Campaigns/CreateCampaigns/Index";
import CurrentCampaign from "./pages/Campaigns/CurrentCampaign/Index";
import CampaignsByCategory from "./pages/Campaigns/CampaignsByCategory/Index";
import OnGoingCampaigns from "./pages/Campaigns/OnGoingCampaigns/Index";
import LoginOnSmallScreen from "./pages/login/Login_page/LoginOnSmallScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-image-crop/dist/ReactCrop.css";
import RegisterSmallScreen from "./pages/login/Sign_Up/RegisterSmallScreen";
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
import "react-toastify/dist/ReactToastify.css";
import ForgotPasswordSmScreen from "./pages/login/ForgotPassword/ForgotPasswordSmScreens";
import Account from "./pages/Account Settings/Index";
import Donate from "./pages/Donate/Index";
import AdminPanelLandingPage from "./components/AdminPanelPages/AdminPanelLandingPage/Index";
import UserPage from "./pages/User Page/User_page";
import AddPages from "./pages/AddPages/Index";

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
      <BrowserRouter>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          limit={3}
          theme="colored"
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Home/Create-Campaign" element={<CreateCampaigns />} />
          <Route path="/Home/OnGoingCampaigns" element={<OnGoingCampaigns />} />
          <Route path="/AdminPanel/*" element={<AdminPage />} />
          <Route path="/User/*" element={<UserPage />} />

          <Route
            path="/Home/CampaignsByCategory/:id"
            element={<CampaignsByCategory />}
          />
          <Route path="/Home/Login" element={<LoginOnSmallScreen />} />
          <Route path="/Login/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route
            path="/Home/RegisterSmallScreen"
            element={<RegisterSmallScreen />}
          />

          <Route path="/campaign-details/:id" element={<CurrentCampaign />} />

          <Route
            path="/Home/Impact/StoriesOfChange"
            element={<StoriesOfChange />}
          />

          <Route
            path="/Home/GetInvolved/Associateship"
            element={<Associateship />}
          />

          <Route
            path="/Home/GetInvolved/Support-a-campaign"
            element={<Supportacampaign />}
          />

          {/* <Route path="/Home/GetInvolved/Internship" element={<Internship />} />

          <Route path="/Home/GetInvolved/Careers" element={<Careers />} />

          <Route
            path="/Home/GetInvolved/Partner-with-us"
            element={<Partnerwithus />}
          />

          <Route path="/Home/Impact/Reports" element={<Reports />} />

          <Route
            path="/Home/About-Us/Knowing-Fairseed"
            element={<KnowingFairseed />}
          />

          <Route
            path="/Home/About-Us/Vision-&-Mission"
            element={<VisionMission />}
          />

          <Route
            path="/Home/About-Us/Objectives-&-values"
            element={<Objectivesandvalues />}
          />

          <Route path="/Home/About-Us/Our-Team" element={<OurTeam />} />

          <Route
            path="/Home/Sign-Up/Privacy-Policy"
            element={<PrivacyPolicy />}
          /> */}
          {/* <Route path="/Home/How-It-Works" element={<HowItWorks />} /> */}
          <Route
            path="/Home/Password-Reset"
            element={<ForgotPasswordSmScreen />}
          />

          <Route path="/account-settings" element={<Account />} />
          <Route path="/Home/donate" element={<Donate />} />
          <Route path="/Home/donate/:id" element={<Donate />} />

          <Route
            path="/adminpanellandingpage"
            element={<AdminPanelLandingPage />}
          />
          <Route path="/Home/:slug" element={<AddPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import "./App.css";
import AdminPage from "../src/pages/AdminPanel/AdminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/LandingPage/index";
import CreateCampaigns from "./pages/Campaigns/CreateCampaigns/Index";
import CurrentCampaign from "./pages/Campaigns/CurrentCampaign/Index";
import Donet from "./pages/Campaigns/Donet/Index";
import DonateSettings from "./pages/Campaigns/Donet/DonateSettings/Index";
import CampaignsByCategory from "./pages/Campaigns/CampaignsByCategory/Index";
import OnGoingCampaigns from "./pages/Campaigns/OnGoingCampaigns/Index";

function App() {
  console.log("API");
  return (
    <div className="">
      {/* <OnGoingCampaigns/> */}
      {/* <CreateCampaigns/> */}
      {/* <BrowserRouter>
        <div className="container">
          <AdminPage />
        </div>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Home/Create-Campaign" element={<CreateCampaigns />} />
          <Route path="/Home/AdminPage" element={<AdminPage />} />
          <Route path="/Home/OnGoingCampaigns" element={<OnGoingCampaigns />} />

          <Route path="/Home/Donate" element={<Donet />} />
          <Route path="/Home/DonateSettings" element={<DonateSettings />} />
          <Route
            path="/Home/CampaignsByCategory/:id"
            element={<CampaignsByCategory />}
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

import "./App.css";
import AdminPage from "../src/pages/AdminPanel/AdminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/LandingPage/index'
import CreateCampaigns from "./pages/Campaigns/CreateCampaigns/Index";
import OnGoingCampaigns from './pages/Campaigns/OnGoingCampaigns/Index'
import Donet from './pages/Campaigns/Donet/Index'
import DonateSettings from './pages/Campaigns/Donet/DonateSettings/Index'
import ReligiousEducationCampaigns from './pages/Campaigns/ReligiousEducationCampaigns/Index'

function App() {
  return (
    <div >
      {/* <OnGoingCampaigns/> */}
      {/* <CreateCampaigns/> */}
      {/* <AdminPage/> */}

      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path='/Home/Create-Campaign' element={<CreateCampaigns/>}/>
        <Route path='/Home/AdminPage' element={<AdminPage/>}/>
        <Route path='/Home/OnGoingCampaigns' element={<OnGoingCampaigns/>}/>
        <Route path='/Home/Donate' element={<Donet/>}/>
        <Route path='/Home/DonateSettings' element={<DonateSettings/>}/> 
        <Route path='/Home/ReligiousEducationCampaigns' element={<ReligiousEducationCampaigns/>}/>                
               
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

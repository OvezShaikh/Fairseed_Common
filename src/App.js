import "./App.css";
import AdminPage from "../src/pages/AdminPanel/AdminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/index'
import CreateCampaigns from "./pages/Campaigns/CreateCampaigns/Index";
import OnGoingCampaigns from './pages/Campaigns/OnGoingCampaigns'


function App() {
  console.log(`${process.env.REACT_APP_BE_BASE_URL}`);
  return (
    <div >
      {/* <OnGoingCampaigns/> */}
      {/* <CreateCampaigns/> */}

      <BrowserRouter>
      {/* <AdminPage/> */}
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path='/Create-Campaign' element={<CreateCampaigns/>}/>
        <Route path='/AdminPage/*' element={<AdminPage/>}/>

        
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

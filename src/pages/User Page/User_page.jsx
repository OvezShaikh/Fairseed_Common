import React from "react";
import { Route, Routes } from 'react-router-dom';
import UserPanel from "../../components/layout/User Dashboard/Index";
import User_Campaign from '../../components/UserPanelPages/Campaign/User_Campaign'
import User_Donation from "../../components/UserPanelPages/Donation/User_Donation";
import MyDonation from "../../components/UserPanelPages/MyDonation/Index";
import Withdrawals from "../../components/UserPanelPages/Withdrawls/Index";
import User_Dashboard from '../../pages/User Dashboard/Index'
import ViewBankandKYC from '../../components/UserPanelPages/UserForms/ViewBankandKYC/Index'
import EditBankAndKYC from '../../components/UserPanelPages/UserForms/EditBankAndKYC/Index'
import DonationView from '../../components/UserPanelPages/UserForms/DonationView/Index'



function UserPage() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <UserPanel>
            <User_Dashboard/>
          </UserPanel>
        }
      />

      <Route
        path="/Dashboard"
        element={
          <UserPanel>
            <User_Dashboard/>
          </UserPanel>
        }
      />



      <Route
        path="/Campaigns"
        element={
          <UserPanel>
            <User_Campaign />
          </UserPanel>
        }
      />
      <Route
        path="/Campaigns/View"
        element={
          <UserPanel>
            <ViewBankandKYC />
          </UserPanel>
        }
      />
      <Route
        path="/Campaigns/Edit"
        element={
          <UserPanel>
            <EditBankAndKYC />
          </UserPanel>
        }
      />


      <Route
        path="/Donations"
        element={
          <UserPanel>
            <User_Donation />
          </UserPanel>
        }
      />
      <Route
        path="/My-Donations"
        element={
          <UserPanel>
            <MyDonation />
          </UserPanel>
        }
      />
      <Route
        path="/Donations/View"
        element={
          <UserPanel>
            <DonationView />
          </UserPanel>
        }
      />
      <Route
        path="/Withdrawals"
        element={
          <UserPanel>
            <Withdrawals />
          </UserPanel>
        }
      />
    </Routes>
  );
}

export default UserPage;
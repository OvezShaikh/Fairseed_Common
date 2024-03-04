import React from "react";
import UserPanel from "../../components/layout/User Dashboard/Index";
import { Route, Routes } from "react-router-dom";
import Campaign from '../../components/UserPanelPages/Campaign/Index'
import ViewBankandKYC from '../../components/UserPanelPages/UserForms/ViewBankandKYC/Index'
import EditBankAndKYC from '../../components/UserPanelPages/UserForms/EditBankAndKYC/Index'
import Donation from '../../components/UserPanelPages/Donation/Index'
import DonationView from '../../components/UserPanelPages/UserForms/DonationView/Index'
import Withdrawals from '../../components/UserPanelPages/Withdrawls/Index'

function UserPage() {
  return (
    <Routes>
      {/* <Route
        path="/"
        element={
          <UserPanel>
            <Dashboard />
          </UserPanel>
        }
      /> */}
      <Route
        path="/Dashboard"
        element={
          <UserPanel>
            <h1>Dashboard</h1>
          </UserPanel>
        }
      />



      <Route
        path="/Campaigns"
        element={
          <UserPanel>
            <Campaign />
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
            <Donation />
          </UserPanel>
        }
      />
      <Route
        path="/My-Donations"
        element={
          <UserPanel>
            <Donation />
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
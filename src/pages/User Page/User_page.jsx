import React from "react";
import { Route, Routes } from "react-router-dom";
import Donation from "../../components/AdminPanelPages/Donation/Index";
import Campaign from "../../components/AdminPanelPages/Campaign/Campaign";
import Dashboard from "../../components/AdminPanelPages/Dashboard/Index";
import UserPanel from "../../components/layout/User Dashboard/Index";
import MyDonation from "../../components/AdminPanelPages/MyDonation/Index"
import Withdrawals from "../../components/AdminPanelPages/Withdrawals/Index"
import Scholarship from "../../components/AdminPanelPages/Scholarship Cause/Index";
import DonationView from "../../components/AdminPanelPages/UserForms/DonationView/Index"
import EditBankAndKYC from "../../components/AdminPanelPages/UserForms/EditBankAndKYC/Index"
import ViewBankandKYC from "../../components/AdminPanelPages/UserForms/ViewBankandKYC/Index"

function UserPage() {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <UserPanel>
            <Dashboard />
          </UserPanel>
        }
      />

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
      <Route
        path="/Scholarships"
        element={
          <UserPanel>
            <Scholarship />
          </UserPanel>
        }
      />
    </Routes>
  );
}

export default UserPage;
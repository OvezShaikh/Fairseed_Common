import React from "react";
import { Route, Routes } from "react-router-dom";
import UserPanel from "../../components/layout/User Dashboard/Index";
import Withdrawals from "../../components/AdminPanelPages/Withdrawals/Index";
// import Scholarship from "../../components/AdminPanelPages/Scholarship Cause/Index";
import DonationView from "../../components/AdminPanelPages/Donation/DonationView";
// import EditBankAndKYC from "../../components/AdminPanelPages/UserForms/EditBankAndKYC/Index";
// import ViewBankandKYC from "../../components/AdminPanelPages/UserForms/ViewBankandKYC/Index";
import User_Dashboard from "../../pages/User Dashboard/Index";

function UserPage() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <UserPanel>
            <User_Dashboard />
          </UserPanel>
        }
      />

      <Route
        path="/Dashboard"
        element={
          <UserPanel>
            <User_Dashboard />
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

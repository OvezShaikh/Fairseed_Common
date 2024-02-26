import React from "react";
import {  Route, Routes } from "react-router-dom";
import Donation from "../../components/AdminPanelPages/Donation/Index";
import Campaign from "../../components/AdminPanelPages/Campaign/Campaign";
import Dashboard from "../../components/AdminPanelPages/Dashboard/Index";
import UserPanel from "../../components/layout/User Dashboard/Index";



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
        path="/Donations"
        element={
          <UserPanel>
            <Donation />
          </UserPanel>
        }
      />
    </Routes>
  );
}

export default UserPage;
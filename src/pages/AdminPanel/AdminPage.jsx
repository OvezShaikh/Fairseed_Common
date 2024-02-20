import React from "react";

import AdminLayout from "../../components/layout/AdminLayout/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import Dashboard from "../../components/AdminPanelPages/Dashboard/Index";
import Donation from "../../components/AdminPanelPages/Donation/Index";
import Categories from "../../components/AdminPanelPages/Categories/Index";
import Pages from "../../components/AdminPanelPages/Pages/Index"
import Campaign from "../../components/AdminPanelPages/Campaign/Campaign";
// import AddNew from "../../components/AdminPanelPages/Categories/AddNew"
import ReportedCauses from "../../components/AdminPanelPages/ReportedCauses/index";
import PaymentGateway from "../../components/AdminPanelPages/PaymentGateway/Index"
import Withdrawals from "../../components/AdminPanelPages/Withdrawals/View"
import Users from "../../components/AdminPanelPages/Users/Index"
import AddNew from "../../components/AdminPanelPages/Categories/AddNew";
import LandingPage from "../../components/AdminPanelPages/LandingPage/Index"
import CauseEditApprovel from "../../components/AdminPanelPages/CauseEditApprovel/Index"
import CauseKYC from '../../components/AdminPanelPages/CauseKYC/Index'
import UserEdit from '../../components/AdminPanelPages/Froms/UserEdit/Index'
import CampaignEdits from '../../components/AdminPanelPages/Froms/CampaignEdits/Index'


function AdminPage() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        }
      />

      <Route
        path="/General-Settings/*"
        element={
          <AdminLayout>
            <AdminRoutes />
          </AdminLayout>
        }
      />

      <Route
        path="/Dashboard"
        element={
          <AdminLayout>
            <h1>Dashboard</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Landing-Page"
        element={
          <AdminLayout>
            <LandingPage />
          </AdminLayout>
        }
      />
      <Route
        path="/Categories"
        element={
          <AdminLayout>
            <Categories />
          </AdminLayout>
        }
      >
        <Route path="Campaign-Edits" element={
          <AdminLayout>
            <CampaignEdits />
          </AdminLayout>
        } />
      </Route>
      <Route
        path="/Campaign/*"
        element={
          <AdminLayout>
            <Campaign />
          </AdminLayout>
        }
      />
      <Route
        path="/Causes-Edit-Approval"
        element={
          <AdminLayout>
            <CauseEditApprovel />
          </AdminLayout>
        }
      />
      <Route
        path="/Scholarship-Cause"
        element={
          <AdminLayout>
            <AddNew />
          </AdminLayout>
        }
      />
      <Route
        path="/Reported-Cause"
        element={
          <AdminLayout>
            <ReportedCauses />
          </AdminLayout>
        }
      />
      <Route
        path="/Withdrawals"
        element={
          <AdminLayout>
            <Withdrawals />
          </AdminLayout>
        }
      />
      <Route
        path="/Cause-KYC"
        element={
          <AdminLayout>
            <CauseKYC />
          </AdminLayout>
        }
      />
      <Route
        path="/Donations"
        element={
          <AdminLayout>
            <Donation />
          </AdminLayout>
        }
      />
      <Route
        path="/Users"
        element={
          <AdminLayout>
            <Users />
          </AdminLayout>
        }
      />
      <Route
        path="/Scholarships"
        element={
          <AdminLayout>
            <AddNew />
          </AdminLayout>
        }
      />
      <Route
        path="/Pages"
        element={
          <AdminLayout>
            <Pages />
          </AdminLayout>
        }
      />

      <Route
        path="/Payment-Gateway"
        element={
          <AdminLayout>
            <PaymentGateway />
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default AdminPage;

import React from "react";

import AdminLayout from "../../components/layout/AdminLayout/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import Dashboard from "../../components/AdminPanelPages/Dashboard/Index";
import Donation from "../../components/AdminPanelPages/Donation/Index";
import Categories from "../../components/AdminPanelPages/Categories/Index";
import Pages from "../../components/AdminPanelPages/Pages/Index"
import AddNew from "../../components/AdminPanelPages/Categories/AddNew"
import PaymentGateway from "../../components/AdminPanelPages/PaymentGateway/Index"

function AdminPage() {
  return (
    <Routes>
      {/* <Route index element={<AdminPage/>} /> */}
      {/* <Route path="/AdminPage" element={<AdminPage/>} /> */}
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
            <h1>Landing Page</h1>
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
      />
      <Route
        path="/Causes"
        element={
          <AdminLayout>
            <h1>Causes</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Causes-Edit-Approval"
        element={
          <AdminLayout>
            <h1>Causes Edit Approval</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Scholarship-Cause"
        element={
          <AdminLayout>
            <h1>Scholarship Cause</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Reported-Cause"
        element={
          <AdminLayout>
            <h1>Reported-Cause</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Withdrawals"
        element={
          <AdminLayout>
            <h1>Withdrawals</h1>
          </AdminLayout>
        }
      />
      <Route
        path="/Cause-KYC"
        element={
          <AdminLayout>
            <h1>Cause-KYC</h1>
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
            <h1>Users</h1>
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

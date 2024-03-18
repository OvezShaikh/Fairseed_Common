import React from "react";
import AdminNavbar from "../AdminNavbar";
import { SideBar } from "../sideBar";

const AdminLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <>
      <AdminNavbar />
      <SideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}></SideBar>
      <div
        className="main-container transition-all duration-500 ease-in-out max-tablet:pr-0 "
        style={{
          width: mobileOpen ? `calc(100vw - 290px)` : "100%",
          marginLeft: mobileOpen ? "270px" : "0px",
          paddingRight: mobileOpen ? "15px" : "2rem",
        }}
      >
        {children}
      </div>
      <hr className="pb-5" />
    </>
  );
};

export default AdminLayout;

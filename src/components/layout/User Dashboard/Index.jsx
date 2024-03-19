import React from "react";
import AdminNavbar from "../AdminNavbar";
import { User_SideBar } from "../sideBar/User_panel";

const UserPanel = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <AdminNavbar />
      <User_SideBar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      ></User_SideBar>
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

export default UserPanel;

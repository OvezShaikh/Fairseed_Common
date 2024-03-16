import React from "react";
import UserDashboardActivities from "./Components/UserDashboardActivities";
import FundsRaisedInLastMonth from "./Components/FundsRaisedInLastMonth";
import MyRecentDonations from "./Components/MyRecentDonations";
import RecentCampaigns from "./Components/RecentCampaigns";

const User_Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-[auto,auto] gap-x-[20px] big-desktop:grid-cols-[499px,auto] max-desktop:grid-cols-1">
        <UserDashboardActivities />
        <FundsRaisedInLastMonth />
      </div>
      <div className="grid grid-cols-3 mt-[68px] gap-x-[20px] max-desktop:grid-cols-1">
        <MyRecentDonations />
        <RecentCampaigns />
      </div>
    </div>
  );
};

export default User_Dashboard;

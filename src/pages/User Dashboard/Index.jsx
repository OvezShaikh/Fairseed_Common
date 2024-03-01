import React from 'react';
import UserDashboardActivities from './Components/UserDashboardActivities';
import FundsRaisedInLastMonth from './Components/FundsRaisedInLastMonth';
import MyRecentDonations from './Components/MyRecentDonations';


const User_Dashboard = () => {
  return (
    <div>
      <div className='grid grid-cols-3 mb-[68px] gap-x-[20px]'><UserDashboardActivities />
        <FundsRaisedInLastMonth /></div>
      <div className='grid grid-cols-3'><MyRecentDonations /></div>

    </div>
  )
}

export default User_Dashboard;
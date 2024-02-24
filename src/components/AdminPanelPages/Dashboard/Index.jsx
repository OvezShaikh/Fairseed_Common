import React from 'react'
import DashboardActivities from './components/DashboardActivities'
import OngoingCampaigns from './components/OngoingCampaigns'
import MembersByCountries from './components/MembersByCountries'
import DonationInMonths from './components/DonationInMonths'

function Dashboard() {
  return (
    <div className='py-6 px-4 grid grid-cols-2 gap-4 grid-rows-2'>
      <DashboardActivities />
      <OngoingCampaigns />
      <MembersByCountries />
      <DonationInMonths />
    </div>
  )
}

export default Dashboard

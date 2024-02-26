import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

const DonationInMonths = ({userData}) => {
  return (
    <div className='p-7 shadow-md rounded-lg'>
      <Bar data={userData} />
    </div>
  )
}

export default DonationInMonths
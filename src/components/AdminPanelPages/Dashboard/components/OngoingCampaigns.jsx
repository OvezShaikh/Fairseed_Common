import React, { useState } from 'react'
import { Line } from 'rc-progress';
import { LinearProgress } from '@mui/material';

const OngoingCampaigns = () => {
  const [imgCampaign, setImgCampaign] = useState("https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  return (
    <div className='p-7  rounded-lg shadow-md text-[#000000]'>
      <div className='font-semibold text-lg'>
        Ongoing Campaings:
      </div>

      <div className='flex mt-[24px]'>
        <div className='flex items-center mr-[25px]'>
          <img src={imgCampaign} className='rounded-lg w-[79px] h-[42px]' alt="img01" />
        </div>
        <div className='w-full'>
          <div className='flex justify-between'>
            <div>Campaign Name</div>
            <div>46% Compeleted</div>
          </div>
          <div>by User Name/End Date</div>
          <div className='w-full mt-[11px]'>
          <Line percent={90} strokeWidth={3} strokeColor="#f10e0e" />
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default OngoingCampaigns
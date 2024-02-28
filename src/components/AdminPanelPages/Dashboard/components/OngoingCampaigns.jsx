import React, { useState } from 'react'
import { Line } from 'rc-progress';
import { LinearProgress } from '@mui/material';
import { useGetAll } from '../../../../Hooks';








const OngoingCampaigns = () => {

  
  const [imgCampaign, setImgCampaign] = useState("https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");


  const options = {
    key: "/api/users",
    
  };

  // Call your custom hook with the provided options
  const { data: userList, isLoading, isError } = useGetAll(options);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading user data.</p>;
  }






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
          
          <div className='h-[13px]'>
          <LinearProgress
                                    style={{ backgroundColor: 'blue' }}
                                    variant="determinate"
                                    sx={{ height: "100%", borderRadius: "16px", background: `linear-gradient(to right, #0DC7B1, #0DC7B1 30%, #e0e0e0 30%)`, "& .MuiLinearProgress-bar": { backgroundColor: 'rgba(255, 55, 95, 1) !important' } }}
                                    value={50 * 100}
                                />
                                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OngoingCampaigns
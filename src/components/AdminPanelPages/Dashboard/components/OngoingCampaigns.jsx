import React, { useState } from 'react'
import { Line} from 'rc-progress';

const OngoingCampaigns = () => {
  const [imgCampaign, setImgCampaign] = useState("https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  return (
    <div className='p-7  rounded-lg shadow-md'>
      <div className='font-semibold text-lg'>
        Ongoing Campaings:
      </div>
      <div className='mt-3'>
        <div className='p-2 mt-1 border border-black rounded-lg'>
          <div className='flex gap-2'>
            <div>
              <img src={imgCampaign} className='rounded-lg w-[79px] h-[42px]' alt="img01" />
            </div>
            <div>
            <div className='flex justify-between'>
              <p>Eduction Program</p>
              <p>46% Compeleted</p>
            </div>
            <div>by Mohammed Ameen/ 15 April 2023</div>
            <div className='w-full'>
            <Line percent={90} strokeWidth={3} strokeColor="#f10e0e" />
            </div>
            </div>
          </div>

        </div>
        <div className='p-2 mt-1 border border-black rounded-lg'>Data from Eduction</div>
        <div className='p-2 mt-1 border border-black rounded-lg'>Data from Eduction</div>
      </div>
    </div>
  )
}

export default OngoingCampaigns
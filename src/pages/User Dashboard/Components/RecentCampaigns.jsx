import React,{useState} from 'react';
import { useGetAll } from '../../../Hooks';

const RecentCampaigns = () => {

    const [dataObject, setDataObject] = useState([]);

    useGetAll({
        key: `/user-dashboard/campaign?page=1&limit=4`,
        enabled: true,
       
        select: (data) => {
          return data.data.data;
        },
        onSuccess: (data) => {
            console.log("datatatat  ",data);
          setDataObject(data);
        },
      });



  return (
    <>
    <h6 className='font-[satoshi] font-bold text-[16px]'>RecentCampaigns</h6>
    <div className='w-full max-w-[240px] border border-[#DBDBDE] rounded-[20px] py-[29px] px-[22px]'>
        
        </div>
        </>
  )
}

export default RecentCampaigns;
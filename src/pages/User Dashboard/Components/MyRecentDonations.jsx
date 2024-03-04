import React,{useState} from 'react'
import { useGetAll } from '../../../Hooks';
import { LinearProgress } from "@mui/material";

const MyRecentDonations = () => {



    const [dataObject, setDataObject] = useState([]);
    

  useGetAll({
    key: `/admin-dashboard/donors?page=1&limit=10`,
    enabled: true,

    select: (data) => {

      return data.data.rows;
    },
    onSuccess: (data) => {

      setDataObject(data);
    },
  });





    return (
        <div className='max-w-[499px] w-full'>

            <h6 className='font-[satoshi] font-bold text-[16px]'>My Recent Donations</h6>
            <div className="overflow-y-scroll h-[310px] pr-[20px]">
        {dataObject?.map((item, index) => (
          // Rendering each item in the array as a <div> element
          <div>
            <div className="flex mt-[24px]">
              <div className="flex items-center mr-[25px]">
                <img
                  src={`${process.env.REACT_APP_API_URL}`+item.campaign_image}
                  className="rounded-lg w-[79px] h-[42px]"
                  alt="img01"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <div key={index}>{item.campaign}</div>
                  <div>
                    {Math.round((item.fund_raised / item.goal_amount) * 100)}%
                    Completed
                  </div>
                </div>
               
                <div className="w-full mt-[11px]">
                  <div className="h-[13px]">
                    <LinearProgress
                      variant="determinate"
                      sx={{
                        height: "10px",
                        borderRadius: "16px",
                        background: `linear-gradient(to bottom,#ffe9d9,#FFd8e5)`,
                        "& .MuiLinearProgress-bar": {
                          background:
                            "linear-gradient(to right,#FF9F0A, #FF375F) !important  ",
                          borderRadius: "100px",
                        },
                      }}
                      value={(item.fund_raised / item.goal_amount) * 100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

        </div>
    )
}

export default MyRecentDonations
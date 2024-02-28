import React, { useState } from "react";
import { Line } from "rc-progress";
import { LinearProgress } from "@mui/material";
import { useGetAll } from "../../../../Hooks";

const OngoingCampaigns = () => {
  const [imgCampaign, setImgCampaign] = useState(
    "https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const [dataObject, setDataObject] = useState([]);

  useGetAll({
    key: `/user-dashboard/campaign`,
    enabled: true,
    // enabled: !localStorage.getItem(`columns-of-${title}`),
    select: (data) => {
      console.log(data);

      return data.data.data;
    },
    onSuccess: (data) => {
      setDataObject(data);
      console.log(data);
    },
  });

  return (
    <div className="p-7  rounded-lg shadow-md text-[#000000]">
      <div className="font-semibold text-lg">Ongoing Campaings:</div>

      <div className="overflow-y-scroll h-[310px] pr-[20px]">
        {dataObject.map((item, index) => (
          // Rendering each item in the array as a <div> element
          <div>
            <div className="flex mt-[24px]">
              <div className="flex items-center mr-[25px]">
                <img
                  src={imgCampaign}
                  className="rounded-lg w-[79px] h-[42px]"
                  alt="img01"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between">
                  <div key={index}>{item.title}</div>
                  <div>
                    {Math.round((item.fund_raised / item.goal_amount) * 100)}%
                    Completed
                  </div>
                </div>
                <div>
                  by {item.user.username}/{item.end_date}
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
  );
};

export default OngoingCampaigns;

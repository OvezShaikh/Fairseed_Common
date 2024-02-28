import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const DonationInMonths = ({ userData }) => {
  return (
    <div>
      <p className={"mb-3 text-lg font-semibold"}>
        Donations in months (lacs):{" "}
      </p>
      <div className="p-7 shadow-md rounded-lg">
        <Bar data={userData} />
      </div>
    </div>
  );
};

export default DonationInMonths;

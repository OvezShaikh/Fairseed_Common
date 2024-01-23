import React from 'react'
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { FormHelperText } from '@mui/material';
import InputAdminField from '../../../inputs/InputAdminField/Index';
import PrimaryButton from '../../../inputs/PrimaryButton';
const styleLabel = {
  fontFamily: "satoshi",
  fontSize: 16,
  fontWeight: 700,
  color: "#383A42",
};
const styleInput = {
  color: "#B6BAC3",
  fontSize: 16,
  fontFamily: "Satoshi ",
  fontWeight: "500",
};

function Limit() {
  return (
    <div className='flex flex-col justify-center flex-wrap items-center'>
      <div className="flex w-full gap-4">
        <FormControl className="w-full ">
          {/* <FormLabel style={styleLabel}>No. of campaigns to show </FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder Text" /> */}
          <InputAdminField style={{ marginBottom: '2rem' }} label={"No. of campaigns to show"} name={"NoOfCampaigns"} />
          {/* <FormHelperText>This is a helper text.</FormHelperText> */}
        </FormControl>
        <FormControl className="w-full ">
          <InputAdminField label={"No. of campaigns to show"} name={"NoOfCampaigns"} />

          <FormHelperText style={styleInput}>IMPORTANT: Your Server supports upto <span className='text-[#717171]'>100MB</span></FormHelperText>
        </FormControl>
        <FormControl className="w-full ">
          <InputAdminField label={"No. of campaigns to show"} name={"NoOfCampaigns"} />

          {/* <FormHelperText>This is a helper text.</FormHelperText> */}
        </FormControl>

      </div>
      <div className="flex w-full mb-24 flex-wrap pt-2 gap-4">
        <FormControl className="w-[40%] ">
          <FormLabel style={styleLabel}>No. of campaigns to show </FormLabel>
          <div className="flex justify-center items-center">
            <InputAdminField label={""} size="lg" style={styleInput} placeholder="Minimum" />
            <h1 className='px-2  ' style={styleLabel}>To</h1>
            <InputAdminField size="lg" style={styleInput} placeholder="Maximum" />

          </div>
        </FormControl>
        <FormControl className="w-[40%] ">
          <FormLabel style={styleLabel}>Amount for Campaigns</FormLabel>
          <div className="flex justify-center items-center">
            <InputAdminField size="lg" style={styleInput} placeholder="Minimum" />
            <h1 className='px-2  ' style={styleLabel}>To</h1>
            <InputAdminField size="lg" style={styleInput} placeholder="Maximum" />

          </div>
        </FormControl>
      </div>
      <PrimaryButton >
        <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
      </PrimaryButton>

    </div>
  )
}

export default Limit

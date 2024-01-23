import React from 'react'
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { FormHelperText } from '@mui/material';
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

function  Limit() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <FormControl className="col-span-4 ">
          <FormLabel style={styleLabel}>No. of campaigns to show </FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder Text" />
          {/* <FormHelperText>This is a helper text.</FormHelperText> */}
        </FormControl>
        <FormControl className="col-span-4 ">
          <FormLabel style={styleLabel}>File size allowed</FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder" />
          <FormHelperText style={styleInput}>IMPORTANT: Your Server supports upto <span className='text-[#717171]'>100MB</span></FormHelperText>
        </FormControl>
        <FormControl className="col-span-4 ">
          <FormLabel style={styleLabel}>Minimum amount for campaign</FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder" />
          {/* <FormHelperText>This is a helper text.</FormHelperText> */}
        </FormControl>
      
      </div>
      <div className="flex pt-2 gap-4">
        <FormControl className="w-[40%] ">
          <FormLabel style={styleLabel}>No. of campaigns to show </FormLabel>
          <div className="flex">
          <Input size="lg" style={styleInput} placeholder="Minimum" />
          <h1 className='px-2 pt-2.5 ' style={styleLabel}>To</h1>
          <Input size="lg" style={styleInput} placeholder="Maximum" />

          </div>
        </FormControl>
        <FormControl className="w-[40%] ">
          <FormLabel style={styleLabel}>Amount for Campaigns</FormLabel>
          <div className="flex">
          <Input size="lg" style={styleInput} placeholder="Minimum" />
          <h1 className='px-2 pt-2.5 ' style={styleLabel}>To</h1>
          <Input size="lg" style={styleInput} placeholder="Maximum" />

          </div>
        </FormControl>
      </div>
      <div className="flex justify-center items-center pt-8 ">
            <button className="px-3 rounded-lg" style={{background:'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)',fontFamily:'satoshi',color:'white'}}>Save</button>
        </div>
      
    </>
  )
}

export default  Limit

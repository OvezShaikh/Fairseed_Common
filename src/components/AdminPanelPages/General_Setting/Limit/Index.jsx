import React from 'react'
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { FormHelperText } from '@mui/material';
import PrimaryButton from '../../../inputs/PrimaryButton';
import { Form, Formik } from 'formik';
import InputAdminField from "../../../inputs/InputAdminField/Index"
const styleLabel = {
  fontFamily: "satoshi",
  fontSize: 16,
  fontWeight: 700,
  color: "#383A42",
  padding: "0 0 0 5px"
};


const initialValues = {
  NoOfCampaigns: "",
  File: "",
  amount: "",
  Minimum: "",
  Maximum: "",
  MinimumCampaign: "",
  MaximumCampaign: ""

}

function Limit() {
  return (
    <Formik
      initialValues={initialValues}
    >
      <Form className='flex flex-col justify-center flex-wrap items-center'>
        <div className="flex w-full gap-4">
          <FormControl className="w-full ">

            <InputAdminField style={{ marginBottom: '2rem' }} placeholder={"Placeholder Text"} label={"No. of campaigns to show"} name={"NoOfCampaigns"} />
          </FormControl>
          <FormControl className="w-full ">
            <InputAdminField label={"File size allowed"} placeholder={"Placeholder Text"} name={"File"} />

            <FormHelperText sx={{ fontWeight: 500, fontFamily: 'satoshi', fontSize: 16, }} >IMPORTANT: Your Server supports upto <span className='text-[#717171]'>100MB</span></FormHelperText>
          </FormControl>
          <FormControl className="w-full ">
            <InputAdminField placeholder={"Placeholder Text"} label={"Minimum amount for campaign"} name={"amount"} />

          </FormControl>

        </div>
        <div className="flex w-full mb-24 flex-wrap pt-2 gap-4">
          <FormControl className="w-[40%] ">
            <FormLabel style={styleLabel}>Amount for Donations</FormLabel>
            <div className="flex justify-center items-center">
              <InputAdminField label={""} size="lg" name={'Minimum'} placeholder="Minimum" />
              <h1 className='px-2  ' style={styleLabel}>To</h1>
              <InputAdminField size="lg" name={"Maximum"} placeholder="Maximum" />

            </div>
          </FormControl>
          <FormControl className="w-[40%] ">
            <FormLabel style={styleLabel}>Amount for Campaigns</FormLabel>
            <div className="flex justify-center items-center">
              <InputAdminField size="lg" name={'MinimumCampaign'} placeholder="Minimum" />
              <h1 className='px-2  ' style={styleLabel}>To</h1>
              <InputAdminField size="lg" name={"MaximumCampaign"} placeholder="Maximum" />

            </div>
          </FormControl>
        </div>
        <PrimaryButton type="submit" >
          <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
        </PrimaryButton>
      </Form>
    </Formik>
  )
}

export default Limit

import React from 'react'
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { FormHelperText } from '@mui/material';
import PrimaryButton from '../../../inputs/PrimaryButton';
import { Form, Formik } from 'formik';
import InputAdminField from "../../../inputs/InputAdminField/Index"
import { useCreateOrUpdate } from '../../../../Hooks';
import { toast } from "react-toastify";

const styleLabel = {
  fontFamily: "satoshi",
  fontSize: 16,
  fontWeight: 700,
  color: "#383A42",
  padding: "0 0 0 5px"
};


const initialValues = {
  num_campaigns: 0,
  max_file_size: 0,
  donation_min_amount: 0,
  donation_max_amount: 0,
  campaign_min_amount: 0,
  campaign_max_amount: 0,
}



function Limit() {

  const { mutate } = useCreateOrUpdate({
    url:`/admin-dashboard/limit`,
    method:'post'
  })

  const handlesubmit = (values) => {
    mutate(values , {
      onSuccess:()=>{
        toast.success("Prefernces Saved Successfully !", {
          position: "top-center",
        })
      }
    })
  }

  

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values)=> handlesubmit(values)}
    >
      <Form className='flex flex-col justify-center flex-wrap items-center max-desktop:pt-5 max-tablet:pt-5'>
        <div className="flex w-full max-desktop:flex-col max-tablet:flex-col gap-4">
          <FormControl className="w-full max-desktop:w-[80%] max-tablet:w-full ">

            <InputAdminField style={{ marginBottom: '2rem' }} type='number' placeholder={"Placeholder Text"} label={"No. of campaigns to show"} name={"num_campaigns"} />
          </FormControl>
          <FormControl className="w-full max-desktop:w-[80%] max-tablet:w-full ">
            <InputAdminField label={"File size allowed"}  type='number' placeholder={"Placeholder Text"} name={"max_file_size"} />

            <FormHelperText sx={{ fontWeight: 500, fontFamily: 'satoshi', fontSize: 16, }} >IMPORTANT: Your Server supports upto <span className='text-[#717171]'>100MB</span></FormHelperText>
          </FormControl>
          {/* <FormControl className="w-full max-desktop:w-[80%] max-tablet:w-full ">
            <InputAdminField placeholder={"Placeholder Text"} label={"Minimum amount for campaign"} name={"amount"} />

          </FormControl> */}

        </div>
        <div className="flex w-full mb-24 max-desktop:flex-col max-tablet:flex-col flex-wrap pt-2 gap-4">
          <FormControl className="w-[40%] max-desktop:w-[80%] max-tablet:w-full">
            <FormLabel style={styleLabel}>Amount for Donations</FormLabel>
            <div className="flex justify-center items-center">
              <InputAdminField label={""} size="lg"  type='number' name={'donation_min_amount'} placeholder="Minimum" />
              <h1 className='px-2  ' style={styleLabel}>To</h1>
              <InputAdminField size="lg" name={"donation_max_amount"}  type='number' placeholder="Maximum" />

            </div>
          </FormControl>
          <FormControl className="w-[40%] max-desktop:w-[80%] max-tablet:w-full">
            <FormLabel style={styleLabel}>Amount for Campaigns</FormLabel>
            <div className="flex justify-center items-center">
              <InputAdminField size="lg"  type='number' name={'campaign_min_amount'} placeholder="Minimum" />
              <h1 className='px-2  ' style={styleLabel}>To</h1>
              <InputAdminField size="lg"  type='number' name={"campaign_max_amount"} placeholder="Maximum" />

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

import { Add, Edit } from "@carbon/icons-react";
import { Grid, Box, Button } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { Form, Formik, useFormikContext } from "formik";
import { useQueryClient } from "react-query";
import { Dialog } from "../layout/dialogBox/dialog";
import { useCreateOrUpdate, useGetAll } from "../../Hooks";
import PrimaryButton from "../inputs/PrimaryButton";
import SecondaryButton from "../inputs/secondaryButton";
import { colors } from "../../constants/theme";
import InputField from "../inputs/InputField";
import CustomSwitch from "../inputs/customSwitch";
import SelectField from "../inputs/SelectField";
import { toast } from "react-toastify";
import InputAdminField from '../inputs/InputAdminField/Index'
import AdminUploadField from "../inputs/AdminUploadField/Index"
import RadioGroup from '../inputs/radioGroupAdminPanel'



const initialValues = {
  name: "",
  slug: "",
  image: "",
  is_active:false,
}

export const LocationConfigurationDialog = ({
  isUpdate = false,
  data,
  onEditClick,
  onSuccess,
  onClose,
}) => {

  const { mutate } = useCreateOrUpdate({
    url:`/admin-dashboard/category`
  })

  const handleSubmit = (values ) =>{
    // values.preventDefault();
    const formData = new FormData();
    formData.append('image', values?.image);
    formData.append('name', values?.name);
    formData.append('slug', values?.slug);
    formData.append('is_active', values?.is_active);

    mutate( formData , {
      onSuccess : ()=>{
        toast.success(" Category Added" , {
          position:'top-right'
        })
      }
    })
  }
  

  return (
    <Dialog
      title={'Category'}
      onClose={() => onClose && onClose()}
      button={
          <PrimaryButton
            className="text-capitalize"
            startIcon={<Add size={24} />}
          >
            Add New
          </PrimaryButton>
      }
    >
      {({ onClose  }) => (
        <Formik
          initialValues={initialValues}
          onSubmit={(values)=>handleSubmit(values)}
        >
          {({setFieldValue})=>(

         
          <Form className='flex flex-col items-center px-4'>
            <div className='flex w-full gap-4'>
              <div className="w-full">
                <InputAdminField name={"name"} label={"Name"} placeholder={"Placeholder Text"} />
              </div>
              <div className="w-full">
                <InputAdminField name={"url"} label={"Slug/URL"} placeholder={"Placeholder Text"} />
              </div>

            </div>
            <div className="flex w-full mt-8 gap-4">
              <div className="w-full " Style>
                <AdminUploadField
                label='Thumbnail (Optional)'
                 placeholder="Recommended size: 150x50 px (PNG)"
                 sx={{ padding: '20px' }}
                 multiple={false}
                name={"image"} 
                 />
              </div>
              <div className=" w-full ">
                <RadioGroup
                  name={"is_active"}
                  onChange={(e) => {
                    setFieldValue("is_active", e.target.value);
                  }}
                  options={[
                    { label: "Active", value: true },
                    { label: "Inactive", value: false },
                  ]}
               

                />
              </div>
            </div>
            <div className="flex flex-row gap-4 mt-12">
              <button
                onClick={() => {
                  onClose();
                }}
                className='w-[69px] h-[32px] bg-[#F7F7F7]'>
                <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
              </button>
              <PrimaryButton type='submit' >
                <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
              </PrimaryButton>

            </div>
          </Form>
           )}
        </Formik>
      )}
    </Dialog>
  );
};
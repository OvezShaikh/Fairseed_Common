import React from 'react'

import PrimaryButton from '../../../inputs/PrimaryButton';
import InputAdminField from '../../../inputs/InputAdminField/Index'
import { Form, Formik } from 'formik';
import { useCreateOrUpdate } from '../../../../Hooks';



const initialValues = {
  facebook_url: "",
  twitter_url: "",
  instagram_url: ""
}



function ProfilesSocial() {

  const { muatate } = useCreateOrUpdate({
    url:`/admin-dashboard/social-media`
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        muatate(values, {
          onSuccess: (response) => {
            console.log(response);
            // Handle successful API response here
          },
        });
      }}
      >
      <Form className='flex flex-col flex-wrap justify-center items-center'>

        <div className="flex  gap-4 w-full mb-24">
          <div className="flex w-full flex-col">
            <InputAdminField label={"Facebook"} name={"facebook_url"} placeholder={"Placeholder text"} />
          </div>
          <div className="flex w-full flex-col">
            <InputAdminField label={"Twitter"} name={"twitter_url"} placeholder={"Placeholder text"} />
          </div>
          <div className="flex w-full  flex-col">

            <InputAdminField label={"Instagram"} name={"instagram_url"} placeholder={"Placeholder text"} />
          </div>
          {/* <FormHelperText>This is a helper text.</FormHelperText> */}

        </div >
        <PrimaryButton type="submit" >
          <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
        </PrimaryButton>
      </Form>
    </Formik>
  )
}

export default ProfilesSocial

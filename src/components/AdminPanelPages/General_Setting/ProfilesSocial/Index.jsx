import React from 'react'

import PrimaryButton from '../../../inputs/PrimaryButton';
import InputAdminField from '../../../inputs/InputAdminField/Index'
import { Form, Formik } from 'formik';



const initialValues = {
  facebook: "",
  twiter: "",
  instagram: ""


}


function ProfilesSocial() {
  return (
    <Formik
      initialValues={initialValues} >
      <Form className='flex flex-col flex-wrap justify-center items-center'>

        <div className="flex  gap-4 w-full mb-24">
          <div className="flex w-full flex-col">
            <InputAdminField label={"Facebook"} name={"facebook"} placeholder={"Placeholder text"} />
          </div>
          <div className="flex w-full flex-col">

            <InputAdminField label={"Twitter"} name={"twiter"} placeholder={"Placeholder text"} />
          </div>
          <div className="flex w-full  flex-col">

            <InputAdminField label={"Instagram"} name={"instagram"} placeholder={"Placeholder text"} />
          </div>
          {/* <FormHelperText>This is a helper text.</FormHelperText> */}

        </div >
        <PrimaryButton >
          <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
        </PrimaryButton>
      </Form>
    </Formik>
  )
}

export default ProfilesSocial

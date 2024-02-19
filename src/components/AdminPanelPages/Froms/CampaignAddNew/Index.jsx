import { Formik, Form } from 'formik'
import React from 'react'
import InputAdminField from '../../inputs/InputAdminField/Index'
import AdminUploadField from "../../inputs/AdminUploadField/Index"
import RadioGroup from '../../inputs/radioGroupAdminPanel'
import PrimaryButton from '../../inputs/PrimaryButton'

function AddNew() {

    const initialValues = {
        name: "",
        url: "",
        thumbnail: "",
        New8: ""
    }

    return (
        <Formik

            initialValues={initialValues}

        >
            <Form className='flex flex-col items-center'>
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
                        <AdminUploadField name={"thumbnail"} label='Thumbnail (Optainal)' />
                    </div>
                    <div className=" w-full ">
                        <RadioGroup
                            name={"New8"}

                            options={[
                                { label: "Active", value: "Active" },
                                { label: "Inactive", value: "Inactive" },
                            ]}
                            label="Status"
                        // onChange={onChange}

                        />
                    </div>
                </div>
                <div className="flex flex-row gap-4 mt-12">
                    <button className='w-[69px] h-[32px] bg-[#F7F7F7]'>
                        <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                    </button>
                    <PrimaryButton >
                        <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
                    </PrimaryButton>

                </div>
            </Form>
        </Formik>
    )
}

export default AddNew
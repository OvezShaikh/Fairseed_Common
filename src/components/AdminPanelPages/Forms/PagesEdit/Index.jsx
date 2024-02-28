import React from 'react'
import InputAdminField from "../../../inputs/InputAdminField/Index"
import { Form, Formik } from 'formik'
import RadioGroup from '../../../inputs/radioGroupAdminPanel'
import ReactQuilTextField from "../../../inputs/ReactQuilTextField/Index"
import { FormLabel } from '@mui/material'
import PrimaryButton from '../../../inputs/PrimaryButton'
import { useLocation } from 'react-router-dom'

const styleLabel = {
    fontFamily: "satoshi",
    fontSize: 16,
    fontWeight: 700,
    color: "#383A42",
};

function Index() {
    let { state } = useLocation(); 
    let { id } = state;
    console.log(id, "=====<id")
    const initialValues = {
        title: "",
        slug: "",
        show_navbar: "",
        show_footer: "",
        New3: "",
        summary: ""


    }
    return (
        <Formik
            initialValues={initialValues}>
            <Form className='flex flex-col items-center'>
                <div className='flex w-full gap-4'>

                    <div className="w-full">
                        <InputAdminField label={"Title"} name={"title"} placeholder={"Placeholder Text"} />
                    </div>
                    <div className="w-full">
                        <InputAdminField label={"Slug/URL"} name={"url"} placeholder={"Placeholder Text"} />
                    </div>

                </div>
                <div className="flex gap-32 w-full pt-8">
                    <div className="  lg:w-[25%] ">
                        <RadioGroup

                            name={"New1"}
                            options={[
                                { label: "On", value: "On" },
                                { label: "Off", value: "Off" },
                            ]}
                            label="New Registrations"
                        // onChange={onChange}

                        />
                    </div>
                    <div className="lg:w-[25%]">
                        <RadioGroup
                            name={"New2"}
                            options={[
                                { label: "On", value: "On" },
                                { label: "Off", value: "Off" },
                            ]}
                            label="Auto Approve Causes"
                        // onChange={onChange}

                        />
                    </div>
                    <div className=" lg:w-[25%] ">
                        <RadioGroup
                            name={"New3"}
                            options={[
                                { label: "On", value: "On" },
                                { label: "Off", value: "Off" },
                            ]}
                            label="Facebook Login"
                        // onChange={onChange}

                        />
                    </div>

                </div>
                <div className="pt-7 mb-5 h-[300px] w-full">
                    <FormLabel style={styleLabel}>Content:</FormLabel>
                    {/* <TextEditor  /> */}
                    <ReactQuilTextField
                        theme="snow"
                        name='summary'
                        // value={values.summary}
                        placeholder="Summarize in 100 words max."
                        style={{ '& .ql-editor': { minHeight: '50px' } }}
                    // onChange={(value) => setFieldValue('summary', value)}
                    />
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

export default Index

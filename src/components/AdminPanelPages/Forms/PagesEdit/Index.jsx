import React, { useState } from 'react'
import InputAdminField from "../../../inputs/InputAdminField/Index"
import { Form, Formik } from 'formik'
import RadioGroup from '../../../inputs/radioGroupAdminPanel'
import ReactQuilTextField from "../../../inputs/ReactQuilTextField/Index"
import { FormLabel } from '@mui/material'
import PrimaryButton from '../../../inputs/PrimaryButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useGetAll } from '../../../../Hooks/useGetAll'
import { useCreateOrUpdate } from '../../../../Hooks/useCreateOrUpdate'
import { toast } from 'react-toastify'

const styleLabel = {
    fontFamily: "satoshi",
    fontSize: 16,
    fontWeight: 700,
    color: "#383A42",
};

function Index() {
    const [Details, setDetails] = useState({})

    const navigate = useNavigate();
    let { state } = useLocation(); let { id } = state;
    console.log(id, "=====<id")
    const initialValues = {

        title: Details?.title || "",
        slug: Details?.slug || "",
        show_navbar: Details?.show_navbar || true,
        show_footer: Details?.show_footer || false,
        show_page: Details?.show_page || true,
        content: Details?.content || ""


    }

    const { data } = useGetAll({
        key: `admin-dashboard/pages`,
        enabled: true,
        select: (data) => {
            console.log(data.data.rows);
            return data.data.rows[0];
        },
        onSuccess: (data) => {
            setDetails(data)
        }

    });


    const { mutate } = useCreateOrUpdate({
        url: `admin-dashboard/pages`,
        method: 'put'
    })
    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={(values) => {
                mutate(values, {
                    onSuccess: (response) => {
                        toast.success("Prefernces Saved Successfully !", {
                            position: "top-center",
                        })
                        navigate(-1)
                    },
                    onError: (response) => {
                        toast.error("Could Not Save Preferences !", {
                            position: "top-center",
                        })
                    }
                });
            }}
        >
            {({ handleChange, setFieldValue, values, }) => (

                <Form className='flex flex-col items-center'>
                    <div className='flex w-full gap-4'>

                        <div className="w-full">
                            <InputAdminField label={"Title"} name={"title"} placeholder={"Placeholder Text"} value={values?.title} onChange={handleChange} />
                        </div>
                        <div className="w-full">
                            <InputAdminField label={"Slug/URL"} name={"slug"} placeholder={"Placeholder Text"} value={values?.slug} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="flex gap-32 w-full pt-8">
                        <div className="  lg:w-[25%] ">
                            <RadioGroup
                                // onChange={handleChange}
                                name={"show_navbar"}
                                options={[
                                    { label: "On", value: true },
                                    { label: "Off", value: false },
                                ]}
                                label="Show Navbar"
                                value={values?.show_navbar}
                            // onChange={onChange} 

                            />
                        </div>
                        <div className="lg:w-[25%]">
                            <RadioGroup
                                name={"show_footer"}
                                // onChange={handleChange}
                                options={[
                                    { label: "On", value: true },
                                    { label: "Off", value: false },
                                ]}
                                label="Show Footer"
                                value={values?.show_footer}
                            // onChange={onChange}

                            />
                        </div>
                        <div className=" lg:w-[25%] ">
                            <RadioGroup
                                // onChange={handleChange}
                                name={"show_page"}
                                options={[
                                    { label: "On", value: true },
                                    { label: "Off", value: false },
                                ]}
                                label="Show Page"
                                value={values?.show_page}
                            // onChange={onChange}

                            />
                        </div>

                    </div>
                    <div className="pt-7 mb-5 h-[300px] w-full">
                        <FormLabel style={styleLabel}>Content:</FormLabel>
                        {/* <TextEditor  /> */}
                        <ReactQuilTextField
                            theme="snow"
                            name={'content'}
                            value={values?.content}

                            placeholder="Summarize in 100 words max."
                            style={{ '& .ql-editor': { minHeight: '50px' } }}
                            onChange={(value) => setFieldValue('content', value)}

                        />
                    </div>
                    <div className="flex flex-row gap-4 mt-12">
                        <button className='w-[69px] h-[32px] bg-[#F7F7F7]'
                            onClick={() => navigate(-1)}
                        >
                            <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                        </button>
                        <PrimaryButton type='submit'>
                            <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
                        </PrimaryButton>

                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default Index

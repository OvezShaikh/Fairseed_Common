import React from 'react'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import { Field, Form, Formik, useFormik, useFormikContext } from "formik";
import DropZone from '../../inputs/dragAndDrop';
import Box from "@mui/material/Box";
import UploadField from '../../inputs/UploadField/Index';
import "./AdminPanelLandingPage.css";
import InputField from '../../inputs/InputField';
import PrimaryButton from '../../inputs/PrimaryButton';

const InputStyle =
{
    padding: '20px', border: "1px solid #e2e2e2",
    // },
    "&:focus-within": {
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
        borderColor: "black",
    },
}



function Index() {






    return (
        <>
            <Navbar />

            <div className='admin-panel-landing-page  pt-[150px]'>
                <Formik>
                    <Form>
                        <div className='upload-div flex flex-wrap gap-x-[242px] gap-y-[68px]'>
                            <div className='single-div'>
                                <Box>
                                    <div className="dropzone-div w-[100px] h-[100px] mx-auto mb-[24px]">
                                        <DropZone
                                            className="dropzone-div"
                                            name="campaign_image"
                                            acceptedFiles={({ "file/*": [".png"] })}
                                            maxFiles={1}></DropZone></div>
                                </Box>
                                <div className='uploadfield-div w-[238px]'>

                                    <UploadField
                                        label="Logo:"
                                        // onChange={(file) => formik.setFieldValue("adhar", file)}
                                        name="document"
                                        placeholder="Recommended size: 150x50 px (PNG)"
                                        sx={{ padding: '20px' }}
                                        multiple={false}


                                    /></div>

                            </div>
                            <div className='single-div'>
                                <Box>
                                    <div className="dropzone-div w-[100px] h-[100px] mx-auto mb-[24px]">
                                        <DropZone
                                            className="dropzone-div"
                                            name="campaign_image"
                                            acceptedFiles={({ "file/*": [".png"] })}
                                            maxFiles={1}></DropZone></div>
                                </Box>
                                <div className='uploadfield-div w-[238px]'>

                                    <UploadField
                                        label="Logo Footer:"
                                        // onChange={(file) => formik.setFieldValue("adhar", file)}
                                        name="document"
                                        placeholder="Recommended size: 150x50 px (PNG)"
                                        sx={{ padding: '20px' }}
                                        multiple={false}


                                    /></div>

                            </div>
                            <div className='single-div'>
                                <Box>
                                    <div className="dropzone-div w-[100px] h-[100px] mx-auto mb-[24px]">
                                        <DropZone
                                            className="dropzone-div"
                                            name="campaign_image"
                                            acceptedFiles={({ "file/*": [".png"] })}
                                            maxFiles={1}></DropZone></div>
                                </Box>
                                <div className='uploadfield-div w-[238px]'>

                                    <UploadField
                                        label="Favicon:"
                                        // onChange={(file) => formik.setFieldValue("adhar", file)}
                                        name="document"
                                        placeholder="Recommended size: 150x50 px (PNG)"
                                        sx={{ padding: '20px' }}
                                        multiple={false}


                                    /></div>

                            </div>
                            <div className='single-div'>
                                <Box>
                                    <div className="dropzone-div w-[100px] h-[100px] mx-auto mb-[24px]">
                                        <DropZone
                                            className="dropzone-div"
                                            name="campaign_image"
                                            acceptedFiles={({ "file/*": [".png"] })}
                                            maxFiles={1}></DropZone></div>
                                </Box>
                                <div className='uploadfield-div w-[238px]'>

                                    <UploadField
                                        label="Documents:"
                                        // onChange={(file) => formik.setFieldValue("adhar", file)}
                                        name="document"
                                        placeholder="Recommended size: 150x50 px (PNG)"
                                        sx={{ padding: '20px' }}
                                        multiple={false}


                                    /></div>

                            </div>
                            <div className='single-div'>
                                <Box>
                                    <div className="dropzone-div w-[100px] h-[100px] mx-auto mb-[24px]">
                                        <DropZone
                                            className="dropzone-div"
                                            name="campaign_image"
                                            acceptedFiles={({ "file/*": [".png"] })}
                                            maxFiles={1}></DropZone></div>
                                </Box>
                                <div className='uploadfield-div w-[238px]'>

                                    <UploadField
                                        label="Documents:"
                                        // onChange={(file) => formik.setFieldValue("adhar", file)}
                                        name="document"
                                        placeholder="Recommended size: 150x50 px (PNG)"
                                        sx={{ padding: '20px' }}
                                        multiple={false}


                                    /></div>

                            </div>
                            <div className='single-div'>
                                <Box>
                                    <div className="dropzone-div w-[100px] h-[100px] mx-auto mb-[24px]">
                                        <DropZone
                                            className="dropzone-div"
                                            name="campaign_image"
                                            acceptedFiles={({ "file/*": [".png"] })}
                                            maxFiles={1}></DropZone></div>
                                </Box>
                                <div className='uploadfield-div w-[238px]'>

                                    <UploadField
                                        label="Documents:"
                                        // onChange={(file) => formik.setFieldValue("adhar", file)}
                                        name="document"
                                        placeholder="Recommended size: 150x50 px (PNG)"
                                        sx={{ padding: '20px' }}
                                        multiple={false}


                                    /></div>

                            </div>
                            <div className='single-div'>
                                <Box>
                                    <div className="dropzone-div w-[100px] h-[100px] mx-auto mb-[24px]">
                                        <DropZone
                                            className="dropzone-div"
                                            name="campaign_image"
                                            acceptedFiles={({ "file/*": [".png"] })}
                                            maxFiles={1}></DropZone></div>
                                </Box>
                                <div className='uploadfield-div w-[238px]'>

                                    <UploadField
                                        label="Documents:"
                                        // onChange={(file) => formik.setFieldValue("adhar", file)}
                                        name="document"
                                        placeholder="Recommended size: 150x50 px (PNG)"
                                        sx={{ padding: '20px' }}
                                        multiple={false}


                                    /></div>

                            </div>
                            <div className='single-div'>
                                <Box>
                                    <div className="dropzone-div w-[100px] h-[100px] mx-auto mb-[24px]">
                                        <DropZone
                                            className="dropzone-div"
                                            name="campaign_image"
                                            acceptedFiles={({ "file/*": [".png"] })}
                                            maxFiles={1}></DropZone></div>
                                </Box>
                                <div className='uploadfield-div w-[238px]'>

                                    <UploadField
                                        label="Documents:"
                                        // onChange={(file) => formik.setFieldValue("adhar", file)}
                                        name="document"
                                        placeholder="Recommended size: 150x50 px (PNG)"
                                        sx={{ padding: '20px' }}
                                        multiple={false}


                                    /></div>

                            </div>
                           
                        </div>
                        <div className='default-link-div'>
                                <InputField

                                    name="title"
                                    sx={InputStyle}

                                    
                                    label="Default Link Colour:"
                                    placeholder="Placeholder Text"

                                />

                            </div>
                            <PrimaryButton className="mx-auto">Save</PrimaryButton>
                            
                    </Form>
                </Formik>
            </div>
            <Footer />
        </>
    )
}

export default Index
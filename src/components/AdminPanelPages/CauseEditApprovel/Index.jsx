import React from 'react'
import InputField from '../../inputs/InputField/index'
import SelectField from "../../inputs/SelectField/index"
import PrimaryButton from '../../inputs/PrimaryButton'
import CheckBox from '../../inputs/checkBox'
import { FormLabel } from '@mui/material'
import { colors } from '../../../constants/theme'
import { Formik, Form, Field } from 'formik'
import images from '../../../constants/images'
import ReactQuilTextField from '../../inputs/ReactQuilTextField/Index'
import { RiDeleteBin6Line } from "react-icons/ri";
import SuccessButton from '../../inputs/SuccessButton/Index'
import { PiCheckFat } from "react-icons/pi";
import { pink, red } from "@mui/material/colors";
import UploadField from '../../inputs/UploadField/Index'
import RadioGroup from '../../inputs/radioGroup/index'
import ErrorIcon from "@mui/icons-material/Error";





import { height } from '@mui/system'
const InputStyle =
{
    padding: '20px', border: "1px solid #e2e2e2",
    // },
    "&:focus-within": {
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
        borderColor: "black",
    },
}
const InputStyleDate =
{
    padding: '12px', border: "1px solid #e2e2e2",
    // },
    "&:focus-within": {
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
        borderColor: "black",
    },
}

function Index() {
    return (
        <Formik>
            <Form className='flex flex-col items-center'>
                <div className="flex w-[100%] mt-2 gap-14">
                    <div className="flex flex-col w-[70%] gap-10 items-center">
                        <div className="max-w-[500px] w-full min-h-[333px] flex justify-end bg-[#F7FAFF]" style={{ border: '2px dashed blue', borderRadius: '12px' }}>
                            <PrimaryButton sx={{ width: '80px', height: '30px', margin: '5px' }}><h1 className='flex '><RiDeleteBin6Line className='mr-1' />Delete</h1></PrimaryButton>
                        </div>
                        <div className="w-full">
                            <InputField sx={InputStyle} name={"Title of Campaign:"} label={"Title of Campaign:"} required={"true"} placeholder={"Minimum 50 INR"} />
                        </div>
                        <SelectField name={"Choose a category:"} label={"Choose a category:"} required />
                        <div className="w-full">
                            <InputField sx={InputStyle} name={"Amount to be raised:"} label={"Amount to be raised:"} placeholder={"Minimum 50 INR"} />
                        </div>
                        <SelectField name={"Location:"} label={"Location:"} />

                        <div className="w-full">
                            <FormLabel
                                className="font-medium d-flex align-items-center desktop:text-[20px] max-desktop:text-[16px]"
                                style={{
                                    padding: '4px 8px 8px 8px',
                                    color: colors.text.main,

                                    fontWeight: 700,
                                    fontFamily: 'satoshi',
                                    fontStyle: 'normal',
                                    fontSize: '18px',
                                }}
                            >
                                About the Campaign:
                                <span className="text-red-600">*</span>
                            </FormLabel>
                            <div className="h-[332px] summary-div">
                                <ReactQuilTextField
                                    theme="snow"
                                    name='summary'
                                    // value={values.summary}
                                    // placeholder="Summarize in 100 words max."
                                    style={{ '& .ql-editor': { minHeight: '50px' } }}
                                // onChange={(value) => setFieldValue('summary', value)}
                                />
                            </div>
                        </div>
                        <div className="w-full mt-5">
                            <InputField name={'summery'} label={"Summary"} required={"true"}

                                multiline
                                info
                                CustomInfoIcon={
                                    <ErrorIcon
                                        className="ms-1"
                                        style={{
                                            color: "red",
                                            cursor: "pointer",
                                            height: "18px",
                                        }}
                                    />
                                }
                                infoText={"Please be careful while adding AD Path."}
                                rows={5}
                                placeholder="Placeholder text"
                                sx={{
                                    padding: '20px', border: "1px solid #e2e2e2",
                                    // },
                                    "&:focus-within": {
                                        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
                                        borderColor: "black",
                                    }, "& input": { height: '100px' }
                                }} />
                        </div>
                        <div className="w-full flex flex-col">
                            <FormLabel
                                className="font-medium d-flex align-items-center desktop:text-[20px] max-desktop:text-[16px]"
                                style={{
                                    padding: '4px 8px 16px 8px',
                                    color: colors.text.main,

                                    fontWeight: 700,
                                    fontFamily: 'satoshi',
                                    fontStyle: 'normal',
                                    height: '22px',
                                }}
                            >
                                Attachments:
                                <span className="text-red-600">*</span>
                            </FormLabel>
                            <div className="flex gap-4">
                                <div className="w-[218px] h-[100px] bg-[#F5F8FC] flex  justify-end" style={{ border: '1px solid blue ', borderRadius: '2px' }}><RiDeleteBin6Line className='m-1' /></div>
                                <div className="w-[218px] h-[100px] bg-[#F5F8FC] flex  justify-end" style={{ border: '1px solid blue', borderRadius: '2px' }}><RiDeleteBin6Line className='m-1' /></div>
                                <div className="w-[218px] h-[100px] bg-[#F5F8FC] flex  justify-end" style={{ border: '1px solid blue', borderRadius: '2px' }}><RiDeleteBin6Line className='m-1' /></div>

                            </div>

                        </div>
                        <div className="flex w-[100%] gap-4">
                            <div className="w-[50%] pt-1.5">
                                <InputField type={"date"} sx={InputStyleDate} name={"raised"} label={"Accept Donations until (Select end date):"} placeholder={"Minimum 50 INR"} />
                            </div>

                            <div className='w-[50%]  document-upload-div'>

                                <UploadField
                                    label="Upload Attachment:"
                                    name="document"
                                    placeholder="Upload marksheets, Medical records, Fees Structure etc."
                                    sx={{ padding: '20px' }}
                                    multiple={false}
                                // onChange={(value) => setFieldValue('adhar_front', value)}

                                />

                            </div>



                        </div>
                        <div className="flex w-[100%] gap-4">
                            <div className="w-[50%]">
                                <SelectField name={"raised"} label={"Status:"} placeholder={"Minimum 50 INR"} />
                            </div>
                            <div className="w-[50%] checkmark-div max-desktop:w-[46%] max-tablet:w-[100%]">
                                <FormLabel className="text-capitalize mb-4 font-medium d-flex align-items-center" style={{ padding: "4px 8px 8px 8px", color: colors.text.main, fontSize: "20px", fontWeight: 700, fontFamily: "satoshi", fontStyle: "normal", height: "22px" }}>
                                    Is the Campaign Zakaat eligible?<span className="text-red-600">*</span>
                                </FormLabel>
                                <CheckBox
                                    sx={{
                                        paddingLeft: '15px', "&.Mui-checked": {
                                            color: red[500],
                                        },
                                    }}
                                    name="zakat_eligible"
                                    label={'Yes'}

                                />
                            </div>


                        </div>
                        <div className="w-full ">
                            <InputField name={'Notes/Comments:'} label={"Notes/Comments:"} required={"true"} sx={{
                                padding: '20px', border: "1px solid #e2e2e2",
                                // },
                                "&:focus-within": {
                                    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
                                    borderColor: "black",
                                }, "& input": { height: '100px' }
                            }} />
                        </div>
                        <div className=" w-full ">
                            <RadioGroup
                                name={"New8"}
                                sx={{ flexDirection: 'column' }}
                                options={[
                                    { label: "On", value: "On" },
                                    { label: "Off", value: "Off" },
                                ]}
                                label="Featured:"
                                style={{ fontSize: '18px', fontWeight: 500 }}
                            // onChange={onChange}

                            />
                        </div>



                    </div>
                    <div className="w-[30%] flex flex-col items-center  gap-8">


                        <div className="max-w-[400px] w-full min-h-[600px] bg-[#F7FAFF]" style={{ border: "2px dashed blue", borderRadius: '12px' }}></div>
                        <div className="">
                            <PrimaryButton sx={{ borderRadius: '12px' }}>
                                <h1 className='text-white font-medium py-2.5 text-[18px]  px-16 font-[satoshi]'>View Revision History</h1>

                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 pt-5">
                    <button onClick={() => { }} className='w-[69px] content-stretch h-[32px] bg-[#F7F7F7]'>
                        <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                    </button>
                    <SuccessButton onClick={() => { }} text={"Save & Approve"} icon={<PiCheckFat className='w-4 h-4 mt-1' />} />
                    <PrimaryButton onClick={() => { }}  >
                        <h1 className='text-white font-semibold font-[satoshi]'>Reject Modification Request</h1>
                    </PrimaryButton>

                </div>
            </Form>
        </Formik>
    )
}

export default Index

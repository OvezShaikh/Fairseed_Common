import { Form, Formik } from 'formik'
import React from 'react'
import InputField from '../../../inputs/InputField/index'
import SelectField from "../../../inputs/SelectField/index"
import PrimaryButton from '../../../inputs/PrimaryButton'
import { borderRadius } from '@mui/system'
import { Outlet } from 'react-router-dom'
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
        <div className='flex w-[100%] pt-3 gap-24'>
            <div className="w-[70%]">
                <Formik >
                    <Form className="flex flex-col w-[100%] gap-4 items-center">
                        <div className="w-full">
                            <InputField sx={InputStyle} name={"name"} label={"Name:"} />
                        </div>
                        <SelectField name={"role"} label={"Role:"} />
                        <div className="w-full">
                            <InputField sx={InputStyle} name={"email"} label={"Email Id:"} />
                        </div>
                        <div className="w-full">
                            <InputField sx={InputStyle} name={"password"} label={"Password:"} />
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
            </div>
            <div className='w-[30%] overflow-y-scroll h-[700px]'>
                <Formik >

                    <Form className="flex w-[100%] pr-2 flex-col">

                        <div className="max-w-[500px] w-full min-h-[333px]  bg-[#F7FAFF] " style={{ border: '1px solid blue', borderRadius: '5px' }}></div>
                        <div className="max-w-[500px] w-full pt-5 flex flex-col gap-4">
                            <div className="flex justify-between py-[15px] px-[8px]" style={{ border: '1px solid gray', borderRadius: '4px' }}>
                                <p className='font-medium text-[18px] font-[satoshi] text-[#00000099]'>Registered</p>
                                <p>31st Jan, 2024</p>
                            </div>
                            <div className="flex justify-between py-[15px] px-[8px]" style={{ border: '1px solid gray', borderRadius: '4px' }}>
                                <p className='font-medium text-[18px] font-[satoshi] text-[#00000099]'>Registered</p>
                                <p>31st Jan, 2024</p>
                            </div>
                            <div className="flex justify-between py-[15px] px-[8px]" style={{ border: '1px solid gray', borderRadius: '4px' }}>
                                <p className='font-medium text-[18px] font-[satoshi] text-[#00000099]'>Registered</p>
                                <p>31st Jan, 2024</p>
                            </div>
                            <div className="flex justify-between py-[15px] px-[8px]" style={{ border: '1px solid gray', borderRadius: '4px' }}>
                                <p className='font-medium text-[18px] font-[satoshi] text-[#00000099]'>Registered</p>
                                <p>31st Jan, 2024</p>
                            </div>



                        </div>
                        <div className="flex pt-14 justify-center">
                            <PrimaryButton sx={{ borderRadius: '10px', padding: '10px 30px' }}>
                                <p className='text-[18px] font-medium font-[satoshi]'>Delete</p>
                            </PrimaryButton>
                        </div>

                    </Form>
                </Formik>
            </div>
            {/* <Outlet /> */}

        </div>
    )
}


export default Index

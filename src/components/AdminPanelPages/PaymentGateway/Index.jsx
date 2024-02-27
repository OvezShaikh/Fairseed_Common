import { Form, Formik } from 'formik'
import React from 'react'
import InputField from '../../inputs/InputField'
import RadioGroup from '../../inputs/radioGroupAdminPanel'
import PrimaryButton from '../../inputs/PrimaryButton'
const InputStyle =
{

    borderRadius: "4px",
    padding: '15px', border: "1px solid #e2e2e2",
    // },
    "&:focus-within": {
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
        borderColor: "black",
    },
}

function Index() {
    return (
        <Formik>

            <Form className=' p-8'>
                <div className="flex flex-col gap-7 p-4 items-center">
                    <div className="flex gap-7 w-full">
                        <div className="w-1/2">
                            <InputField sx={InputStyle} label={'Percentage fee %'} name={"percentage"} placeholder={'Placeholder Text'} />
                        </div>
                        <div className="w-1/2">
                            <InputField sx={InputStyle} label={'Fee Cents'} name={"percentage"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>
                    <div className="flex gap-7 w-full">
                        <div className="w-1/2">
                            <InputField sx={InputStyle} label={'Phonepe Key'} name={"percentage"} placeholder={'Placeholder Text'} />
                        </div>
                        <div className="w-1/2">
                            <InputField sx={InputStyle} label={'Phonepe Secret Key'} name={"percentage"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>
                    <div className=" w-full pl-2 ">
                        <RadioGroup
                            name={"New8"}
                            sx={{ fontSize: '22px' }}
                            options={[
                                { label: "Active", value: "Active" },
                                { label: "Disable", value: "Disable" },
                            ]}
                            label="Status"
                        // onChange={onChange}

                        />
                    </div>
                    <div className="flex flex-row gap-4 mt-12">
                        <button
                            // onClick={() => {
                            //     onClose();
                            // }}
                            className='w-[69px] h-[32px] bg-[#F7F7F7]'>
                            <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                        </button>
                        <PrimaryButton >
                            <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
                        </PrimaryButton>

                    </div>
                </div>
            </Form>

        </Formik>
    )
}

export default Index

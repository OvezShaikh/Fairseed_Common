import React, { useState } from 'react'
import InputField from '../../inputs/InputField'
import { Form, Formik } from 'formik'
import { FormLabel } from '@mui/material'
import UploadField from '../../inputs/UploadField/Index'
import SelectField from '../../inputs/SelectField'
import PrimaryButton from '../../inputs/PrimaryButton'
import Attachments from '../../layout/Attachments/Index'
const InputStyle =
{

    borderRadius: "4px",
    padding: '12px', border: "1px solid #e2e2e2",
    // },
    "&:focus-within": {
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
        borderColor: "black",
    },
}
function CausesView() {
    const [imgOne, setImgOne] = useState('');
    const [imgTwo, setImgTwo] = useState('');
    const [imgThree, setImgThree] = useState('');

    const img = [
        "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    ]
    return (
        <Formik>
            <Form>


                <div className='p-4 w-full max-tablet:w-full'>
                    <div className="flex flex-col gap-7  w-[70%] max-desktop:w-full max-tablet:w-full">
                        <div className="flex flex-col gap-7 max-tablet:w-full">
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Title of Campaign:"} name={'campaign'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Aadhar Card:"} name={'campaign'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Account Holder Name:"} name={'campaign'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Beneficiary Bank Account Number::"} name={'campaign'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Bank Name:"} name={'campaign'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Branch Name:"} name={'campaign'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"IFSC Code:"} name={'campaign'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Pan Card Number:"} name={'campaign'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Adhar Number:"} name={'campaign'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Other Details (Optional)::"} name={'campaign'} />
                            </div>
                            <div className="w">
                                <FormLabel sx={{ fontSize: '20px', fontFamily: 'satoshi', fontWeight: 700, color: "#383A42", paddingLeft: '8px' }}>
                                    Documents:
                                </FormLabel>
                                <div className="flex gap-4 pt-2">
                                    <div className="flex flex-col gap-2">
                                        <Attachments imageUrl={{}} />
                                        <FormLabel sx={{ fontSize: '20px', fontFamily: 'satoshi', fontWeight: 700, color: "#383A42", paddingLeft: '8px' }}>
                                            PAN Card
                                        </FormLabel>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Attachments imageUrl={{}} />
                                        <FormLabel sx={{ fontSize: '20px', fontFamily: 'satoshi', fontWeight: 700, color: "#383A42", paddingLeft: '8px' }}>
                                            Adhar Card
                                        </FormLabel>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Attachments imageUrl={{}} />
                                        <FormLabel sx={{ fontSize: '20px', fontFamily: 'satoshi', fontWeight: 700, color: "#383A42", paddingLeft: '8px' }}>
                                            Passbook
                                        </FormLabel>
                                    </div>


                                </div>
                            </div>
                            <div className="w-full">
                                <UploadField label='Upload PAN Card Copy:' name={'pan'} />
                            </div>
                            <div className="w-full">
                                <UploadField label='Upload Aadhar Card Copy:' name={'pan'} />
                            </div>
                            <div className="w-full">
                                <UploadField label='Upload Passbook Copy:' name={'pan'} />
                            </div>
                            <div className="w-full">
                                <SelectField label={'Status'} name={'status'} />
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


                    </div>

                </div>
            </Form>
        </Formik>
    )
}

export default CausesView

import React, { useState } from 'react'
import InputField from '../../inputs/InputField'
import { Form, Formik } from 'formik'
import { FormLabel } from '@mui/material'
import UploadField from '../../inputs/UploadField/Index'
import SelectField from '../../inputs/SelectField'
import PrimaryButton from '../../inputs/PrimaryButton'
import Attachments from '../../layout/Attachments/Index'
import { Navigate, useLocation, useNavigate } from 'react-router'
import { useGetAll } from '../../../Hooks'


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

    let {state} = useLocation();
    let {id} = state;
    
    const [kyc , setKyc] = useState({})
    const [imgOne, setImgOne] = useState('');
    const [imgTwo, setImgTwo] = useState('');
    const [imgThree, setImgThree] = useState('');

    const img = [
        "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    ]
    const navigate =useNavigate();

    useGetAll({
        key: `/admin-dashboard/campaign-kyc/${id}`,
        enabled: true,
        select: (data) => {
            return data?.data?.data;
        },
        onSuccess: (data) => {
            setKyc(data);
            console.log(data);
        },
    });

const initial_values = {
    account_holder_name:kyc?.account_holder_name || "" ,
        account_number: kyc?.account_number || "" ,
        bank_name: kyc?.bank_name || "" ,
        branch_name: kyc?.branch_name || "" ,
        ifsc_code:kyc?.ifsc_code|| "" ,
        status:kyc?.status|| "" ,
        title:kyc?.campaign?.title || "" ,
        bank_data:kyc?.bank_data || "" 
    
}
    return (
        <Formik 
        initialValues={initial_values}>
            {({values})=>(

            
            <Form>
                <div className='p-4 w-full max-tablet:w-full'>
                    <div className="flex flex-col gap-7  w-[70%] max-desktop:w-full max-tablet:w-full">
                        <div className="flex flex-col gap-7 max-tablet:w-full">
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Title of Campaign:"} value={values?.title} name={'title'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Aadhar Card:"} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Account Holder Name:"} value={values?.account_holder_name} name={'account_holder_name'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Beneficiary Bank Account Number::"} value={values?.account_number}name={'account_number'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Bank Name:"} value={values?.bank_name} name={'bank_name'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Branch Name:"} value={values?.branch_name} name={'branch_name'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"IFSC Code:"} value={values?.ifsc_code} name={'ifsc_code'} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Pan Card Number:"} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Adhar Number:"} />
                            </div>
                            <div className="w-full">
                                <InputField sx={InputStyle} label={"Other Details (Optional)::"}  />
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
                                    onClick={() => {
                                        navigate(-1)
                                    }}
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
            )}
        </Formik>
    )
}

export default CausesView

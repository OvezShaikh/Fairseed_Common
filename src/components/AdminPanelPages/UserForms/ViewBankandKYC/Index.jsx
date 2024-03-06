import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import InputField from '../../../inputs/InputAdminField/Index'
import SelectField from '../../../inputs/AdminSelectField/Index'
import moment from 'moment';
import "../../../../pages/Campaigns/CreateCampaigns/CreateCampaigns.css"
import { FormLabel } from '@mui/material';
import images from '../../../../constants/images';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetAll } from '../../../../Hooks';
import Attachments from '../../../layout/Attachments/Index'

// import dayjs from 'dayjs';

const styleLabel = {
    fontFamily: "satoshi",
    fontSize: 16,
    fontWeight: 700,
    color: "#383A42",
    marginTop: '4px',
    paddingLeft: '5px'
};

const initialValues = {


    transaction: ''
}

function Index() {

    const [data, setData] = useState({})

    let { state } = useLocation();

    let { id } = state;

    const navigate = useNavigate()

    useGetAll({
        key: `/admin-dashboard/donors?page=1&limit=10/${id}`,
        enabled: true,
        select: (data) => {
            console.log(data)
            return data.data.data;
        },
        onSuccess: (data) => {
            setData(data);
        },
    })

    const initial_values = {

    }

    return (
        <Formik
            initialValues={{}}
        >
            <Form className='flex flex-col items-center gap-[30px] max-desktop:pt-4 max-tablet:4'>


                <div className="flex  w-full max-desktop:flex-col max-tablet:flex-col gap-3">
                    <div className="flex justify-between w-[50%]     max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">

                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"id"} label={"ID:"} placeholder={'Placeholder Text'} />
                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <SelectField name={"Donation"} label={"Raised for others:"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>
                    <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"City"} label={"Beneficiary Name:"} placeholder={'Placeholder Text'} />
                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"Country"} label={"Account No.:"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>
                </div>
                <div className="flex max-desktop:flex-col max-tablet:flex-col  w-full gap-3">
                    <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">

                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"PostalCode"} label={"Bank Name:"} placeholder={'Placeholder Text'} />
                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"pan_card"} label={"Branch Name:"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>
                    <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">

                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"DonationType"} label={"IFSC:"} placeholder={'Placeholder Text'} />
                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"Payment Gateway:"} label={"PAN Card:"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>

                </div>


                <div className="flex max-desktop:flex-col max-tablet:flex-col w-full gap-3">
                    <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"Payment Gateway:"} label={"Aadhar Card:"} placeholder={'Placeholder Text'} />

                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"TransactionConfirmation"} label={"Other Details"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>
                    <div className="flex  justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">


                        <div className="w-[49%] max-tablet:w-full">
                            <SelectField name={"Reward"} label={"Status:"} placeholder={'Placeholder Text'} />
                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField
                                type="date"
                                // defaultValue={yesterday}

                                name="TransactionDate"
                                inputProps={{ min: moment().format('YYYY-MM-DD') }}

                                label="Approval Date:"
                            />

                        </div>
                    </div>
                </div>
                <div className="w-full">
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
                <button onClick={() => navigate(-1)} className='w-[69px] h-[32px] bg-[#F7F7F7]'>
                    <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Go Back</h1>
                </button>

            </Form>
        </Formik>
    )
}

export default Index

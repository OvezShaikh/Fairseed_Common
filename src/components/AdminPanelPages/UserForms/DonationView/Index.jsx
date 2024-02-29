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

                <div className="flex max-desktop:flex-col max-tablet:flex-col w-full gap-3">
                    <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col ">

                        <div className="w-[49%] max-tablet:w-full">
                            <FormLabel sx={styleLabel}>Campaign:</FormLabel>
                            <div className="flex">
                                <h1 className='text-[16px] font-[satoshi] pt-3  font-medium max-tablet:pl-2 max-tablet:pb-2'>Causes</h1>
                                <img className='pt-2 pl-2' src={images.CausesDetails} alt="" />
                            </div>
                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"transaction"} label={"ID:"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>
                    <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">

                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"FullName"} label={"Full Name:"} placeholder={'Placeholder Text'} />
                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"Email"} label={"Pan Card:"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>
                </div>

                <div className="flex max-desktop:flex-col max-tablet:flex-col w-full gap-3">
                    <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"TransactionConfirmation"} label={"Donation:"} placeholder={'Placeholder Text'} />

                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"TransactionConfirmation"} label={"Payment Gateway:"} placeholder={'Placeholder Text'} />
                        </div>
                    </div>
                    <div className="flex  justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField name={"Reward"} label={"Comments:"} placeholder={'Placeholder Text'} />
                        </div>
                        <div className="w-[49%] max-tablet:w-full">
                            <InputField
                                type="date"
                                // defaultValue={yesterday}

                                name="TransactionDate"
                                inputProps={{ min: moment().format('YYYY-MM-DD') }}

                                required={true}
                                label="Date:"
                            />

                        </div>

                    </div>
                </div>
                <div className="flex w-full max-desktop:w-full max-tablet:flex-col  gap-3">
                    <div className="w-[25%] max-desktop:w-1/2 max-tablet:w-full">
                        <SelectField name={"Preferred"} label={"Anonymous:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[25%] max-desktop:w-1/2 max-tablet:w-full">
                        <InputField name={"PreferredDonation"} label={"Reward:"} placeholder={'Placeholder Text'} />
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

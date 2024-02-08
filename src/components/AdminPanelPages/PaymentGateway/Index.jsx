import { Form, Formik } from 'formik'
import React from 'react'
import InputField from '../../inputs/InputAdminField/Index'
import SelectField from '../../inputs/AdminSelectField/Index'
import moment from 'moment';
import "../../../pages/Campaigns/CreateCampaigns/CreateCampaigns.css"
import { FormLabel } from '@mui/material';
import images from '../../../constants/images';
// import dayjs from 'dayjs';

const styleLabel = {
    fontFamily: "satoshi",
    fontSize: 16,
    fontWeight: 700,
    color: "#383A42",
    marginTop: '4px'
};

const initialValues = {


    transaction: ''
}

function Index() {
    // const yesterday = dayjs().subtract(1, 'day');

    return (
        <Formik>
            <Form className='flex flex-col items-center gap-[30px]'>

                <div className="flex flex-wrap w-full justify-between">
                    <div className="w-[24%]">
                        <FormLabel sx={styleLabel}>Campaign:</FormLabel>
                        <div className="flex">
                            <h1 className='text-[16px] font-[satoshi] pt-3 font-medium'>Causes</h1>
                            <img className='pt-3 pl-2' src={images.CausesDetails} alt="" />
                        </div>
                    </div>
                    <div className="w-[24%]">
                        <InputField name={"transaction"} label={"Transaction ID:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <InputField name={"FullName"} label={"Full Name:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <InputField name={"Email"} label={"Email:"} placeholder={'Placeholder Text'} />
                    </div>
                </div>
                <div className="flex flex-wrap w-full justify-between">
                    <div className="w-[24%]">
                        <InputField name={"id"} label={"ID:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <InputField name={"Donation"} label={"Donation:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <SelectField name={"City"} label={"City:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <SelectField name={"Country"} label={"Country:"} placeholder={'Placeholder Text'} />
                    </div>
                </div>
                <div className="flex flex-wrap w-full justify-between">
                    <div className="w-[24%]">
                        <InputField name={"PostalCode"} label={"Postal Code:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <InputField name={"pan_card"} label={"PAN Card:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <InputField name={"DonationType"} label={"Donation Type:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <SelectField name={"Payment Gateway:"} label={"Payment Gateway:"} placeholder={'Placeholder Text'} />
                    </div>

                </div>
                <div className="flex flex-wrap w-full justify-between">
                    <div className="w-[24%]">
                        <InputField name={"BankName"} label={"Bank Name:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <InputField name={"other"} label={"Other Details:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <SelectField name={"Comments"} label={"Comments:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <SelectField name={"anonymous"} label={"Anonymous:"} placeholder={'Placeholder Text'} />
                    </div>
                </div>

                <div className="flex flex-wrap w-full justify-between">
                    <div className="w-[24%]">
                        <InputField
                            type="date"
                            // defaultValue={yesterday}

                            name="TransactionDate"
                            inputProps={{ min: moment().format('YYYY-MM-DD') }}

                            required={true}
                            label="Transaction Date:"
                        />
                    </div>
                    <div className="w-[24%]">
                        <InputField name={"TransactionConfirmation"} label={"Transfer Confirmation number:"} placeholder={'Placeholder Text'} />
                    </div>

                    <div className="w-[24%]">
                        <InputField
                            type="date"
                            // defaultValue={yesterday}

                            name="TransactionDate"
                            inputProps={{ min: moment().format('YYYY-MM-DD') }}

                            required={true}
                            label="Transaction Date:"
                        />

                    </div>
                    <div className="w-[24%]">
                        <InputField name={"Reward"} label={"Reward:"} placeholder={'Placeholder Text'} />
                    </div>

                </div>
                <div className="flex w-full flex-wrap gap-4">
                    <div className="w-[24%]">
                        <SelectField name={"Preferred"} label={"Preferred Donation City:"} placeholder={'Placeholder Text'} />
                    </div>
                    <div className="w-[24%]">
                        <SelectField name={"PreferredDonation"} label={"Preferred Donation State:"} placeholder={'Placeholder Text'} />
                    </div>

                </div>
                <button className='w-[69px] h-[32px] bg-[#F7F7F7]'>
                    <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                </button>

            </Form>
        </Formik>
    )
}

export default Index

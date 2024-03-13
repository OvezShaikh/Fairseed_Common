import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import InputField from '../../inputs/InputField'
import RadioGroup from '../../inputs/radioGroupAdminPanel'
import PrimaryButton from '../../inputs/PrimaryButton'
import { Details } from '@mui/icons-material'
import { toast } from 'react-toastify'
import { useCreateOrUpdate, useGetAll } from '../../../Hooks'
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
    const [Details, setDetails] = useState({})

    useGetAll({
        key: `/admin-dashboard/phonepay`,
        enabled: true,
        select: (data) => {
            console.log(data.data.data, "++++++id++++++");
            return data?.data?.data;
        },
        onSuccess: (data) => {
            setDetails(data)
        }

    });


    const { mutate } = useCreateOrUpdate({
        url: `/admin-dashboard/phonepay`,
        method: 'put'
    })

    const initialValues = {
        phonepay_key: Details?.phonepay_key || "",
        phonepay_secret: Details?.phonepay_secret || "",
        fee_percent: Details?.fee_percent || '',
        fee_cents: Details?.fee_cents || '',
        is_enabled: false,
    }

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={(values) => {
                mutate(values, {
                    onSuccess: () => {
                        toast.success("Prefernces Saved Successfully !", {
                            position: "top-center",
                        })
                    },
                    onError: () => {
                        toast.error("Could Not Save Preferences !", {
                            position: "top-center",
                        })
                    }
                });
            }}        >
            {({ values, setFieldValue }) => (

                <Form className=' p-8 max-tablet:p-0 max-desktop:p-1'>
                    <div className="flex flex-col gap-7 p-4 items-center max-desktop:p-1 max-tablet:p-0">
                        <div className="flex gap-7 w-full max-desktop:flex-col max-tablet:flex-col">
                            <div className="w-1/2 max-desktop:w-full max-tablet:w-full">
                                <InputField sx={InputStyle} label={'Percentage fee %'} name={"fee_percent"} placeholder={'Placeholder Text'} value={values?.fee_percent} />
                            </div>
                            <div className="w-1/2 max-desktop:w-full max-tablet:w-full">
                                <InputField sx={InputStyle} label={'Fee Cents'} name={"fee_cents"} placeholder={'Placeholder Text'} value={values?.fee_cents} />
                            </div>
                        </div>
                        <div className="flex gap-7 w-full max-desktop:flex-col max-tablet:flex-col">
                            <div className="w-1/2 max-desktop:w-full max-tablet:w-full">
                                <InputField sx={InputStyle} label={'Phonepe Key'} name={"phonepay_key"} placeholder={'Placeholder Text'} value={values?.phonepay_key} />
                            </div>
                            <div className="w-1/2 max-desktop:w-full max-tablet:w-full">
                                <InputField sx={InputStyle} label={'Phonepe Secret Key'} name={"phonepay_secret"} placeholder={'Placeholder Text'} value={values?.phonepay_secret} />
                            </div>
                        </div>
                        <div className=" w-full pl-2 max-desktop:w-full max-tablet:w-full">
                            <RadioGroup
                                name={"is_enabled"}
                                sx={{ fontSize: '22px' }}
                                onChange={
                                    (e) => {
                                        setFieldValue("is_enabled", e === "true")
                                    }}
                                options={[
                                    { label: "Active", value: true },
                                    { label: "Disable", value: false },
                                ]}
                                label="Status"
                                value={values?.is_enabled}
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
                            <PrimaryButton type='submit' >
                                <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
                            </PrimaryButton>

                        </div>
                    </div>
                </Form>
            )}

        </Formik>
    )
}

export default Index

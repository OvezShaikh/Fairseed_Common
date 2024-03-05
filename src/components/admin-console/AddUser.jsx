import { Add, Edit } from "@carbon/icons-react";
import { Grid, Box, Button } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { Form, Formik, useFormikContext } from "formik";
import { useQueryClient } from "react-query";
import { Dialog } from "../layout/dialogBox/dialog";
import { useCreateOrUpdate } from "../../Hooks/useCreateOrUpdate";
import PrimaryButton from "../inputs/PrimaryButton";
import InputAdminField from "../inputs/InputAdminField/Index"
import RadioGroup from '../inputs/radioGroupAdminPanel'
import ReactQuilTextField from "../inputs/ReactQuilTextField/Index"
import { FormLabel } from '@mui/material'
import { toast } from "react-toastify";
import AdminSelectField from "../inputs/AdminSelectField/Index";


export const AddUser = ({
    isUpdate = false,
    data,
    onClick,
    onSuccess,
    onClose,
}) => {
    const queryClient = useQueryClient();
    const styleLabel = {
        fontFamily: "satoshi",
        fontSize: 16,
        fontWeight: 700,
        color: "#383A42",
    };


    const initialValues = {
        username: "",
        mobile_number: "",
        email: "",
        password: "",
        user_role: "",
        user_type: "",


    }
    const validationSchema = yup.object().shape({
        username: yup.string().required("username is required"),
        mobile_number: yup.string().required("mobile_number is required"),
        email: yup.string().email().required("email  is required"),
        password: yup.string()
            .matches(
                /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                'Password must contain at least one uppercase letter, one number, and be at least 8 characters long'
            )
            .required('Password is required'),
        confirm_password: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),        // user_role: yup.required("Show Page is required"),
        user_type: yup.string().required("Content is required"),
    });


    const { mutate } = useCreateOrUpdate({
        url: `/admin-dashboard/users`

    })
    // const { mutate, isLoading } = useCreateOrUpdate({
    //     url: isUpdate ? `/admin-dashboard/users${data?.id}` : "/admin-dashboard/users",
    //     method: isUpdate ? "put" : "post",
    //     onSuccess: () => onSuccess && onSuccess(),
    // });

    return (
        <Dialog
            title={`${isUpdate ? "Update" : "Add"}  New User`}
            onClose={() => onClose && onClose()}
            button={
                // isUpdate ? (
                //   <Button
                //     onClick={() => onClick && onClick()}
                //     startIcon={<Edit />}
                //     className="text-capitalize"
                //     sx={{
                //       lineHeight: "18px",
                //       fontFamily: "FuturaLight",
                //       fontWeight: "300",
                //       fontSize: {
                //         xs: "0.8rem",
                //         lg: "0.9rem",
                //       },
                //     }}
                //     variant="text"
                //   >
                //     View/Edit
                //   </Button>
                // ) : (
                <PrimaryButton
                    className="text-capitalize"
                    startIcon={<Add size={24} />}
                >
                    Add New
                </PrimaryButton>
                // )
            }
        >
            {({ onClose }) => (
                <Formik
                    initialValues={initialValues}
                    // validationSchema={validationSchema}
                    onSubmit={(values) => {
                        mutate({ ...values, user_type: values?.user_type?.value }, {
                            onSuccess: (response) => {
                                toast.success('User create successfully', { position: 'top-right' });
                                queryClient.refetchQueries({
                                    queryKey: ['/admin-dashboard/users'],
                                    exact: false,
                                   
                                })
                                onClose()
                               
                            },
                            onError: () => {
                                toast.error('Somthing is wrong please try again later', { position: 'top-right' })
                            }

                        });
                    }}


                >
                    {({ setFieldValue, values, errors, touched }) => (

                        <Form className='flex flex-col items-center px-4 pt-2'>
                            <div className='flex w-full max-desktop:flex-col max-tablet:flex-col  gap-4'>

                                <div className="w-full">
                                    <InputAdminField label={"Name"} name={"username"} placeholder={"Placeholder Text"} />
                                </div>
                                <div className="w-full">
                                    <InputAdminField label={"Email"} name={"email"} placeholder={"Placeholder Text"} />
                                </div>

                            </div>
                            <div className='flex w-full  max-desktop:flex-col max-tablet:flex-col  gap-4 pt-2'>

                                <div className="w-full">
                                    <InputAdminField label={"Mobile"} name={"mobile_number"} placeholder={"Placeholder Text"} />
                                </div>
                                <div className="w-full">
                                    <AdminSelectField label={"Role"} name={"user_role"} placeholder={"Placeholder Text"}
                                        options={[
                                            { label: "Normal(it can only publish campaigns)", values: "normal" },
                                            { label: "Admin", values: "admin" },
                                            { label: "Campaign Approver", values: "campaign_approver" },
                                            { label: "Campaign Manager", values: "campaign_manager" },

                                        ]}
                                    />
                                </div>

                            </div>
                            <div className='flex w-full  max-desktop:flex-col max-tablet:flex-col  gap-4 pt-2'>

                                <div className="w-full">
                                    <InputAdminField label={"Password"} name={"password"} placeholder={"Placeholder Text"} />
                                </div>
                                <div className="w-full">
                                    <InputAdminField label={"Confirm Password"} name={"confirm_password"} placeholder={"Placeholder Text"} />
                                </div>

                            </div>
                            <div className="flex gap-32 w-full pl-2 pt-8 max-tablet:flex-col max-tablet:gap-4">
                                <div className="  lg:w-[25%] ">
                                    <RadioGroup
                                        name={"user_type"}
                                        onChange={(e) => {
                                            setFieldValue('user_type', e?.target?.value)
                                        }}
                                        options={[
                                            { label: "Individual", value: "Individual" },
                                            { label: "NGO", value: 'NGO' },
                                        ]}
                                        label="Register as"
                                    />
                                    {errors.show_navbar && touched.show_navbar && <div className="error">{errors.show_navbar}</div>}
                                </div>

                            </div>

                            <div className="flex flex-row gap-4 mt-12">
                                <button className='w-[69px] h-[32px] bg-[#F7F7F7]'
                                    onClick={() => onClose()}
                                >
                                    <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                                </button>
                                <PrimaryButton type='submit'>
                                    <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
                                </PrimaryButton>

                            </div>
                        </Form>
                    )}

                </Formik>
            )
            }
        </Dialog >
    );
};

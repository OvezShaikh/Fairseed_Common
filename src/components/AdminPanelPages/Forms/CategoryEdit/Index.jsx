import { Formik, Form } from 'formik'
import React, { useState } from 'react'
import InputAdminField from '../../../inputs/InputAdminField/Index'
import AdminUploadField from "../../../inputs/AdminUploadField/Index"
import RadioGroup from '../../../inputs/radioGroupAdminPanel'
import PrimaryButton from '../../../inputs/PrimaryButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCreateOrUpdate, useGetAll } from '../../../../Hooks'
import { toast } from 'react-toastify'


function AddNew() {

    let { state } = useLocation(); 
    let { id } = state;

    const [Category , setCategory ] = useState({});

    const navigate = useNavigate();
    useGetAll({
        key: `/admin-dashboard/category/${id}`,
        enabled: true,
        select: (data) => {
            console.log(data.data.data);
            return data.data.data;
        },
        onSuccess: (data) => {
            setCategory(data);

        },
    });
    const initialValues = {
        name:Category.name ||  "",
        url:Category.slug || "",
        thumbnail:Category.image || "",
        is_active:Category.is_active ||  false
    }

    const { mutate } = useCreateOrUpdate({
        url:`/admin-dashboard/category/${id}`,
        method:'put'
    })
 
    return (
        <Formik
           enableReinitialize={true} 
            initialValues={initialValues}
            onSubmit={(values)=>{
                mutate(values , {
                    onSuccess:()=>{
                        toast.success("Category Updated Successfully ! " ,{
                            position:'top-right'
                        })
                    }
                })
            }}

        >
              {({ values, setFieldValue, handleChange }) => (
            <Form className='flex flex-col items-center px-4'>
                <div className='flex w-full gap-4'>
                    <div className="w-full">
                        <InputAdminField name={"name"} value={values?.name} onChange={handleChange} label={"Name"} placeholder={"Placeholder Text"} />
                    </div>
                    <div className="w-full">
                        <InputAdminField name={"url"} label={"Slug/URL"} value={values?.url}  onChange={handleChange} placeholder={"Placeholder Text"} />
                    </div>

                </div>
                <div className="flex w-full mt-8 gap-4">
                    <div className="w-full " Style>
                        <AdminUploadField name={"thumbnail"} value={values?.thumbnail}   onChange={handleChange} label='Thumbnail (Optainal)' />
                    </div>
                    <div className=" w-full ">
                        <RadioGroup
                            name={"is_active"}
                            value={values?.is_active}
                            onChange={
                                (e) => {
                                  setFieldValue("is_active", e === "true")
                                }}
                            options={[
                                { label: "Active", value: true },
                                { label: "Inactive", value: false },
                            ]}
                            label="Status"

                        />
                    </div>
                </div>
                <div className="flex flex-row gap-4 mt-12">
                    <button className='w-[69px] h-[32px] bg-[#F7F7F7]' onClick={()=>{
                        navigate(-1)
                    }}>
                        <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                    </button>
                    <PrimaryButton type='submit' >
                        <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
                    </PrimaryButton>

                </div>
            </Form>
              )}
        </Formik>
    )
}

export default AddNew
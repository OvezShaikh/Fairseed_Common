import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import InputField from '../../../inputs/InputField/index'
import SelectField from "../../../inputs/SelectField/index"
import PrimaryButton from '../../../inputs/PrimaryButton'
import { useLocation, useNavigate } from 'react-router-dom'
import ImageEditor from '../../../layout/ImageEditor/Index'
import images from '../../../../constants/images'
import { useCreateOrUpdate, useGetAll } from '../../../../Hooks'
import { toast } from 'react-toastify'


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

    const [User, setUser] = useState({});
    const [role, setRole] = useState([])
    const [isImageDeleted, setIsImageDeleted] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    let { state } = useLocation();
    let { id } = state;

    const imageUrlFromBackend = 'https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'

    const navigate = useNavigate();

    const handleDelete = () => {
        setShowDeleteConfirmation(true);
    };

    const handleOk = () => {
        setDeleteSuccess(false);
        setIsImageDeleted(true); // Actually delete the image
        setShowDeleteConfirmation(false); // Close the confirmation dialog
    };

    const confirmDelete = () => {
        setIsImageDeleted(true);
        setDeleteSuccess(true);
    };

    const cancelDelete = () => {
        setShowDeleteConfirmation(false);
    };

    useGetAll({
        key: `/admin-dashboard/users/${id}`,
        enabled: true,
        select: (data) => {
            console.log(data.data.data);
            return data.data.data;
        },
        onSuccess: (data) => {
            setUser(data);

        },
    });

    useGetAll({
        key: `/admin-dashboard/user-roles?page=1&limit=10`,
        enabled: true,
        select: (data) => {
            console.log(data)
            return data.data.rows;
        },
        onSuccess: (data) => {
            setRole(data);
        },
    });



    const { mutate } = useCreateOrUpdate({
        url: `/admin-dashboard/users/${id}`
    })

    console.log(role)

    const initialvalues = {
        name: User.username || "",
        role: User.user_role || "",
        email: User.email || "",
        password: "",
        created_on: User.created_on || "",

    }

    return (
        <div className='flex w-[100%] pt-3 gap-24'>
            <div className="w-[70%]">
                <Formik
                    enableReinitialize={true}
                    initialValues={initialvalues}
                    onSubmit={(values) => {
                        mutate(values, {
                            onSuccess: (response) => {
                                toast.success("Details Updated Successfully !", {
                                    position: 'top-right'
                                })
                            },
                        });
                    }}
                >{({ values }) => (


                    <Form className="flex flex-col w-[100%] gap-4 items-center">
                        <div className="w-full">
                            <InputField sx={InputStyle} name={"name"} label={"Name:"} />
                        </div>
                        <SelectField name={"role"}
                            label={"Role:"}
                            required={true}
                            value={values?.role}
                            options={role.map((item) => ({
                                label: item.role_name,
                                value: item.role_name,
                            }))} />
                        <div className="w-full">
                            <InputField sx={InputStyle} name={"email"} label={"Email Id:"} />
                        </div>
                        <div className="w-full">
                            <InputField sx={InputStyle} name={"password"} label={"Password:"} />
                        </div>
                        <div className="flex flex-row gap-4 mt-12">
                            <button onClick={() => navigate(-1)}
                                className='w-[69px] h-[32px] bg-[#F7F7F7]'>
                                <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                            </button>
                            <PrimaryButton type='submit' >
                                <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
                            </PrimaryButton>

                        </div>

                    </Form>
                )}

                </Formik>
            </div>
            <div className='w-[30%] overflow-y-scroll h-[700px]'>


                <div className="flex w-[100%] pr-2 flex-col">

                    <ImageEditor
                        sx={{ maxWidth: '500px', minHeight: '333px', border: '1px solid #3366CC !important' }}
                        imageUrl={imageUrlFromBackend}

                    />                        <div className="max-w-[500px] w-full pt-5 flex flex-col gap-4">
                        <div className="flex justify-between py-[15px] px-[8px]" style={{ border: '1px solid gray', borderRadius: '4px' }}>
                            <p className='font-medium text-[18px] font-[satoshi] text-[#00000099]'>Registered</p>
                            <p>{ }</p>
                        </div>
                        <div className="flex justify-between py-[15px] px-[8px]" style={{ border: '1px solid gray', borderRadius: '4px' }}>
                            <p className='font-medium text-[18px] font-[satoshi] text-[#00000099]'>Status</p>
                            <p>{User?.is_active ? ("Active") : ("Inactive")}</p>
                        </div>
                        <div className="flex justify-between py-[15px] px-[8px]" style={{ border: '1px solid gray', borderRadius: '4px' }}>
                            <p className='font-medium text-[18px] font-[satoshi] text-[#00000099]'>Country</p>
                            <p>{User?.country}</p>
                        </div>
                        <div className="flex justify-between py-[15px] px-[8px]" style={{ border: '1px solid gray', borderRadius: '4px' }}>
                            <p className='font-medium text-[18px] font-[satoshi] text-[#00000099]'>Campaigns</p>
                            <p>31st Jan, 2024</p>
                        </div>



                    </div>
                    <div className="flex pt-14 justify-center">
                        <PrimaryButton onClick={handleDelete} sx={{ borderRadius: '10px', padding: '10px 30px' }}>
                            <p className='text-[18px] font-medium font-[satoshi]'>Delete</p>
                        </PrimaryButton>
                    </div>
                    {showDeleteConfirmation && (
                        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center " style={{ zIndex: 12344 }}>
                            <div className="bg-white p-4 rounded shadow-md flex flex-col items-center justify-center text-center">
                                {!deleteSuccess ? (
                                    <>
                                        <img src={images.Vector} className='w-[50px] h-[50px] mb-2' alt="" />

                                        <h1 className='pb-2 text-[30px] font-[satoshi] font-black '>Are you sure?</h1>
                                        <p className='text-black/40 text-[20px] font-[satoshi] font-medium'>Once deleted, you will not be able to recover this document.</p>
                                        <div className="mt-4">
                                            <button onClick={cancelDelete} className="bg-gray-300 px-4 py-2  text-[20px] mr-2 font-[satoshi] font-medium rounded">No, cancel!</button>
                                            <button onClick={confirmDelete} className="bg-green-500 text-white text-[20px] font-[satoshi] font-medium px-4 py-2  rounded">Yes, delete it!</button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <img src={images.done} alt="" />
                                        <h1 className='text-green-400 pb-2 text-[30px] font-[satoshi] font-black '>Success!</h1>
                                        <p className='text-[18px] text-black/40 font-medium font-[satoshi]'>Document deleted successfully.</p>
                                        <div className="mt-4">
                                            <button onClick={handleOk} className="bg-green-500 text-white text-[20px] font-[satoshi] font-medium px-4 py-2  rounded">OK</button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </div>
    )
}

export default Index
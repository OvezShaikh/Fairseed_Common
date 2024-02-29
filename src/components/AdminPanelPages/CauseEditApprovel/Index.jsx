import React, { useRef } from 'react'
import InputField from '../../inputs/InputField/index'
import SelectField from "../../inputs/SelectField/index"
import PrimaryButton from '../../inputs/PrimaryButton'
import CheckBox from '../../inputs/checkBox'
import { FormLabel } from '@mui/material'
import { colors } from '../../../constants/theme'
import { Formik, Form, Field, useFormikContext } from 'formik'
import ReactQuilTextField from '../../inputs/ReactQuilTextField/Index'
import { RiDeleteBin6Line } from "react-icons/ri";
import SuccessButton from '../../inputs/SuccessButton/Index'
import { PiCheckFat } from "react-icons/pi";
import { pink, red } from "@mui/material/colors";
import UploadField from '../../inputs/UploadField/Index'
import RadioGroup from '../../inputs/radioGroup/index'
import ErrorIcon from "@mui/icons-material/Error";
import ImageEditor from '../../layout/ImageEditor/Index'
import { useState } from 'react'
import ImageBackgroundWithDeleteButton from '../../layout/CropAddImage/Index';
import Attachments from '../../layout/Attachments/Index'
import { useCreateOrUpdate, useGetAll } from '../../../Hooks'
import { Link, useLocation, useNavigate } from "react-router-dom"
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
const InputStyleDate =
{
    padding: '12px', border: "1px solid #e2e2e2",
    // },
    "&:focus-within": {
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
        borderColor: "black",
    },
}


function CauseEdit_Form() {
    let { state } = useLocation();
    let { id } = state;
    const [documents, setDocuments] = useState([]);
    const [dataUrl, setDataUrl] = useState(null);
    const [Category, setCategory] = useState([]);

    const handleDocumentUpload = (documentUrl) => {
        setDocuments([...documents, documentUrl]);
        
    };
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [document , setDocument ] = useState([]);

    const [imageUrl, setImageUrl] = useState("https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"); // State to store the image URL

    const handleDelete = () => {
        setDataUrl('')
        setImageUrl('');
    };



    const img = [
        "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    ]
    const { data, isSuccess } = useGetAll({
        key: `/admin-dashboard/campaign/${id}`,
        enabled: true,
        select: (data) => {
            return data.data.data;
        },
        onSuccess: (data) => {
            setUser(data);
            const imageUrl = `${process.env.REACT_APP_BE_BASE_URL}${data?.campaign_image || ""}`;
            setImageUrl(imageUrl);
            setDataUrl(imageUrl)
        },
    });
    console.log(imageUrl)

    useGetAll({
        key: `/admin-dashboard/category?page=1&limit=10`,
        enabled: true,
        select: (data) => {
            console.log(data.data.rows);
            return data?.data?.rows;
        },
        onSuccess: (data) => {
            setCategory(data);
        },
    });

    const { mutate } = useCreateOrUpdate({
        url: `/admin-dashboard/campaign/${id}`,
        method: "put",
    })


    const initial_values = {
        campaign_image:user.campaign_image || "",
        title: user.title || "",
        amount: user.goal_amount || "",
        location: user.location || "",
        category: user?.category?.name ,
        is_featured: user?.is_featured || false,
        summary: user?.summary || "",
        zakat_eligible: user?.zakat_eligible || false,
        end_date: user?.end_date || "",
        status: user?.status || "",
        story: user?.story || "",
        doc1 : user?.documents?.doc_file || "",
    };

    if (!isSuccess) {
        return <div>Loading...</div>;
    }

    const handleSubmit = (values)=>{

        console.log(values,",========valllllele",imageUrl)
        const formData = new FormData();
        formData.append('campaign_image', values?.campaign_image)
        formData.append('title' , values?.title)
        formData.append('amount' , values?.amount)
        formData.append('location' , values?.location)
        formData.append('end_date' , values?.end_date)
        formData.append('summary' , values?.summary)
        formData.append('story' , values?.story)
        formData.append('category' , values?.category)
        mutate(formData, {
            onSuccess: () => {
                toast.success("Cause updated Succcessfully ! ",{
                    position:'top-right'
                })
            },
        });
        // console.log(formData);
    }

    return (
        <Formik
            initialValues={initial_values}
            enableReinitialize={true}
            onSubmit={(values) => {
               handleSubmit(values)
            }}

        >
            {({ values, setFieldValue, handleChange }) => (

                <Form className='flex flex-col items-center'>
                    <div className="flex w-[100%] mt-2 gap-14 max-tablet:flex-col max-desktop:flex-col">
                        <div className="flex flex-col w-[70%] max-tablet:w-[100%] max-desktop:w-[100%] gap-10 items-center">
                            <ImageBackgroundWithDeleteButton 
                            name = {'campaign_image'}
                            imgUrl={dataUrl} 
                            onChange={(e) =>{
                                const newImage = e.target.files[0];
                                console.log(e.target.files,'targete filelslslslssl')
                                setDataUrl(URL.createObjectURL(newImage));  // Display the new image preview
                                setFieldValue('campaign_image', newImage);  // Set the new image in Formik values
                                setImageUrl(newImage);  // Optionally, set the new image for other purposes
                            }}
                            
                             setDataUrl={setDataUrl}
                              onDelete={handleDelete}
                              multiple={false} />
                            <div className="w-full">

                                <InputField
                                    value={values?.title}
                                    onChange={handleChange}
                                    sx={InputStyle}
                                    name={"title"}
                                    label={"Title of Campaign:"} required={"true"} placeholder={"Minimum 50 INR"} />
                            </div>
                            <SelectField
                                name={"category"}
                                required={true}
                                label="Choose a Category:"
                                value={values?.category}
                                options={Category.map((item) => ({
                                    label: item.name,
                                    value: item.id,
                                }))}
                            />
                            <div className="w-full">
                                <InputField type={'number'} onChange={handleChange} value={values?.amount} sx={InputStyle} name={"amount"} label={"Amount to be raised:"} placeholder={"Minimum 50 INR"} />
                            </div>

                            <div className="w-full">
                                <InputField sx={InputStyle} onChange={handleChange} value={values?.location} name={"location"} label={"Location:"} />
                            </div>
                            <div className="w-full">
                                <FormLabel
                                    className="font-medium d-flex align-items-center desktop:text-[20px] max-desktop:text-[16px]"
                                    style={{
                                        padding: '4px 8px 8px 8px',
                                        color: colors.text.main,
                                        fontWeight: 700,
                                        fontFamily: 'satoshi',
                                        fontStyle: 'normal',
                                        fontSize: '18px',
                                    }}
                                >
                                    About the Campaign:
                                    <span className="text-red-600">*</span>
                                </FormLabel>

                                <div className="h-[332px] summary-div">
                                    <ReactQuilTextField
                                        theme="snow"
                                        name='story'
                                        value={values?.story}
                                        onChange={(value) => setFieldValue('story', value)}
                                    />
                                </div>
                            </div>

                            <div className="w-full mt-5">
                                <InputField onChange={handleChange} value={values?.summary} name={'summary'} label={"Summary"} required={"true"}
                                    multiline
                                    info
                                    CustomInfoIcon={
                                        <ErrorIcon
                                            className="ms-1"
                                            style={{
                                                color: "red",
                                                cursor: "pointer",
                                                height: "18px",
                                            }}
                                        />
                                    }
                                    infoText={"Please be careful while adding AD Path."}
                                    rows={5}
                                    placeholder="Placeholder text"
                                    sx={{
                                        padding: '20px', border: "1px solid #e2e2e2",
                                        // },
                                        "&:focus-within": {
                                            boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
                                            borderColor: "black",
                                        }, "& input": { height: '100px' }
                                    }} />
                            </div>


                            <div className="w-full flex flex-col">
                                <FormLabel
                                    className="font-medium d-flex align-items-center desktop:text-[20px] max-desktop:text-[16px]"
                                    style={{
                                        padding: '4px 8px 16px 8px',
                                        color: colors.text.main,
                                        fontWeight: 700,
                                        fontFamily: 'satoshi',
                                        fontStyle: 'normal',
                                        height: '22px',
                                    }}
                                >
                                    Attachments:
                                    <span className="text-red-600">*</span>
                                </FormLabel>


                                <div className="flex gap-4">

                                    {img.map((imageUrl, index) => (
                                        <Attachments key={index} imageUrl={imageUrl} />
                                    ))}

                                </div>

                            </div>


                            <div className="flex max-tablet:flex-col  w-[100%] gap-4">
                                <div className="w-[50%] max-tablet:w-full pt-1.5">
                                    <InputField
                                        value={values?.end_date}
                                        type={"date"}
                                        sx={InputStyleDate}
                                        name={"end_date"} label={"Accept Donations until (Select end date):"}
                                        placeholder={"Minimum 50 INR"} />
                                </div>

                                <div className='w-[50%] max-tablet:w-full document-upload-div'>

                                    <UploadField
                                        label="Upload Attachment:"
                                        onDocumentUpload={handleDocumentUpload}
                                        name="document"
                                        placeholder="Upload marksheets, Medical records, Fees Structure etc."
                                        sx={{ padding: '20px' }}
                                        multiple={false}
                                        onChange={(value) => setFieldValue('document', value)}

                                    />
                                </div>
                            </div>


                            <div className="flex w-[100%] max-tablet:flex-col gap-4">
                                <div className="w-[50%] max-tablet:w-full">
                                    <SelectField
                                        value={values?.status}
                                        name={"status"}
                                        label={"Status:"}
                                        placeholder={"Minimum 50 INR"}
                                        options={
                                            [{ label: "Pending", value: 'Pending' },
                                            { label: "Active", value: 'Active' },
                                            ]}
                                    />
                                </div>

                                <div className="w-[50%] checkmark-div max-desktop:w-[46%] max-tablet:w-[100%]">
                                    <FormLabel className="text-capitalize mb-4 font-medium d-flex align-items-center" style={{ padding: "4px 8px 8px 8px", color: colors.text.main, fontSize: "20px", fontWeight: 700, fontFamily: "satoshi", fontStyle: "normal", height: "22px" }}>
                                        Is the Campaign Zakaat eligible?<span className="text-red-600">*</span>
                                    </FormLabel>
                                    <CheckBox
                                        sx={{
                                            paddingLeft: '15px', "&.Mui-checked": {
                                                color: red[500],
                                            },
                                        }}
                                        name="zakat_eligible"
                                        value={values?.zakat_eligible}
                                        label={'Yes'}

                                    />
                                </div>


                            </div>
                            <div className="w-full ">
                                <InputField onChange={handleChange} name={'Notes/Comments:'} label={"Notes/Comments:"} required={"true"}
                                    multiline
                                    rows={5}
                                    sx={{
                                        padding: '20px', border: "1px solid #e2e2e2",
                                        "&:focus-within": {
                                            boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
                                            borderColor: "black",
                                        }, "& input": { height: '100px' }
                                    }} />
                            </div>

                            <div className=" w-full ">
                                <RadioGroup
                                    name={"is_featured"}
                                    type='radio'
                                    sx={{ flexDirection: 'column' }}
                                    options={[
                                        { label: "On", value: true },
                                        { label: "Off", value: false },
                                    ]}
                                    label="Featured:"
                                    style={{ fontSize: '18px', fontWeight: 500 }}
                                // onChange={onChange}

                                />
                            </div>
                        </div>
                        <div className="w-[30%] max-tablet:w-[100%] max-desktop:w-[100%] flex flex-col max-desktop:items-center  gap-8">
                            <div className=" w-[100%] max-desktop:w-[100%]">
                                <ImageEditor
                                    sx={{ maxWidth: '400px', minHeight: '600px' }}
                                    dataUrl={dataUrl}
                                />
                                {/* {console.log(values?.cpg_image)} */}
                            </div>
                            <Link to={"Revision-History"}
                            // state={id}
                            >
                                <PrimaryButton sx={{ borderRadius: '12px', width: '90%' }}>
                                    <h1 className='text-white font-medium py-2.5 text-[18px] font-[satoshi]'>View Revision History</h1>

                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>



                    <div className="flex gap-3 max-tablet:flex-col  max-tablet:items-center pt-5">
                        <button onClick={() => navigate(-1)} className='w-[69px] content-stretch h-[32px] bg-[#F7F7F7]'>
                            <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
                        </button>
                        <SuccessButton type='submit' text={"Save & Approve"} icon={<PiCheckFat className='w-4 h-4 mt-1' />} />
                        <PrimaryButton   >
                            <h1 className='text-white font-semibold font-[satoshi]'>Reject Modification Request</h1>
                        </PrimaryButton>

                    </div>
                </Form>
            )
            }

        </Formik >
    )
}

export default CauseEdit_Form
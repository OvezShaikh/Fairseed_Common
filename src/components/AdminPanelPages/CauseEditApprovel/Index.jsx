import React, { useEffect, useState } from 'react'
import InputField from '../../inputs/InputField/index'
import SelectField from "../../inputs/SelectField/index"
import PrimaryButton from '../../inputs/PrimaryButton'
import CheckBox from '../../inputs/checkBox'
import { FormLabel } from '@mui/material'
import { colors } from '../../../constants/theme'
import { Formik, Form, Field } from 'formik'
import images from '../../../constants/images'
import ReactQuilTextField from '../../inputs/ReactQuilTextField/Index'
import { RiDeleteBin6Line } from "react-icons/ri";
import SuccessButton from '../../inputs/SuccessButton/Index'
import { PiCheckFat } from "react-icons/pi";
import { pink, red } from "@mui/material/colors";
import UploadField from '../../inputs/UploadField/Index'
import RadioGroup from '../../inputs/radioGroup/index'
import ErrorIcon from "@mui/icons-material/Error";
import { height } from '@mui/system'
import { useCreateOrUpdate, useGetAll } from '../../../Hooks'
import ImageCropper from '../../inputs/Cropper/ImageCropper'
import ImagePreviewDialog from '../../inputs/Cropper/ImagePreview'


const InputStyle = {
  padding: '20px',
  border: "1px solid #e2e2e2",
  "&:focus-within": {
    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15)`,
    borderColor: "black",
  },
}

const InputStyleDate = {
  padding: '12px',
  border: "1px solid #e2e2e2",
  "&:focus-within": {
    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15)`,
    borderColor: "black",
  },
}

const CauseEdit = () => {
  const [user, setUser] = useState({})
  const [ OpenCrop, setOpenCrop ] = useState(false);
  const [srcImg , setSrcImg]= useState("")
  const [category, setCategory] = useState([]);

  const { data, isSuccess } = useGetAll({
    key: `/admin-dashboard/campaign/16399639-ba2c-44e4-94a6-294e11cb06a3
    `,
    enabled: true,
    select: (data) => {
      console.log(data.data.data);
      return data.data.data;
    },
    onSuccess: (data) => {
      setUser(data);
      
    },
  });
  console.log(user);

  const { catdata } = useGetAll({
    key: `/campaign/campaign-category?page=1&limit=20`,
    enabled: true,
    select: (data) => {
      console.log(data.data.rows);
      return data.data.rows;
    },
    onSuccess: (data) => {
      setCategory(data);
      
    },
  });

  const initial_values = {
    title: user.title || "",
    amount: user.goal_amount || "",
    location: user.location || "",
    summary: user.summary || "",
    status: user.status || "",
    image:user.campaign_image||"",
    init_category:user?.category?.name||""
  };

  if (!isSuccess) {
    return <div>Loading...</div>;
  }
  console.log(initial_values);

  return (
    <Formik
      initialValues={initial_values}
      enableReinitialize={true}
    >
      {({values})=> (

      <Form className='flex flex-col items-center'>
        <div className="flex w-[100%] mt-2 gap-14">
          <div className="flex flex-col w-[70%] gap-10 items-center">
            {/* <ImageCropper
             srcImg={srcImg}
             setOpenCrop={setOpenCrop}
             setsrcImg={setSrcImg}
            />
            <ImagePreviewDialog  srcImg={srcImg}/> */}
            <img value={values?.image} width={40} height={40}/>
            <div className="w-full">
              <InputField value={values?.title} sx={InputStyle} name={"Title of Campaign:"} label={"Title of Campaign:"} required={"true"} placeholder={"Minimum 50 INR"} />
            </div>
            <SelectField
                    name="category"
                    required={true}
                    label="Choose a Category:"
                    value={values?.init_category}

                    // onChange={Formik.value.category}
                    options={category.map((item) => ({
                        label: item.name,
                        value: item.id,
                    }))}

                />
            <div className="w-full">
              <InputField value={values?.amount} sx={InputStyle} name={"Amount to be raised:"} label={"Amount to be raised:"} placeholder={"Minimum 50 INR"} />
            </div>
            <SelectField value={values?.location} name={"Location:"} label={"Location:"} />

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
                  name='summary'
                  value={values?.summary}
                />
              </div>
            </div>
            {/* Add other form fields here... */}
          </div>
          <div className="w-[30%] flex flex-col items-center gap-8">
            <div className="max-w-[400px] w-full min-h-[600px] bg-[#F7FAFF]" style={{ border: "2px dashed blue", borderRadius: '12px' }}>
            </div>
            <div className="">
              <PrimaryButton sx={{ borderRadius: '12px' }}>
                <h1 className='text-white font-medium py-2.5 text-[18px]  px-16 font-[satoshi]'>View Revision History</h1>
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="flex gap-3 pt-5">
          <button onClick={() => { }} className='w-[69px] content-stretch h-[32px] bg-[#F7F7F7]'>
            <h1 className='text-[#000000] font-medium text-[14px] font-[satoshi]'>Cancel</h1>
          </button>
          <SuccessButton onClick={() => { }} text={"Save & Approve"} icon={<PiCheckFat className='w-4 h-4 mt-1' />} />
          <PrimaryButton onClick={() => { }}  >
            <h1 className='text-white font-semibold font-[satoshi]'>Reject Modification Request</h1>
          </PrimaryButton>
        </div>
      </Form>
            )}
    </Formik>
  )
}

export default CauseEdit;

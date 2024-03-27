import React, { useEffect, useRef, useState } from 'react'
import { Formik, Form } from 'formik';
import InputField from '../../inputs/InputField';
import CountrySelect from '../../inputs/countrySelect/index';
import { useCreateOrUpdate, useGetAll } from '../../../Hooks';
import { toast } from 'react-toastify';
import PrimaryButton from '../../inputs/PrimaryButton';
import ProfilePicDropZone from '../../inputs/ImageCropper/ProfilePicDropZone';
import { ImageCropper } from '../../inputs/ImageCropper/ImageCropper';
import { ImagePreviewDialog } from '../../inputs/PreviewImage/PreviewImage';



const InputStyle =
{
  padding: '20px', border: "1px solid #e2e2e2",
  // },
  "&:focus-within": {
    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
    borderColor: "black",
  },

}
const SelectStyle =
{
  padding: '0px', border: "none",
  "&:focus-within": {
    boxShadow: `none`,
    borderColor: "none",
  },

}

let userData = localStorage.getItem('user_info')
let Data = JSON.parse(userData)
let id = Data?.id;



const Account = () => {
  const [Details, setDetails] = useState({})
  const [srcImg, setSrcImg] = useState("");
  const [openCrop, setOpenCrop] = useState(false);

  useGetAll({
    key: `/accounts/user/${id}`,
    enabled: true,
    select: (data) => {
      return data?.data?.data;
    },
    onSuccess: (data) => {
      setDetails(data);
    },
  })


  
  useEffect(() => {
    const img = `${process.env.REACT_APP_BASE_URL}` + Details?.profile_pic;
    setSrcImg(img);
  })

  const initial_values = {
    username: Details?.username || '',
    email: Details?.email || '',
    mobile_number: Details?.mobile_number || '',
    country: Details?.country || '',
    image: srcImg  || ''
  }

  const { mutate } = useCreateOrUpdate({
    url: `/accounts/user/${id}`,
    method: 'put'
  })

  const onChange = (e) => {
    let files;

    if (e) {
      files = e;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setSrcImg(reader.result);
    };
    reader.readAsDataURL(files[0]);
    setOpenCrop(true);
  };

  const handleSubmit = (values) =>{
    const formData = new FormData();
    formData.append('username' , values?.username)
    formData.append('email' , values?.email)
    formData.append('mobile_number' , values?.mobile_number)
    formData.append('country' , values?.country)
    formData.append('image' , values?.image)

      mutate(formData, {
        onSuccess: () => {
          toast.success(" Details Updated Successfully !", {
            position: 'top-right'
          })
        }
      })
  }

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initial_values}
      onSubmit={(values)=>handleSubmit(values)}
    >

      {({ values, handleChange }) => (
        <Form>
         <ProfilePicDropZone
                  name="image"
                  onChange={onChange}
                  initialPreview={srcImg}
                />

                {openCrop && (
                  <>
                    <ImageCropper
                      srcImg={srcImg}
                      setOpenCrop={setOpenCrop}
                      setsrcImg={setSrcImg}
                    />
                  </>
                )}

                {srcImg && <ImagePreviewDialog croppedImage={srcImg} />}

          <InputField
            onChange={handleChange}
            value={values?.username}
            name={"username"}
            label={"Full Name:"}
            sx={InputStyle}
          />
          <InputField
            onChange={handleChange}
            value={values?.email}
            name={"email"}
            label={"Email Id:"}
            sx={InputStyle}
          />
          <InputField
            onChange={handleChange}
            value={values?.mobile_number}
            name={"mobile_number"}
            type='number'
            label={"Mobile:"}
            placeholder={"(Optional)"}
            sx={InputStyle}
          />
          <div className='country-select-div'>
            <CountrySelect
              onChange={handleChange}
              value={values?.country}
              label="Country:"
              name={"country"}
              sx={SelectStyle}
            />
          </div>
          <div className="mx-auto flex justify-center">
            <PrimaryButton type='submit' className="mx-auto">Save Changes</PrimaryButton>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Account
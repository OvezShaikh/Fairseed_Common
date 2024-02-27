import React from 'react'
import * as Yup from 'yup'; // Import Yup for validation
import PrimaryButton from '../../../inputs/PrimaryButton';
import InputAdminField from '../../../inputs/InputAdminField/Index'
import { Form, Formik } from 'formik';
import { useCreateOrUpdate } from '../../../../Hooks';
import { toast } from 'react-toastify';



const initialValues = {
  instagram_url: "",
  facebook_url: "",
  twitter_url: "",
};
const validationSchema = Yup.object().shape({
  instagram_url: Yup.string().url('Invalid Instagram URL'),
  facebook_url: Yup.string().url('Invalid Facebook URL'),
  twitter_url: Yup.string().url('Invalid Twitter URL'),
});


const ProfilesSocial = () => {
  const { mutate } = useCreateOrUpdate({
    url: '/admin-dashboard/social-media'
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await mutate(values, {
        onSuccess: (response) => {
          console.log(response);
          toast.success("Form submitted successfully");
          resetForm(); // Optional: Reset the form after successful submission
        }
      });
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className='flex flex-col flex-wrap justify-center items-center'>
        <div className="flex  gap-4 w-full mb-24">
          <div className="flex w-full flex-col">
            <InputAdminField label={"Facebook"} name={"facebook_url"} placeholder={"Placeholder text"} />

          </div>
          <div className="flex w-full flex-col">
            <InputAdminField label={"Twitter"} name={"twitter_url"} placeholder={"Placeholder text"} />

          </div>
          <div className="flex w-full  flex-col">
            <InputAdminField label={"Instagram"} name={"instagram_url"} placeholder={"Placeholder text"} />

          </div>
        </div>
        <PrimaryButton type='submit'>
          <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
        </PrimaryButton>
      </Form>
    </Formik>
  );
};

export default ProfilesSocial;
import React from "react";
import FormLabel from "@mui/joy/FormLabel";
import InputAdminField from "../../../inputs/InputAdminField/Index"
import RadioGroup from "../../../inputs/radioGroupAdminPanel/index";
import PrimaryButton from '../../../inputs/PrimaryButton'
import ReactQuilTextField from '../../../inputs/ReactQuilTextField/Index.jsx'
import { Form, Formik, useFormikContext, values } from "formik";
import { useCreateOrUpdate } from "../../../../Hooks/useCreateOrUpdate.js";
import { toast } from "react-toastify";

const styleLabel = {
  fontFamily: "satoshi",
  fontSize: 16,
  fontWeight: 700,
  color: "#383A42",
};
const styleInput = {
  color: "#B6BAC3",
  fontSize: 16,
  fontFamily: "Satoshi ",
  fontWeight: "500",
};

const initialValues = {
  namesite: "",
  welcome_subtitle: "",
  welcome_text: "welcome text",
  description: "",
  email_admin: "",
  tandc_url: "",
  email_no_reply: "",
  keywords_data: "",
  privacy_policy_url: "",
  date_time: "",
  new_registration_enabled: false,
  auto_approve_enabled: false,
  email_verification_enabled: false,
  facebook_login_enabled: false,
  google_login_enabled: false,
}

function General() {
    



  const { mutate } = useCreateOrUpdate({
    url:`/admin-dashboard/gs`
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        mutate(values, {
          onSuccess: () => {
           toast.success("Prefernces Saved Successfully !",{
            position: "top-center",
           })
          },
          onError:(response)=>{
            toast.error("Could Not Save Preferences !",{
              position: "top-center",
            })
          }
        });
      }}
    >
      {({values ,setFieldValue })=>(
     
      <Form>
        <div className="flex flex-wrap justify-between">
          <div className="w-[24%] ">
            <InputAdminField label={'Name Site'} name={"namesite"} placeholder={'Placeholder Text'} />

          </div>
          <div className="w-[24%] ">
            <InputAdminField label={'Welcome Subtitle '} name={"welcome_subtitle"} placeholder={'Placeholder Text'} />
          </div>
          <div className="w-[24%] ">
            <InputAdminField label={'Keywords'} name={"keywords_data"} placeholder={'Add Tag'} />

          </div>
          <div className="w-[24%] ">
            <InputAdminField label={'Email No-reply'} name={"email_no_reply"} placeholder={'Placeholder Text'} />
          </div>
        </div >
        <div className="pt-7 mb-5 h-[200px]">
          <FormLabel style={styleLabel}>Description</FormLabel>
          {/* <TextEditor  /> */}
          <ReactQuilTextField
            theme={"snow"}
            name={'description'}
            value={values.description}
            placeholder="Summarize in 100 words max."
            style={{ '& .ql-editor': { minHeight: '50px' } }}
          onChange={(value) => setFieldValue('description', value)}
          />
        </div>
        <div className="flex gap-4 pt-8">
          <div className="w-[25%] ">
            <InputAdminField label={'Email Admin'} name={"email_admin"} placeholder={'Placeholder Text'} />

          </div>
          <div className="w-[25%] ">
            <InputAdminField label={'Link to terms and conditions'} name={"tandc_url"} placeholder={'Placeholder Text'} />
          </div>
          <div className="w-[25%] ">
            <InputAdminField label={'Link to privacy policy'} name={"privacy_policy_url"} placeholder={'Placeholder Text'} />
          </div>
          <div className="w-[25%] ">
            <InputAdminField
              label={"Date Format"}
              size="lg"
              type="date"
              name={"date_time"}
              style={styleInput}
              slotProps={{
                input: {
                  min: "2000-01-01",
                  max: "2024-01-01",
                },
              }}
            />
          </div>
        </div>
        <div className="flex gap-32 pt-8">
          <div className="  lg:w-[25%] ">
            <RadioGroup
              name={"new_registration_enabled"}
              options={[
                { label: "On", value: true },
                { label: "Off", value:false },
              ]}
              label="New Registrations"
            // onChange={onChange}
            />
          </div>
          <div className="lg:w-[25%]">
            <RadioGroup
              name={"auto_approve_enabled"}
              options={[
                { label: "On", value: true },
                { label: "Off", value: false },
              ]}
              label="Auto Approve Causes"
            // onChange={onChange}
            />
          </div>
          <div className=" lg:w-[25%] ">
            <RadioGroup
              name={"facebook_login_enabled"}
              options={[
                { label: "On", value:true },
                { label: "Off", value: false },
              ]}
              label="Facebook Login"
            // onChange={onChange}
            />
          </div>
          <div className=" lg:w-[25%]  ">
            <RadioGroup
              name={"google_login_enabled"}
              options={[
                { label: "On", value: true },
                { label: "Off", value: false },
              ]}
              label="Google Login"
            // onChange={onChange}
            />
          </div>
        </div>
        <div className="flex gap-32 pt-7">

          <div className=" lg:w-[25%] ">
            <RadioGroup
              name={"New5"}
              options={[
                { label: "On", value: true },
                { label: "Off", value: false },
              ]}
              label="Captcha"
            // onChange={onChange}
            />
          </div>
          <div className=" lg:w-[25%] ">
            <RadioGroup
              name={"email_verification_enabled"}
              options={[
                { label: "On", value: true },
                { label: "Off", value: false },
              ]}
              label="Email Verifications"
            // onChange={onChange}
            />
          </div>
          
         

        </div>
        <div className="flex justify-center items-center pt-8 ">
          <PrimaryButton  type="submit">
            <h1 className='text-white font-semibold font-[satoshi]' >Save</h1>
          </PrimaryButton>
        </div>
      </Form>
       )}
    </Formik>
  );
}

export default General;

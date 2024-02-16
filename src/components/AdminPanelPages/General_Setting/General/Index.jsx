import React from "react";
import FormLabel from "@mui/joy/FormLabel";
import TextEditor from "./TextEditor";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import axios from "axios";
import serverAPI from "../../../../config/serverAPI";
import { toast } from "react-toastify";
import InputAdminField from "../../../inputs/InputAdminField/Index"
import RadioGroup from "../../../inputs/radioGroupAdminPanel/index";
import PrimaryButton from '../../../inputs/PrimaryButton'
import ReactQuilTextField from '../../../inputs/ReactQuilTextField/Index.jsx'
import { Form, Formik, useFormikContext, values } from "formik";
import { useCreateOrUpdate } from "../../../../Hooks/useCreateOrUpdate.js";

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

function General() {
    



  const initialValues = {
    name: "",
    welcome: "",
    keyword: "",
    email: "",
    summary: "",
    email_admin: "",
    link: "",
    link_privacy: "",
    date_time: "",
    New1: "",
    New2: "",
    New3: "",
    New4: "",
    New5: "",
    New6: "",
    New7: "",
    New8: "",
  }
  const { mutate } = useCreateOrUpdate({
    url:`/admin-dashboard/gs`
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values)=>{
        mutate(values,{
          onSuccess:(data)=>{
            console.log(data);
          }
        })
      }}
    >
      <Form>
        <div className="flex flex-wrap  justify-between">
          <div className="w-[24%] ">
            <InputAdminField label={'Name Site'} name={"name"} placeholder={'Placeholder Text'} />

          </div>
          <div className="w-[24%] ">
            <InputAdminField label={'Welcome Subtitle '} name={"welcome"} placeholder={'Placeholder Text'} />
          </div>
          <div className="w-[24%] ">
            <InputAdminField label={'Keywords'} name={"keyword"} placeholder={'Add Tag'} />

          </div>
          <div className="w-[24%] ">
            <InputAdminField label={'Email No-reply'} name={"email"} placeholder={'Placeholder Text'} />
          </div>
        </div >
        <div className="pt-7 mb-5 h-[200px]">
          <FormLabel style={styleLabel}>Description</FormLabel>
          {/* <TextEditor  /> */}
          <ReactQuilTextField
            theme="snow"
            name='summary'
            // value={values.summary}
            placeholder="Summarize in 100 words max."
            style={{ '& .ql-editor': { minHeight: '50px' } }}
          // onChange={(value) => setFieldValue('summary', value)}
          />
        </div>
        <div className="flex gap-4 pt-8">
          <div className="w-[25%] ">
            <InputAdminField label={'Email Admin'} name={"email_admin"} placeholder={'Placeholder Text'} />

          </div>
          <div className="w-[25%] ">
            <InputAdminField label={'Link to terms and conditions'} name={"link"} placeholder={'Placeholder Text'} />
          </div>
          <div className="w-[25%] ">
            <InputAdminField label={'Link to privacy policy'} name={"link_privacy"} placeholder={'Placeholder Text'} />
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
              name={"New1"}
              options={[
                { label: "On", value: "On" },
                { label: "Off", value: "Off" },
              ]}
              label="New Registrations"
            // onChange={onChange}
            />
          </div>
          <div className="lg:w-[25%]">
            <RadioGroup
              name={"New2"}
              options={[
                { label: "On", value: "On" },
                { label: "Off", value: "Off" },
              ]}
              label="Auto Approve Causes"
            // onChange={onChange}
            />
          </div>
          <div className=" lg:w-[25%] ">
            <RadioGroup
              name={"New3"}
              options={[
                { label: "On", value: "On" },
                { label: "Off", value: "Off" },
              ]}
              label="Facebook Login"
            // onChange={onChange}
            />
          </div>
          <div className=" lg:w-[25%]  ">
            <RadioGroup
              name={"New4"}
              options={[
                { label: "On", value: "On" },
                { label: "Off", value: "Off" },
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
                { label: "On", value: "On" },
                { label: "Off", value: "Off" },
              ]}
              label="Captcha"
            // onChange={onChange}
            />
          </div>
          <div className=" lg:w-[25%] ">
            <RadioGroup
              name={"New6"}
              options={[
                { label: "On", value: "On" },
                { label: "Off", value: "Off" },
              ]}
              label="Email Verifications"
            // onChange={onChange}
            />
          </div>
          <div className=" lg:w-[25%]  ">
            <RadioGroup
              name={"New7"}
              options={[
                { label: "On", value: "On" },
                { label: "Off", value: "Off" },
              ]}
              label="Input Field Title"
            // onChange={onChange}
            />
          </div>
          <div className=" lg:w-[25%] ">
            <RadioGroup
              name={"New8"}
              options={[
                { label: "On", value: "On" },
                { label: "Off", value: "Off" },
              ]}
              label="Input Field Title"
            // onChange={onChange}
            />
          </div>

        </div>
        <div className="flex justify-center items-center pt-8 ">
          <PrimaryButton >
            <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
          </PrimaryButton>
        </div>
      </Form>
    </Formik>
  );
}

export default General;

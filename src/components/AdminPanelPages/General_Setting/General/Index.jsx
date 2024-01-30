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

  const [valueText, setValueText] = useState('');
  
  const [value, setValue] = React.useState('off');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const data = { id: '', title: '', body: '', userId: '' };

  const [inputData, setInputData] = useState(data)

  const handleData = (e) => {

    setInputData({ ...inputData, [e.target.name]: e.target.value })

  }
  const handleSubmit = (e) => {
    // e.preventDefault();
    axios.post('https://dummyjson.com/products/add', inputData)
      .then((response) => {
        console.log(response.data)
      }).then(() => {
        setInputData(data)
      })

    toast('data has been send');
  }

  return (
    <>
      <div className="flex flex-wrap  justify-between">
        <div className="w-[24%] ">
          <InputAdminField label={'Name Site'} placeholder={'Placeholder Text'} />

        </div>
        <div className="w-[24%] ">
          <InputAdminField label={'Welcome Subtitle '} placeholder={'Placeholder Text'} />
        </div>
        <div className="w-[24%] ">
          <InputAdminField label={'Keywords'} placeholder={'Add Tag'} />

        </div>
        <div className="w-[24%] ">
          <InputAdminField label={'Email No-reply'} placeholder={'Placeholder Text'} />
        </div>
      </div >
      <div className="pt-7 mb-5 h-[200px]">
        <FormLabel style={styleLabel}>Description</FormLabel>
        {/* <TextEditor  /> */}
        <ReactQuill theme="snow" value={valueText} style={{ borderRadius: '20px' }} onChange={setValueText} />
      </div>
      <div className="flex gap-4 pt-8">
        <div className="w-[25%] ">
          <InputAdminField label={'Email Admin'} placeholder={'Placeholder Text'} />

        </div>
        <div className="w-[25%] ">
          <InputAdminField label={'Link to terms and conditions'} placeholder={'Placeholder Text'} />
        </div>
        <div className="w-[25%] ">
          <InputAdminField label={'Link to privacy policy'} placeholder={'Placeholder Text'} />
        </div>
        <div className="w-[25%] ">
          <InputAdminField
            label={"Date Format"}
            size="lg"
            type="date"
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
            value={value}
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
            value={value}
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
            value={value}
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
            value={value}
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
            value={value}
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
            value={value}
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
            value={value}
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
            value={value}
          />
        </div>

      </div>
      <div className="flex justify-center items-center pt-8 ">
        <PrimaryButton >
          <h1 className='text-white font-semibold font-[satoshi]'>Save</h1>
        </PrimaryButton>      </div>
    </>
  );
}

export default General;

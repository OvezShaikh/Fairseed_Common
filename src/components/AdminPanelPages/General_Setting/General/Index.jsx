import React from "react";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import TextEditor from "./TextEditor";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import axios from "axios";
import serverAPI from "../../../../config/serverAPI";
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
        <FormControl className="w-[24%] ">
          <FormLabel style={styleLabel}>Name Site</FormLabel>
          <Input size="lg" style={styleInput} name="id" value={inputData.id} onChange={handleData} placeholder="Placeholder Text" />
        </FormControl>
        <FormControl className="w-[24%] ">
          <FormLabel style={styleLabel}>Welcome Subtitle</FormLabel>
          <Input size="lg" style={styleInput} name="title" value={inputData.title} onChange={handleData} placeholder="Placeholder" />
        </FormControl>
        <FormControl className="w-[24%] ">
          <FormLabel style={styleLabel}>Keywords</FormLabel>
          <Input size="lg" style={styleInput} name="body" value={inputData.body} onChange={handleData} placeholder="Placeholder" />
        </FormControl>
        <FormControl className="w-[24%] ">
          <FormLabel style={styleLabel}>Email No-reply</FormLabel>
          <Input size="lg" style={styleInput} name="userId" value={inputData.userId} onChange={handleData} placeholder="Placeholder" />
        </FormControl>
      </div>
      <FormControl className="pt-7">
        <FormLabel style={styleLabel}>Description</FormLabel>
        {/* <TextEditor  /> */}
        <ReactQuill theme="snow" value={valueText} style={{ borderRadius: '20px' }} onChange={setValueText} />
      </FormControl>
      <div className="flex gap-4 pt-8">
        <FormControl className="w-[25%] ">
          <FormLabel style={styleLabel}>Email Admin</FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder Text" />
        </FormControl>
        <FormControl className="w-[25%] ">
          <FormLabel style={styleLabel}>Link to terms and conditions</FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder" />
        </FormControl>
        <FormControl className="w-[25%] ">
          <FormLabel style={styleLabel}>Link to privacy policy</FormLabel>
          <Input size="lg" style={styleInput} placeholder="Placeholder" />
        </FormControl>
        <FormControl className="w-[25%] ">
          <FormLabel style={styleLabel}>Date Format</FormLabel>
          <Input
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
        </FormControl>
      </div>
      <div className="flex gap-32 pt-8">
        <FormControl className="col-span-4 lg:w-[25%] ">
          <FormLabel style={styleLabel}>New Registrations</FormLabel>
          <RadioGroup
            defaultValue="on"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="on" label="On" />
            <Radio value="off" label="Off" />
          </RadioGroup>
        </FormControl>
        <FormControl className="col-span-4 lg:w-[25%] ">
          <FormLabel style={styleLabel}>Auto Approve Causes</FormLabel>
          <RadioGroup
            defaultValue="on"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="on" label="On" />
            <Radio value="off" label="Off" />
          </RadioGroup>
        </FormControl>
        <FormControl className="col-span-4 lg:w-[25%] ">
          <FormLabel style={styleLabel}>Facebook Login</FormLabel>
          <RadioGroup
            defaultValue="on"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="on" label="On" />
            <Radio value="off" label="Off" />
          </RadioGroup>
        </FormControl>
        <FormControl className="col-span-4 lg:w-[25%]  ">
          <FormLabel style={styleLabel}>Google Login</FormLabel>
          <RadioGroup
            defaultValue="on"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="on" label="On" />
            <Radio value="off" label="Off" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="flex gap-32 pt-7">

        <FormControl className="col-span-4 lg:w-[25%] ">
          <FormLabel style={styleLabel}>Captcha</FormLabel>
          <RadioGroup
            defaultValue="on"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="on" label="On" />
            <Radio value="off" label="Off" />
          </RadioGroup>
        </FormControl>
        <FormControl className="col-span-4 lg:w-[25%] ">
          <FormLabel style={styleLabel}>Email Verifications</FormLabel>
          <RadioGroup
            defaultValue="on"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="on" label="On" />
            <Radio value="off" label="Off" />
          </RadioGroup>
        </FormControl>
        <FormControl className="col-span-4 lg:w-[25%]  ">
          <FormLabel style={styleLabel}>Input Field Title</FormLabel>
          <RadioGroup
            defaultValue="on"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="on" label="On" />
            <Radio value="off" label="Off" />
          </RadioGroup>
        </FormControl>
        <FormControl className="col-span-4 lg:w-[25%] ">
          <FormLabel style={styleLabel}>Input Field Title</FormLabel>
          <RadioGroup
            defaultValue="on"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            sx={{ my: 1 }}
          >
            <Radio value="on" label="On" />
            <Radio value="off" label="Off" />
          </RadioGroup>
        </FormControl>

      </div>
      <div className="flex justify-center items-center pt-8 ">
        <button className="px-3 rounded-lg" style={{ background: 'linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)', fontFamily: 'satoshi', color: 'white' }} onClick={handleSubmit}>Save</button>
      </div>
    </>
  );
}

export default General;

import React from 'react'
import {
  Controller,
  useFormContext,
} from "react-hook-form";
import { useState } from 'react';
import { FormLabel } from 'react-bootstrap';
import ReactQuill from "react-quill";
import { colors } from '../../../../constants/theme';
import UploadField from '../../../../components/inputs/UploadField/Index';



function YourStory() {
  const { control } = useFormContext();
  const [valueText, setValueText] = useState("");
  const [valueText2, setValueText2] = useState("");
  return (
    <div className="py-20 ">
      <Controller
        control={control}
        name="story"
        render={({ field:{onChange,value} }) => (
          <div className="pb-[8rem] ">
            <FormLabel
              className="text-capitalize font-medium d-flex align-items-center"
              style={{
                padding: "4px 8px 8px 8px",
                color: colors.text.main,
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "satoshi",
                fontStyle: "normal",
                height: "22px",
              }}
              // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
            >
              Tell us your Story:
              <span className="text-red-600">*</span>
            </FormLabel>
            <div className="h-[250px]">
              <ReactQuill
                theme="snow"
                name={"story"}
                value={value}
                placeholder={`Write a story that does justice to your cause and make the supporter click the Donate button.
                
  Pointers:Explain who you are raising it for.

  Explain why you are raising funds?
                
  Make an Appeal.`}
  onChange={onChange}
  />
            </div>
          </div>
        )}
        
      />
      <Controller
        control={control}
        name="summary"
        render={({ field:{onChange,value} }) => (
          <div className="pb-[8rem]">
            <FormLabel
              className="text-capitalize font-medium d-flex align-items-center"
              style={{
                padding: "4px 8px 8px 8px",
                color: colors.text.main,
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "satoshi",
                fontStyle: "normal",
                height: "22px",
              }}
              // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
            >
              Summary:
              <span className="text-red-600">*</span>
            </FormLabel>
            <div className="h-[119px]">
              <ReactQuill
                theme="snow"
                // name={"summary"}
                value={value}
                placeholder="Summarize in 100 words max."
                style={{ "& .ql-editor": { minHeight: "50px" } }}
                onChange={onChange}
              />
            </div>
          </div>
        )}
      />
       <Controller
      control={control}
      name="document:"
      render={({ field }) => (
        <>
          <UploadField
            label="Document:"
            name="document:"
            placeholder={
              "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
            }
            {...field}
          />
        </>
      )}
    />
    </div>
  );
};


export default YourStory

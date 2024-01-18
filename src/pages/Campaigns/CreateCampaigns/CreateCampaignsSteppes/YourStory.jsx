import React from 'react'
import {
  Controller,
  useFormContext,
} from "react-hook-form";
import InputField from '../../../../components/inputs/InputField';
import SelectField from '../../../../components/inputs/SelectField';
import UploadField from '../../../../components/inputs/UploadField/Index';
const label = { inputProps: { "aria-label": "Checkbox demo" } };


function YourStory() {
  const { control } = useFormContext();
  const [valueText, setValueText] = useState("");
  const [valueText2, setValueText2] = useState("");
  return (
    <div className="py-20 ">
      <Controller
        control={control}
        name="Story"
        render={({ field }) => (
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
                name={"Story"}
                value={valueText}
                placeholder={`Write a story that does justice to your cause and make the supporter click the Donate button.
                
  Pointers:Explain who you are raising it for.

  Explain why you are raising funds?
                
  Make an Appeal.`}
                onChange={setValueText}
              />
            </div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="Summary"
        render={({ field }) => (
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
                name={"Summary"}
                value={valueText2}
                placeholder="Summarize in 100 words max."
                style={{ "& .ql-editor": { minHeight: "50px" } }}
                onChange={setValueText2}
              />
            </div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="Documents"
        render={({ field }) => (
          <div className="flex w-full">
            <div className="w-[95%]">
              <InputField
                name={"Documents"}
                label={"Documents:"}
                placeholder={
                  "Upload marksheets, Medical records, Fees Structure etc."
                }
                {...field}
              />
            </div>
            <img className="pb-1" src={images.UploadFile} alt="" />
          </div>
        )}
      />
    </div>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <div className="py-20">
      <FormControl sx={{pb:'1.5rem'}}>
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
              Raising this Campaign for:
              <span className="text-red-600">*</span>
            </FormLabel>
      <RadioGroup
      sx={{pl:'10px'}}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel sx={{fontFamily:'satoshi',fontWeight:'700',color: '#383A42'}} value="Self" control={<Radio sx={{
          // color: red[500],
          '&.Mui-checked': {
            color: red[500],
          },
        }}/>} label="Self" />
        <FormControlLabel value="Family/Friends" control={<Radio sx={{
          // color: red[500],
          '&.Mui-checked': {
            color: red[500],
          },
        }}/>} label="Family/Friends" />
        <FormControlLabel value="Charity" control={<Radio sx={{
          // color: red[500],
          '&.Mui-checked': {
            color: red[500],
          },
        }}/>} label="Charity" />
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
      <Controller
        control={control}
        name="HolderName"
        render={({ field }) => (
          <InputField
            name={"HolderName"}
            label={"Account holder Name:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="AccountNumber"
        render={({ field }) => (
          <SelectField
            name={"AccountNumber"}
            label={"Account Number:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="BankName"
        render={({ field }) => (
          <InputField
            name={"BankName"}
            label={"Bank Name:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="BranchName"
        render={({ field }) => (
          <InputField
            name={"BranchName"}
            label={"Branch Name:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="IFSC"
        render={({ field }) => (
          <InputField
            name={"IFSC"}
            label={"IFSC:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="UploadBankPassbook/Cheque"
        render={({ field }) => (
          <>
             
            <UploadField
              label='label'
              name="UploadBankPassbook/Cheque"
              placeholder={"Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."}
              {...field}
            />
          </>
        )}
      />
    </div>
  )
}

export default YourStory

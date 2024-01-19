import React from 'react'
import {
  Controller,
  useFormContext,
} from "react-hook-form";
import InputField from '../../../../components/inputs/InputField';
import { FormLabel } from 'react-bootstrap';
import { colors } from '../../../../constants/theme';
import DropZone from '../../../../components/inputs/dragAndDrop';
import SelectField from '../../../../components/inputs/SelectField';
import CheckBox from '../../../../components/inputs/checkBox';
import Box from "@mui/material/Box";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CampaignDetails() {
  const { control } = useFormContext();

  return (
    <div className="pb-20">
      <Box className="flex py-20 justify-center items-center">
        <DropZone
          name="files"
          acceptedFiles={{ "file/*": [".xlsx"] }}
          maxFiles={1}
          // onChange={() => submitForm()}
          // isLoading={isUploadLoading}
        />
      </Box>
      <Controller
        control={control}
        name="Title"
        render={({ field }) => (
          <InputField
            name={"Title"}
            required={true}
            label={"Title of the Campaign:"}
            placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Amount"
        render={({ field }) => (
          <InputField
            name={"Amount"}
            required={true}
            label={"Amount to be raised:"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Location"
        render={({ field }) => (
          <SelectField
            required={true}
            name={"Location"}
            label={"Location:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Category"
        render={({ field }) => (
          <SelectField
          required={true}
            name={"Category"}
            label={"Choose a Category:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
     
     <div className="inline-flex w-full">
      <div className="w-[50%]">
          <Controller
            control={control}
            name="Category"
            render={({ field }) => (
              <>
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
                >
                  Is the Campaign Zakaat eligible?
                  <span className="text-red-600">*</span>
                </FormLabel>
                  
                  <CheckBox name={"test"} label={"Yes"} />
                
              </>
            )}
          />
        </div>
          
        <div className="w-[50%]">
          <Controller
            control={control}
            name="Category"
            render={({ field }) => (
              <div>
                <InputField
                  type={"date"}
                  name={"Category"}
                  label={"Choose a Category:"}
                  // placeholder={"Title of the Campaign (Max 250 Words)"}
                  {...field}
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails

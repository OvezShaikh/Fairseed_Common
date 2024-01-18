import React from 'react'
import {
  Controller,
  useFormContext,
} from "react-hook-form";
import InputField from '../../../../components/inputs/InputField';
import SelectField from '../../../../components/inputs/SelectField';
import DropZone from '../../../../components/inputs/dragAndDrop';
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
                  // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
                >
                  Is the Campaign Zakaat eligible?
                  <span className="text-red-600">*</span>
                </FormLabel>
                <div className="inline-flex justify-center items-center text-center">
                  <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                      // color: red[500],
                      "&.Mui-checked": {
                        color: red[500],
                      },
                    }}
                  />
                  <FormLabel
                    className="text-capitalize font-medium d-flex "
                    style={{
                      color: colors.text.main,
                      fontSize: "20px",
                      fontWeight: 700,
                      fontFamily: "satoshi",
                      fontStyle: "normal",
                      height: "22px",
                    }}
                    // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
                  >
                    Yes
                  </FormLabel>
                </div>
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

import React from 'react'
import {
  Controller,
  useFormContext,
} from "react-hook-form";
import InputField from '../../../../components/inputs/InputField';
import UploadField from '../../../../components/inputs/UploadField/Index';
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CompleteKYC() {
  const { control } = useFormContext();

  return (
    <div className="py-20">
    <Controller
      control={control}
      name="EnterAadharCardNumber"
      render={({ field }) => (
        <>
          <InputField
            required={true}
            name={"EnterAadharCardNumber"}
            label="Enter Aadhar Card Number:"
            type={'text'}
            placeholder={
              "xxxx xxxx xxxx"
            }
            {...field}
          />
        </>
      )}
    />
    <Controller
      control={control}
      name="UploadAadharCard(Front and Back)"
      render={({ field }) => (
        <>
          <UploadField
            name={"UploadAadharCard(Front and Back)"}
            label="Upload Aadhar Card (Front and Back):"
            placeholder={
              "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
            }
            {...field}
          />
        </>
      )}
    />

    <Controller
      control={control}
      name="EnterPANCardNumber"
      render={({ field }) => (
        <>
          <InputField
            name={"EnterPANCardNumber"}
            label={"Enter PAN Card Number:"}
            type={"password"}
            required={true}
            placeholder={
              "xxxxxxxxxxx"
            }
            {...field}
          />
        </>
      )}
    />
    <Controller
      control={control}
      name="UploadPANCard"
      render={({ field }) => (
        <>
          <UploadField
            name={"UploadPANCard"}
            label="Upload PAN Card:"
            placeholder={
              "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
            }
            {...field}
          />
        </>
      )}
    />
  </div>
  )
}

export default CompleteKYC

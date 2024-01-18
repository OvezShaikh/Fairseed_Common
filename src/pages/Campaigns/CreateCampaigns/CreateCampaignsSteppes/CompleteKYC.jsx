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
      name="UploadBankPassbook/Cheque"
      render={({ field }) => (
        <>
          <InputField
            name={"UploadBankPassbook/Cheque"}
            label="Enter Aadhar Card Number:"
            type={'password'}
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
      name="UploadBankPassbook/Cheque"
      render={({ field }) => (
        <>
          <UploadField
            name={"UploadBankPassbook/Cheque"}
            label="Upload Bank Passbook/Cheque:"
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
      name="UploadPANCard"
      render={({ field }) => (
        <>
          <InputField
            name={"UploadPANCard"}
            label={"Upload PAN Card:"}
            type={"password"}
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
      name="UploadBankPassbook/Cheque"
      render={({ field }) => (
        <>
          <UploadField
            name={"UploadBankPassbook/Cheque"}
            label="Upload Bank Passbook/Cheque:"
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

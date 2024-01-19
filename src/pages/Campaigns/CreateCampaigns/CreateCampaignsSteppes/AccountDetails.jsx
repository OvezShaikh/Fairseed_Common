import React from 'react'
import {
  Controller,
  useFormContext
} from "react-hook-form";
import InputField from '../../../../components/inputs/InputField';
import SelectField from '../../../../components/inputs/SelectField';
import UploadField from '../../../../components/inputs/UploadField/Index';
import RadioGroup from '../../../../components/inputs/radioGroup';



function AccountDetails() {
  const { control } = useFormContext();

  return (
    <div className="py-20">
      
    <Controller
      control={control}
      name="Campaign"
      render={({ field }) => (
        <RadioGroup
          name={"Campaign"}
          options={[
            { label: "Self", value: "Self" },
            { label: "Family/Friends", value: "Family/Friends" },
            { label: "Charity", value: "Charity" },
          ]}
          label="Raising this Campaign for:"
          {...field}
        />
      )}
    />
    <Controller
      control={control}
      name="HolderName"
      render={({ field }) => (
        <InputField
          name={"HolderName"}
          label="Account holder Name:"
          required={true}
          {...field}
        />
      )}
    />

    <Controller
      control={control}
      name="AccountNumber"
      render={({ field }) => (
        <InputField
        required={true}
          name={"AccountNumber"}
          label={"Account Number:"}
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
          required={true}
          label={"Bank Name:"}
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
          required={true}
          label={"Branch Name:"}
          {...field}
        />
      )}
    />
    <Controller
      control={control}
      name="IFSC"
      render={({ field }) => (
        <InputField
        required={true}
          name={"IFSC"}
          label={"IFSC:"}
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
            label="Upload Bank Passbook/Cheque:"
            name="UploadBankPassbook/Cheque"
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

export default AccountDetails

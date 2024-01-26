import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "../../../../components/inputs/InputField";
import SelectField from "../../../../components/inputs/SelectField";
import UploadField from "../../../../components/inputs/UploadField/Index";
import RadioGroup from "../../../../components/inputs/radioGroup";

function AccountDetails() {
  const { control } = useFormContext();

  return (
    <div className="py-20">
      <Controller
        control={control}
        name="rasing_for"
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            name={"rasing_for"}
            options={[
              { label: "Self", value: "Self" },
              { label: "Family/Friends", value: "Family/Friends" },
              { label: "Charity", value: "Charity" },
            ]}
            label="Raising this Campaign for:"
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="account_holder_name"
        render={({ field }) => (
          <InputField
            name={"account_holder_name"}
            sx={{ padding: '20px' }}
            type={"text"}

            label="Account holder Name:"
            required={true}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="account_number"
        render={({ field }) => (
          <InputField
            required={true}
            name={"account_number"}
            sx={{ padding: '20px' }}
            type={'number'}
            label={"Account Number:"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="bank_name"
        render={({ field }) => (
          <InputField
            name={"bank_name"}
            required={true}
            sx={{ padding: '20px' }}
            type={'text'}
            label={"Bank Name:"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="branch_name"
        render={({ field }) => (
          <InputField
            name={"branch_name"}
            required={true}
            type={'text'}
            label={"Branch Name:"}
            sx={{ padding: '20px' }}

            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="ifsc_code"
        render={({ field }) => (
          <InputField
            required={true}
            type={'number'}
            name={"ifsc_code"}
            sx={{ padding: '20px' }}

            label={"IFSC:"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="passbook_image"
        render={({ field }) => (
          <>
            <UploadField
              label="Upload Bank Passbook/Cheque:"
              name="passbook_image"
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
}

export default AccountDetails;

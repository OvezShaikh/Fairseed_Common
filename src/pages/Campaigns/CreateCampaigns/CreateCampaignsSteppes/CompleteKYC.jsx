import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "../../../../components/inputs/InputField";
import UploadField from "../../../../components/inputs/UploadField/Index";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CompleteKYC() {
  const { control } = useFormContext();

  return (
    <div className="py-20">
      <Controller
        control={control}
        name="adhar_card"
        render={({ field }) => (
          <>
            <InputField
              required={true}
              name={"adhar_card"}
              label="Enter Aadhar Card Number:"
              type={"text"}
              placeholder={"xxxx xxxx xxxx"}
              {...field}
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="adhar"
        render={({ field }) => (
          <>
            <UploadField
              name={"adhar"}
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
        name="pan_card"
        render={({ field }) => (
          <>
            <InputField
              name={"pan_card"}
              label={"Enter PAN Card Number:"}
              type={"password"}
              required={true}
              placeholder={"xxxxxxxxxxx"}
              {...field}
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="pan_card_image"
        render={({ field }) => (
          <>
            <UploadField
              name={"pan_card_image"}
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
  );
}

export default CompleteKYC;

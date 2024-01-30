import React, { useRef } from "react";
import { FormLabel, InputBase } from "@mui/material";
import { colors } from "../../../constants/theme";
import { RxCross2 } from "react-icons/rx";
import { useField } from "formik";
import images from "../../../constants/images";

const UploadField = ({
  variant,
  label = "",
  name,
  placeholder,
onChange,
  ...otherProps
}) => {
  const ref = useRef(null);
  const [field, meta, handlers] = useField(name);

  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Only take the first file if multiple files are selected
  
    if (file) {
      handlers.setValue(file);
      handlers.setTouched(true);
    }
  };

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: variant ? variant : "outlined",
  };

  return (
    <div className="pb-[2rem]">
      {label && (
        <FormLabel
          className="text-capitalize font-medium d-flex align-items-center"
          sx={{
            padding: "4px 8px 12px 8px",
            color: colors.text.main,
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "satoshi",
            fontStyle: "normal",
            height: "32px",
          }}
        >
          {label + " " + name}
          <span className="text-red-600">*</span>
        </FormLabel>
      )}

      <div className="flex w-full h-[72px] Upload_field">
        <InputBase
          value={field.value ? field.value.name : ""}
          placeholder={placeholder}
          label={label + " " + name}
          sx={{
            "& .MuiInputBase-input": {
              padding: "10px",
              fontSize: "20px",
            },
          }}
          fullWidth
          inputProps={{
            readOnly: true,
          }}
          {...configTextfield}
          disabled
        />
        <>
          <input
            type="file"
            ref={ref}
            style={{ display: "none" }}
            id={`file-input-${name}`} // Unique ID for each input
            onChange={handleFileChange}
          />

          <label
            htmlFor={`file-input-${name}`} // Matching ID for the corresponding input
            className="flex justify-center gap-2 items-center"
          >
            {field.value ? (
              <RxCross2
                size={25}
                color="gray"
                onClick={() => {
                  handlers.setValue(null);
                }}
              />
            ) : (
              ""
            )}
            {/* You may want to add onClick for focusing on the input */}
            <img
              width={77}
              src={images.UploadFile}
              alt=""
              onClick={() => ref?.current?.focus()}
            />
          </label>
        </>
      </div>
    </div>
  );
};

export default UploadField;

import React, { useRef, useState } from "react";
import images from "../../../constants/images";
import { FormLabel, InputBase } from "@mui/material";
import { colors } from "../../../constants/theme";
import { RxCross2 } from "react-icons/rx";
import { useField } from "formik";

const UploadField = ({
  variant,
  label = "",
  name,
  placeholder,
  multiple = true,
  // onChange,
  // value,
  ...otherProps
}) => {
  // const [selectedFile, setSelectedFile] = useState([]);

  const ref = useRef()

  const [field, meta, handlers] = useField(name)
  console.log("logggggggggggggggggggg", field.value, field.name);
  const handleFileChange = (event) => {
    const files = event.target.files;
    // Handle the selected file as needed
    // setSelectedFile(files);
    console.log(files, "names");
    // onChange(files)
    handlers.setValue(files)
    handlers.setTouched(true)
  };
  const configTextfield = {
    // ...field,
    ...otherProps,
    fullWidth: true,
    variant: variant ? variant : "outlined",
  };
  // console.log("selected", selectedFile);
  return (
    <div className="pb-[2rem]">
      {label && (
        <FormLabel
          className="text-capitalize  font-medium d-flex align-items-center"
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
          {label + " "
            + name}
          <span className="text-red-600">*</span>
        </FormLabel>
      )}

      <div
        className="flex w-full h-[72px]  Upload_field"
      // style={{border:'1px solid #DCDFE3',borderRadius:'4px'}}
      >
        <InputBase
          value={field.value && field.value.length
            ? Object.keys(field.value)
              .map((key) => field.value[key].name)
              .join(", ")
            : ''}
          placeholder={
            field.value && field.value.length
              ? Object.keys(field.value)
                .map((key) => field.value[key].name)
                .join(", ")
              : placeholder
          }
          label={label + " " + name}
          sx={{
            "& .MuiInputBase-input": {
              padding: "10px",
              fontSize: "20px",
            },

          }}
          fullWidth
          inputprops={{
            readOnly: true,
          }}
          {...configTextfield}
          disabled
        />
        <>
          <input
            type="file"
            ref={ref}
            multiple={multiple}
            style={{ display: "none" }}
            id="file-input"
            onChange={handleFileChange}
          />

          <label
            htmlFor="file-input"
            className="flex justify-center gap-2 items-center"
          >
            {field.value && field.value.length ? (
              <RxCross2 size={25} color="gray"
                onClick={() => { handlers.setValue([]) }}
              />
            ) : (
              ""
            )}
            <img width={77} src={images.UploadFile} alt="" onClick={() => ref?.current?.focus()} />
          </label>
        </>
      </div>
    </div>
  );
};
export default UploadField;

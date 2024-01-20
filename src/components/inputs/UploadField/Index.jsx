import React, { useState } from "react";
import images from "../../../constants/images";
import { FormLabel, InputBase } from "@mui/material";
import { colors } from "../../../constants/theme";
import { RxCross2 } from "react-icons/rx";

const UploadField = ({
  variant,
  label = "",
  name,
  placeholder,
  multiple = true,
  ...otherProps
}) => {
  const [selectedFile, setSelectedFile] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    // Handle the selected file as needed
    setSelectedFile(files);
  };
  const configTextfield = {
    // ...field,
    ...otherProps,
    fullWidth: true,
    variant: variant ? variant : "outlined",
  };
  console.log("selected", selectedFile);
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
          {label}
          <span className="text-red-600">*</span>
        </FormLabel>
      )}

      <div
        className="flex w-full h-[72px]  Upload_field"
        // style={{border:'1px solid #DCDFE3',borderRadius:'4px'}}
      >
        <InputBase
          value={selectedFile ? selectedFile.name : ""}
          placeholder={
            selectedFile && selectedFile.length
              ? Object.keys(selectedFile)
                  .map((key) => selectedFile[key].name)
                  .join(", ")
              : placeholder
          }
          label={label}
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
            multiple={multiple}
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="file-input"
          />

          <label
            htmlFor="file-input"
            className="flex justify-center gap-2 items-center"
          >
            {selectedFile && selectedFile.length ? (
                <RxCross2  size={25} color="gray"  onClick={()=>{setSelectedFile([])}}/>
            ) : (
              ""
            )}
            <img width={77} src={images.UploadFile} alt="" />
          </label>
        </>
      </div>
    </div>
  );
};
export default UploadField;

import { Button, FormHelperText, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import Label from "../Label/Label";

const ProfilePicDropZone = ({ name, label, onChange, initialPreview, ...otherProps }) => {
  const { setFieldValue, values } = useFormikContext();
  const [errors, setError] = useState([]);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (initialPreview) {
      setPreview(initialPreview);
    }
  }, [initialPreview]);

  return (
    <Dropzone
      minSize={0}
      accept={{
        'image/png': ['.png'],
        'image/jpg': ['.jpg'],
        'image/jpeg': ['.jpeg'],
      }}
      onDrop={(acceptedFiles, rejectedFiles) => {
        if (!acceptedFiles.length) {
          let err = [];
          rejectedFiles.forEach((item) => {
            err = [...err, ...item.errors.map((error) => error.message)];
          });
          setError(err);
        }
        if (otherProps.multiple) {
          setFieldValue(name, acceptedFiles);
        } else {
          setFieldValue(name, acceptedFiles[0]);
        }
        onChange && onChange(acceptedFiles, rejectedFiles);
        setError([]);
      }}
      {...otherProps}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <>
          {label && <Label className="text-sm ml-3" text={label} />}
          <div
            {...getRootProps()}
            className="rounded-full w-[120px] h-[120px] border-2 border-gray-400 flex items-center justify-center cursor-pointer"
            style={{
              background: isDragActive ? "#ECEFF1" : "transparent",
              borderColor: isDragActive ? "rgba(51, 102, 204, 1)" : "rgba(51, 102, 204, 1)",
            }}
          >
            <input {...getInputProps()} />
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="rounded-full"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <Typography color="beige">
                {Array.isArray(values[name]) ? values[name].length : values[name] ? "1 file selected" : isDragActive ? "Drop here..." : "Upload an Image"}
              </Typography>
            )}
          </div>
          {errors[0] && (
            <FormHelperText className="text-red-600">
              {errors[0]}
            </FormHelperText>
          )}
        </>
      )}
    </Dropzone>
  );
};

export default ProfilePicDropZone;

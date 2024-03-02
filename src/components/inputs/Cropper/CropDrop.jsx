import { Upload } from "@carbon/icons-react";
import { Button, FormHelperText, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import Label from "../Label/Label";

const DropZone = ({ name, label, onChange, initialPreview, ...otherProps }) => {
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
        "image/png": [".png"],
        "image/jpg": [".jpg"],
        "image/jpeg": [".jpeg"],
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
            className="drop-zone mt-2"
            style={{
              background: isDragActive ? "#ECEFF1" : "#F5F5F5",
              border: isDragActive
                ? "2px dashed #78909C"
                : "2px dashed #B0BEC5",
              borderRadius: "8px",
              width: "350px",
              height: "350px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input {...getInputProps()} />
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : Array.isArray(values[name]) || values[name] ? (
              <Typography color="beige">
                {Array.isArray(values[name]) ? values[name].length : 1} file
                selected
              </Typography>
            ) : isDragActive ? (
              <Typography color="beige">Drop here...</Typography>
            ) : (
              <Button startIcon={<Upload />}>Click to upload your file</Button>
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

export default DropZone;

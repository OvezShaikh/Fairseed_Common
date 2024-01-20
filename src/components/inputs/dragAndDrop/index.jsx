import { Upload } from "@carbon/icons-react";
import { FiUpload } from "react-icons/fi";

import {
  Button,
  CircularProgress,
  FormHelperText,
  Typography,
} from "@mui/material";
// import { useFormikContext } from "formik";
import { useState } from "react";
import { colors } from "../../../constants/theme";
import { Label } from "@mui/icons-material";
import ReactDropZone from "react-dropzone";

const DropZone = ({
  name,
  label,
  onChange,
  acceptedFiles,
  isLoading,
  ...otherProps
}) => {
  // const { setFieldValue, values } = useFormikContext();
  const [errors, setError] = useState([]);

  return (
    <ReactDropZone
      minSize={0}
      accept={
        acceptedFiles
          ? acceptedFiles
          : { "image/*": [".png", ".gif", ".jpeg", ".jpg"] }
      }
      onDrop={(acceptedFiles, rejectedFiles) => {
        if (!acceptedFiles.length) {
          let err = [];
          rejectedFiles.forEach((item) => {
            err = [...err, ...item.errors.map((error) => error.message)];
          });
          setError(err);
        }
        if (otherProps.multiple) {
          // setFieldValue(name, acceptedFiles);
        } else {
          // setFieldValue(name, acceptedFiles[0]);
        }
        if (acceptedFiles.length) {
          onChange && onChange(acceptedFiles, rejectedFiles);
          setError([]);
        }
      }}
      {...otherProps}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <div className="flex flex-col items-center justify-center">
          {label && <Label className="text-sm ml-3" text={label} />}
          <div
            {...getRootProps()}
            className="drop-zone mt-2"
            style={{
              // background: isDragActive ? colors.tertiary.light : "#fff",
            }}
          >
            {isLoading ? (
              <>
                <CircularProgress
                  size={20}
                  variant="indeterminate"
                  className="me-2"
                />

                <Typography color={colors.secondary.dark}>
                  Uploading...
                </Typography>
              </>
            ) : (
              <>
                {" "}
                <input {...getInputProps()} />
                {/* {Array.isArray(values[name]) || values[name] ? (
                  <Typography color="primary">
                    {Array.isArray(values[name]) ? values[name].length : 1} file
                    selected
                  </Typography>
                ) : isDragActive ? (
                  <Typography color="secondary">Drop here...</Typography>
                ) : (
                  <> */}
                <Button
                  color="warning"
                  sx={{
                    color: "#3366CC",
                    textDecorationLine: 'underline',
                    fontFamily:'satoshi',
                    fontWeight:500
                  }}
                  startIcon={<FiUpload color={colors.primary} />}
                  className="text-capitalize"
                >
                  Upload an Image
                </Button>{" "}
                <p className="w-[360px] font-[satoshi]  text-center" style={{color:"rgba(0, 0, 0, 0.40)",}}>
                &nbsp; The Image must be less than 5 MB. Recommended size is
                850x550. Minimum height is 550 and minimum width is 850.
                {/* </>
                )} */}
                </p>
              </>
            )}
          </div>
          <br/>
          {errors[0] && (
            <FormHelperText className="text-danger text-center">
              {errors[0]}
            </FormHelperText>
          )}
        </div>
      )}
    </ReactDropZone>
  );
};

export default DropZone;

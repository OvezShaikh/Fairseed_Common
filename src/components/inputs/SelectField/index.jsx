import { ErrorMessage, useField, useFormikContext } from "formik";
import React from "react";
import { Autocomplete, FormLabel, TextField, Tooltip } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { makeStyles } from "@mui/styles";
import { colors } from "../../../constants/theme";

const useStyles = makeStyles({
  textField: {
    "& .MuiInput-root": {
      margin: "0px",
      fontSize: "0.9rem",
      border: `1px solid #E2E2E2`,
      background: "#fff",
      "&::before": {
        display: "none",
      },
      "&::after": {
        display: "none",
      },
    },

    "& input::placeholder": {
      fontSize: "0.9rem",
    },
    "& .Mui-disabled": {
      fontSize: "0.9rem !important",
    },
  },
  root: {
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      padding: "3px 6px",
      fontSize: "0.9rem",
      // marginTop: "5px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid #e2e2e2`,
    },
  },
});

const SelectField = ({
  name,
  options,
  value,
  sx,
  disable,
  onChange,
  info,
  placeholder,
  onInputChange,
  noLabel,
  sideBarSelectfield,
  ...otherProps
}) => {
  const [field, meta] = useField(name);
  const { textField, root } = useStyles();
  const configTextfield = {
    ...field,
    ...otherProps,
    name,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }
  const { setFieldValue, setTouched, touched } = useFormikContext();

  const tooltipData = localStorage.getItem("tooltipData")
    ? JSON.parse(localStorage.getItem("tooltipData"))?.filter(
        (item) =>
          item?.field_name?.toLowerCase() ===
          configTextfield?.label?.toLowerCase()
      )
    : null;

  return (
    <>
      {!noLabel && (
        <FormLabel
          className="text-capitalize font-medium d-flex align-items-center mb-1"
          sx={{ color: colors.text.main, fontSize: "0.8rem", height: "22px" }}
        >
          {configTextfield?.label}{" "}
          {info && (
            <Tooltip
              placement="right-start"
              title={
                tooltipData ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: tooltipData?.[0]?.description,
                    }}
                  ></div>
                ) : (
                  "lorem ipsum dolor 20"
                )
              }
            >
              <InfoIcon
                className="ms-1"
                style={{
                  color: colors.primary.dark,
                  cursor: "pointer",
                  height: "22px",
                }}
              />
            </Tooltip>
          )}
        </FormLabel>
      )}
      <Autocomplete
        {...configTextfield}
        value={value}
        sx={{ ...sx, width: "100%" }}
        options={options ? options : []}
        disabled={disable}
        // getOptionLabel={(option) => option?.location}
        className={root}
        isOptionEqualToValue={(option, value) => option?.id === value?.id}
        onChange={(_, value, reason) => {
          onChange ? onChange(value, reason) : setFieldValue(name, value);
        }}
        onBlur={() => setTouched({ ...touched, [name]: true })}
        renderInput={(props) => (
          <TextField
            className={textField}
            variant="outlined"
            {...props}
            onChange={(e) => {
              props?.onChange && props?.onChange(e);
              onInputChange && onInputChange(e);
            }}
            placeholder={placeholder}
          />
        )}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div style={{ color: "red", fontSize: "0.7rem" }}>
            {typeof msg === "object" ? Object?.values(msg)[0] : msg}
          </div>
        )}
      />
    </>
  );
};

export default SelectField;

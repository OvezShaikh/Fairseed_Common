import React from "react";
import { ErrorMessage, useField, useFormikContext } from "formik";
import ReactFlagsSelect from "react-flags-select";
import { colors } from "../../../constants/theme";
import { FormLabel } from "@mui/material";

const CountrySelect = ({
  name,
  options,
  value,
  sx,
  disable,
  onChange,
  info,
  label,
  placeholder,
  countriesList,
  ...otherProps
}) => {
  // const [field, meta] = useField(name);
  // console.log('Field:---------------->', field);
  // console.log('Meta:----------------->', meta);
  const configTextfield = {
    // ...field,
    ...otherProps,
    name,
    variant: "outlined",
  };

  // if (countriesList) {
  //   configTextfield.countries = countriesList;
  // }
  // if (meta && meta.touched && meta.error) {
  //   configTextfield.error = true;
  //   configTextfield.helperText = meta.error;
  // }
  // const { setFieldValue, values } = useFormikContext();

  return (
    <>
      <FormLabel
        className="text-capitalize  d-flex mb-1 ml-2 align-items-center"
        sx={{ color: "#383A42", fontSize: "20px", fontWeight: 700 }}
      >
        {label}
      </FormLabel>
      <ReactFlagsSelect
        selected={value}
        onSelect={(value) => {
          // setFieldValue(name, value);
          onChange && onChange(value);
        }}
        searchable
        id="react-flag-select"
        style={{
          "& #rfs-btn": {
            border: "1px solid #e2e2e2",
            outerHeight: "2rem",
            borderRadius:'50%',
            padding: "20px",
            sx,
          },
        }}
        {...configTextfield}
      />
      {/* <ErrorMessage
        name={name}
        render={(msg) => (
          <div style={{ color: "red", fontSize: "0.7rem" }}>{msg}</div>
        )}
      /> */}
    </>
  );
};

export default CountrySelect;

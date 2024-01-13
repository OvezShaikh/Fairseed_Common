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
  const [field, meta] = useField(name);
  const configTextfield = {
    ...field,
    ...otherProps,
    name,
    variant: "outlined",
  };

  // if (countriesList) {
  //   configTextfield.countries = countriesList;
  // }
  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }
  const { setFieldValue, values } = useFormikContext();

  return (
    <>
      <FormLabel
        className="text-capitalize font-medium d-flex mb-1 align-items-center"
        sx={{ color: colors.text.main, fontSize: "0.8rem" }}
      >
        {label}{" "}
      </FormLabel>
      <ReactFlagsSelect
        selected={values?.[name]}
        onSelect={(value) => {
          setFieldValue(name, value);
          onChange && onChange(value);
        }}
        searchable
        id="react-flag-select"
        style={{ "& #rfs-btn": { border: "1px solid #e2e2e2" } }}
        {...configTextfield}
      />
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div style={{ color: "red", fontSize: "0.7rem" }}>{msg}</div>
        )}
      />
    </>
  );
};

export default CountrySelect;

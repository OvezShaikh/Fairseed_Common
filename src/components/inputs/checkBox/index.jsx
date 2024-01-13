import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "300 !important",

    "& .css-ahj2mt-MuiTypography-root": {
      fontFamily: "FuturaLight",
      fontWeight: "300",
    },
    "& .MuiFormControlLabel-label": {
      fontWeight: "300",
      fontSize: "0.8rem",
    },
    margin: "0 !important",
  },
}));

const CheckBox = ({
  name,
  label,
  legend,
  checked,
  onChange,
  ...otherProps
}) => {
  // const { setFieldValue } = useFormikContext();
  // const [field, meta] = useField(name);

  const { root } = useStyles();

  const handleChange = (evt) => {
    // const { checked } = evt.target;
    // setFieldValue(name, checked);
  };

  // const configCheckbox = {
  //   ...field,
  //   ...otherProps,
  //   onChange: onChange || handleChange,
  // };

  // const configFormControl = {};
  // if (meta && meta.touched && meta.error) {
  //   configFormControl.error = true;
  // }

  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          label={label}
          control={
            <Checkbox color="warning" checked={checked} />
          }
          className={root}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckBox;

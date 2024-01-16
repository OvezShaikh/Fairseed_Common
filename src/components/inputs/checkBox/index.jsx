import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { pink, red } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { colors } from "../../../constants/theme";

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
        sx={{"& .MuiTypography-root":{
          color: colors.text.main,
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "satoshi",
            fontStyle: "normal",
            justifyContent:'center',
            alignItems:'center'
        },
       }}
         
          label={label}

          control={
            <Checkbox sx={{
              // color: red[500],
              "&.Mui-checked": {
                color: red[500],
              },
            }} checked={checked} />
          }
          className={root}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckBox;

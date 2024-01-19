import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@mui/material";
import React from "react";
import { pink, red } from "@mui/material/colors";

import { colors } from "../../../constants/theme";

const RadioGroup = ({ label, options, onChange, ...otherProps }) => {
  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "col",
        "& .MuiFormLabel-root.Mui-focused": {
          color: colors.text.main,
        },
      }}
    >
      <FormLabel
        className="text-capitalize font-medium d-flex align-items-center mb-1 me-4"
        sx={{
          padding: "4px 8px 0px 8px",
          color: colors.text.main,
          fontSize: "20px",
          fontWeight: 700,
          fontFamily: "satoshi",
          fontStyle: "normal",
          height: "32px",
        }}
        id={`demo-radio-buttons-group-label-${label}`}
      >
        {label}
      </FormLabel>
      <MuiRadioGroup
        sx={{ display: "flex", flexDirection: "row", pl: "10px", pb: "1rem" }}
        {...otherProps}
        aria-labelledby={`demo-radio-buttons-group-label-${label}`}
        name={`radio-buttons-group-${label}`}
        onChange={(e) => {
          onChange && onChange(e);
        }}
      >
        {options?.map((item) => (
          <FormControlLabel
            className="text-sm md:text-base justify-content-start inline-block align-items-center"
            id={Math.random() < 0.5 ? "select" : undefined}
            {...otherProps?.formControlProps}
            key={item?.value?.toString()}
            value={item.value}
            sx={{
              "& .MuiTypography-root": {
                fontSize: "20px",
                padding: "0",
                color: colors.text.main,
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "satoshi",
                fontStyle: "normal",
              },
            }}
            control={
              <Radio
                color="warning"
                sx={{
                  // color: red[500],
                  "&.Mui-checked": {
                    color: red[500],
                  },
                }}
              />
            }
            label={item.label}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;

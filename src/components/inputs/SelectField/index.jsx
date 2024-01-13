import { ErrorMessage, useField, useFormikContext } from "formik";
import React from "react";
import { Autocomplete, FormLabel, TextField, Tooltip } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { colors } from "../../../constants/theme";


const useStyles = makeStyles({
  
  textField: {
    "& .MuiInput-root": {
      margin: "0px",
      fontSize: "20px",
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
      fontSize: "20px",
    },
    "& .Mui-disabled": {
      fontSize: "20px !important",
    },
  },
  root: {
    "& .MuiInputBase-root.MuiOutlinedInput-root": {
      padding: "15px 15px",
      fontSize: "20px",
      // marginTop: "5px",
    //   "&:focus": {
    //     boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
    //   borderColor: 'black',
  
    // },
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
  label,
  ...otherProps
}) => {
  // const [field, meta] = useField(name);
  const { textField, root } = useStyles();
  const configTextfield = {
    // ...field,
    ...otherProps,
    name,
    variant: "outlined",
  };

  // if (meta && meta.touched && meta.error) {
  //   configTextfield.error = true;
  //   configTextfield.helperText = meta.error;
  // }
  // const { setFieldValue, setTouched, touched } = useFormikContext();

  // const tooltipData = localStorage.getItem("tooltipData")
  //   ? JSON.parse(localStorage.getItem("tooltipData"))?.filter(
  //       (item) =>
  //         item?.field_name?.toLowerCase() ===
  //         configTextfield?.label?.toLowerCase()
  //     )
  //   : null;

  return (
    <>
      <Autocomplete
        {...configTextfield}
        value={value}
        sx={{ ...sx, width: "100%",pb:'2rem',"&.Mui-focused .MuiFormControl-root .MuiOutlinedInput-notchedOutline":{
          boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);
          `,
        borderColor: 'black',
      
        }, }}
        options={options ? options : []}
        disabled={disable}
        // getOptionLabel={(option) => option?.location}
        className={root}
        isOptionEqualToValue={(option, value) => option?.id === value?.id}
        // onChange={(_, value, reason) => {
        //   onChange ? onChange(value, reason) : setFieldValue(name, value);
        // }}
        // onBlur={() => setTouched({ ...touched, [name]: true })}
        
        renderInput={(props) => (
          <>
          {label && <FormLabel
            className="text-capitalize font-medium d-flex align-items-center"
            sx={{ padding:'8px 8px 16px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
          >
            {label}
            {/* <RiStarSFill style={{fill:'var(--Status-Error, #E00000)',}} /> */}
            <span className="text-red-600">*</span>
          </FormLabel>}
          
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
          </>
        )}
      />
      
      {/* <ErrorMessage
        name={name}
        render={(msg) => (
          <div style={{ color: "red", fontSize: "0.7rem" }}>
            {typeof msg === "object" ? Object?.values(msg)[0] : msg}
          </div>
        )}
      /> */}
    </>
  );
};

export default SelectField;

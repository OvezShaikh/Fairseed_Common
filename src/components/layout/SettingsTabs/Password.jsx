import React from 'react';
import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import InputField from '../../inputs/InputField';
import SelectField from '../../inputs/SelectField';
import CountrySelect from '../../inputs/countrySelect/index';
import Avatar from '../../layout/Avatar/Index'
import { Formik, Form } from 'formik';



const InputStyle =
{
  padding: '20px', border: "1px solid #e2e2e2",
  // },
  "&:focus-within": {
    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
    borderColor: "black",
  },

}
const SelectStyle =
{
  padding: '0px', border: "none",
  // },
  "&:focus-within": {
    boxShadow: `none`,
    borderColor: "none",
  },

}







const Password = () => {



    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    


  return (
    <>
            <InputField
              onChange={handleChange}
              name={"password"}
              label={"Old Password:"}
              type={'password'}
              sx={InputStyle}
              value={value}


            />
            <InputField
              onChange={handleChange}
              name={"password"}
              label={"New Password:"}
              type={'password'}
              sx={InputStyle}
              value={value}
            /></>
  )
}

export default Password
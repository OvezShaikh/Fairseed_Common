import React from 'react'
import { Formik, Form, useFormikContext } from 'formik';
import Avatar from '../../layout/Avatar/Index'
import InputField from '../../inputs/InputField';
import CountrySelect from '../../inputs/countrySelect/index';

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
  "&:focus-within": {
    boxShadow: `none`,
    borderColor: "none",
  },

}

const Account = () => {

  const { handleChange , values } = useFormikContext();
console.log(values, ' +++++++++++++ ')
  return (
    <>
     <Avatar />
            <InputField
              onChange={handleChange}
              value={values?.username}
              name={"username"}
              label={"Full Name:"}
              sx={InputStyle}
            />
            <InputField
              onChange={handleChange}
              value={values?.username}
              name={"email"}
              label={"Email Id:"}
              sx={InputStyle}
            />
            <InputField
              onChange={handleChange}
              value={values?.mobile_number}
              name={"mobile_number"}
              label={"Mobile:"}
              placeholder={"(Optional)"}
              sx={InputStyle}
            />
            <div className='country-select-div'>
              <CountrySelect
                onChange={handleChange}
                value={values?.country}
                label="Country:"
                name={"country"}
                sx={SelectStyle}
              />
            </div>
     
        
    </>

  )
}

export default Account
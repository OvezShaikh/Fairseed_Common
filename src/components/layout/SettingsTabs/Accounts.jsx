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
  // },
  "&:focus-within": {
    boxShadow: `none`,
    borderColor: "none",
  },

}





const Account = () => {

  const [value, setValue] = React.useState('1');


  const { handleChange } = useFormikContext();

  return (
    <>
            <Avatar />
            <InputField
              onChange={handleChange}
              name={"username"}
              label={"Full Name:"}
              sx={InputStyle}
              value={value}
            />
            <InputField
              onChange={handleChange}

              name={"email"}
              label={"Email Id:"}
              sx={InputStyle}
              value={value}
            />
            <InputField
              onChange={handleChange}

              name={"mobile_number"}
              label={"Mobile:"}
              placeholder={"(Optional)"}
              sx={InputStyle}
              value={value}
            />
            <div className='country-select-div'>
              <CountrySelect
                onChange={handleChange}
                label="Country:"
                name={"country"}
                sx={SelectStyle}
              />
            </div>
            </>

  )
}

export default Account
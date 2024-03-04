import React from 'react'
import InputField from '../../inputs/InputField'
import { useFormikContext } from 'formik'


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

const Password = () => {

    const { handleChange , values  } = useFormikContext();

  return (
    <>
    <InputField
      onChange={handleChange}
      value={values?.password}
      name={"password"}
      label={"Old Password:"}
      type={'password'}
      sx={InputStyle}
    />
    <InputField
      name={"password"}
      label={"New Password:"}
      type={'password'}
      sx={InputStyle}
    />
    </>
  )
}

export default Password

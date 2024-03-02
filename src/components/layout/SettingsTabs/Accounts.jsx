import React from 'react'
import { Formik, Form } from 'formik';
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


const initialValues={
    full_name:"",
    email:"",
    m_number:0,
    Country:""
  }

const Account = () => {
  return (
    <Formik
          initialValues={initialValues}
          onSubmit={(values)=>{
            console.log(values)
          }}
          >
            <Form>
              <Avatar />
              <InputField
                name={"full_name"}
                label={"Full Name:"}
                sx={InputStyle}
              />
              <InputField
                name={"email"}
                label={"Email Id:"}
                sx={InputStyle}
              />
              <InputField
                name={"m_number"}
                label={"Mobile:"}
                placeholder={"(Optional)"}
                sx={InputStyle}

              />
              <div className='country-select-div'>
              <CountrySelect label="Country:"
              name={"Country"}
              sx={SelectStyle}
              />
            </div>
            </Form>
          </Formik>
  )
}

export default Account
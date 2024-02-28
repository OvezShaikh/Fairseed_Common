import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import Avatar from '../../layout/Avatar/Index'
import InputField from '../../inputs/InputField';
import CountrySelect from '../../inputs/countrySelect/index';
import { useCreateOrUpdate, useGetAll } from '../../../Hooks';


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
  const [ user , setUser] = useState({})

  const { mutate } = useCreateOrUpdate({

  })
  
  const { data } = useGetAll({
    // key: `/admin-dashboard/campaign-kyc/${id}`,
    enabled: true,
    select: (data) => {
        return data?.data?.data;
    },
    onSuccess: (data) => {
      setUser(data);
        console.log(data);
    },
  })

  const initialValues={
    full_name:"",
    email:"",
    m_number:0,
    Country:""
  }

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

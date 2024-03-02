import React from 'react'
import { Formik, Form } from 'formik';
import InputField from '../../inputs/InputField';
import * as Yup from 'yup'
import { useCreateOrUpdate } from '../../../Hooks';


const InputStyle =
{
  padding: '20px', border: "1px solid #e2e2e2",
  // },
  "&:focus-within": {
    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
    borderColor: "black",
  },

}
const initialValues = {
    password:'',
    password2:''
}

const Validation = Yup.object().shape({
        password: Yup.string().required('Password is required!'),
        password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must be match').required('Required')
      })

     


const Password = () => {

    const {mutate} =  useCreateOrUpdate({
        url:``
    })
  return (
    <Formik
    
    initialValues={initialValues}
    validationSchema={Validation}
   
    >
            <Form>
              <InputField
                name={"password"}
                label={"Old Password:"}
                type={'password'}
                sx={InputStyle}


              />
              <InputField
                name={"password2"}
                label={"New Password:"}
                type={'password'}
                sx={InputStyle}
              />
            </Form>
          </Formik>
  )
}

export default Password
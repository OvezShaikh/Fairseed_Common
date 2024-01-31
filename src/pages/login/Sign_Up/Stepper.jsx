import React, { useState } from "react";
import * as Yup from 'yup'
import {
  Typography,
  // TextField,
  Link,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@mui/material";
import { Formik } from 'formik';
import styled from '@emotion/styled';
import { useCreateOrUpdate } from '../../../Hooks/useCreateOrUpdate'
import SignUp from "./SignUp";
import Sign_02 from "./Sign_02";


const styleStep = {
  "  .MuiStep-root .MuiStepLabel-root ": {

    flexDirection: 'row-reverse'
  },
  "& .MuiStepLabel-label.Mui-active": {
    color: "var(--Cool-Grey-Cool-Grey-10, #383A42)",
    fontFamily: "Satoshi",
    fontSize: "20px",
    fontStyle: "normal",
    paddingRight: '5px',
    fontWeight: 700,
  },
  "& .Mui-disabled": {
    "& .MuiStepIcon-root": {
      color: "white",
      fontWeight: 900,
      border: "1px solid gray",
      borderRadius: "50%",
      // width: '100%',
      "& .MuiStepIcon-text": {
        fill: "#white",
      },
    },
    "& .MuiStepLabel-label": {
      color: "var(--Cool-Grey-Cool-Grey-10, #383A42)",
      fontFamily: "Satoshi",
      fontSize: "20px",
      fontStyle: "normal",
      paddingRight: '5px',
      fontWeight: 700,
    },
  },
  "& .Mui-active": {
    "& .MuiStepIcon-root": {
      color: "#06B217",
      fontWeight: 900,
      padding: "5px",
      border: "1px solid #06B217",
      borderRadius: "50%",
      "& .MuiStepIcon-text": {
        fill: "#06B217",
      },
    },
    // "& .MuiStepLebal-root .MuiStepLabel-labelContainer .MuiStepLabel-label":{
    //   color:'green'
    // },
    // "& .MuiStepLabel-root .MuiStepLabel-alternativeLabel":{
    //     color:'red'
    // },
    // "& .MuiStepLabel-labelContainer": {
    //   color: "red",
    // },

    "& .MuiStepConnector-line": {
      borderColor: "#06B217",
      paddingLeft: '0px !important'
    },
  },
  "& .Mui-completed": {
    "& .MuiStepIcon-root": {
      color: "#06B217",
    },
    "& .MuiStepConnector-line": {
      borderColor: "#06B217",
    },
    "& .MuiStepLabel-label": {
      color: "var(--Cool-Grey-Cool-Grey-10, #383A42)",
      fontFamily: "Satoshi",
      fontSize: "20px",
      paddingRight: '5px',
      fontStyle: "normal",
      fontWeight: 700,
    },
  },
};
const StyledButton_1 = styled(Button)({
  background: "linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)",
  color: "white",
  display: "flex",
  width: "30%",
  // height: "100%",
  alignitems: "flex-start",
  textTransform: "none",
  // borderRadius: "12px",
  // padding: "10px",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  fontFamily: "satoshi",
  position: "absolute",
  bottom: '4rem'

});


const StyledLabel_2 = styled(Typography)({
  color: 'var(--Neutral - Neutral - 7, #717171)',
  fontfamily: 'Satoshi Variable',
  fontstyle: 'normal',
  fontweight: '500',
  letterSpacing: '0.88',
  text: 'sm',
});

const StyledButton_2 = styled(Button)({
  background: "black",
  WebkitBackgroundClip: "text",
  display: "flex",
  width: "100%",
  alignitems: "flex-start",
  textTransform: "none",
  border: "1px solid var(--Linear-BG, #FF9F0A)",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  fontFamily: "satoshi",
});




const INITIAL_VALUE = {
  email: '',
  username: '',
  mobile_number: '',
  password: '',
  password2: '',
  country: '',
  user_type: '',
  image: null
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formValidation = [

  Yup.object().shape({
    email: Yup.string().email('Invalid Email! please enter correct email ').required('Email is Required!'),
    username: Yup.string().required('Name is Required!'),
    // role:Yup.string().required('Role is Required!'),
    mobile_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  }),
  Yup.object().shape({
    password: Yup.string().required('Password is required!'),
    password2: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must be match').required('Required'),
    register_as: Yup.string(),
    Country: Yup.string(),

  })]

const getSteps = () => {

  return ["Details", "Information"];

}


const Sign_Stepper = () => {

  const [activeStep, setActiveStep] = useState(0);

  const steps = getSteps();

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const { mutate } = useCreateOrUpdate({ url: "/accounts/register/nt/", })


  const submitForm = (values) => {
    console.log(values);
    const formData = new FormData();
    if (activeStep === 1)
      formData.append('image', values.image);
    formData.append('email', values.email);
    formData.append('username', values.username);
    formData.append('password', values.password);
    formData.append('country', values.country);
    formData.append('user_type', values.user_type);
    formData.append('country', values.country);
    // formData.append('image' , values.image);
      mutate(formData);
      alert("Signed Up Successfully !")
      window.location.href = '/Home';
      console.log(formData);

  }
  const getStepContent = (step) => {

    switch (step) {
      case 0:
        return <SignUp handleNext={handleNext} />;

      case 1:
        return <Sign_02 handleBack={handleBack} handleNext={handleNext} />;

      default:
        return "unknown step";
    }
  }
  return (
    <>
      <Box sx={{ width: "100%", justifyContent: 'center', margin: 'auto' }}>
        <Stepper activeStep={activeStep} sx={styleStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps} >{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      <Box sx={{ width: "100%", justifyContent: 'center', margin: 'auto' }}>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h3" align="center">
              <div className="w-full px-[140px] py-[89px] flex flex-col justify-center items-center gap-3">
                <h7 className="text-[#06B217] text-[48px] font-[satoshi] font-bold">
                  Success!
                </h7>
                <h6
                  style={{
                    background:
                      "linear-gradient(71deg, #06B217 0%, #FF375F 62.9%)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                  }}
                >
                  Congratulations ! you have signed up Successfully
                </h6>
              </div>
            </Typography>
            <div className="flex ">


            </div>
          </React.Fragment>
        ) : (
          <React.Fragment >
            <Formik
              initialValues={INITIAL_VALUE}
              validationSchema={formValidation[activeStep]}
              onSubmit={(values) => { submitForm(values) }}
            >
              <>
                {getStepContent(activeStep)}
              </>
            </Formik>
          </React.Fragment>
        )}
      </Box>
    </>
  );
};

export default Sign_Stepper;

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
  "& .Mui-active .MuiStepLabel-alternativeLabel": {
    color: 'red',
    // padding:'40px',
    fontSize: '22px',
    fontFamily: 'Satoshi',
  },
  "& .MuiStepLabel-root .MuiStepLabel-horizontal": {
    flexDirection: 'row-reverse'
  },
  "& .Mui-disabled": {
    "& .MuiStepIcon-root": {
      color: "white",
      fontWeight: 500,
      border: '1px solid gray',
      borderRadius: '50%',
      height: '20px',
      width: '20px',
      "& .MuiStepIcon-text": {
        fill: '#white',
      },
    },
    "& .MuiStepLabel-label": {
      color: 'var(--Cool-Grey-Cool-Grey-10, #383A42)',
      fontFamily: 'Satoshi',
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: 500,
      left: '0px'
    },
  },
  "& .Mui-active": {
    "& .MuiStepIcon-root": {
      color: "#06B217",
      padding: "5px",
      border: '1px solid #06B217',
      borderRadius: '50%',
      height: '20px',
      width: '20px',
      marginTop: '30px', // Add padding top
      marginBottom: '40px', // Add padding bottom
      "& .MuiStepIcon-text": {
        fill: '#06B217',
      }
    },
    "& .MuiStepLabel-label": {
      textAlign: 'left',
      fontSize: '22px',
    },
    "& .MuiStepConnector-line": {
      borderColor: "#06B217",
    },
  },
  "& .Mui-completed": {
    "& .MuiStepIcon-root": {
      color: "#06B217",
      width: '20px',
      height: '20px',
    },
    "& .MuiStepConnector-line": {
      borderColor: "#06B217",
    },
    "& .MuiStepLabel-label": {
      color: 'var(--Cool-Grey-Cool-Grey-10, #383A42)',
      fontFamily: 'Satoshi',
      fontSize: '22px',
      fontStyle: 'normal',
      fontWeight: 500,
      // textAlign: 'left',  
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
  user_type: ''

}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formValidation = [

  Yup.object().shape({
    email: Yup.string().email('Invalid Email! please enter correct email ').required('Email is Required!'),
    name: Yup.string().required('Name is Required!'),
    // role:Yup.string().required('Role is Required!'),
    Mobile_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
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


  const { mutate: FormDataMutate } = useCreateOrUpdate({
    url: `/accounts/register/`,
  })



  const { mutate } = useCreateOrUpdate({
    url: "/accounts/register/nt/", onSuccess: (data) => {
      console.log(data, "<==response datat");

      // setImmediate(jojdfdw);
      // FormDataMutate('')

      // FormDataMutate(formDFata)


    }
  })


  const submitForm = (values) => {
    if (activeStep === 1)
      mutate(values);

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
      <Box sx={{ width: "90%", justifyContent: 'center', margin: 'auto' }}>
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
            <div className="flex gap-3">
              <StyledButton_2
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </StyledButton_2>
              <StyledButton_1>
                Home
              </StyledButton_1>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
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

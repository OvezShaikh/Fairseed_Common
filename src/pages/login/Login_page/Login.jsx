import React, { useState } from 'react';
import { Formik , Form} from 'formik';
import styled from '@emotion/styled';
import CheckBox from '../../../components/inputs/checkBox';
import { Grid, Link, Typography } from '@mui/material';
import InputField from '../../../components/inputs/InputField';
import SecondaryButton from '../../../components/inputs/secondaryButton'; 
import PrimaryButton from '../../../components/inputs/PrimaryButton'
import UserSignUp_02 from '../Sign_Up/Index';
import { Container } from '@mui/system';





const Formcom = ({ Initial_value, formValidation, loginData }) => {

  
  console.log({Initial_value,formValidation,loginData})

  return (
    <>
      <Formik
        initialValues={Initial_value}
        validationSchema={formValidation}
        onSubmit={async (values) => {
          loginData(values)
         
        }}
      >
   <Form>
      <Container>
        <Grid container spacing={3}>
        <Grid item xs={12}>
            <InputField
              label="Email"
              name="email"
              placeholder="enter your email"
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              label="Password"
              type='password'
              name="password"
              placeholder="************"
            />
          </Grid>
          <Grid item xs={12} container alignItems="center" justifyContent="space-between">
                <CheckBox label="Remember Me" name={"remember_me"} />
                <div style={{ width: '20px' }}></div>
                <Link
                  href="#"
                  underline="always"
                  sx={{
                    padding: '10px 0',
                    display: 'inline-block',
                  }}
                >
                  Forgot Password
                </Link>
              </Grid>
          <Grid item xs={12} >
          <PrimaryButton
              sx={{ width: '100%', padding: '12px 40px'}}
               type='submit'
               >
                <span style={{fontSize:'22px' , fontWeight:900 }}> Sign In </span>
              
            </PrimaryButton>
            </Grid>

            <Grid item xs={12} >
            <SecondaryButton
              sx={{ width: '100%',  padding: '12px 40px',}}
              type='button'
             >
              <UserSignUp_02/>
            </SecondaryButton>
          </Grid>
        </Grid>
      </Container>
    </Form>
  </Formik>
    </>
  );
};

export default Formcom;

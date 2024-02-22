import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import styled from '@emotion/styled';
import CheckBox from '../../../components/inputs/checkBox';
import { Grid, Link, Typography } from '@mui/material';
import InputField from '../../../components/inputs/InputField';
import SecondaryButton from '../../../components/inputs/secondaryButton';
import PrimaryButton from '../../../components/inputs/PrimaryButton'
import UserSignUp_02 from '../Sign_Up/Index';
import { Container } from '@mui/system';





const Formcom = ({ Initial_value, formValidation, loginData }) => {


  console.log({ Initial_value, formValidation, loginData })

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
            <Grid container spacing={3} >
              <Grid item xs={12}>
                <InputField
                  label="Email"
                  name="email"
                  sx={{
                    padding: ' 16px 10px 16px var(--Spacing-20, 20px)',
                    border: '2px solid var(--Linear-BG, #FF9F0A)',
                    borderImage: 'linear-gradient(#FF9F0A, red) 20',
                    // borderWidth: '3px',
                    borderStyle: ' solid',
                    borderRadius: '4px'
                  }}
                  placeholder="enter your email"
                />
              </Grid>
              <Grid item xs={12} className='mt-10'>
                <InputField
                  label="Password"
                  type='password'
                  name="password"
                  sx={{
                    padding: ' 16px 10px 16px 10px', border: '2px solid var(--Linear-BG, #FF9F0A)',
                    borderImage: 'linear-gradient(#FF9F0A, red) 20',
                    // borderWidth: '3px',
                    borderStyle: ' solid',
                    borderRadius: '4px'
                  }}

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
                    fontFamily: 'satoshi',
                    fontWeight: 500,
                    fontSize: '22px'
                  }}
                >
                  Forgot Password
                </Link>
              </Grid>
              <Grid item xs={12} >

                <PrimaryButton
                  sx={{ width: '100%', padding: '12px 40px' }}
                  type='submit'
                >
                  <span style={{ fontSize: '22px', fontWeight: 900 }}> Sign In </span>

                </PrimaryButton>
              </Grid>

              <Grid item xs={12} >
                <SecondaryButton
                  sx={{ width: '100%', padding: '12px 40px', }}
                  type='button'
                >
                  <UserSignUp_02 />
                </SecondaryButton>

              </Grid>
            </Grid>
          </Container>
        </Form>
      </Formik >
    </>
  );
};

export default Formcom;

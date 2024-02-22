import React from 'react'
import Navigation from '../../../components/layout/Navigation/Index'
import Navbar from '../../../components/layout/Navbar'
import { Formik, Form } from 'formik';
import styled from '@emotion/styled';
import CheckBox from '../../../components/inputs/checkBox';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import InputField from '../../../components/inputs/InputField';
import SecondaryButton from '../../../components/inputs/secondaryButton';
import PrimaryButton from '../../../components/inputs/PrimaryButton'
import UserSignUp_02 from '../Sign_Up/Index';
import { Container } from '@mui/system';
import Footer from '../../../components/layout/Footer';


function LoginOnSmallScreen({ Initial_value, formValidation, loginData }) {
  return (
    <div>
      <Navbar />
      <Navigation label={'Login'} heading={'Login'} />
      <div className="flex flex-col justify-center py-8 items-center">

        <p className='text-[22px] max-tablet:pl-4 py-8 font-[satoshi] font-medium ' style={{ color: 'var(--Neutral-Neutral-7, #717171)' }}>Welcome Back! Please enter you details</p>

        <Formik
          initialValues={Initial_value}
          validationSchema={formValidation}
          onSubmit={async (values) => {
            loginData(values)

          }}
        >
          <Form className='max-w-[471px] w-[100%] flex flex-col gap-4'>
            <Container>
              <Grid container spacing={5} >
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
                  {/* <div style={{ width: '20px' }}></div> */}

                  <Link
                    to="/Home/Password-Reset"
                    style={{
                      padding: '10px 0',
                      display: 'inline-block',
                      fontFamily: 'satoshi',
                      fontWeight: 500,
                      fontSize: '20px',
                      color: '#0466C8',
                      textDecoration: 'underline'
                    }}
                  >
                    Forgot Password
                  </Link>
                </Grid>
                <Grid item xs={12} className=''>
                  <Grid item className='pb-3' >
                    <PrimaryButton

                      sx={{ width: '100%', padding: '12px 40px' }}
                      type='submit'
                    >
                      <span style={{ fontSize: '22px', fontWeight: 900 }}> Sign In </span>

                    </PrimaryButton>
                  </Grid>
                  <Grid item>
                    <Link to='/Home/RegisterSmallScreen'>
                      <SecondaryButton
                        sx={{ width: '100%', padding: '12px 40px', }}
                        type='button'
                      >
                        <span style={{
                          fontSize: '22px', fontWeight: 500, background: "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                          "-webkit-background-clip": "text",
                          "-webkit-text-fill-color": "transparent"
                        }}> Register </span>
                      </SecondaryButton>
                    </Link>
                  </Grid>

                </Grid>
              </Grid>
            </Container>
          </Form>
        </Formik >

      </div>
      <Footer />

    </div >
  )
}

export default LoginOnSmallScreen

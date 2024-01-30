import React from 'react';
import { Formik, Form } from 'formik';
import styled from '@emotion/styled';
import { Container, Grid, Link, Typography } from '@mui/material';
import InputField from '../../../components/inputs/InputField'
import CountrySelect from '../../../components/inputs/countrySelect'
import RadioGroup from '../../../components/inputs/radioGroup'
import CheckBox from '../../../components/inputs/checkBox';
import { useFormikContext } from "formik";
import { Field } from 'formik';
import PrimaryButton from '../../../components/inputs/PrimaryButton'
import SecondaryButton from '../../../components/inputs/secondaryButton';


const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
};

const StyledLabel_2 = styled(Typography)({
  color: 'var(--Neutral - Neutral - 7, #717171)',
  fontfamily: 'Satoshi Variable',
  fontstyle: 'normal',
  fontweight: '500',
  fontSize:'22px',
  letterSpacing: '0.88',
  text: 'sm',
});

const StyledTypography = styled(Typography)({
  background: 'var(--Linear-BG, linear-gradient(71deg, #FF9F0A 0%, #FF375F 62.9%))',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
  display: 'inline-block',
  fontfamily: 'Epilogue',
  fontWeight: 700,
  fontStyle: 'normal',

});


const Sign_02 = ({ handleBack, handleNext }) => {

  const { submitForm, setFieldValue } = useFormikContext();

  return (
    <Form>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputField
              label="Password"
              name={"password"}
              placeholder="************"
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              label="Confirm Password"
              name={"password2"}
              placeholder="************"
            />
          </Grid>
          <Grid item xs={12}>
            <CountrySelect
              label="Select Your Country"
              name={"country"}
              // sx={{  border: "1.5px solid var(--Linear-BG, #FF9F0A)" }}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledLabel_2>
              I want to register as:
            </StyledLabel_2>
          </Grid>

          <RadioGroup
            onChange={(e) => {
              setFieldValue("user_type", e.target.value);
            }}
            name="user_type"
            sx={{marginLeft:'40px',
            "& .MuiTypography-root": {
              fontSize: "20px",
              padding: "9px",
            },
          }}
            options={[
              { label: "Individual", value: "Individual" },
              { label: "NGO", value: "NGO" }
            ]}
          />
          <Grid item xs={12}  alignItems="center" justifyContent="space-between"  >
              <CheckBox label="I agree with the"  />
              <Link
                href="#"
                underline="always"
                sx={{
                  padding: '10px 0',
                  marginLeft: '6px',
                  display: 'inline-block', // Set display to inline-block
                }}
              ><StyledTypography>
               Privacy Policy
                </StyledTypography>
              </Link>
          </Grid>

          <Grid item xs={12} flexDirection={'revert'} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>

            <SecondaryButton
              sx={{ width: '50%',  padding: '12px 40px',}}
              onClick={() => handleBack()}>
              Back
            </SecondaryButton>

            <PrimaryButton
              sx={{ width: '50%', padding: '12px 40px',}}
              onClick={() => submitForm() && handleNext()}>
              SignUp
            </PrimaryButton>
          </Grid>
        </Grid>
      </Container>
    </Form>
  );
};

export default Sign_02;

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
  fontSize: '22px',
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
    <Form className='pt-8'>
      <Container>
        <Grid container className='flex flex-col gap-3'>
          <Grid xs={12}>
            <InputField
              label="Password"
              sx={{
                padding: ' 16px 10px 16px var(--Spacing-20, 20px)', border: '2px solid var(--Linear-BG, #FF9F0A)',
                borderImage: 'linear-gradient(#FF9F0A, red) 20',
                // borderWidth: '3px',
                borderStyle: ' solid',
                borderRadius: '4px'
              }}

              name={"password"}
              placeholder="************"
            />
          </Grid>
          <Grid xs={12}>
            <InputField
              label="Confirm Password"
              sx={{
                padding: ' 16px 10px 16px var(--Spacing-20, 20px)', border: '2px solid var(--Linear-BG, #FF9F0A)',
                borderImage: 'linear-gradient(#FF9F0A, red) 20',
                // borderWidth: '3px',
                borderStyle: ' solid',
                borderRadius: '4px'
              }}

              name={"password2"}
              placeholder="************"
            />
          </Grid>
          <Grid xs={12}>
            <CountrySelect
              label="Select Your Country"
              name={"country"}
            // sx={{  border: "2px solid var(--Linear-BG, #FF9F0A)",borderRadius:'4px' }}
            />
          </Grid>
          <Grid xs={12}>
            <h1>
            </h1>

            <RadioGroup
              label={'I want to register as:'}
              onChange={(e) => {
                setFieldValue("user_type", e.target.value);
              }}
              name="user_type"
              sx={{
                // marginLeft: '40px',
                "& .MuiTypography-root": {
                  fontSize: "20px",
                  // padding: "9px",
                },
              }}
              options={[
                { label: "Individual", value: "Individual" },
                { label: "NGO", value: "NGO" }
              ]}
            />
          </Grid>

          <Grid xs={12} sx={{ display: 'flex', alignItems: 'center', }}
          // aligns="center" justifyContent="space-between"  
          >
            <CheckBox label="I agree with the" name={"Policy_privacy"} />
            <Link
              href="#"
              underline="always"
              sx={{
                width: "fit-content",
                textAlign: "center",
                color: "#FF9F0A",
                fontSize: 20,
                fontFamily: "Satoshi",
                fontWeight: 700,
                textDecoration: "underline",
                background: "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent",
                textDecoration: "underline",

                position: "relative",
              }}

            >
              <p className="gradient-button mb-0">Privacy Policy</p>
            </Link>
          </Grid>

          <Grid xs={12} flexDirection={'revert'} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>

            <SecondaryButton
              sx={{ width: '50%', padding: '12px 40px', borderRadius: '4px' }}
              onClick={() => handleBack()}>
              <h1 className='text-[22px] font-[satoshi] font-semibold text-black '>Back</h1>

            </SecondaryButton>

            <PrimaryButton
              sx={{ width: '50%', padding: '12px 40px', }}
              onClick={() => submitForm() && handleNext()}>
              <h1 className='text-[22px] font-[satoshi] font-semibold text-whites '> SignUp</h1>

            </PrimaryButton>
          </Grid>
        </Grid>
      </Container>
    </Form>
  );
};

export default Sign_02;

import React from 'react';
import { Form } from 'formik';
import InputField from '../../../components/inputs/InputField';
import Avatar from '@mui/material/Avatar';
import { useFormikContext } from "formik";
import PrimaryButton from '../../../components/inputs/PrimaryButton';
import { Grid, Container } from '@mui/material';
import UploadField from '../../../components/inputs/UploadField/Index';


const SignUp = ({ handleNext }) => {

  const { submitForm } = useFormikContext();

  return (
    <Form>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ left: '6rem', width: '200px', height: '200px' }}>
              <input 
              type='file'
              // hidden
              component={UploadField}
              />
            </Avatar>
          </Grid>
          <Grid item xs={12}>
            <InputField
              label="Name"
              name={"username"}
              placeholder="Enter your username"
            />
          </Grid>

          <Grid item xs={12}>
            <InputField
              label="Email"
              name={"email"}
              placeholder="Enter your username"
            />
          </Grid>
          <Grid item xs={12} >
            <InputField
              label="Mobile Number"
              name={"mobile_number"}
              fullWidth placeholder="Enter your mobile number"
            />
          </Grid>
          <Grid item xs={12} >
            <PrimaryButton sx={{ width: '100%', top: '2rem', padding: '12px 40px', }} onClick={() => { submitForm() && handleNext() }}>
              Next
            </PrimaryButton>
          </Grid>
        </Grid>
      </Container>
    </Form>

  );
};

export default SignUp;

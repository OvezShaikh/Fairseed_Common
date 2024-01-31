import React, { useRef } from 'react';
import { Form } from 'formik';
import InputField from '../../../components/inputs/InputField';
import Avatar from '@mui/material/Avatar';
import { useFormikContext } from "formik";
import PrimaryButton from '../../../components/inputs/PrimaryButton';
import { Grid, Container } from '@mui/material';
import images from '../../../constants/images';
import PreviewImage from '../../../components/inputs/PreviewImage/PreviewImage';


const SignUp = ({ handleNext }) => {

  const imgRef = useRef(null);

  const { submitForm, setFieldValue } = useFormikContext();

  return (
    <Form className='pt-8'>
      <Container>
        <Grid container spacing={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} className='flex flex-col justify-center items-center'>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: '150px', height: '150px', position: 'relative' }}>
                <input
                  type='file'
                  hidden
                  ref={imgRef}
                  sx={{ padding: ' 16px 10px 16px var(--Spacing-20, 20px)', border: '2px solid var(--Linear-BG, #FF9F0A)', borderRadius: '4px' }}

                  name='image'
                  onChange={(event) => setFieldValue('image', event.target.files[0])}
                />

                <div style={{ position: 'absolute', bottom: '0', right: '48px', zIndex: 1 }}>
                  <button onClick={() => imgRef.current.click()}>
                    <img src={images.EditIcon} />
                  </button>
                </div>
              </Avatar>

            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Name"
                sx={{
                  padding: ' 16px 10px 16px var(--Spacing-20, 20px)',
                  border: '2px solid var(--Linear-BG, #FF9F0A)',
                  borderImage: 'linear-gradient(#FF9F0A, red) 20',
                  // borderWidth: '3px',

                  borderRadius: '4px'
                }}

                name={"username"}
                placeholder="Enter your username"
              />
            </Grid>

            <Grid item xs={12}>
              <InputField
                label="Email"
                name={"email"}
                sx={{
                  padding: ' 16px 10px 16px var(--Spacing-20, 20px)',
                  border: '2px solid var(--Linear-BG, #FF9F0A)',
                  borderImage: 'linear-gradient(#FF9F0A, red) 20',
                  // borderWidth: '3px',

                  borderRadius: '4px'
                }}

                placeholder="Enter your username"
              />
            </Grid>
            <Grid item xs={12} >
              <InputField
                label="Mobile Number"
                sx={{
                  padding: ' 16px 10px 16px var(--Spacing-20, 20px)',
                  border: '2px solid var(--Linear-BG, #FF9F0A)',
                  borderImage: 'linear-gradient(#FF9F0A, red) 20',
                  // borderWidth: '3px',

                  borderRadius: '4px'
                }}


                name={"mobile_number"}
                fullWidth placeholder="Enter your mobile number"
              />
            </Grid>
          </Grid>
          <Grid xs={12} >
            <PrimaryButton sx={{ width: '100%', top: '2rem', padding: '12px 40px', fontSize: '22px', fontWeight: 900, fontFamily: 'satoshi' }} onClick={() => { submitForm() && handleNext() }}>
              Next
            </PrimaryButton>
          </Grid>
        </Grid>
      </Container>
    </Form>

  );
};

export default SignUp;

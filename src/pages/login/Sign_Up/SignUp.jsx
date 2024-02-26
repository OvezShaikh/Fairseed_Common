import React, { useRef } from 'react';
import { Form } from 'formik';
import InputField from '../../../components/inputs/InputField';
import Avatar from '@mui/material/Avatar';
import { useFormikContext } from "formik";
import PrimaryButton from '../../../components/inputs/PrimaryButton';
import { Grid, Container } from '@mui/material';
import { toast } from 'react-toastify';
import { SlPencil } from "react-icons/sl";
import ImagePreviewDialog from '../../../components/inputs/Cropper/ImagePreview';


const SignUp = ({ handleNext }) => {

  const imgRef = useRef(null);

  const { submitForm, isValid, setFieldValue , values } = useFormikContext();

  const handleNextClick = () => {
    if (isValid) {
      handleNext();
    } else {
      toast.error('Please fill all required fields.');
    }
  };

 

  return (
    <Form className='pt-8 max-tablet:pl-7'>
      <Container>
        <Grid container spacing={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} className='flex flex-col justify-center items-center'>
            <Avatar
                alt="Remy Sharp"
                src={values.image ? URL.createObjectURL(values.image) : "/static/images/avatar/1.jpg"}
                sx={{ width: '150px', height: '150px', position: 'relative', overflow: 'hidden' }}
              >
                <input
                  type='file'
                  hidden
                  ref={imgRef}
                  sx={{ padding: ' 16px 10px 16px var(--Spacing-20, 20px)', border: '2px solid var(--Linear-BG, #FF9F0A)', borderRadius: '4px' }}
                  name='image'
                  onChange={(event) => setFieldValue('image', event.target.files[0])}
                />

                <div style={{ color:'black',  position: 'absolute', bottom: '10px', right: '20px', zIndex: 1, transform: 'translate(50%, 50%)' }}>
                  <button onClick={() => imgRef.current.click()} style={{ background: 'white', border: 'none', padding: '0', borderRadius:'6rem', transform: 'translate(-50%, -50%)' }}>
                    <SlPencil />
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
            <PrimaryButton
              disabled={!isValid}
              sx={{ width: '100%', top: '2rem', padding: '12px 40px', fontSize: '22px', fontWeight: 900, fontFamily: 'satoshi' }}
              onClick={handleNextClick}
            >
              Next
            </PrimaryButton>
          </Grid>
        </Grid>
      </Container>
    </Form>

  );
};

export default SignUp;

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
  
  const { submitForm , setFieldValue } = useFormikContext();

  return (
    <Form>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ left: '6rem', width: '200px', height: '200px', position:'relative' }}>
              <input 
              type='file'
              hidden
              ref={imgRef}
              name='image'
              onChange={(event) => setFieldValue('image', event.target.files[0])}
              />
              
            <div style={{position:'absolute' , bottom:'0', right:'48px' , zIndex:1}}>
           <button onClick={()=>imgRef.current.click()}>
           <img src={images.EditIcon}/>
            </button> 
            </div>
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

import React from 'react';
import FormSlider from '../FormSlider';
import { Dialog, Button, Grid, DialogContent , DialogTitle ,Typography } from '@mui/material/';
import { useState } from 'react';
import { createTheme } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import useLogin from '../../../Hooks/useLogin'
import Formcom from './Login' 


const StyledTypography = styled(Typography)({
  background: 'var(--Linear-BG, linear-gradient(71deg, #FF9F0A 0%, #FF375F 62.9%))',
  WebkitBackgroundClip: 'text',
  fontSize: '46px',
  color: 'transparent',
  display: 'inline-block',
  fontfamily: 'Epilogue',
  fontWeight: 700,
  fontStyle: 'normal',

});

const UserLogin = () => {

  const { Initial_value, formValidation , loginData ,snackbar } = useLogin();


  const theme = createTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  
  const isSmallScreen = useMediaQuery('(max-width:600px)');

 

  console.log(Initial_value,"inissisi ")

  return (
    <>
      <button className="font-[satoshi] text-[18px] font-medium text-[#40444C]"
               onClick={handleClickOpen}>
       Login
      </button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={isSmallScreen}
        maxWidth='xl'
      >
         <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 16,
            top: 16,
            zIndex:1,
            backgroundColor:'#0000001a'
          }}
        >
          <CloseIcon />
        </IconButton>


        <DialogContent style={{ overflowY: 'hidden', overflowX: 'hidden' , padding: '0px' }}>
          <Grid container >
            <Grid item xs={12} sm={8} md={6} >
              <Grid item xs={12}>
                <DialogTitle >
                  <StyledTypography
                    component="h4"
                    variant="h4"
                    sx={{marginTop: '48px', marginLeft: '142px',}}
                  >
                  Login
                  </StyledTypography>
                </DialogTitle>
              </Grid>
              <Grid item xs={12}>
              <DialogTitle style={{marginLeft: '142px', }} >
              Welcome Back! Please enter you details
              </DialogTitle>

              </Grid>
              <Grid item xs={12} sx={{ padding: '48px 142px' }} >
              <Formcom  Initial_value={ Initial_value } formValidation={ formValidation } loginData={ loginData }/>
          </Grid>
          </Grid>
          {!isSmallScreen && (
            <Grid item xs={12} sm={isSmallScreen ? 12 : 8} md={6} >
                <FormSlider isSmallScreen={isSmallScreen} />
            </Grid>
          )}
        </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UserLogin;

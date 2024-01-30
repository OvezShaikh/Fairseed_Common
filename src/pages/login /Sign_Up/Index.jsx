import React from 'react'
import { Dialog, Button, Grid, DialogContent, DialogTitle, Typography } from '@mui/material/'
import { useState } from 'react';
// import {createTheme } from '@mui/system'
import useMediaQuery from '@mui/material/useMediaQuery';
import FormSlider from '../FormSlider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import Sign_Stepper from './Stepper';



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

const UserSignUp_02 = ({handleClickOpensignup}) => {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const [open, setOpen] = useState(false);

  // const handleClickOpensignup = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      <button
        onClick={handleClickOpensignup}
      >
        <span style={{fontSize:'22px' ,fontWeight:500}}> Register </span>
        
      </button>

      <Dialog
        sx={{
          padding: '0px !important', "& .MuiDialogContent-root": {
            padding: '0px !important'
          }
        }}
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
            zIndex: 1,
            // color: '#0000001a',
            backgroundColor: '#0000001a'
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent style={{ overflowY: 'hidden', overflowX: 'hidden' }}>
          <Grid container >
            <Grid item xs={12} sm={8} md={6} >
              <Grid item xs={12}>
                <DialogTitle >
                  <StyledTypography
                    component="h4"
                    variant="h4"
                    sx={{ marginTop: '48px', marginLeft: '142px', padding: '0px' }}
                  >
                    Sign Up
                  </StyledTypography>
                </DialogTitle>
              </Grid>
              <Grid item xs={12} sx={{ padding: '0px 142px 48px 142px' }} >
                <Sign_Stepper />
              </Grid>
            </Grid>
            {!isSmallScreen && (
              <Grid item xs={12} sm={isSmallScreen ? 12 : 8} md={6} sx={{ overflowY: 'hidden' }} >
                <FormSlider />
              </Grid>
            )}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default UserSignUp_02

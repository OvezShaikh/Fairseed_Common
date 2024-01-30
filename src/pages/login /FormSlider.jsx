import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import images from '../../constants/images';



const StyledSlider = styled(Slider)({
  width: '200%',
  height: '100%', // Set your desired height here
  // height:'full',
  position: 'relative',
  overflowX: 'hidden',
  objectFit: 'contain',
  '& .slick-dots': {
    bottom: '5rem', // Adjust dot position if needed
  },


});

const OverlayContainer = styled('div')({
  position: 'absolute',
  width: '630px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end', // Adjusted to align at the bottom
  zIndex: 1,

});

const OverlayBox = styled('div')({

  width: '80%',
  background: 'linear-gradient(92deg, rgba(255, 255, 255, 0.27) 0%, rgba(255, 255, 255, 0.16) 100%)',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  maxWidth: '80%',
  margin: '0 auto',
  backdropFilter: 'blur(15px)',
  // zIndex: 1,
});




const FormSlider = ({ isSmallScreen }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
      {!isSmallScreen && (
        <Grid item xs={12} sm={12} md={6}  >
          <StyledSlider {...settings}>
            <img src={images.LoginSideImg} />
            <img src={images.LoginSideImg} />
            <img src={images.LoginSideImg} />
            s          </StyledSlider>
          <OverlayContainer sx={{ bottom: '4rem', right: '1', marginLeft: '60px' }}>
            <OverlayBox sx={{ borderRadius: '10px' }} >
              <Typography variant="h6" style={{ color: '#fff' }}>
                "Empower minds, transform lives. Support <br />
                education today for a brighter tomorrow."
              </Typography>
            </OverlayBox>
          </OverlayContainer>
        </Grid>
      )}
    </>
  );
};

export default FormSlider;

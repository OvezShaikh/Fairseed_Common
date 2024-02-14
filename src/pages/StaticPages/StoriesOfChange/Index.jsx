import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from "../../../constants/images";
import sliderimg2 from "../../../assets/sliderimg2.png";
import Navigation from "../../../components/layout/Navigation/Index"
import Footer from '../../../components/layout/Footer';



function StoriesOfChange() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"Story Of Change"} heading={"Stories of Change"} />
            </div>

            <div className='max-w:[1920px] max-desktop:w-[635px] max-tablet:w-[342px]'>
                <img style={imageStyle} src={images.sliderimg2}>
                </img>
            </div>

            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
            <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Introduction:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>Welcome to the transformative journey of "Aisha".
                    Our story begins with a vision - a vision to create lasting change in the lives of those who need it the most.</p>
                <br /><br />
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Meet Aisha:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Meet Aisha, a resilient 12-year-old girl from a rural village.
                    Aisha dreams of becoming a doctor but faces barriers due to limited educational resources. The narrative unfolds as we embark on a mission to turn Aisha's dreams into reality.<br /><br />
                </p>

                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>The Challenge:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Limited access to education hinders Aisha's potential. Many like her face similar challenges, caught in a cycle of poverty with aspirations left unfulfilled.
                    The story of change aims to break this cycle and unlock a brighter future. <br /><br /></p>

                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Our Intervention:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>“FairSeed” focuses on providing scholarships, educational materials, and mentorship programs. We believe that education is the key to unlocking doors of opportunity, and every child deserves a chance to pursue their dreams. <br /><br /></p>

                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Impact and Transformation:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Through the generosity of our donors, we've witnessed incredible transformations. Aisha, once limited by circumstance, is now excelling academically. Her journey symbolizes the broader impact on the community, creating a ripple effect of positive change. <br /><br /></p>
            </div>


            <Footer />

        </div>
    )
}

export default StoriesOfChange;
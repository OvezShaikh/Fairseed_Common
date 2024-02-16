import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from "../../constants/images";
import ourteam from "../../assets/ourteam.png"
import Navigation from "../../components/layout/Navigation/Index"
import Footer from '../../../src/components/layout/Footer';



function OurTeam() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center '>
            <Navbar />
            <div className="w-full pb-10 font-extrabold">
                <Navigation label={"Our-Team"} heading={"Our Team"} />
            </div>

            <div className='max-w:[846px] max-desktop:w-[634px] max-tablet:w-[342px] mt-4'>
                <img style={imageStyle} src={images.ourteam}>
                </img>
            </div>

            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-20 max-desktop:px-2 max-tablet:px-6 ' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold underline decoration-solid '>Our Team: </h1> <br /> <br />



                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>We are a dedicated team of diverse professionals across the various fields and domains who ought to provide a easily accessible & safe digital platform to provide all kinds of support to the ambitious aspirants in fulfilling their educational goals through crowd-funding and chasing their dreams by turning them into realities.
                </p><br /><br />


                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>Our team at 
                <span className='font-bold'> FairSeed Technology Foundation (FTF) </span>
                 is a group of like-minded professionals who aspires and envisions in bringing a remarkable change in the field of Education using the power of Technology and Crowd-funding together. We believe in connecting the needy & less-privileged ones who are in dire need of funds and finances in order to meet their educational needs. During this era of Digitalization, Knowledge is playing a pivotal role and not everyone is privileged enough to fulfill their dreams of getting education, keeping this in mind, a group of like-minded visionaries came up with this idea of “FairSeed” and started sowing seeds of kindness in order to empower educational needs of those who wants to study higher and become successful. FairSeed will make sure that the meritorious students are not left behind due to lack of funds.
                </p>
                <br /><br />


                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}> FairSeed is more than a platform; it's a movement dedicated to transforming lives through the power of education. With a profound commitment to nurturing potential and breaking down barriers, FairSeed is your gateway to support impactful educational initiatives through the art of crowdfunding. 

                </p><br /><br />

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}> Join us on this journey to sow the seeds of change, nurture the dreams of tomorrow's leaders, and be a part of creating a brighter future through education. Welcome to FairSeed Community, where every contribution counts, and every act of kindness plants the seeds of empowerment.

                </p><br /><br /><br /> <br />




                


            </div>




            
            <Footer />
           

        </div>
    );
}

export default OurTeam;
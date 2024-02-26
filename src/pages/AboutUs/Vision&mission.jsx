import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from "../../constants/images";
import VissionMission from "../../assets/VissionMission.png"
import Navigation from "../../components/layout/Navigation/Index"
import Footer from '../../../src/components/layout/Footer';



function VisionMission() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center '>
            <Navbar />
            <div className="w-full pb-10 font-extrabold">
                <Navigation label={"Vision-&-Mission"} heading={"Vision & Mission"} />
            </div>

            <div className='max-w:[846px] max-desktop:w-[634px] max-tablet:w-[342px] mt-4'>
                <img style={imageStyle} src={images.VissionMission}>
                </img>
            </div>

            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-20 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold underline decoration-solid '>Our Vision:</h1> <br /> <br />



                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>At FairSeed Technology Foundation (FTF), we envision a world where Education is not limited by barriers, and where every individual has access to quality learning opportunities. Our vision is to create a thriving global community that empowers education through the transformative potential of technology and crowd-funding. We aspire to foster a future where every student's dreams are nurtured, every teacher's innovations are supported, and every educational institution flourishes.
                </p><br /><br />


                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>Building Tomorrow's Leaders:
                    Our vision is to nurture a generation of educated, compassionate, and capable leaders who are equipped to tackle global challenges. FairSeed envisions education as the cornerstone of a thriving society, with each learner contributing to a better world. We aspire to be a driving force behind innovative learning solutions, bridging gaps, and ensuring that no student's potential is left untapped.<br/><br/>
                    FairSeed's vision is to break down barriers to education, ensuring that economic and social circumstances do not hinder the pursuit of knowledge. We dream of a world where education is a birthright, not a privilege.
                </p>
                <br /><br /><br /><br />





                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold underline decoration-solid '>Our mission at FairSeed is to:</h1><br /> <br /><br />



                <ul>
                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                        
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Harness the power of technology and crowd-funding to revolutionize education.
                            <br /><br />
                        </span>
                    </li></ul>



                <ul>
                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                       
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Develop a transparent and effective digital platform that connects passionate donors, educators, and educational organizations with impactful campaigns.

                            <br /><br />
                        </span>
                    </li></ul>




                <ul>
                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                        
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Support all types of educational needs, scholarships, classroom enhancements, skill development programs, and innovative initiatives, we strive to bridge the educational gap and empower underserved communities.

                            <br /><br />
                        </span>
                    </li></ul>




                <ul>
                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                        
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Be the catalyst that propels individuals and communities towards growth, opportunity, and sustainable change. We are committed to building a community that believes in the potential of every learner and works tirelessly to make educational dreams come true.

                            <br /><br />
                        </span>
                    </li></ul>



                <ul>
                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                        
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Connect those who believe in the potential of education with campaigns that will shape a brighter future for learners of all ages.



                            <br /><br />
                        </span>
                    </li></ul>


                <ul>
                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                        
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Inspire generosity and collaboration to support education. To amplify the impact of education through the power of collective giving.



                            <br /><br />
                        </span>
                    </li></ul>


                



                

                <br /><br />




            </div>





            <Footer />

        </div>
    );
}

export default VisionMission;
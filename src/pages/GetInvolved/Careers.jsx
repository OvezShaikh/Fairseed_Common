import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from '../../constants/images';
import Navigation from "../../components/layout/Navigation/Index";
import Footer from '../../components/layout/Footer';



function Careers() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"Careers"} heading={"Careers"} />
            </div>

            <div className=' flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}><br />
                <h1 className='desktop:text-start max-desktop:text-start!important max-tablet:text-start text-[32px] max-desktop:text-[28px] max-tablet:text-[20px] font-bold' style={{ whiteSpace: "pre-line" }}>Join Our Team at FairSeed</h1><br />
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 ' style={{ whiteSpace: "pre-line" }}>At FairSeed, we're on a mission to empower creators, dreamers, and innovators worldwide. We believe in the transformative power of crowdfunding to bring ideas to life and make a positive impact on the world. If you're passionate about innovation, creativity, and being part of a dynamic team, you've come to the right place.</p>
            </div>
            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[32px] max-desktop:text-[28px] max-tablet:text-[28px] font-bold'>Why Work with Us?</h1><br /><br />

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>1. Impactful Work:</h2>

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>At FairSeed, your work goes beyond a job; it's a mission. You'll be part of a team that enables individuals and communities to turn their dreams into reality. Your contributions will directly impact the success of projects that matter, fostering innovation and positive change.<br /><br /></p>
                <br /><br />
                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>
                    2. Inclusive Culture:</h2>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Diversity is our strength. We celebrate uniqueness and foster an inclusive environment where every team member feels valued. Your ideas and perspectives matter, contributing to a rich tapestry of creativity and collaboration. Join us and be part of a community that believes in the power of diverse voices.<br /><br />
                </p>

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>3. Growth and Learning:</h2>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>We invest in the growth of our team members.
                    At FairSeed, you'll have access to continuous learning opportunities, mentorship programs, and resources to enhance your skills.
                    Whether you're a seasoned professional or just starting your career, we're committed to supporting your development and helping you reach your full potential.<br /><br /></p>

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'> 4. Passion-Driven Team:</h2>


                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Our team is united by a shared passion for making a difference. Join a group of individuals who are enthusiastic about the possibilities of crowdfunding.
                    From marketing mavens to tech wizards and creative minds, we're all here to create a positive impact and support each other along the way.<br /><br /><br />
                </p>



            </div>


            <Footer />

        </div>
    )
}

export default Careers;
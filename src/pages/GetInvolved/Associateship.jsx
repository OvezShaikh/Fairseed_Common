import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from '../../constants/images';
import sliderimg2 from "../../assets/sliderimg2.png";
import Navigation from "../../components/layout/Navigation/Index";
import Footer from '../../components/layout/Footer';



function Associateship() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"Associateship"} heading={"Associateship"} />
            </div>

            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6 max-tablet:py-4' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
            <h1 className='desktop:text-center max-desktop:text-start!important max-tablet:text-start text-[40px] max-desktop:text-[32px] max-tablet:text-[24px] font-bold' style={{ whiteSpace: "pre-line" }}> Join Our Associates Program and Shape the Future!</h1>
            <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-5' style={{ whiteSpace: "pre-line" }}>Welcome to our Associates Program – a unique opportunity for you to become an integral part of the creative journey. As an associate, you play a crucial role in bringing innovative projects to life. Here's why you should join:</p>
            </div>

            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
            <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Impactful Collaboration</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>Becoming an associate with our crowdfunding community transcends the conventional supporter dynamic; it's an invitation to partake in an impactful collaboration that extends far beyond the financial contributions. As an associate, you are not merely a bystander, but an essential participant in the creative journey. Your involvement becomes a driving force, a catalyst for turning ambitious ideas into tangible realities. By choosing to be an associate, you are investing not only in projects but in the very essence of innovation and creativity.</p>
                <br /><br />
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Exclusive Perks</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Joining our Associates Program comes with a suite of exclusive perks designed to express our gratitude for your commitment. Early access to project updates ensures that you are at the forefront of the creative process, witnessing every milestone and breakthrough before the wider audience. Special recognition is not just a token of appreciation but a testament to the integral role associates play in the success of our projects.<br /><br />
                </p>

                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Behind-the-Scenes Access</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Curiosity is a natural trait, and as an associate, you have the golden ticket to satisfy it. Gain exclusive behind-the-scenes access to the creative process. Immerse yourself in the making of the projects you support, from the initial conceptualization to the final execution. Watch as ideas evolve into reality, and creators navigate the challenges and triumphs of their creative endeavors.<br /><br /></p>

                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Influence and Voting Rights</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Your voice matters, and as an associate, you have the opportunity to influence the direction of the projects you support. Through polls, surveys, and interactive discussions, you become an integral part of the decision-making process. This level of involvement goes beyond traditional crowdfunding, where your impact is felt not only through financial backing but through shaping the very trajectory of the projects you believe in.<br /><br /></p>

                
            </div>


            <Footer />

        </div>
    )
}

export default Associateship;
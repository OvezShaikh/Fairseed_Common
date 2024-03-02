import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from '../../constants/images';
import sliderimg2 from "../../assets/sliderimg2.png";
import Navigation from "../../components/layout/Navigation/Index";
import Footer from '../../components/layout/Footer';



function Supportacampaign() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"Support a campaign"} heading={"Support a campaign"} />
            </div>

            <div className=' flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 ' style={{ whiteSpace: "pre-line" }}>At the heart of our platform is a commitment to supporting a diverse array of impactful projects that align with various causes. Whether it's empowering education, environmental conservation, community development, or innovation, there's a cause that resonates with you and we're inviting you to play a pivotal role in bringing positive change to life!</p>
            </div>

            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Financial Support:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>Your contribution, no matter the size, is a direct investment in making dreams a reality. From launching innovative products to supporting community initiatives, your funds play a crucial role.</p>
                <br /><br />
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>
                    Spread the word:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Be the megaphone that amplifies our message. Share our campaign with your friends, family, and colleagues. Your word of mouth can spark a chain reaction of support.<br /><br />
                </p>

                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Social Media Advocacy</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Follow us on social media, like, share, and comment on our updates. Your engagement not only keeps you in the loop but also expands our reach, connecting us with more potential supporters.<br /><br /></p>

                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Volunteer your Skills:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>If you have unique skills or expertise, consider volunteering your time. From marketing and design to project management, your talents can contribute to the success of our campaigns.<br /><br /></p>

                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Why Support Us:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Supporting our crowdfunding platform is more than just a financial contribution; it's about becoming a catalyst for positive change. Your support fuels innovation, empowers creators, and strengthens communities.<br /><br /></p>

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>We genuinely appreciate your consideration and support. Every bit of involvement brings us closer to achieving our collective goals.<br /><br /></p>

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Ready to make a difference? Visit our campaigns page to explore our projects and contribute.<br /><br /></p>

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Thank you for being an integral part of our transformative journey.<br /><br /></p>


            </div>


            <Footer />

        </div>
    )
}

export default Supportacampaign;
import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from '../../constants/images';
import Navigation from "../../components/layout/Navigation/Index";
import Footer from '../../components/layout/Footer';



function Partnerwithus() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"Partner-with-us"} heading={"Partner with us"} />
            </div>

            <div className=' flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}><br />
                <h1 className='desktop:text-start max-desktop:text-start!important max-tablet:text-start text-[32px] max-desktop:text-[28px] max-tablet:text-[20px] font-bold' style={{ whiteSpace: "pre-line" }}>Partner With Us</h1><br />
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 ' style={{ whiteSpace: "pre-line" }}>At FairSeed, we believe in the power of collaboration to drive innovation and make a positive impact on the world. Partnering with us opens up a world of possibilities, where your organization can contribute to the success of creative projects and be a part of the crowdfunding revolution. Explore the exciting opportunities and benefits of partnering with FairSeed.</p>
            </div>
            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[32px] max-desktop:text-[28px] max-tablet:text-[20px] font-bold'>Why Partner with FairSeed?</h1><br /><br />

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>1. Amplify Your Reach:</h2>

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>Collaborate with FairSeed to amplify your brand's visibility and reach a diverse community of creators, backers, and enthusiasts.
                    As a partner, your organization will be featured prominently, gaining exposure to our engaged audience and the broader crowdfunding ecosystem.
                    <br /><br /></p>
                <br /><br />
                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>

                    2. Support Innovation:</h2>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Join us in supporting the dreams and innovations of creators worldwide.
                    Your partnership enables the development of groundbreaking projects that make a lasting impact.
                    Be a key player in fostering creativity, entrepreneurship, and positive change across various industries.
                    <br /><br />
                </p>

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>3. Access to Exclusive Opportunities:</h2>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>As a partner, unlock exclusive opportunities to connect with our community.
                    Participate in events, webinars, and promotional campaigns tailored to showcase your organization's commitment to innovation.
                    Leverage our platform to engage with a vibrant and passionate audience.<br /><br /></p>

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'> 4. Strategic Collaboration:</h2>


                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Benefit from strategic collaboration with FairSeed.
                    We work closely with our partners to create customized initiatives that align with their goals and values.
                    From co-branded campaigns to joint events, we tailor our partnerships to ensure mutual success and maximum impact.
                    <br /><br /><br />
                </p>

                <h1 className='text-start text-[32px] max-desktop:text-[28px] max-tablet:text-[20px] font-bold'>How to Partner with Us</h1><br /><br />
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Joining forces with FairSeed is easy and rewarding. We welcome partnerships with organizations that share our passion for innovation and positive change. To explore partnership opportunities, please reach out to our Partnerships Team at partnerships@fairseed.com. We look forward to exploring how we can create meaningful collaborations together.
                    <br /><br /></p>

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1 pb-0'>Let's Build a Future of Innovation Together!<br/>
                    Partner with FairSeed and be a catalyst for positive change. Together, we can empower creators and make dreams a reality. Join us on this exciting journey of collaboration, creativity, and innovation.
                    <br /><br /></p>

            </div>


            <Footer />

        </div>
    )
}

export default Partnerwithus;
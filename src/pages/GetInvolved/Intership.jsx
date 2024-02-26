import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from '../../constants/images';
import sliderimg2 from "../../assets/sliderimg2.png";
import Navigation from "../../components/layout/Navigation/Index";
import Footer from '../../components/layout/Footer';



function Internship() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"Internship"} heading={"Internship"} />
            </div>

            <div className=' flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}><br />
                <h1 className='desktop:text-start max-desktop:text-start!important max-tablet:text-start text-[36px] max-desktop:text-[30px] max-tablet:text-[20px] font-bold' style={{ whiteSpace: "pre-line" }}>Why Intern with FairSeed?</h1><br />
                <h1 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>1. Meaningful Impact:</h1><br />
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 ' style={{ whiteSpace: "pre-line" }}>At FairSeed, we are on a mission to transform ideas into reality. As an intern, you won't be fetching coffee or lost in mundane tasks. Instead, you'll be an integral part of a team dedicated to empowering creators. Your work will directly contribute to the success of innovative projects that shape our platform. We believe in the power of every individual to make a difference, and as an intern, you'll have the opportunity to leave your mark on the dynamic world of crowdfunding.</p>
            </div>
            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>2. Professional Development:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>We understand that internships are a crucial stepping stone in your professional journey. At FairSeed, we are committed to providing you with a hands-on, immersive experience. You'll work alongside seasoned professionals, gaining insights into the latest industry trends and best practices. Through mentorship and collaborative projects, you'll enhance your skills, build a strong foundation, and develop a deeper understanding of your chosen field. Our fast-paced tech environment ensures that you're not just an observer; you're an active participant in your own growth.</p>
                <br /><br />
                <h1 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>
                    3. Inclusive Culture:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Diversity is at the heart of innovation, and at FairSeed, we celebrate uniqueness. As an intern, you'll be part of a diverse and inclusive community where your ideas are not only welcomed but valued. We believe that a variety of perspectives fosters creativity and problem-solving. Your voice matters, and we encourage you to bring your authentic self to the table. You'll have the chance to collaborate with individuals from different backgrounds, learning and growing together in an environment that thrives on mutual respect and understanding.<br /><br />
                </p>

                <h1 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>4. Forward-Thinking Innovation:</h1>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Innovation is the heartbeat of FairSeed. As an intern, you'll be immersed in a culture that embraces new ideas and challenges the status quo. Whether you're a software development intern crafting cutting-edge code, a marketing intern shaping compelling campaigns, or a UX design intern creating user-centric interfaces, you'll be at the forefront of industry innovation. Our commitment to staying ahead of the curve ensures that you'll be working on projects that not only reflect current trends but also anticipate the future landscape of crowdfunding technology.<br /><br /><br/></p>

                

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Embark on a journey of growth, creativity, and impact with FairSeed. Join us, and together, let's shape the future of crowdfunding.<br /><br /></p>


            </div>


            <Footer />

        </div>
    )
}

export default Internship;
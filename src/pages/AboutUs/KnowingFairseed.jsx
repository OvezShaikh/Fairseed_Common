import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from "../../constants/images";
import Knowingfairseed from "../../assets/Knowingfairseed.png";
import Navigation from "../../components/layout/Navigation/Index"
import Footer from '../../../src/components/layout/Footer';
import "../../App.css"


function KnowingFairseed() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"KnowingFairseed"} heading={"KnowingFairseed"} />
            </div>

            <div className='max-w:[1920px] max-desktop:w-[635px] max-tablet:w-[342px]'>
                <img style={imageStyle} src={images.Knowingfairseed}>
                </img>
            </div>

            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold underline decoration-solid '>Welcome to FairSeed Technology Foundation (FTF)</h1> <br /> <br />

                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Sow Knowledge, Reap Change: Crowdfunding Education with FairSeed</h1><br />

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>At FairSeed Technology Foundation (FTF), we envision a world where education is not a privilege, but a right for every individual.
                    We believe that “Education” is the key to unlocking a brighter future for individuals and communities alike. We are on a mission to make quality education accessible to all by harnessing the power of technology and crowd-funding.FairSeed is dedicated to supporting educational causes across India, creating a powerful network of change-makers who believe in the transformative potential of education thereby enabling passionate individuals, schools, organizations, and communities to come together and make a real impact. Join us in our mission to pave the way for a brighter future by making quality education accessible to all and creating a world where learning knows no bounds!At FairSeed Technology Foundation (FTF), we envision a world where education is not a privilege, but a right for every individual. We believe that “Education” is the key to unlocking a brighter future for individuals and communities alike. We are on a mission to make quality education accessible to all by harnessing the power of technology and crowd-funding.
                    FairSeed is dedicated to supporting educational causes across India, creating a powerful network of change-makers who believe in the transformative potential of education thereby enabling passionate individuals, schools, organizations, and communities to come together and make a real impact. Join us in our mission to pave the way for a brighter future by making quality education accessible to all and creating a world where learning knows no bounds!
                </p>
                <br /><br /><br /><br />





                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Why Choose FairSeed Technology Foundation (FTF)?</h1><br /> <br /><br />



                <ul>
                        <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                    <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>Transforming Lives through Education: </span>
                    <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>At FTF, we firmly believe that education holds the key to breaking the cycle of poverty and creating opportunities for growth.
                        By contributing to educational causes on our platform, you're directly impacting the lives of students, teachers, and educational institutions across India who is in dire need of funds.
                        <br /><br />
                    </span>
                    </li></ul> 



                <ul>
                        <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                    <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>
                        Regular Impact Reports: </span>
                    <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>We understand that you want to see the impact of your contributions. Our platform provides real-time updates on the progress of each campaign, showcasing how your support is making a difference. Watch as students thrive, teachers innovate, and educational institutions flourish, all thanks to your generosity.

                        <br /><br />
                    </span>
                    </li></ul> 




                        <ul>
                        <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>

                        Empower Educational Dreams: </span>
                    <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>We provide a platform for educators, students, and educational institutions to bring their dreams to life.
                        Whether it's supporting underprivileged students, empowering teachers, enhancing educational infrastructure, or fostering innovation in classrooms, FTF is the bridge that connects your generosity to impactful change by connecting you with like-minded supporters who share your passion for education.
                        <br /><br />
                    </span>
                        </li></ul> 
                        



                        <ul>
                        <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>

                                Diverse Causes:  </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>From funding scholarships for underprivileged students to support innovative classroom projects and educational programs, FairSeed hosts a wide range of campaigns. Whether you're passionate about primary education, higher education, vocational training, or any other form of learning, you can find a cause that resonates with you.

                                <br /><br />
                            </span>
                            </li></ul>



                        <ul>
                        <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>

                            Transparent and Accountable:  </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>We understand the importance of trust when it comes to crowdfunding and at FTF we value transparency and accountability. Every campaign on FairSeed undergoes a thorough verification process, ensuring that funds are directed toward genuine educational projects. We aim at providing regular updates on campaign progress and the utilization of funds. Watch your contributions make a tangible difference and track the journey of change you're helping to create.


                                <br /><br />
                            </span>
                            </li></ul>


                        <ul>
                        <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>

                            Global Reach:  </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Our online platform transcends geographical boundaries, enabling you to reach a diverse and expansive network of potential supporters. No matter where you are, FairSeed offers a global stage for your educational initiatives.



                                <br /><br />
                            </span>
                            </li></ul>


                        <ul>
                        <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>

                            Effortless and Safe Giving:  </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'> FairSeed's user-friendly interface makes it simple to browse campaigns, contribute, and share your favorite causes and it is 100% safe to perform any kind of financial transactions using our Payment Gateway. Whether you're an individual, a corporate entity, or an educational institution, FTF offers a seamless giving experience that aligns with your philanthropic goals.




                                <br /><br />
                            </span>
                            </li></ul>


                        
                        <ul>
                        <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-disc ml-4'>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold'>

                            Collaborative Community Engagement: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>FairSeed isn't just a fundraising platform; it's a vibrant community of education enthusiasts. Join a passionate community of like-minded individuals who share your commitment to education. Connect, collaborate, and amplify your impact by engaging with fellow donors, educators, and change agents. Share stories, exchange ideas, and collaborate to drive positive change.



                                <br /><br />
                            </span>
                        </li></ul>
                       
                        <br /><br />
                   



            </div>





            <Footer />

        </div>
    );
}

export default KnowingFairseed;
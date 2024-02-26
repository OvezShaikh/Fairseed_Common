import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/layout/Navigation/Index";
import Footer from '../../components/layout/Footer';



function HowItWorks() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"How-It-Works"} heading={"How It Works"} />
            </div>


            <br />
            <div className=' flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-12 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold underline decoration-solid '>For Beneficiaries:</h1><br />


                <div className='pl-0'>
                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-medium'>Signup with FairSeed: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Create an account with FairSeed using the Signup option. 
                                <br /><br />
                            </span>
                        </li></ul>



                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-medium'>
                            Create a Campaign: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Go to your profile and create an educational cause for yourself or anyone whom you want to support. Tell your story through compelling visuals and narratives, upload images and relevant KYC documents, and set a funding goal that aligns with your fundraiser needs.

                                <br /><br />
                            </span>
                        </li></ul>




                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-medium'>

                            Spread the Word: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Utilize our built-in tools and resources to reach a wider audience. Share your campaign across social media, email, and other platforms to generate buzz and attract supporters.
 


                                <br /><br />
                            </span>
                        </li></ul>




                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-medium'>

                            Receive Support: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Donors can contribute to your campaign with just a few clicks. Whether it's a small donation or a larger contribution, every bit counts towards your goal.


                                <br /><br />
                            </span>
                        </li></ul>



                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-medium'>

                            Achieve Impact:  </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>
                            Once your campaign reaches its funding goal, put the funds to work and bring your educational initiative to life. Share progress updates and success stories with us, and we will share your success story with the donors, showcasing the impact of their support. 


                                <br /><br />
                            </span>
                        </li></ul>


                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]'>
                            
                            <span className=' text-[32px] max-desktop:text-[28px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Signup → Create a Campaign/Fundraiser → Amplify → Track → Share receipts/bills & testimonials → Express Gratitude → Spread the word about FTF



                                <br /><br />
                            </span>
                        </li></ul>


                   


                </div><br/><br/>


                
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold underline decoration-solid '>For Donors/Sympathizers:</h1><br />


                <div className='pl-0'>
                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-medium'>Discover Inspiring Campaigns: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Browse through a curated selection of educational campaigns that are making a difference in India. From supporting rural schools to technology-driven learning initiatives, there's a cause that resonates with every supporter. 
                                <br /><br />
                            </span>
                        </li></ul>



                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-medium'>
                            Make a Meaningful Contribution: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Contribute to campaigns that align with your values and aspirations. Your donations, whether big or small, directly contribute to the advancement of education and the empowerment of learners.

                                <br /><br />
                            </span>
                        </li></ul>




                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-medium'>

                            Share and Spread the Word: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Share the campaigns you support with your network to amplify their impact. By spreading the word through social media, emails, and conversations, you inspire others to join the movement and create a collective wave of change.
 


                                <br /><br />
                            </span>
                        </li></ul>




                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-medium'>

                            Witness Transformative Impact: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Stay updated on the progress of campaigns and witness the transformative impact of your contributions. See classrooms flourish, educational resources multiply, and dreams turn into reality, all thanks to your unwavering support.



                                <br /><br />
                            </span>
                        </li></ul>



                   

                    <ul>
                        <li className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]'>
                            
                            <span className=' text-[32px] max-desktop:text-[28px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Discover Campaigns → Make a Contribution → Share and Amplify → Track Progress → Spread the word about FTF



                                <br /><br />
                            </span>
                        </li></ul>


                   


                    
                </div>
            </div>


            <Footer />

        </div>
    )
}

export default HowItWorks;
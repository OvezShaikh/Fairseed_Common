import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from "../../constants/images";
import valuepage from "../../assets/valuepage.png"
import Navigation from "../../components/layout/Navigation/Index"
import Footer from '../../../src/components/layout/Footer';



function Objectivesandvalues() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"Objectives-&-values"} heading={"Objectives and values"} />
            </div>

            <div className='max-w:[1920px] max-desktop:w-[635px] max-tablet:w-[342px]'>
                <img style={imageStyle} src={images.valuepage}>
                </img>
            </div>

            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-20 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-extrabold underline decoration-solid '>Objectives: </h1> <br /> <br />


                <ul>
                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-decimal ml-4'>

                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Financial Assistance to aspiring individuals and education projects through crowd funding and institutional funding.
                            <br /><br />
                        </span>
                    </li>


                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-decimal ml-4'>
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Interdisciplinary project-based learning through internships.

                            <br /><br />
                        </span>
                    </li>



                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-decimal ml-4'>
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Research and innovations.

                            <br /> <br />
                        </span>
                    </li>



                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-decimal ml-4'>
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>College and Career readiness through technology education and soft skills assistance.

                            <br /><br />
                        </span>
                    </li>



                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-decimal ml-4'>
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Support legacy education organization to adapt latest learning models and to promote highest level of student learning.

                            <br /><br />
                        </span>
                    </li>



                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-decimal ml-4'>
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Involves Beneficiaries, Teachers, Families, Industry professionals, local organizations and college / universities in achieving the desired education ecosystem.
                            <br /><br />
                        </span>
                    </li>



                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-decimal ml-4'>
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Support Entrepreneurship and startup mindset by necessary preparation through education.
                            <br /><br />
                        </span>
                    </li>



                    <li className='display:list-item text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] list-decimal ml-4'>
                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Spread awareness about education subsidization and help avail the benefits offered by Govt. and NGOs across the country.
                            <br /><br />
                        </span>
                    </li></ul>






                <h1 className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-extrabold underline decoration-solid '>Core Values:</h1><br /> <br /><br />


                <div className='pl-0'>
                    <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>Empowering Underprivileged Students: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>At FTF, we firmly believe that education holds the key to breaking the cycle of poverty and creating opportunities for growth.
                                By contributing to educational causes on our platform, you're directly impacting the lives of students, teachers, and educational institutions across India who is in dire need of funds.
                                <br /><br />
                            </span>
                        </li></ul>



                    <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>
                                Inclusivity: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>We are dedicated to ensuring that education is accessible to all, regardless of background or circumstance. We believe in the transformative power of education to empower individuals, communities, societies, and nations as a whole.

                                <br /><br />
                            </span>
                        </li></ul>




                    <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                                Be a Changemaker: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>By supporting campaigns on FairSeed, you become an integral part of creating a ripple effect of lasting change, fostering a future where education flourishes and transforms lives. We measure our success by the real-world impact we create in the lives of students, teachers, and educational institutions.


                                <br /><br />
                            </span>
                        </li></ul>




                    <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                                Tailored Impact: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Our platform offers a diverse range of educational campaigns, allowing you to choose the causes that resonate with your values and interests.


                                <br /><br />
                            </span>
                        </li></ul>



                    <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                                Transparent Tracking:  </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>
                                Transparent Tracking: Stay engaged with the progress of campaigns through real-time updates, photos, and success stories, so you can witness the tangible impact of your contributions. We maintain the utmost transparency in our operations, ensuring that donors and beneficiaries are informed about the progress and impact of campaigns.


                                <br /><br />
                            </span>
                        </li></ul>


                    <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]'>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                            Leverage Crowdfunding:  </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Be part of a powerful community of donors, educators, and change-makers who come together to amplify the impact of their contributions through the collective strength of crowdfunding.



                                <br /><br />
                            </span>
                        </li></ul>


                    <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                            Accessible Giving:  </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'> Whether you're an individual, corporation, or institution, FairSeed offers an easy-to-use platform for contributing to educational causes, fostering a culture of accessible giving.



                                <br /><br />
                            </span>
                        </li></ul>



                    <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                            Direct Connection: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Engage with campaign organizers, beneficiaries, and fellow supporters, creating a direct line of connection that adds a personal touch to your philanthropic journey.




                                <br /><br />
                            </span>
                        </li></ul>


                        <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                            Community Collaboration: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>We foster collaboration among donors, educators, campaigners, and volunteers to create a collective force for positive change. We strive to create a vibrant community of individuals who are passionate about education and dedicated to creating a brighter future.




                                <br /><br />
                            </span>
                        </li></ul>


                        <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                            Innovation: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'> We encourage and support innovative approaches to education, enabling educators to create impactful learning experiences.




                                <br /><br />
                            </span>
                        </li></ul>


                        <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                            Accountability: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>We hold ourselves accountable for the trust placed in us by donors, campaigners, and the educational community.





                                <br /><br />
                            </span>
                        </li></ul>



                        <ul>
                        <li className=' text-[32px] max-desktop:text-[24px] max-tablet:text-[18px]  '>
                            <span className='text-start text-[32px] max-desktop:text-[24px] max-tablet:text-[18px] font-semibold'>

                            Sustainability: </span>
                            <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>We are committed to ensuring the sustainability of our platform and the educational initiatives we support, creating lasting change.





                                <br /><br />
                            </span>
                        </li></ul>

                        <span className=' text-[28px] max-desktop:text-[24px] max-tablet:text-[18px]  tracking-wide gap-16 pt-1'>Through our unwavering commitment to these values, FairSeed aims to be a beacon of hope, a catalyst for change, and a driving force behind the education revolution. Join us in planting the seeds of education and nurturing a world of endless possibilities.





                                <br />
                            </span>


                    <br /><br />

                </div>


            </div>





            <Footer />

        </div>
    );
}

export default Objectivesandvalues;
import React from 'react';
import Navbar from '../../components/layout/Navbar';
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import images from '../../constants/images';
import Navigation from "../../components/layout/Navigation/Index";
import Footer from '../../components/layout/Footer';



function Reports() {
    const navigate = useNavigate();
    const imageStyle = {
        borderRadius: '2%',
    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <Navbar />
            <div className="w-full pb-10">
                <Navigation label={"Reports"} heading={"Reports"} />
            </div>

            <div className=' flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}><br />
                <h1 className='desktop:text-start max-desktop:text-start!important max-tablet:text-start text-[32px] max-desktop:text-[28px] max-tablet:text-[20px] font-bold' style={{ whiteSpace: "pre-line" }}>Reports Hub:</h1><br />
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 ' style={{ whiteSpace: "pre-line" }}>Unlock the Power of Data: Dive into Your Crowdfunding Insights<br />
                    Welcome to the Reports Hub at FairSeed. Here, we believe that informed decisions lead to impactful results. Explore a wealth of data and analytics to gain valuable insights into the performance of your campaigns, understand your backers, and make data-driven decisions to enhance your crowdfunding experience.</p>
            </div>
            <div className='pt-[72px] flex-row text-left  max-w:[1920px] max-desktop:w-[718px] max-tablet:w-[400px] gap-[10px] px-10 max-desktop:px-2 max-tablet:px-6' style={{ whiteSpace: "pre-line", fontFamily: "satoshi" }}>
                <h1 className='text-start text-[32px] max-desktop:text-[28px] max-tablet:text-[20px] font-bold'>Campaign Analytics:</h1><br /><br />

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>1. Campaign Performance Overview:</h2>

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1' style={{ whiteSpace: "pre-line" }}>Get a snapshot of your campaign's key metrics, including funding progress, backer engagement, and social reach. Track your project's journey and make informed decisions to optimize performance.
                    <br /><br /></p>
                <br /><br />
                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>

                    2. Funding Sources:</h2>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Dive into the details of funding sources. Whether it's pledges from individual backers, corporate partnerships, or other avenues, see where your project's financial support is coming from.
                    <br /><br />
                </p>

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>3. Success Factors:</h2>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Uncover the common factors that contribute to successful campaigns on our platform. Learn from best practices and discover strategies that can elevate your project's chances of success.<br /><br /></p>

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>4. Community Engagement:</h2>


                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Track engagement trends across the platform. Understand how backers discover and engage with projects, and leverage these insights to enhance your project's visibility and appeal.
                    <br /><br /><br />
                </p>


                <h1 className='text-start text-[32px] max-desktop:text-[28px] max-tablet:text-[20px] font-bold'>Downloadable Reports:</h1><br /><br />
                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>1. Customizable Data Downloads:</h2>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Tailor your reports to focus on the metrics that matter most to you. Download comprehensive data sets in various formats, allowing for in-depth analysis and integration with your internal tools.<br /><br /></p>

                <h2 className='text-start text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] font-bold pb-1'>2. Historical Performance:</h2>
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>Access historical data on your campaigns and contributions. Analyze past performance to identify growth patterns, understand trends, and make strategic decisions for future projects.<br /><br /></p>









                <h1 className='text-start text-[32px] max-desktop:text-[28px] max-tablet:text-[20px] font-bold'>How to Access Reports:</h1><br /><br />
                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1'>To access your personalized reports, log in to your FairSeed account and navigate to the "Reports" section. For customized data downloads, explore our downloadable reports feature.
                    If you have any questions or need assistance, our support team is here to help at support@fairseed.com.
                    <br /><br /></p>

                <p className='inline-block leading-normal text-[28px] max-desktop:text-[24px] max-tablet:text-[18px] align-text-bottom tracking-wide gap-16 pt-1 pb-0'>
                    Empower Your Crowdfunding Journey with Insights!<br />
                    Knowledge is power, and at FairSeed, we empower you with the insights you need to succeed.
                    Explore your reports, make informed decisions, and continue making a lasting impact with your creative projects.
                    <br /><br /></p>

            </div>


            <Footer />

        </div>
    )
}

export default Reports;
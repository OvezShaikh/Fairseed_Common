import Navbar from "../../components/layout/Navbar";
import React, { useState } from "react";
import Navigation from "../../components/layout/Navigation/Index";
import { FaPlus, FaMinus } from "react-icons/fa";
import Footer from "../../components/layout/Footer";

const data = [
    {
        title: "What is FairSeed Technology Foundation (FTF)?",
        content: ` Fairseed Technology Foundation (FTF) is the brainchild of a group of visionaries who aspire to bring remarkable change in the field of Education using the power of Technology and Crowd-funding. During this era of Digitalization, Knowledge Economy Education is playing a pivotal role. Keeping this in mind, FairSeed will make sure that the meritorious students are not left behind due to lack of funds. We are a dedicated team of professionals across various fields and domains that aim to provide a digital platform to support ambitious aspirants in fulfilling their educational goals through crowd-funding and chasing their dreams by turning them into realities.
                            FTF is India's first education-focused & technology-based online crowd-funding platform dedicated to revolutionizing the way Education is funded and accessed. Our mission is to bridge the financial gap in education by connecting passionate learners, educators, and educational institutions with a global community of generous donors and supporters. The objective is to undertake this operation purely with the intent of bringing socio-economic transformation in the lives of needy students, without seeking to generate any commercial surplus.`,
    },
    {
        title: "How FairSeed Technology Foundation (FTF) works?",
        content: "FairSeed Technology Foundation (FTF) simply connects to the generous pool of Donors to the verified Educational Campaigns, raised by Students and/or Educators individually or by any NGO who supports Education. Individuals and NGOs can create a Campaign (Create a Campaign - Button) and if the Campaign meets FTF platform’s requirements, it is approved to become LIVE & accessible for the Donors to contribute using highly safe & secure payment gateways.",
    },
    {
        title: "How can I create a Campaign?",
        content: `It is very simple. To create a Campaign you need to follow these steps:
       a. Create your account by “Sign Up” at FairSeed Technology Foundation (FTF).
       b. Activate your user account via clicking on the link available in email and then Login with your email ID and Password.
       c. Click the “Create a Campaign” button and enter all the required details with supporting documents. Follow the document “How to create a Campaign (link).”
       d. Once your case is submitted, you can access your Campaign from the User dashboard.`,
    },
    {
        title: "Do I have to write a Campaign description in a specific format?",
        content: "Yes. Please refer How to write content for a Campaign",
    },
    {
        title: "How much time does it take for my Campaign to get approved?",
        content: "It could take between 1 to 5 days depending upon quality of the Campaign content and supporting documents submitted by the Campaign creator. Campaign Creator will receive a KYC verification call from one of our Associates of the FairSeed Technology Foundation (FTF) team and once the Campaign is approved an email notification will be received by Campaign creator.",
    },
    {
        title: "How do I request for funds withdrawal?",
        content: `Once your fund goal is successfully achieved or your Campaign is completed as per due date, you will have to execute the following steps for initiating withdrawal request.
a.Add recipient bank account details as per disbursement policy of FairSeed Technology Foundation (FTF), via Dashboard -> Withdrawal -> Configure Withdrawal Details section.
b.Submit the request for withdrawal via dashboard of FairSeed Technology Foundation (FTF).
c.Once the request for withdrawal is received by the FairSeed Technology Foundation (FTF) system, the FTF accounts team will verify recipient information and will initiate the disbursement as per disbursement policy of FairSeed Technology Foundation (FTF).`,
    },
    {
        title: "Can I create multiple Campaigns from my user account?",
        content: "Yes, you can create multiple Campaigns on behalf of the beneficiaries. It is preferred that if possible the Individual who is in need of the Educational finds to create his/ her own Campaign by himself/herself.",
    },
    {
        title: "Why are personal identification documents of Fund Seekers required?",
        content: "FairSeed Technology Foundation (FTF) team requires personal identification documents of Funds seeker to ensure that the needy individual is eligible for the funds and to fulfill Platform`s legal requirements.",
    },
    {
        title: "Do I have to write a Campaign description in a specific format?",
        content: "Yes. Please refer How to write content for a Campaign",
    },
    {
        title: "How do I know when anyone donates for my Campaign?",
        content: "You can find it on the donation tab provided on your Campaign link. You will also receive an email notification, when any donation is received on your LIVE Campaign.",
    },

    {
        title: "For what duration my Campaign would be active on FairSeed Technology Foundation (FTF) platform for the donations?",
        content: "Your Campaign will be active till the end date entered during the Campaign creation. The default maximum duration is 45 days and subject to change as per FTF policy.",
    },
    {
        title: "Do I have to be an NGO to create a Campaign?",
        content: "No. Both NGOs and Individuals can create a Campaign.",
    },
    {
        title: "Are there any upper fund limits on different category of Campaigns?",
        content: "Yes. As per policy of FairSeed Technology Foundation (FTF)",
    },
    {
        title: "How much amount will I receive after my Campaign is completed?",
        content: <p>If donors have chosen to pay, utilizing the “Razorpay” services then the entire donation would be charging 2% of deduction by Razorpay + 3% of deduction by FTF as it`s Admin fees.

            If donors have chosen direct fund transfer in the FairSeed Technology Foundation (FTF)`s account provided in the donation link, then only 3% of the amount would be deducted and rest of the amount raised will be disbursed to the beneficiaries.

            For further details please check the <a className="text-red-600" href="/Home/Privacy-Policy">pricing policy </a>page of FairSeed Technology Foundation (FTF).</p>,
    },
    {
        title: "Can I edit my Campaign while it is active on the website?",
        content: "Yes, you can and it will again go through the approval process.",
    },
    {
        title: "Can I raise funds for a friend/ relative or needy person as well?",
        content: "Yes, you can raise funds for anyone who is in dire need of funds and is eligible for the donations.",
    },
    {
        title: "Does the raised amount reach the individual directly?",
        content: <p>Please check the <a className="text-red-600" href="/Home/Privacy-Policy">pricing policy </a> of FairSeed Technology Foundation (FTF).</p>,
    },
    {
        title: "Is it safe to donate money online at FairSeed Technology Foundation (FTF)?",
        content: "Yes, FairSeed Technology Foundation (FTF) has integrated a highly protected and automated payment gateway through which you can safely and securely donate your amount online.",
    },
    {
        title: "What if I don't reach my requested Fund goal?",
        content: "FairSeed Technology Foundation (FTF) doesn't guarantee for required fund's generation however our team does its best to fund-raise the required Goal amount. We advice and request all the Campaign creators to promote his/ her Campaign by self as per “How to promote a Campaign on Social Media",
    },
    {
        title: "When can I request withdrawal of the raised amount?",
        content: "Once your Campaign is successfully completed or completed by the end date, you can submit the withdrawal request through your Dashboard.",
    },
    {
        title: "Will I get an 80G tax-exempt certificate for my donations?",
        content: "Yes. FairSeed Technology Foundation (FTF) is Sec 12 A and 80 G compliant, Section 8, Indian registered non- profitable company. You can request for an 80G tax exemption receipt/ certificate from FairSeed Technology Foundation (FTF) via email at info@fairseed.org",
    },
    {
        title: "What about transparency issues?",
        content: "Every Campaign creator has access to a dedicated Smart Dashboard to view and manage all the activities for his/ her Campaign.",
    },
    {
        title: "Who can donate?",
        content: "Any Indian citizen from anywhere in the world can donate online using any Indian bank account.",
    },
    {
        title: "Can a Non-Resident Indian donate on the Platform?",
        content: "Yes, an NRI user can also donate by using any Indian bank account.",
    },
    {
        title: "Does FairSeed Technology Foundation (FTF) have a dedicated team for guidance to “How to Create a Campaign?",
        content: "Yes. FairSeed Technology Foundation (FTF) has a dedicated Campaign Support cell for those who are not educated enough or tech savvy to create a Campaign by himself/herself. Please contact on info@fairseed.org",
    },
    {
        title: "Does the FairSeed team promote my Campaign?",
        content: "Yes, FairSeed Technology Foundation (FTF) has a dedicated team for the Campaign promotion at various Social Media & Digital Channels, but we encourage you to promote it first in your friends and family.",
    },
    {
        title: "Cash donations/Cheque pick-up facility for donation is available?",
        content: "Cash donations/ cheque pick-up facility is not available. You can donate via the bank transfer option and make RTGS/NEFT/IMPS directly into an FTF bank account and mention the Campaign ID you wish to support or donate to.",
    },
    {
        title: "I have more questions, what should I do?",
        content: "You may contact us at info@fairseed.org and we will be glad to answer you as soon as we can, in`sha-Allah.",
    },
];

function Index() {
    const [openDialogs, setOpenDialogs] = useState(Array(data.length).fill(false));

    const handleToggle = (index) => {
        // Create a new array to toggle the open state of the clicked FAQ item
        const newOpenDialogs = [...openDialogs];
        newOpenDialogs[index] = !newOpenDialogs[index];
        setOpenDialogs(newOpenDialogs);
    };

return (
    <>
        <Navbar />
        <div className="flex flex-col">
            <Navigation
                label={"FAQ's"}
                heading={"Frequently Asked Questions (FAQs)"}
            />
        </div>
        <div className="flex justify-center flex-col items-center gap-10 mt-20">
            {data.map((item, index) => (
                <div key={index} className="w-[80%] max-desktop:w-[90%] max-tablet:w-[96%] border-3 max-desktop:border-spacing-2 max-tablet:border-1 border-gray-400 rounded-lg">
                    <div className="flex justify-between items-center p-[20px] max-desktop:p-[10px] max-tablet:p-[10px] "
                        onClick={() => handleToggle(index)}>
                        <p className="text-[1.5rem] max-desktop:text-[1.2rem] mt-1 max-tablet:text-[0.85rem] font-bold font-satoshi" style={{
                            background: "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontFamily: "Satoshi",
                        }}>
                            {item.title}
                        </p>
                        {openDialogs[index] ? (
                            <FaMinus
                                className="size-7 max-desktop:sie-5 max-tablet:size-4 text-red-500 cursor-pointer"
                            />
                        ) : (
                            <FaPlus
                                className="size-7 max-desktop:sie-5 max-tablet:size-4 text-red-500 cursor-pointer"
                            />
                        )}
                    </div>
                    <div
                        className={`w-full rounded-lg mt-2 duration-300 pt-0 ease-in-out overflow-hidden ${openDialogs[index] ? "max-h-[1000px] py-6 px-10 max-desktop:px-6 max-tablet:px-5" : "max-h-0 py-0 px-5"
                            }`}
                    >
                        <p className={`text-[1rem] max-desktop:text-[0.85rem] max-tablet:text-[0.7rem] font-medium font-satoshi text-gray-700 `}>
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <Footer />
    </>
);
}

export default Index;

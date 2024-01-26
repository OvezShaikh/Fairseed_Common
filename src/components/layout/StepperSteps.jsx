import { Grid } from "@mui/material";
import AccountDetails from '../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/AccountDetails'
import CampaignDetails from '../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/CampaignDetails'
import CompleteKYC from '../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/CompleteKYC'
import Test from "../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/test";
import Test2 from "../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/test2";
import Test3 from "../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/test3";
import Test4 from "../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/test4";




import { Stepper } from "./Stepper/IndexNew";
import { useState } from "react";

const StepperSteps = () => {
    const [activeStep, setActiveStep] = useState(0);

    const [users, setUsers] = useState([]);

    const goBack = () => {
        setActiveStep((prev) => prev - 1);
    };
    const Next = () => {
        setActiveStep((prev) => prev + 1);
    }

    return (
        <>
            <Grid container>
                <Stepper
                    activeStep={activeStep}
                    steps={[
                        {
                            position: 0,
                            step: "Campaign Details",
                            component: <Test
                                goBack={goBack}
                                Next={Next}
                                setActiveStep={0} />,
                        },
                        {
                            position: 1,
                            step: "Your Story",
                            component: (
                                <Test2
                                    setUsers={setUsers}
                                    goBack={goBack}
                                    Next={Next}
                                    setActiveStep={1}
                                />
                            ),
                        },

                        {
                            position: 2,
                            step: "Account Details",
                            component: <Test3
                                users={users}
                                goBack={goBack}
                                Next={Next}
                                setActiveStep={2} />,
                        },
                        {
                            position: 3,
                            step: "Complete KYC",
                            component: <Test4
                                users={users}
                                goBack={goBack}
                                Next={Next}
                                setActiveStep={3} />,
                        }
                    ]}
                />
            </Grid>
        </>
    );
};
export default StepperSteps

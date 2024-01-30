import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import { useForm, FormProvider, useFormContext, Form } from "react-hook-form";
import images from "../../../constants/images";
import PrimaryButton from "../../inputs/PrimaryButton";
import SecondaryButton from "../../inputs/secondaryButton";
import CompleteKYC from "../../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/CompleteKYC";
import AccountDetails from "../../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/AccountDetails";
import YourStory from "../../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/YourStory";
import CampaignDetails from "../../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/CampaignDetails";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Test from "../../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/test";
import Test2 from "../../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/test2";
import Test3 from "../../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/test3";
import Test4 from "../../../pages/Campaigns/CreateCampaigns/CreateCampaignsSteppes/test4";



const styleStep = {
  "& .MuiStepLabel-label.Mui-active": {
    color: "var(--Cool-Grey-Cool-Grey-10, #383A42)",
    fontFamily: "Satoshi",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
  },
  "& .Mui-disabled": {
    "& .MuiStepIcon-root": {
      color: "white",
      fontWeight: 900,
      border: "1px solid gray",
      borderRadius: "50%",
      "& .MuiStepIcon-text": {
        fill: "#white",
      },
    },
    "& .MuiStepLabel-label": {
      color: "var(--Cool-Grey-Cool-Grey-10, #383A42)",
      fontFamily: "Satoshi",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
    },
  },
  "& .Mui-active": {
    "& .MuiStepIcon-root": {
      color: "#06B217",
      fontWeight: 900,
      padding: "5px",
      border: "1px solid #06B217",
      borderRadius: "50%",
      "& .MuiStepIcon-text": {
        fill: "#06B217",
      },
    },
    // "& .MuiStepLebal-root .MuiStepLabel-labelContainer .MuiStepLabel-label":{
    //   color:'green'
    // },
    // "& .MuiStepLabel-root .MuiStepLabel-alternativeLabel":{
    //     color:'red'
    // },
    // "& .MuiStepLabel-labelContainer": {
    //   color: "red",
    // },

    "& .MuiStepConnector-line": {
      borderColor: "#06B217",
    },
  },
  "& .Mui-completed": {
    "& .MuiStepIcon-root": {
      color: "#06B217",
    },
    "& .MuiStepConnector-line": {
      borderColor: "#06B217",
    },
    "& .MuiStepLabel-label": {
      color: "var(--Cool-Grey-Cool-Grey-10, #383A42)",
      fontFamily: "Satoshi",
      fontSize: "24px",
      fontStyle: "normal",
      fontWeight: 700,
    },
  },
};
const styleSecondaryButton = {
  width: "100%",
  height: "100%",
  padding: "10px",
  fontSize: "24px",
  fontWeight: 700,
  borderRadius: "12px",
};
const stylePrimaryButton = {
  width: "100%",
  height: "100%",
  padding: "10px",
  fontSize: "24px",
  fontWeight: 700,
  borderRadius: "12px",
};
const initialValues = {
  campaign_image: null,
  title: "",
  goal_amount: "",
  location: "",
  category: "",
  zakat_eligible: false,
  end_date: "",
  story: '',
  summary: '',
  document: null,
  rasing_for: "",
  account_holder_name: "",
  account_number: "",
  bank_name: "",
  branch_name: "",
  ifsc_code: "",
  passbook_image: null,
  adhar_card: "",
  adhar: null,
  pan_card: "",
  pan_card_image: null,
}

// const BasicForm = () => {
//   return <Test />;
// };
// const SecondStep = () => {
//   return <Test2 />;

// };
// const ContactForm = () => {
//   return <Test3 />;
// };
// const PersonalForm = () => {
//   return <Test4 />;
// };


export default function HorizontalLinearStepper() {
  const navigate = useNavigate();







  const [activeStep, setActiveStep] = useState(0);
  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  const [skippedSteps, setSkippedSteps] = useState([]);
  const getSteps = () => {
    return ["Campaign Details", "Your Story", "Account Details", "Complete KYC"];
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Test handleBack={handleBack} handleNext={handleNext} />;

      case 1:
        return <Test2 handleBack={handleBack} handleNext={handleNext} />;
      case 2:
        return <Test3 handleBack={handleBack} handleNext={handleNext} />;
      case 3:
        return <Test4 handleBack={handleBack} handleNext={handleNext} />;
      default:
        return "unknown step";
    }
  }
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const { mutate } = useCreateOrUpdate({ url: '/campaign/add_campaign' });

  // const onSubmit = (values) => {
  //   console.log(values, "======formdata");
  //   if (activeStep == steps.length - 1) {

  //     console.log(values, "======formdata");
  //     mutate(values)

  //     setActiveStep(activeStep + 1);
  //   } else {
  //     setActiveStep(activeStep + 1);
  //     setSkippedSteps(
  //       skippedSteps.filter((skipItem) => skipItem !== activeStep)
  //     );
  //   }
  // };



  const onSubmit = (Values) => {
    // const files = Values.target.files;
  const formData = new FormData();
  formData.append("file", Values.adhar);
  formData.append("file", Values.pan_card_image);
  formData.append("file", Values.document);
  formData.append("file", Values.passbook_image);
  formData.append("file", Values.campaign_image);
      mutate(formData);
  }

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };


  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} sx={styleStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography variant="h3" align="center">
            <div className="w-full px-[140px] py-[89px] flex flex-col justify-center items-center gap-3">
              <h1 className="text-[#06B217] text-[48px] font-[satoshi] font-bold">
                Success!
              </h1>
              <img
                className="w-[176px] h-[176px] "
                src={images.Success}
                alt=""
              />
              <p
                className="text-[24px] font-[satoshi] font-semibold"
                style={{
                  background:
                    "linear-gradient(71deg, #06B217 0%, #FF375F 62.9%)",
                  "-webkit-background-clip": "text",
                  "-webkit-text-fill-color": "transparent",
                }}
              >
                Your Campaign has been submitted for further Approval !
              </p>
            </div>
          </Typography>
          <div className="flex  gap-3">
            <SecondaryButton
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={styleSecondaryButton}
            >
              Back
            </SecondaryButton>
            {/* {isStepOptional(activeStep) && (
                <Button
                  // className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )} */}
            <PrimaryButton
              sx={stylePrimaryButton}
              onClick={() => navigate(-1)}
            >
              Home
            </PrimaryButton>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Formik
            initialValues={initialValues}
            // validationSchema
            onSubmit={(Values) => onSubmit(Values)}
          >
            <>
              {getStepContent(activeStep)}

              {/* <div className="flex mt-4 gap-5">
                <SecondaryButton
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={styleSecondaryButton}
                >
                  Back
                </SecondaryButton> */}
              {/* {isStepOptional(activeStep) && (
                <Button
                  // className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )} */}
              {/* <PrimaryButton onClick={onSubmit} sx={stylePrimaryButton} type="submit">
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </PrimaryButton>
              </div> */}
            </>
          </Formik>
        </React.Fragment>
      )}
    </Box>
  );
}

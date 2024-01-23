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

function getSteps() {
  return ["Campaign Details", "Your Story", "Account Details", "Complete KYC"];
}
const BasicForm = () => {
  const { control } = useFormContext();
  return <CampaignDetails />;
};
const SecondStep = () => {
  return (
    //
    <YourStory />
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return <AccountDetails />;
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return <CompleteKYC />;
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <SecondStep />;
    case 2:
      return <ContactForm />;
    case 3:
      return <PersonalForm />;
    default:
      return "unknown step";
  }
}
export default function HorizontalLinearStepper() {
  const navigate = useNavigate();


  const methods = useForm({
    defaultValues: {
      // firstName: "",
      // lastName: "",
      // nickName: "",
      // emailAddress: "",
      // phoneNumber: "",
      // alternatePhone: "",
      // address1: "",
      // address2: "",
      // country: "",
      // cardNumber: "",
      // cardMonth: "",
      // cardYear: "",
    },
  });
  // const formData = new FormData();
  // formData.append("file", data.files);

  const [activeStep, setActiveStep] = useState(0);
  // const handleReset = () => {
  //   setActiveStep(0);
  // };
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const { mutate } = useCreateOrUpdate({ url: "http://143.110.253.227:8000/campaign/add-campaign" });

  const handleNext = (data) => {
    console.log(data, "======formdata");
    if (activeStep == steps.length - 1) {
      // console.log(getValues(),"<=====>uuuhhuuhhu")
      // mutate(getValues())

      // fetch("https://jsonplaceholder.typicode.com/comments")
      //   .then((data) => data.json())
      //   .then((res) => {
      console.log(data, "======formdata");

      //   });
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <Box sx={{ width: "60%" }}>
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
          <FormProvider {...methods}>
            <Form
              sx={{ display: "flex", gap: "20px" }}
              onSubmit={methods.handleSubmit(handleNext)}
            >
              {getStepContent(activeStep)}

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
                <PrimaryButton sx={stylePrimaryButton} type="submit">
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </PrimaryButton>
              </div>
            </Form>
          </FormProvider>
        </React.Fragment>
      )}
    </Box>
  );
}

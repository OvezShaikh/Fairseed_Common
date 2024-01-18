import React, { useState } from "react";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@mui/material";
import { useForm, FormProvider, Form } from "react-hook-form";

import { styled } from "@mui/system";

import images from "../../../constants/images";

import CompleteKYC from "./CreateCampaignsSteppes/CompleteKYC";
import AccountDetails from "./CreateCampaignsSteppes/AccountDetails";
import CampaignDetails from "./CreateCampaignsSteppes/CampaignDetails";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginRight: theme.spacing(1),
//   },
// }));
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const styleStep = {
  "& .Mui-active .MuiStepLabel-alternativeLabel": {
    color: "red",
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
    // "& .MuiStepLabel-root .MuiStepLabel-alternativeLabel":{
    //     color:'red'
    // },
    // "& .MuiStepLabel-alternativeLabel":{
    //   color:'red',
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

const StyledButton_1 = styled(Button)({
  background: "linear-gradient(71deg, #FF9F0A 0%, #FF375F 100%)",
  color: "white",
  display: "flex",
  width: "100%",
  height: "100%",
  alignitems: "flex-start",
  textTransform: "none",
  borderRadius: "12px",
  padding: "10px",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  fontFamily: "satoshi",
  // "& .Mui-active": {
  //   color: "warning.main",
  // },
  // "& .MuiButton-text":{
  //   color:'red'
  // }
});
const StyledButton_2 = styled(Button)({
  background: "black",
  WebkitBackgroundClip: "text",
  display: "flex",
  width: "100%",
  height: "100%",
  alignitems: "flex-start",
  textTransform: "none",
  borderRadius: "12px",
  border: "1px solid var(--Linear-BG, #FF9F0A)",
  padding: "10px",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 700,
  fontFamily: "satoshi",
});

function getSteps() {
  return ["Campaign Details", "Your Story", "Account Details", "Complete KYC"];
}
const BasicForm = () => {
  <CampaignDetails />;
};
const YourStory = () => {
  <YourStory />;
};
const ContactForm = () => {
  <AccountDetails />;
};
const PersonalForm = () => {
  <CompleteKYC />;
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <YourStory />;
    case 2:
      return <ContactForm />;
    case 3:
      return <PersonalForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  // const classes = useStyles();
  // const navigate = useNavigate();

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      nickName: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const handleReset = () => {
    setActiveStep(0);
  };
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
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

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <Box sx={{ width: "60%" }}>
      <Stepper alternativeLabel activeStep={activeStep} sx={styleStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography
          //       variant="caption"
          //       align="center"
          //       style={{ display: "block" }}
          //     >
          //       optional
          //     </Typography>
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
            <StyledButton_2
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </StyledButton_2>
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
            <StyledButton_1 onClick={() => navigate(-1)}>Home</StyledButton_1>
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
                <StyledButton_2
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </StyledButton_2>
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
                <StyledButton_1 onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </StyledButton_1>
              </div>
            </Form>
          </FormProvider>
        </React.Fragment>
      )}
    </Box>
  );
};

export default LinaerStepper;

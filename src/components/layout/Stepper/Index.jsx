import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography, TextField } from "@mui/material";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
  Form,
} from "react-hook-form";
import { colors } from "../../../constants/theme";
import InputField from "../../inputs/InputField";
import SelectField from "../../inputs/SelectField";
import { FormLabel } from "react-bootstrap";
import images from "../../../constants/images";
import UploadField from "../../inputs/UploadField/Index";
import Checkbox from "../../inputs/checkBox";
import ReactQuill from "react-quill";
import DropZone from "../../inputs/dragAndDrop/index";
import RadioGroup from "../../inputs/radioGroup";
import PrimaryButton from "../../inputs/PrimaryButton";
import SecondaryButton from "../../inputs/secondaryButton";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
  borderRadius:'12px',
};
const stylePrimaryButton = {
  width: "100%",
  height: "100%",
  padding: "10px",
  fontSize: "24px",
  fontWeight: 700,
  borderRadius:'12px'
};

function getSteps() {
  return ["Campaign Details", "Your Story", "Account Details", "Complete KYC"];
}
const BasicForm = () => {
  const { control } = useFormContext();
  return (
    <div className="pb-20">
      <Box className="flex py-10 justify-center items-center">
        <DropZone
          name="files"
          acceptedFiles={{ "file/*": [".xlsx"] }}
          maxFiles={1}
          // onChange={() => submitForm()}
          // isLoading={isUploadLoading}
        />
      </Box>
      <Controller
        control={control}
        name="Title"
        render={({ field }) => (
          <InputField
            name={"Title"}
            label={"Title of the Campaign:"}
            placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Amount"
        render={({ field }) => (
          <InputField
            name={"Amount"}
            label={"Amount to be raised:"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="Location"
        render={({ field }) => (
          <SelectField
            name={"Location"}
            label={"Location:"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="Category"
        render={({ field }) => (
          <SelectField
            name={"Category"}
            label={"Choose a Category:"}
            {...field}
          />
        )}
      />

      <div className="inline-flex w-full">
        <div className="w-[50%]">
          <Controller
            control={control}
            name="Category"
            render={({ field }) => (
              <>
                <FormLabel
                  className="text-capitalize font-medium d-flex align-items-center"
                  style={{
                    padding: "4px 8px 8px 8px",
                    color: colors.text.main,
                    fontSize: "20px",
                    fontWeight: 700,
                    fontFamily: "satoshi",
                    fontStyle: "normal",
                    height: "22px",
                  }}
                >
                  Is the Campaign Zakaat eligible?
                  <span className="text-red-600">*</span>
                </FormLabel>
                  
                  <Checkbox name={"test"} label={"Yes"} />
                
              </>
            )}
          />
        </div>
        <div className="w-[50%]">
          <Controller
            control={control}
            name="Category"
            render={({ field }) => (
              <div>
                <InputField
                  type={"date"}
                  name={"Category"}
                  label={"Choose a Category:"}
                  {...field}
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};
const YourStory = () => {
  const { control } = useFormContext();
  const [valueText, setValueText] = useState("");
  const [valueText2, setValueText2] = useState("");

  return (
    <div className="py-20 ">
      <Controller
        control={control}
        name="Story"
        render={({ field }) => (
          <div className="pb-[8rem] ">
            <FormLabel
              className="text-capitalize font-medium d-flex align-items-center"
              style={{
                padding: "4px 8px 8px 8px",
                color: colors.text.main,
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "satoshi",
                fontStyle: "normal",
                height: "22px",
              }}
              // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
            >
              Tell us your Story:
              <span className="text-red-600">*</span>
            </FormLabel>
            <div className="h-[250px]">
              <ReactQuill
                theme="snow"
                name={"Story"}
                value={valueText}
                placeholder={`Write a story that does justice to your cause and make the supporter click the Donate button.
                
  Pointers:Explain who you are raising it for.

  Explain why you are raising funds?
                
  Make an Appeal.`}
                onChange={setValueText}
              />
            </div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="Summary"
        render={({ field }) => (
          <div className="pb-[8rem]">
            <FormLabel
              className="text-capitalize font-medium d-flex align-items-center"
              style={{
                padding: "4px 8px 8px 8px",
                color: colors.text.main,
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "satoshi",
                fontStyle: "normal",
                height: "22px",
              }}
              // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
            >
              Summary:
              <span className="text-red-600">*</span>
            </FormLabel>
            <div className="h-[119px]">
              <ReactQuill
                theme="snow"
                name={"Summary"}
                value={valueText}
                placeholder="Summarize in 100 words max."
                style={{ "& .ql-editor": { minHeight: "50px" } }}
                onChange={setValueText2}
              />
            </div>
          </div>
        )}
      />
      <Controller
        control={control}
        name="Documents"
        render={({ field }) => (
          <div className="">
            <UploadField
              name={"Documents"}
              label="Documents:"
              multiple={true}
              placeholder={
                "Upload marksheets, Medical records, Fees Structure etc."
              }
              {...field}
            />
          </div>
        )}
      />
    </div>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <div className="py-20">
      
      <Controller
        control={control}
        name="Campaign"
        render={({ field }) => (
          <RadioGroup
            name={"Campaign"}
            options={[
              { label: "Self", value: "Self" },
              { label: "Family/Friends", value: "Family/Friends" },
              { label: "Charity", value: "Charity" },
            ]}
            label="Raising this Campaign for:"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="HolderName"
        render={({ field }) => (
          <InputField
            name={"HolderName"}
            label="Account holder Name:"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="AccountNumber"
        render={({ field }) => (
          <SelectField
            name={"AccountNumber"}
            label={"Account Number:"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="BankName"
        render={({ field }) => (
          <InputField
            name={"BankName"}
            label={"Bank Name:"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="BranchName"
        render={({ field }) => (
          <InputField
            name={"BranchName"}
            label={"Branch Name:"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="IFSC"
        render={({ field }) => (
          <InputField
            name={"IFSC"}
            label={"IFSC:"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="UploadBankPassbook/Cheque"
        render={({ field }) => (
          <>
            <UploadField
              label="Upload Bank Passbook/Cheque:"
              name="UploadBankPassbook/Cheque"
              placeholder={
                "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
              }
              {...field}
            />
          </>
        )}
      />
    </div>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <div className="py-20">
      <Controller
        control={control}
        name="UploadBankPassbook/Cheque"
        render={({ field }) => (
          <>
            <InputField
              name={"UploadBankPassbook/Cheque"}
              label={"Enter Aadhar Card Number:"}
              type={"password"}
              placeholder={"xxxx xxxx xxxx"}
              {...field}
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="UploadAadharCard"
        render={({ field }) => (
          <>
            {console.log(field, "field......")}
            <UploadField
              name={"UploadAadharCard"}
              label="Upload Aadhar Card (Front and Back):"
              placeholder={
                "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
              }
              {...field}
            />
          </>
        )}
      />

      <Controller
        control={control}
        name="UploadPANCard"
        render={({ field }) => (
          <>
            <InputField
              name={"UploadPANCard"}
              label="Upload PAN Card:"
              type={"password"}
              placeholder={"xxxxxxxxxxx"}
              {...field}
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="Upload PANCard"
        render={({ field }) => (
          <>
            <UploadField
              name={"UploadPANCard"}
              label="Upload PAN Card:"
              placeholder={
                "Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
              }
              {...field}
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="Upload PANCard"
        render={({ field }) => (
          <div className="flex items-center">
            <Checkbox name={"test"} />
            <FormLabel
              // className="text-capitalize font-medium d-flex "
              style={{
                color: colors.text.main,
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "satoshi",
                fontStyle: "normal",
                height: "22px",
              }}
              // sx={{ padding:'4px 8px 8px 8px',color: colors.text.main, fontSize: "20px", fontWeight:700,fontFamily:'satoshi',fontStyle:"normal",height: "22px" }}
            >
              I, hereby declare that I accept the above conditions
            </FormLabel>
          </div>
        )}
      />
    </div>
  );
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
export default function HorizontalLinearStepper() {
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

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      // fetch("https://jsonplaceholder.typicode.com/comments")
      //   .then((data) => data.json())
      //   .then((res) => {
      //     console.log(res);

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
              sx={stylePrimaryButton} // onClick={() => navigate(-1)}
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
                <PrimaryButton sx={stylePrimaryButton} onClick={handleNext}>
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

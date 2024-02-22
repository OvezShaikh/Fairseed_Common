import { Grid, Typography } from "@mui/material";
import React, { useContext, useMemo } from "react";
import images from "../../../constants/images";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import InputField from "../../../components/inputs/InputField";
import SelectField from "../../../components/inputs/SelectField";
import CheckBox from "../../../components/inputs/checkBox";
import PrimaryButton from "../../../components/inputs/PrimaryButton";
import SecondaryButton from "../../../components/inputs/secondaryButton";
import { LinearProgress } from "@mui/material";
import icons from "../../../constants/icons";
import Navigation from '../../../components/layout/Navigation/Index'

const styleSecondaryButton = {
  width: "30%",
  //   height: "100%",
  padding: "10px",
  fontSize: "24px",
  color: "#000000",
  fontWeight: 700,
  borderRadius: "12px",
};
const stylePrimaryButton = {
  width: "30%",
  //   height: "100%",
  padding: "10px",
  fontSize: "24px",
  fontWeight: 700,
  borderRadius: "12px",
};

function Index() {
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const title = useMemo(
  //   () =>
  //     `${
  //       pathname
  //       //   .replace("/", "")
  //       //   .replace(/\/*\[[^\]]*]/g, "")
  //       //   .replace(/-/g, " ")
  //       //   .replace(/\//g, "  ")
  //       // .replace("General Settings"," ")
  //     }`,

  //   [pathname]
  // );
  return (
    <>
      <Navbar />
      <div className="flex flex-col ">
        <Navigation label={'Donate'} heading={'Donate'} />
        <div className="flex px-20 py-32 gap-32 flex-col">
          <div className="flex  gap-24">
            <div className="w-[65%]">
              <SelectField
                label={"Donation Type:"}
                placeholder={"General Donation"}
                name={"DonationType"}
              />
              <InputField
                label={"Enter your Donation:"}
                placeholder={"Minimum 50 INR"}
                name={"EnteryourDonation"}
              />
              <InputField
                label={"Full Name:"}
                //   placeholder={"General Donation"}
                name={"FullNameDonation"}
              />
              <InputField
                label={"Write a brief comment:"}
                placeholder={"(Optional)"}
                name={"Writeabriefcomment"}
              />
              <SelectField
                label={"Payment Gateway:"}
                //   placeholder={"General Donation"}
                name={"PaymentGateway"}
              />
              <InputField
                label={"PAN Card:"}
                placeholder={
                  "Mandatory, if total number donations exceeds 80K INR in one financial year"
                }
                name={"PANCardDonation"}
              />
              <div className="flex w-full gap-4">
                <div className="w-[50%]">
                  <InputField
                    label={"Email:"}
                    //   placeholder={"Mandatory, if total number donations exceeds 80K INR in one financial year"}
                    name={"Email"}
                  />
                  <SelectField
                    label={"Country:"}
                    //   placeholder={"Mandatory, if total number donations exceeds 80K INR in one financial year"}
                    name={"Country"}
                  />
                </div>
                <div className="w-[50%]">
                  <InputField
                    label={"City:"}
                    //   placeholder={"Mandatory, if total number donations exceeds 80K INR in one financial year"}
                    name={"City"}
                  />
                  <InputField
                    label={"Mobile:"}
                    //   placeholder={"Mandatory, if total number donations exceeds 80K INR in one financial year"}
                    name={"Mobile"}
                  />
                </div>
              </div>
              <CheckBox
                name={"MakeAnonymousdonation"}
                label={"Make Anonymous donation"}
              />
            </div>
            <div
              className="flex flex-col rounded-3xl h-full justify-center text-center items-center w-[35%] "
              style={{ border: "1px solid red" }}
            >
              <img className="mt-16" src={images.Logo} alt="Logo" />
              <div
                className="m-10"
                style={{
                  paddingLeft: 12,
                  paddingRight: 12,

                  background: "#FAF7F0",
                  borderRadius: 9,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 16,
                  display: "inline-flex",
                }}
              >
                <div style={{ width: 12, height: 12, position: "relative" }}>
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      left: 0,
                      top: 0,
                      position: "absolute",
                      background: "#FF8A00",
                      borderRadius: 5,
                    }}
                  />
                </div>
                <div
                  style={{
                    color: "#FF8A00",
                    fontSize: 24,
                    fontFamily: "Satoshi ",
                    fontWeight: "700",
                    wordWrap: "break-word",
                  }}
                >
                  Campaign Ongoing
                </div>
              </div>
              <h1
                className="text-6xl  font-bold"
                style={{ fontFamily: "satoshi" }}
              >
                ₹ 49,743
              </h1>
              <p
                className="m-3"
                style={{
                  width: "100%",
                  textAlign: "center",
                  color: "#8E95A2",
                  fontSize: 30,
                  fontFamily: "Satoshi ",
                  fontWeight: "500",
                }}
              >
                funded of ₹ 1,24,000
              </p>

              <div className="mb-4 w-3/4">
                {/* <LinearWithValueLabel className='!h-9' height={'30px'} value={30} /> */}
                <LinearProgress
                  color="success"
                  variant="determinate"
                  style={{ height: "30px", borderRadius: "16px" }}
                  value={40}
                />
              </div>
              <div className="flex  " style={{ display: "inline-flex" }}>
                <img className="w-[17%] pr-2 " src={images.SedalCheck} alt="" />
                <h1
                  style={{
                    background:
                      "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontFamily: "satoshi",
                      fontSize: "24px",
                    }}
                  >
                    Zakah Eligible !
                  </p>
                </h1>
              </div>
              <div className="flex py-10 jusify-center text-center items-center flex-row">
                <img src={images.Airlogo} />
                <p className="text-black/40 pl-2 text-[30px]">
                  Teach for india Foundation
                </p>
              </div>
              <p
                className="pt-2 pb-4 font-[satoshi]"
                style={{ fontWeight: "700", fontSize: "30px" }}
              >
                Help me fund my College Fees for Harvard University
              </p>
              <div className="flex flex-row  pb-9">
                <div className="flex justify-center text-center items-center ">
                  <img className="w-8 h-8" src={icons.Threeuser} />
                  <p
                    className="text-[#6B7280] pt-1.5 pl-1 text-[26px]"
                    style={{ fontFamily: "satoshi", fontWeight: "500" }}
                  >
                    2930
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <img className="  w-8 h-8 pl-3  " src={icons.Clock} />
                  <p
                    className="text-[#6B7280] pt-1.5 pl-1 text-[26px]"
                    style={{ fontFamily: "satoshi", fontWeight: "500" }}
                  >
                    21 Days Left
                  </p>
                </div>
                <div className="flex justify-center  items-center">
                  <img className=" w-10 h-10 pl-3  " src={icons.MapPin} />
                  <p
                    className="text-[#6B7280] pt-1.5 pl-1 text-[26px]"
                    style={{ fontFamily: "satoshi", fontWeight: "500" }}
                  >
                    Pune, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <SecondaryButton
              //   disabled={activeStep === 0}
              //   onClick={handleBack}
              sx={styleSecondaryButton}
            >
              Back
            </SecondaryButton>

            <PrimaryButton sx={stylePrimaryButton} onClick={() => navigate(-2)}>
              Home
            </PrimaryButton>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;

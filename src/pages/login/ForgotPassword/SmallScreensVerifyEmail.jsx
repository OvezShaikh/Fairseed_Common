import React, { useState } from "react";
import PrimaryButton from "../../../components/inputs/PrimaryButton";
import InputField from "../../../components/inputs/InputField";
import Navigation from "../../../components/layout/Navigation/Index";
import { Form, Formik } from "formik";
import { toast } from "react-toastify";
import { useCreateOrUpdate } from "../../../Hooks";
import * as Yup from "yup";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useLocation } from "react-router-dom";

const inputStyle = {
  padding: " 16px 10px 16px var(--Spacing-20, 20px)",
  border: "2px solid var(--Linear-BG, #FF9F0A)",
  borderImage: "linear-gradient(#FF9F0A, red) 20",
  // borderWidth: '3px',
  borderStyle: " solid",
  borderRadius: "4px",
};

function VerifyEmail() {
  const [step, setStep] = useState(1);
  const [isVerified, setIsVerified] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [otpState, setOtpState] = useState([
    { index: 0, value: "" },
    { index: 1, value: "" },
    { index: 2, value: "" },
    { index: 3, value: "" },
  ]);
  const [backendOTP, setBackendOTP] = useState("");
  const [Email, setEmail] = useState("");
  const location = useLocation();

  const verifyEmailMutation = useCreateOrUpdate({
    url: "/accounts/forgetpassword/nt/",
    method: "post",
    onSuccess: (response) => {
      toast.success(response?.data?.Success, {
        position: "top-center",
      });
      setIsVerified(true);
      setEmail(response.data.email);
    },
    onError: (response) => {
      toast.error(response?.data, {
        position: "top-center",
      });
      setIsVerified(false);
    },
  });

  const resetPasswordMutation = useCreateOrUpdate({
    url: "/accounts/reset-pass/nt/",
    method: "post",
    onSuccess: () => {
      toast.success("Password reset successfully", {
        position: "top-center",
        autoClose: 5000,
      });
      setTimeout(() => {
        window.location.href = "/Home";
      }, 1500);
    },
    onError: () => {
      toast.error("Fail to reset password");
    },
  });

  const handleVerifyEmail = (values) => {
    verifyEmailMutation.mutate(values);
  };

  const handleNewPassword = (values) => {
    resetPasswordMutation.mutate(values);
  };

  const getJoinedOTP = () => {
    return otpState.map((i) => i.value).join("");
  };

  const compareOTP = () => {
    if (getJoinedOTP() !== backendOTP) {
      toast.error("OTP didn't match", { position: "top-center" });
    } else if (getJoinedOTP() === "") {
      toast.error("please enter otp", { position: "top-center" });
      setNewPassword(false);
    } else {
      toast.success("OTP verified", { position: "top-center" });
      setNewPassword(true);
      setStep(3);
    }
  };

  const handleOTPChange = (event, index) => {
    if (event.target.value.length > 1) {
      return;
    }
    setOtpState((prev) => {
      let old = [...prev];
      old[index] = { index, value: event.target.value };
      console.log("oldvoldoldold", old);
      return old;
    });
    if (index !== 3) {
      event.target.nextElementSibling.focus();
    }
  };

  const resendOTP = async () => {
    try {
      const response = await fetch("/accounts/reset-pass/nt/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: Email }),
      });
      if (response.ok) {
        toast.success("OTP resent successfully", { position: "top-center" });
      } else {
        throw new Error("Failed to resend OTP");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      toast.error("Failed to resend OTP", { position: "top-center" });
    }
  };

  return (
    <>
      <Navigation
        heading={
          !isVerified
            ? "Forgot Password?"
            : !newPassword
            ? "Verify your Email"
            : "Password Reset"
        }
      />
      <div className="w-full flex justify-center items-center pt-4">
        <div className="w-[60%] pt-3 max-desktop:w-[60%] max-tablet:w-full max-tablet:p-2">
          {!isVerified && (
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Invalid email")
                  .required("Email is required"),
              })}
              onSubmit={handleVerifyEmail}
            >
              {(formikProps) => (
                <Form>
                  <div className="flex flex-col gap-3">
                    <p className="text-[22px] max-tablet:text-[16px] font-medium font-[satoshi] text-[#717171]">
                      Enter the email address associated with your account.
                    </p>
                    <div className="pb-4">
                      <InputField
                        name={"email"}
                        label={"Email"}
                        placeholder={"Enter your email"}
                        sx={inputStyle}
                      />
                    </div>
                    <PrimaryButton
                      sx={{ width: "100%", padding: "12px 40px" }}
                      type="submit"
                    >
                      <span
                        className="font-[satoshi]"
                        style={{ fontSize: "22px", fontWeight: 900 }}
                      >
                        {" "}
                        Confirm{" "}
                      </span>
                    </PrimaryButton>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          {isVerified && !newPassword && (
            <Formik initialValues={{}}>
              {(formikProps) => (
                <Form>
                  <div className="flex flex-col gap-3 w-full">
                    <p className="text-[22px] max-tablet:text-[16px] font-medium font-[satoshi] text-[#717171]">
                      Enter the 4-digit code sent to your email.
                    </p>
                    <div className="flex justify-start gap-2 items-center py-2 ">
                      {otpState.map((item) => {
                        return (
                          <input
                            className="w-[33px] h-[34px] text-center border rounded-md"
                            onChange={(event) =>
                              handleOTPChange(event, item.index)
                            }
                            maxLength={1}
                            value={item.value}
                            autoComplete="one-time-code"
                          />
                        );
                      })}
                    </div>
                    <ResendOTP
                      onResendClick={resendOTP}
                      style={{
                        // Inline styles for ResendOTP component
                        color: "#0466C8",
                        fontFamily: "satoshi",
                        cursor: "pointer",
                      }}
                    />
                    <PrimaryButton
                      sx={{
                        width: "100%",
                        padding: "12px 40px",
                        marginTop: "8px",
                      }}
                      type="submit"
                      onClick={compareOTP}
                    >
                      <span
                        className="font-[satoshi]"
                        style={{ fontSize: "22px", fontWeight: 900 }}
                      >
                        {" "}
                        Verify Email{" "}
                      </span>
                    </PrimaryButton>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          {newPassword && (
            <Formik
              initialValues={{
                email: Email || "",
                password: "",
                new_password: "",
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email("Invalid email"),
                password: Yup.string().required("Password is required"),
                new_password: Yup.string()
                  .required("New password is required")
                  .oneOf([Yup.ref("password"), null], "Passwords must match"),
              })}
              onSubmit={handleNewPassword}
            >
              {(formikProps) => (
                <Form>
                  <div className="flex flex-col gap-3">
                    <p className="text-[22px] max-tablet:text-[16px] font-medium font-[satoshi] text-[#717171]">
                      Almost done. Enter your new password and you are all set!
                    </p>
                    <div className="pb-4">
                      <InputField
                        name={"password"}
                        type={"password"}
                        label={"Enter New Password"}
                        placeholder={"***************"}
                        sx={inputStyle}
                      />
                    </div>
                    <div className="pb-4">
                      <InputField
                        name={"new_password"}
                        type={"password"}
                        label={"Confirm New Password"}
                        placeholder={"***************"}
                        sx={inputStyle}
                      />
                    </div>
                    <PrimaryButton
                      sx={{ width: "100%", padding: "12px 40px" }}
                      type="submit"
                    >
                      <span
                        className="font-[satoshi]"
                        style={{ fontSize: "22px", fontWeight: 900 }}
                      >
                        {" "}
                        Reset Password{" "}
                      </span>
                    </PrimaryButton>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;

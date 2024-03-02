import React, { useState } from 'react';
import OtpInput from '../../../components/inputs/OtpInputs/Index';
import PrimaryButton from '../../../components/inputs/PrimaryButton';
import InputField from '../../../components/inputs/InputField';
import Navigation from "../../../components/layout/Navigation/Index"
import { Form, Formik } from 'formik';

const inputStyle = {
    padding: ' 16px 10px 16px var(--Spacing-20, 20px)',
    border: '2px solid var(--Linear-BG, #FF9F0A)',
    borderImage: 'linear-gradient(#FF9F0A, red) 20',
    // borderWidth: '3px',
    borderStyle: ' solid',
    borderRadius: '4px'
}

function VerifyEmail() {
    const [step, setStep] = useState(1);
    const [isVerified, setIsVerified] = useState(false);
    const [newPassword, setNewPassword] = useState(false);

    const handleNewPassword = () => {
        setStep(3);
        setNewPassword(true);
    }

    const handleVerifyEmail = () => {
        if (step === 1) {
            setStep(2);
            // Perform verification logic here
            // For demonstration purposes, I'm just setting isVerified to true
            setIsVerified(true);
        } else if (step === 2) {
            setStep(3);
        }
    };

    return (
        <>
            <Navigation heading={step === 1 ? "Forgot Password?" : step === 2 ? "Verify your Email" : "Password Reset"} />
            <div className="w-full flex justify-center items-center">
                <div className="w-[60%] pt-3 max-desktop:w-[60%] max-tablet:w-full max-tablet:p-2">

                    <Formik>
                        <Form>

                            <div className='flex flex-col gap-2'>
                                {!isVerified && step === 1 && (
                                    <div className='flex flex-col gap-3'>
                                        <div className="">

                                        </div>
                                        <p className='text-[22px] max-tablet:text-[18px] font-medium font-[satoshi] text-[#717171] pb-2'>Enter the email address associated with your account.</p>
                                        <div className="pb-4">
                                            <InputField name={"email"} label={'Email'} placeholder={'Enter you email'} sx={inputStyle} />
                                        </div>
                                        <PrimaryButton
                                            sx={{ width: '100%', padding: '12px 40px' }}
                                            type='submit'
                                            onClick={handleVerifyEmail}
                                        >
                                            <span className='font-[satoshi]' style={{ fontSize: '22px', fontWeight: 900 }}> Confirm </span>
                                        </PrimaryButton>

                                    </div>
                                )}
                                {isVerified && !newPassword && step === 2 && (
                                    <div className='flex flex-col gap-3'>
                                        <div className="">

                                        </div>
                                        <p className='text-[22px] max-tablet:text-[18px] font-medium font-[satoshi] text-[#717171]'>Enter the 4 digit code sent to your email id.</p>
                                        <OtpInput />
                                        <PrimaryButton
                                            sx={{ width: '100%', padding: '12px 40px', marginTop: '10px' }}
                                            type='submit'
                                            onClick={handleNewPassword}
                                        >
                                            <span className='font-[satoshi]' style={{ fontSize: '22px', fontWeight: 900 }}> Verify Email </span>
                                        </PrimaryButton>
                                    </div>
                                )}
                                {newPassword && step === 3 && (
                                    <div className='flex flex-col gap-3'>
                                        <div className="">

                                        </div>
                                        <p className='text-[22px] max-tablet:text-[18px] font-medium font-[satoshi] text-[#717171] pb-2'>Almost done. Enter your new password and you are all set!</p>

                                        <div className="pb-4">
                                            <InputField name={"password"} type={'password'} label={'Enter new Password'} placeholder={'***************'} sx={inputStyle} />
                                        </div>
                                        <div className="pb-4">
                                            <InputField name={"new_password"} type={'password'} label={'Confirm new Password'} placeholder={'***************'} sx={inputStyle} />
                                        </div>
                                        <PrimaryButton
                                            sx={{ width: '100%', padding: '12px 40px' }}
                                            type='submit'
                                            onClick={handleVerifyEmail}
                                        >
                                            <span className='font-[satoshi]' style={{ fontSize: '22px', fontWeight: 900 }}>Reset Password</span>
                                        </PrimaryButton>

                                    </div>
                                )}
                            </div>

                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    );

}

export default VerifyEmail;

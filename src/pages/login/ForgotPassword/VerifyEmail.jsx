import React, { useState } from 'react';
import OtpInput from '../../../components/inputs/OtpInputs/Index';
import PrimaryButton from '../../../components/inputs/PrimaryButton';
import InputField from '../../../components/inputs/InputField';
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
    const [isVerified, setIsVerified] = useState(false);
    const [newPassword, setNewPassword] = useState(false);

    const handleNewPassword = () => {
        setNewPassword(true);
    }

    const handleVerifyEmail = () => {
        // Perform verification logic here
        // For demonstration purposes, I'm just setting isVerified to true
        setIsVerified(true);
    };

    return (
        <Formik>
            <Form>


                <div className='flex flex-col gap-2 w-[90%]'>
                    {!isVerified && (
                        <div className='flex flex-col gap-3'>
                            <div className="">
                                <h1 className='text-[46px] font-bold font-[satoshi] pb-2' style={{
                                    background: "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                                    "-webkit-background-clip": "text",
                                    "-webkit-text-fill-color": "transparent",
                                }}>Forgot Password?</h1>
                                <hr />
                            </div>
                            <p className='text-[22px] font-medium font-[satoshi] text-[#717171]'>Enter the email address associated with your account.</p>
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
                    {isVerified && !newPassword && (
                        <div className='flex flex-col gap-3'>
                            <div className="">
                                <h1 className='text-[46px] font-bold font-[satoshi] pb-2' style={{
                                    background: "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                                    "-webkit-background-clip": "text",
                                    "-webkit-text-fill-color": "transparent",
                                }}>Verify your Email</h1>
                                <hr />
                            </div>
                            <p className='text-[22px] font-medium font-[satoshi] text-[#717171]'>Enter the 4 digit code sent to your email id.</p>
                            <OtpInput />
                            <PrimaryButton
                                sx={{ width: '100%', padding: '12px 40px', marginTop: '8px' }}
                                type='submit'
                                onClick={handleNewPassword}
                            >
                                <span className='font-[satoshi]' style={{ fontSize: '22px', fontWeight: 900 }}> Verify Email </span>
                            </PrimaryButton>
                        </div>
                    )}
                    {newPassword && (
                        <div className='flex flex-col gap-3'>
                            <div className="">
                                <h1 className='text-[46px] font-bold font-[satoshi] pb-2' style={{
                                    background: "linear-gradient(to right, #FF9F0A 0%, #FF375F 62.9%)",
                                    "-webkit-background-clip": "text",
                                    "-webkit-text-fill-color": "transparent",
                                }}>Enter new password</h1>
                                <hr />
                            </div>
                            <p className='text-[22px] font-medium font-[satoshi] text-[#717171]'>Almost done. Enter your new password and you are all set!</p>

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
    );
}

export default VerifyEmail;

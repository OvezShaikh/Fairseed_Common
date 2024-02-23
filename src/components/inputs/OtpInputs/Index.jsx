import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState } from "react";
import InputAdminField from '../InputAdminField/Index'


function Index(otp) {
    const [OTP, setOTP] = useState("");
    return (
        <>
            <OTPInput
                value={otp}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                secure
                renderInput={(props) => <InputAdminField {...props} />}
                className="otp-input"

            />
            <ResendOTP
                onResendClick={() => console.log("Resend clicked")}
                style={{
                    // Inline styles for ResendOTP component
                    color: "#0466C8",
                    fontFamily: 'satoshi',
                    cursor: "pointer",
                }}
            />
        </>
    );
}

export default Index;
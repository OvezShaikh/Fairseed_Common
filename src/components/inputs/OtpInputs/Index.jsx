import OTPInput, { ResendOTP } from "otp-input-react";
import React, { useState } from "react";


function Index() {
    const [OTP, setOTP] = useState("");
    return (
        <>
            <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={4}
                otpType="number"
                disabled={false}
                secure

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
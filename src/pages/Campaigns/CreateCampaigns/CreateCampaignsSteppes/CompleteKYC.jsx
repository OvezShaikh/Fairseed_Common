import React from "react";
import { useFormik, useFormikContext } from "formik";
import InputField from "../../../../components/inputs/InputField";
import UploadField from "../../../../components/inputs/UploadField/Index";
import SecondaryButton from "../../../../components/inputs/secondaryButton"
import PrimaryButton from "../../../../components/inputs/PrimaryButton"
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

// const initialValues = {
//     adhar_card: "",
//     adhar: null,
//     pan_card: "",
//     pan_card_image: null,
// };

function CompleteKYC({ handleBack, handleNext }) {
    const { submitForm, setFieldValue } = useFormikContext();
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit: (values) => {
    //         // Handle form submission
    //         console.log(values);
    //     },
    // });

    return (
        <form >
            <div className="py-20 flex flex-col gap-4">
                <div>

                    <InputField
                        required
                        name="adhar_card"
                        label="Enter Aadhar Card Number:"
                        type="number"
                        placeholder="xxxx xxxx xxxx"
                        sx={{ padding: '20px' }}
                    // {...formik.getFieldProps("adhar_card")}
                    />
                </div>
                <UploadField
                    name={'adhar_card_image'}
                    // onChange={(file) => formik.setFieldValue("adhar", file)}
                    label="Upload Aadhar Card (Front and Back):"
                    placeholder="Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
                    sx={{ padding: '20px' }}
                    multiple={false}
                    onChange={(value) => setFieldValue('adhar_front', value)}

                />


                <div>
                    <InputField
                        name="pan_card"
                        label="Enter PAN Card Number:"
                        type="password"
                        required
                        placeholder="xxxxxxxxxxx"
                        sx={{ padding: '20px' }}
                    // {...formik.getFieldProps("pan_card")}
                    /></div>

                <UploadField
                    // onChange={(file) => formik.setFieldValue("pan_card_image", file)}
                    name={'pan_card_image'}
                    label="Upload PAN Card:"
                    placeholder="Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
                    onChange={(value) => setFieldValue('pan_card_image', value)}
                    multiple={false}
                />


            </div>
            <div className="flex mt-4 gap-5">
                <SecondaryButton
                    // disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={styleSecondaryButton}
                >
                    Back
                </SecondaryButton>

                <PrimaryButton sx={stylePrimaryButton} onClick={() => { submitForm() }} >
                    Submit
                </PrimaryButton>
            </div>
        </form>
    );
}

export default CompleteKYC;

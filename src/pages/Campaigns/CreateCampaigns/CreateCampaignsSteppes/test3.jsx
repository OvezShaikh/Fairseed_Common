import React from "react";
import { Form, useFormik, useFormikContext } from "formik";
import InputField from "../../../../components/inputs/InputField";
import UploadField from "../../../../components/inputs/UploadField/Index";
import RadioGroup from "../../../../components/inputs/radioGroup";
import SecondaryButton from "../../../../components/inputs/secondaryButton"
import PrimaryButton from "../../../../components/inputs/PrimaryButton"

// const initialValues = {
//   rasing_for: "",
//   account_holder_name: "",
//   account_number: "",
//   bank_name: "",
//   branch_name: "",
//   ifsc_code: "",
//   passbook_image: null,
// };
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
function AccountDetails({ handleBack, handleNext }) {
    const { submitForm } = useFormikContext();
    //   const formik = useFormik({
    //     initialValues,
    //     onSubmit: (values) => {
    //       // Handle form submission
    //       console.log(values);
    //     },
    //   });

    return (
        <Form>
            <div className="py-20">
                <RadioGroup
                    name="rasing_for"
                    options={[
                        { label: "Self", value: "Self" },
                        { label: "Family/Friends", value: "Family/Friends" },
                        { label: "Charity", value: "Charity" },
                    ]}
                    label="Raising this Campaign for:"
                //   onChange={formik.handleChange}
                //   value={formik.values.rasing_for}
                />

                <InputField
                    label="Account holder Name:"
                    name="account_holder_name"
                    type="text"
                    required={true}
                //   {...formik.getFieldProps("account_holder_name")}
                />

                <InputField
                    label="Account Number:"
                    name="account_number"
                    type="number"
                    required={true}
                // {...formik.getFieldProps("account_number")}
                />

                <InputField
                    label="Bank Name:"
                    name="bank_name"
                    type="text"
                    required={true}

                // {...formik.getFieldProps("bank_name")}
                />

                <InputField
                    label="Branch Name:"
                    name="branch_name"
                    type="text"
                    required={true}
                // {...formik.getFieldProps("branch_name")}
                />

                <InputField
                    label="IFSC:"
                    name="ifsc_code"
                    type="number"
                    required={true}
                // {...formik.getFieldProps("ifsc_code")}
                />

                <UploadField
                    label="Upload Bank Passbook/Cheque:"
                    name="passbook_image"
                    placeholder="Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
                // {...formik.getFieldProps("passbook_image")}
                />


            </div><div className="flex mt-4 gap-5">
                <SecondaryButton
                    // disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={styleSecondaryButton}
                >
                    Back
                </SecondaryButton>

                <PrimaryButton sx={stylePrimaryButton} onClick={() => { submitForm() && handleNext() }} >
                    Next
                </PrimaryButton>
            </div>
        </Form>

    );
}

export default AccountDetails;

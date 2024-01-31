import React from "react";
import { Form, useFormik, useFormikContext } from "formik";
import InputField from "../../../../components/inputs/InputField";
import UploadField from "../../../../components/inputs/UploadField/Index";
import RadioGroup from "../../../../components/inputs/radioGroup";
import SecondaryButton from "../../../../components/inputs/secondaryButton"
import PrimaryButton from "../../../../components/inputs/PrimaryButton"
const InputStyle =
{
    padding: '20px', border: "1px solid #e2e2e2",
    // },
    "&:focus-within": {
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
        borderColor: "black",
    },
}
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
    const { setFieldValue } = useFormikContext();
    //   const formik = useFormik({
    //     initialValues,
    //     onSubmit: (values) => {
    //       // Handle form submission
    //       console.log(values);
    //     },
    //   });

    return (
        <Form className="">
            <div className="py-20 flex flex-col gap-4 ">
                <RadioGroup onChange={(e) => { setFieldValue("rasing_for", e.target.value) }}
                    name="rasing_for"
                    required={true}
                    options={[
                        { label: "Self", value: "Self" },
                        { label: "Family/Friends", value: "Family" },
                        { label: "Charity", value: "Charity" },
                    ]}
                    label="Raising this Campaign for:"
                //   onChange={formik.handleChange}
                //   value={formik.values.rasing_for}
                />
                <div>
                    <InputField
                        label="Account holder Name:"
                        sx={InputStyle}
                        name="account_holder_name"
                        type="text"
                        required={true}
                    //   {...formik.getFieldProps("account_holder_name")}
                    /></div>
                <div>

                    <InputField
                        label="Account Number:"
                        name="account_number"
                        sx={InputStyle}

                        type="number"
                        required={true}
                    // {...formik.getFieldProps("account_number")}
                    /></div>
                <div>
                    <InputField
                        label="Bank Name:"
                        name="bank_name"
                        sx={InputStyle}

                        type="text"
                        required={true}

                    // {...formik.getFieldProps("bank_name")}
                    /></div>

                <div>
                    <InputField
                        label="Branch Name:"
                        name="branch_name"
                        sx={InputStyle}

                        type="text"
                        required={true}
                    // {...formik.getFieldProps("branch_name")}
                    /></div>

                <div>

                    <InputField
                        label="IFSC:"
                        name="ifsc_code"
                        sx={InputStyle}

                        required={true}
                    // {...formik.getFieldProps("ifsc_code")}
                    /></div>

                <UploadField
                    label="Upload Bank Passbook/Cheque:"
                    name="passbook_image"
                    placeholder="Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
                    onChange={(value) => setFieldValue('passbook_image', value)}
                    multiple={false}


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

                <PrimaryButton sx={stylePrimaryButton} onClick={() => { handleNext() }} >
                    Next
                </PrimaryButton>
            </div>
        </Form>

    );
}

export default AccountDetails;

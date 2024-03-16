import React from 'react';
import { useFormik, Field, useFormikContext } from 'formik';
import { FormLabel } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import ReactQuilTextField from '../../../../components/inputs/ReactQuilTextField/Index';
import { colors } from '../../../../constants/theme';
import UploadField from '../../../../components/inputs/UploadField/Index';
import SecondaryButton from "../../../../components/inputs/secondaryButton";
import PrimaryButton from "../../../../components/inputs/PrimaryButton";
import "../CreateCampaigns.css";

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

function YourStory({ handleBack, handleNext }) {
    const { setFieldValue, values } = useFormikContext();

    return (
        <form className="py-[80px] flex flex-col gap-y-[80px]">
            <div className="">
                <FormLabel
                    className="font-medium d-flex align-items-center desktop:text-[20px] max-desktop:text-[16px]"
                    style={{
                        padding: '4px 8px 8px 8px',
                        color: colors.text.main,

                        fontWeight: 700,
                        fontFamily: 'satoshi',
                        fontStyle: 'normal',
                        height: '22px',
                    }}
                >
                    Tell us your Story:
                    <span className="text-red-600">*</span>
                </FormLabel>
                <div className="h-[410px] story-div">
                    <ReactQuilTextField
                        theme="snow"
                        name="story"

                        value={values.story}
                        placeholder={`Write a story that does justice to your cause and make the supporter click the Donate button.
                
Pointers:

Explain who you are raising it for.

Explain why you are raising funds?

Make an Appeal.`}
                        onChange={(value) => setFieldValue('story', value)}
                    />
                </div>
            </div>

            <div className="">
                <FormLabel
                    className="font-medium d-flex align-items-center desktop:text-[20px] max-desktop:text-[16px]"
                    style={{
                        padding: '4px 8px 8px 8px',
                        color: colors.text.main,

                        fontWeight: 700,
                        fontFamily: 'satoshi',
                        fontStyle: 'normal',
                        height: '22px',
                    }}
                >
                    Summary:
                    <span className="text-red-600">*</span>
                </FormLabel>
                <div className="h-[205px] summary-div">
                    <ReactQuilTextField
                        theme="snow"
                        name='summary'
                        value={values.summary}
                        placeholder="Summarize in 100 words max."
                        style={{ '& .ql-editor': { minHeight: '50px' } }}
                        onChange={(value) => setFieldValue('summary', value)}
                    />
                </div>
            </div>

            <div className='document-upload-div'>
                
                <UploadField
                    label="Document:"
                    name="documents"
                    required={'true'}
                    placeholder="Upload marksheets, Medical records, Fees Structure etc."
                    sx={{ padding: '20px' }}
                    multiple={false}
                    onChange={(value) => setFieldValue('documents', value)}

                />
            </div>
            <div className="flex mt-4 desktop:gap-x-[40px] max-desktop:gap-x-[24px]">
                <SecondaryButton
                    onClick={handleBack}
                    sx={styleSecondaryButton}
                >
                    Back
                </SecondaryButton>

                <PrimaryButton sx={stylePrimaryButton} onClick={() => { handleNext() }} >
                    Next
                </PrimaryButton>
            </div>




        </form>
    );
}

export default YourStory;
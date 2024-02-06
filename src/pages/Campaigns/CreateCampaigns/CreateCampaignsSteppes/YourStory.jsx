import React from 'react';
import { useFormik, Field, useFormikContext } from 'formik';
import { FormLabel } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import ReactQuilTextField from '../../../../components/inputs/ReactQuilTextField/Index';
import { colors } from '../../../../constants/theme';
import UploadField from '../../../../components/inputs/UploadField/Index';
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

function YourStory({ handleBack, handleNext }) {
    const { setFieldValue, values } = useFormikContext();

    // const formik = useFormik({
    //     initialValues: {
    //         story: '',
    //         summary: '',
    //         document: null,
    //     },
    //     onSubmit: (values) => {
    //         // Handle form submission here
    //         console.log('Form Values:', values);
    //     },
    // });



    return (
        <form className="py-20 flex flex-col gap-20">
            <div className="">
                <FormLabel
                    className="text-capitalize font-medium d-flex align-items-center"
                    style={{
                        padding: '4px 8px 8px 8px',
                        color: colors.text.main,
                        fontSize: '20px',
                        fontWeight: 700,
                        fontFamily: 'satoshi',
                        fontStyle: 'normal',
                        height: '22px',
                    }}
                >
                    Tell us your Story:
                    <span className="text-red-600">*</span>
                </FormLabel>
                <div className="h-[200px]">
                    <ReactQuilTextField
                        theme="snow"
                        name="story"

                        value={values.story}
                        placeholder={`Write a story that does justice to your cause and make the supporter click the Donate button.
                
Pointers: Explain who you are raising it for.

Explain why you are raising funds?

Make an Appeal.`}
                        onChange={(value) => setFieldValue('story', value)}
                    />
                </div>
            </div>

            <div className="">
                <FormLabel
                    className="text-capitalize font-medium d-flex align-items-center"
                    style={{
                        padding: '4px 8px 8px 8px',
                        color: colors.text.main,
                        fontSize: '20px',
                        fontWeight: 700,
                        fontFamily: 'satoshi',
                        fontStyle: 'normal',
                        height: '22px',
                    }}
                >
                    Summary:
                    <span className="text-red-600">*</span>
                </FormLabel>
                <div className="h-[119px]">
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

            <div>
                <Field
                    name="document"
                    render={({ field }) => (
                        <>
                            <UploadField
                                label="Document:"
                                name="document"
                                placeholder="Allowed format: JPEG, PDF and PNG and Maximum size 5 mb."
                                onChange={(value) => setFieldValue('document', value)}
                            />
                        </>
                    )}
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

                <PrimaryButton sx={stylePrimaryButton} onClick={() => { handleNext() }} >
                    Next
                </PrimaryButton>
            </div>




        </form>
    );
}

export default YourStory;

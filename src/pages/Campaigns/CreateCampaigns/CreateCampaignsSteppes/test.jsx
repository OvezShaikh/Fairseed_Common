import React, { useEffect, useState } from "react";
import { Field, Form, Formik, useFormikContext } from "formik";
import InputField from "../../../../components/inputs/InputField";
import { FormLabel } from "react-bootstrap";
import { colors } from "../../../../constants/theme";
import DropZone from "../../../../components/inputs/dragAndDrop";
import SelectField from "../../../../components/inputs/SelectField";
import CheckBox from "../../../../components/inputs/checkBox";
import Box from "@mui/material/Box";
import { useCreateOrUpdate } from "../../../../Hooks/useCreateOrUpdate";
import CountrySelect from "../../../../components/inputs/countrySelect";
import SecondaryButton from "../../../../components/inputs/secondaryButton"
import PrimaryButton from "../../../../components/inputs/PrimaryButton"
import axios from "axios";
import { Next } from "react-bootstrap/esm/PageItem";
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

const Test = ({ handleBack, handleNext }) => {
    const [category, setCategory] = useState([]);
    const { submitForm } = useFormikContext()

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_BE_BASE_URL}/campaign/campaign-category?page=1&limit=20`
            )
            .then((res) => {
                setCategory(res.data.rows);
            })
            .catch((error) => {
                console.error("Error fetching category data:", error);
            });
    }, []);

    return (


        <Form className="">
            <Box className="flex py-20 justify-center items-center">
                <DropZone
                    name="campaign_image"
                    acceptedFiles={({ "file/*": [".png"] })}
                    maxFiles={1}
                // onChange={(file) => setFieldValue("campaign_image", file)}
                ></DropZone>
            </Box>

            <InputField
                name="title"
                required={true}
                label="Title of the Campaign:"
                placeholder="Title of the Campaign (Max 250 Words)"

            />
            <InputField
                name="goal_amount"
                type="number"
                required={true}
                label="Amount to be raised:"

            />
            <InputField
                name="location"
                required={true}
                label="Location:"

            />
            <SelectField
                name="category"
                required={true}
                label="Choose a Category:"
                // onChange={Formik.value.category}
                options={category.map((item) => ({
                    label: item.name,
                    value: item.id,
                }))}

            />

            <div className="inline-flex w-full">
                <div className="w-[50%]">
                    <FormLabel className="text-capitalize font-medium d-flex align-items-center" style={{ padding: "4px 8px 8px 8px", color: colors.text.main, fontSize: "20px", fontWeight: 700, fontFamily: "satoshi", fontStyle: "normal", height: "22px" }}>
                        Is the Campaign Zakaat eligible?<span className="text-red-600">*</span>
                    </FormLabel>
                    <CheckBox
                        name="zakat_eligible"
                        label={'Yes'}

                    />
                </div>
                <div className="w-[50%]">
                    <InputField
                        type="date"
                        name="end_date"
                        label="Date:"
                    />
                </div>

            </div>
            <div className="flex mt-4 gap-5">
                <SecondaryButton
                    disabled
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
};

export default Test;

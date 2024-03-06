import React, { useState } from "react";
import InputField from "../../inputs/InputField";
import { Form, Formik } from "formik";
import { FormLabel } from "@mui/material";
import UploadField from "../../inputs/UploadField/Index";
import SelectField from "../../inputs/SelectField";
import PrimaryButton from "../../inputs/PrimaryButton";
import Attachments from "../../layout/Attachments/Index";
import { useGetAll } from "../../../Hooks";
import { useLocation } from "react-router-dom";
const InputStyle = {
  borderRadius: "4px",
  padding: "12px",
  border: "1px solid #e2e2e2",
  // },
  "&:focus-within": {
    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
    borderColor: "black",
  },
};
const InputCampaign = {
  borderRadius: "4px",
  background: "#D8DBDF",
  padding: "12px",
  border: "1px solid #e2e2e2",
  // },
  "&:focus-within": {
    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
    borderColor: "black",
  },
  "& .MuiInputBase-input": {
    borderRadius: "3px",
    background: "#D8DBDF !important",
    position: "relative",
    fontSize: "20px",
    color: "yellow !important",
    width: "100%",
  },
};
function CausesView() {
  let { state } = useLocation();
  let { id } = state;
  const [data, setData] = useState({});

  const [imgOne, setImgOne] = useState("");
  const [imgTwo, setImgTwo] = useState("");
  const [imgThree, setImgThree] = useState("");

  const img = [
    "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/20197333/pexels-photo-20197333/free-photo-of-a-man-in-cowboy-hat-riding-a-horse-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  ];

  const initial_values = {
    account_holder_name: data?.account_holder_name || "",
    account_number: data?.account_number || "",
    bank_data: data?.bank_data || "",
    bank_name: data?.bank_name || "",
    branch_name: data?.branch_name || "",
    title: data?.campaign?.title || "",
    ifsc_code: data?.ifsc_code || "",
    status: data?.status,
    pan_number: "",
    adhaar_num: "",
    other: "",
  };

  useGetAll({
    key: `/admin-dashboard/campaign-kyc/${id}`,
    enabled: true,
    select: (data) => {
      console.log(data);
      return data.data.data;
    },
    onSuccess: (data) => {
      setData(data);
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  console.log(initial_values, "<--------------");
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initial_values}
      // onSubmit={(values)=>handleSubmit(values)}
    >
      {({ values, handleChange }) => (
        <Form>
          <div className="p-4 w-[100%] ">
            <div className="flex flex-col gap-7  w-[70%] max-desktop:w-full max-tablet:w-[100%]">
              <div className="flex flex-col gap-7">
                <div className="w-full">
                  <InputField
                    sx={InputCampaign}
                    disabled={true}
                    label={"Title of Campaign:"}
                    name={"title"}
                    value={values?.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    sx={InputStyle}
                    label={"Aadhar Card:"}
                    name={"adhaar_num"}
                    value={values?.adhaar_num}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    sx={InputStyle}
                    label={"Account Holder Name:"}
                    name={"account_holder_name"}
                    value={values?.account_holder_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    sx={InputStyle}
                    label={"Beneficiary Bank Account Number::"}
                    name={"account_number"}
                    value={values?.account_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    sx={InputStyle}
                    label={"Bank Name:"}
                    name={"bank_name"}
                    value={values?.bank_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    sx={InputStyle}
                    label={"Branch Name:"}
                    name={"branch_name"}
                    value={values?.branch_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    sx={InputStyle}
                    label={"IFSC Code:"}
                    name={"ifsc_code"}
                    value={values?.ifsc_code}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    sx={InputStyle}
                    label={"Pan Card Number:"}
                    name={"pan_number"}
                    value={values?.pan_number}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    sx={InputStyle}
                    label={"Adhar Number:"}
                    name={"adhaar_num"}
                    value={values?.adhaar_num}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <InputField
                    sx={InputStyle}
                    label={"Other Details (Optional)::"}
                    name={"other"}
                    value={values?.other}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <FormLabel
                    sx={{
                      fontSize: "20px",
                      fontFamily: "satoshi",
                      fontWeight: 700,
                      color: "#383A42",
                      paddingLeft: "8px",
                    }}
                  >
                    Documents:
                  </FormLabel>
                  <div className="flex gap-4 pt-2 max-tablet:flex-col">
                    <div className="flex flex-col gap-2">
                      <Attachments imageUrl={{}} />
                      <FormLabel
                        sx={{
                          fontSize: "20px",
                          fontFamily: "satoshi",
                          fontWeight: 700,
                          color: "#383A42",
                          paddingLeft: "8px",
                        }}
                      >
                        PAN Card
                      </FormLabel>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Attachments imageUrl={{}} />
                      <FormLabel
                        sx={{
                          fontSize: "20px",
                          fontFamily: "satoshi",
                          fontWeight: 700,
                          color: "#383A42",
                          paddingLeft: "8px",
                        }}
                      >
                        Adhar Card
                      </FormLabel>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Attachments imageUrl={{}} />
                      <FormLabel
                        sx={{
                          fontSize: "20px",
                          fontFamily: "satoshi",
                          fontWeight: 700,
                          color: "#383A42",
                          paddingLeft: "8px",
                        }}
                      >
                        Passbook
                      </FormLabel>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <UploadField label="Upload PAN Card Copy:" name={"pan"} />
                </div>
                <div className="w-full">
                  <UploadField label="Upload Aadhar Card Copy:" name={"pan"} />
                </div>
                <div className="w-full">
                  <UploadField label="Upload Passbook Copy:" name={"pan"} />
                </div>
                <div className="w-full">
                  <SelectField
                    label={"Status"}
                    name={"status"}
                    options={[
                      { label: "Approved", value: "approved" },
                      { label: "Pending", value: "pending" },
                    ]}
                  />
                </div>
                <div className="flex flex-row gap-4 mt-12">
                  <button className="w-[69px] h-[32px] bg-[#F7F7F7]">
                    <h1 className="text-[#000000] font-medium text-[14px] font-[satoshi]">
                      Cancel
                    </h1>
                  </button>
                  <PrimaryButton type="submit">
                    <h1 className="text-white font-semibold font-[satoshi]">
                      Save
                    </h1>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CausesView;

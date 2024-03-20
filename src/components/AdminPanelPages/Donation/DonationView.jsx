import { Form, Formik } from "formik";
import React, { useState } from "react";
import InputField from "../../inputs/InputAdminField/Index";
import SelectField from "../../inputs/AdminSelectField/Index";
import moment from "moment";
import "../../../pages/Campaigns/CreateCampaigns/CreateCampaigns.css";
import { FormLabel } from "@mui/material";
import images from "../../../constants/images";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetAll } from "../../../Hooks";


const styleLabel = {
  fontFamily: "satoshi",
  fontSize: 16,
  fontWeight: 700,
  color: "#383A42",
  marginTop: "4px",
  paddingLeft: "5px",
};


function Index() {
  const [data, setData] = useState({});

  let { state } = useLocation();

  let { id } = state;

  const navigate = useNavigate();

  useGetAll({
    key: `/admin-dashboard/donors/${id}`,
    enabled: true,
    select: (data) => {
      console.log(data);
      return data.data.data;
    },
    onSuccess: (data) => {
      setData(data);
    },
  });

  const initial_values = {
    campaign:data?.campaign || '',
    transaction_id:data?.transaction_id || '',
    full_name:data?.full_name || '',
    email:data?.email || '',
    id:data?.id || '',
    amount:data?.amount || '',
    city:data?.city || '',
    country:data?.country || '',
    pancard:data?.pancard || '',
    donation_type:data?.donation_type || '',
    payment_type:data?.payment_type || '',
    bank_name:data?.bank_name || '',
    other_details:data?.other_details || '',
    comment:data?.comment || '',
    transaction_date:data?.transaction_date || '',
    created_on:data?.created_on ||'',
    updated_on:data?.updated_on || ''
  };

  return (
    <Formik 
    enableReinitialize={true}
    initialValues={initial_values}
    >

      {({values})=>(

      
      <Form className="flex flex-col items-center gap-[30px] max-desktop:pt-4 max-tablet:4">
        <div className="flex max-desktop:flex-col max-tablet:flex-col w-full gap-3">
          <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col ">
            <div className="w-[49%] max-tablet:w-full">
              <FormLabel sx={styleLabel}>Campaign:</FormLabel>
              <div className="flex">
                <h1 className="text-[16px] font-[satoshi] pt-3  font-medium max-tablet:pl-2 max-tablet:pb-2">
                  {data?.campaign}
                </h1>
                <a href={`/campaign-details/${id}`}>
                <img className="pt-2 pl-2" src={images.CausesDetails} alt="" />
                </a>
              </div>
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"transaction_id"}
                value={values?.transaction_id}
                label={"Transaction ID:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
          <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"full_name"}
                value={values?.full_name}
                label={"Full Name:"}
                placeholder={"Placeholder Text"}
              />
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"email"}
                value={values?.email}
                label={"Email:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
        </div>
        <div className="flex  w-full max-desktop:flex-col max-tablet:flex-col gap-3">
          <div className="flex justify-between w-[50%]     max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"id"}
                value={values?.id}
                label={"ID:"}
                placeholder={"Placeholder Text"}
              />
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"amount"}
                value={values?.amount}
                label={"Donation:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
          <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
            <div className="w-[49%] max-tablet:w-full">
              <SelectField
                name={"city"}
                value={values?.city}
                label={"City:"}
                placeholder={"Placeholder Text"}
              />
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <SelectField
                name={"country"}
                value={values?.country}
                label={"Country:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
        </div>
        <div className="flex max-desktop:flex-col max-tablet:flex-col  w-full gap-3">
          <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"PostalCode"}
                label={"Postal Code:"}
                placeholder={"Placeholder Text"}
              />
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"pancard"}
                value={values?.pancard}
                label={"PAN Card:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
          <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"donation_type"}
                value={values?.donation_type}
                label={"Donation Type:"}
                placeholder={"Placeholder Text"}
              />
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <SelectField
                name={"Payment Gateway:"}
                label={"Payment Gateway:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
        </div>
        <div className="flex max-desktop:flex-col max-tablet:flex-col w-full gap-3">
          <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"bank_name"}
                value={values?.bank_name}
                label={"Bank Name:"}
                placeholder={"Placeholder Text"}
              />
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"other_details"}
                value={values?.other_details}
                label={"Other Details:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
          <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
            <div className="w-[49%] max-tablet:w-full">
              <SelectField
                name={"comment"}
                value={values?.comment}
                label={"Comments:"}
                placeholder={"Placeholder Text"}
              />
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <SelectField
                name={"anonymous"}
                label={"Anonymous:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
        </div>

        <div className="flex max-desktop:flex-col max-tablet:flex-col w-full gap-3">
          <div className="flex justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                type="date"
                // defaultValue={yesterday}
              value={values?.updated_on}
                name="updated_on"
                inputProps={{ min: moment().format("YYYY-MM-DD") }}
                required={true}
                label="Transaction Date:"
              />
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"TransactionConfirmation"}
                label={"Transfer Confirmation number:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
          <div className="flex  justify-between w-[50%] max-desktop:w-full max-tablet:flex-col max-tablet:gap-3">
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                type="date"
                // defaultValue={yesterday}
                value={values?.updated_on}
                name="created_on"
                inputProps={{ min: moment().format("YYYY-MM-DD") }}
                required={true}
                label="Transaction Date:"
              />
            </div>
            <div className="w-[49%] max-tablet:w-full">
              <InputField
                name={"Reward"}
                label={"Reward:"}
                placeholder={"Placeholder Text"}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full max-desktop:w-full max-tablet:flex-col  gap-3">
          <div className="w-[25%] max-desktop:w-1/2 max-tablet:w-full">
            <SelectField
              name={"Preferred"}
              label={"Preferred Donation City:"}
              placeholder={"Placeholder Text"}
            />
          </div>
          <div className="w-[25%] max-desktop:w-1/2 max-tablet:w-full">
            <SelectField
              name={"PreferredDonation"}
              label={"Preferred Donation State:"}
              placeholder={"Placeholder Text"}
            />
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="w-[69px] h-[32px] bg-[#F7F7F7]"
        >
          <h1 className="text-[#000000] font-medium text-[14px] font-[satoshi]">
            Go Back
          </h1>
        </button>
      </Form>
      )}
    </Formik>
  );
}

export default Index;

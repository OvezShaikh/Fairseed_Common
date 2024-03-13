import React from "react";
import InputField from "../../../inputs/InputAdminField/Index";
import SelectField from "../../../inputs/AdminSelectField/Index";
import PrimaryButton from "../../../inputs/PrimaryButton";
import CheckBox from "../../../inputs/checkBox";
import { FormLabel } from "@mui/material";
import { colors } from "../../../../constants/theme";
import { Formik, Form } from "formik";
import images from "../../../../constants/images";
import ReactQuilTextField from "../../../inputs/ReactQuilTextField/Index";
import { RiDeleteBin6Line } from "react-icons/ri";
import SuccessButton from "../../../inputs/SuccessButton/Index";
import { PiCheckFat } from "react-icons/pi";
import { red } from "@mui/material/colors";
import ErrorIcon from "@mui/icons-material/Error";
import ImageEditor from "../../../layout/ImageEditor/Index";
import Attachments from "../../../layout/Attachments/Index";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateOrUpdate, useGetAll } from "../../../../Hooks";
import { toast } from "react-toastify";

function Index() {
  let { state } = useLocation();
  let { id } = state;

  const [imageUrl, setImageUrl] = useState("");
  const [campaign, setCampaign] = useState({});
  const [Category, setCategory] = useState([]);

  const navigate = useNavigate();

  useGetAll({
    key: `/admin-dashboard/category?page=1&limit=10`,
    enabled: true,
    select: (data) => {
      console.log(data.data.rows);
      return data.data.rows;
    },
    onSuccess: (data) => {
      setCategory(data);
    },
  });

  useGetAll({
    key: `/campaign/campaign-details/${id}`,
    enabled: true,
    select: (data) => {
      console.log(data.data.data);
      return data.data.data;
    },
    onSuccess: (data) => {
      setCampaign(data);
    },
  });

  const { mutate } = useCreateOrUpdate({
    url: `/admin-dashboard/cause-edit/${id}`,
    method: "put",
  });

  const image = `${process.env.REACT_APP_BE_BASE_URL}${
    campaign?.campaign_image || ""
  }`;

  const initial_value = {
    title: campaign?.title || "",
    category: campaign?.category || "",
    goal_amount: campaign?.goal_amount || 0,
    location: campaign?.location || "",
    end_date: campaign?.end_date,
    summary: campaign?.summary || "",
    story: campaign?.story || "",
    campaign_image: image || "",
    approval_status: false,
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("campaign_image", values?.campaign_image);
    formData.append("title", values?.title);
    formData.append("goal_amount", values?.goal_amount);
    formData.append("location", values?.location);
    formData.append("end_date", values?.end_date);
    formData.append("summary", values?.summary);
    formData.append("story", values?.story);
    formData.append("category", values?.category);
    formData.append("approval_status", false);

    mutate(formData, {
      onSuccess: () => {
        toast.success("Details Updated Successfully !!!", {
          position: "top-right",
        });
      },
    });
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initial_value}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values, setFieldValue, handleChange }) => (
        <Form className="flex flex-col items-center  max-desktop:pt-6 max-tablet:pt-6">
          <div className="flex w-[100%] mt-2 gap-6 max-desktop:flex-col max-tablet:flex-col">
            <div className="flex flex-col w-[70%] gap-2 items-center max-desktop:w-full max-tablet:w-full">
              <div className="flex flex-col items-center">
                <div className="flex">
                  <h1 className="text-[16px] font-[satoshi] font-medium text-[#000000] underline pr-2">
                    {" "}
                    {values.title}
                  </h1>
                  <a href={`/campaign-details/${id}`}>
                    {" "}
                    <img src={images.CausesDetails} alt="" />{" "}
                  </a>
                </div>
                <p className="text-[16px] font-[satoshi] font-medium text-[#000000] ">
                  Note: Labels in red color indicates that the field is changed.{" "}
                </p>
              </div>
              <div className="w-full">
                <InputField
                  onChange={handleChange}
                  value={values?.title}
                  name={"title"}
                  label={"Title of Campaign:"}
                  required={"true"}
                  placeholder={"Minimum 50 INR"}
                />
              </div>
              <SelectField
                name={"category"}
                required={true}
                label="Choose a Category:"
                value={values?.category}
                options={Category.map((item) => ({
                  label: item.name,
                  value: item.id,
                }))}
              />
              <div className="w-full">
                <InputField
                  onChange={handleChange}
                  type="number"
                  name={"goal_amount"}
                  value={values?.goal_amount}
                  label={"Amount to be raised:"}
                  placeholder={"Minimum 50 INR"}
                />
              </div>
              <div className="w-full">
                <InputField
                  name={"location"}
                  onChange={handleChange}
                  value={values?.location}
                  label={"Location:"}
                />
              </div>
              <div className="flex w-[100%] gap-4">
                <div className="w-[50%]">
                  <InputField
                    onChange={handleChange}
                    type={"date"}
                    name={"end_date"}
                    value={values?.end_date}
                    label={"Accept Donations until (Select end date):"}
                    placeholder={"Minimum 50 INR"}
                  />
                </div>
                <div className="w-[50%] pt-3 checkmark-div max-desktop:w-[46%] max-tablet:w-[100%]">
                  <FormLabel
                    className="text-capitalize   font-medium d-flex align-items-center"
                    style={{
                      padding: "4px 8px 8px 8px",
                      color: colors.text.main,
                      fontSize: "16px",
                      fontWeight: 700,
                      fontFamily: "satoshi",
                      fontStyle: "normal",
                      height: "22px",
                    }}
                  >
                    Is the Campaign Zakaat eligible?
                    <span className="text-red-600">*</span>
                  </FormLabel>
                  <CheckBox
                    sx={{
                      paddingLeft: "15px",
                      "&.Mui-checked": {
                        color: red[500],
                      },
                    }}
                    name="zakat_eligible"
                    label={"Yes"}
                  />
                </div>
              </div>
              <div className="w-full">
                <FormLabel
                  className="font-medium d-flex align-items-center desktop:text-[20px] max-desktop:text-[16px]"
                  style={{
                    padding: "4px 8px 8px 8px",
                    color: colors.text.main,

                    fontWeight: 700,
                    fontFamily: "satoshi",
                    fontStyle: "normal",
                    // height: '22px',
                    fontSize: "16px",
                  }}
                >
                  About the Campaign:
                  <span className="text-red-600">*</span>
                </FormLabel>
                <div className="h-[332px] summary-div">
                  <ReactQuilTextField
                    theme="snow"
                    name="summary"
                    value={values?.summary}
                    // placeholder="Summarize in 100 words max."
                    style={{ "& .ql-editor": { minHeight: "50px" } }}
                    onChange={(value) => setFieldValue("summary", value)}
                  />
                </div>
              </div>
              <div className="w-full mt-5">
                <InputField
                  name={"summary"}
                  onChange={handleChange}
                  value={values?.summary}
                  label={"Summary"}
                  required={"true"}
                  multiline
                  info
                  CustomInfoIcon={
                    <ErrorIcon
                      className="ms-1"
                      style={{
                        color: "red",
                        cursor: "pointer",
                        height: "18px",
                      }}
                    />
                  }
                  infoText={"Please be careful while adding AD Path."}
                  rows={5}
                  placeholder="Placeholder text"
                />
              </div>
              <div className="w-full flex flex-col">
                <FormLabel
                  className="font-medium d-flex align-items-center desktop:text-[20px] max-desktop:text-[16px]"
                  style={{
                    padding: "4px 8px 16px 8px",
                    color: colors.text.main,
                    fontWeight: 700,
                    fontFamily: "satoshi",
                    fontStyle: "normal",
                    height: "22px",
                    fontSize: "16px",
                  }}
                >
                  Attachments:
                  <span className="text-red-600">*</span>
                </FormLabel>
                <div className="flex gap-4 max-tablet:flex-col">
                  <Attachments imageUrl="data:image/jpeg;base64,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" />
                  <Attachments imageUrl="data:image/jpeg;base64,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" />
                  <Attachments imageUrl="another_image_url_here" />
                </div>
              </div>
            </div>

            <div className="w-[30%] flex max-desktop:w-full max-tablet:w-full justify-center ">
              <ImageEditor
                sx={{ maxWidth: "500px", minHeight: "500px" }}
                dataUrl={image}
              />
            </div>
          </div>
          <div className="flex gap-3 pt-5">
            <button
              onClick={() => navigate(-1)}
              className="w-[69px] content-stretch h-[32px] bg-[#F7F7F7]"
            >
              <h1 className="text-[#000000] font-medium text-[14px] font-[satoshi]">
                Cancel
              </h1>
            </button>
            <SuccessButton
              type="submit"
              text={"Save & Approve"}
              icon={<PiCheckFat className="w-4 h-4 mt-1" />}
            />

            <PrimaryButton>
              <h1 className="text-white font-semibold font-[satoshi]">
                Reject Modification Request
              </h1>
            </PrimaryButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Index;

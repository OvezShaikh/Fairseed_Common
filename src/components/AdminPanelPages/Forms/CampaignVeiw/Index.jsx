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

  const [campaign, setCampaign] = useState({});
  const [Category, setCategory] = useState([]);
  const [ approval , setApproval ] = useState(false);

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
    key: `/admin-dashboard/cause-edit/${id}`,
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

    const handleSubmit = (values ) => {
        const formData = new FormData();
        formData.append('campaign_image', values?.campaign_image)
        formData.append('title', values?.title)
        formData.append('goal_amount', values?.goal_amount)
        formData.append('location', values?.location)
        formData.append('end_date', values?.end_date)
        formData.append('summary', values?.summary)
        formData.append('story', values?.story)
        formData.append('category', values?.category)
        {
          approval &&
          formData.append('approve_campaign' , true);
        }
        
        mutate(formData, {
            onSuccess: (response) => {
                toast.success("Details Updated Successfully !!!", {
                    position: 'top-right'
                })
                
            }
        })
    }


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
                value={values?.category?.name}
                options={Category.map((item) => ({
                  label: item.name,
                  value: item.id,
                }))}
                onChange={(value)=>setFieldValue("category" , value)}
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
                  {values?.documents?.map((imageUrl, index) => {
                    const documentLink = `${process.env.REACT_APP_BE_BASE_URL}${imageUrl?.doc_file}`;
                    console.log(documentLink, "doc_file");
                    return <Attachments key={index} id={id} imageUrl={documentLink} />;
                  })}
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
              onClick={()=>setApproval(true)}
              text={"Save & Approve"}
              icon={<PiCheckFat className="w-4 h-4 mt-1" />}
            />

            <PrimaryButton type='submit'>
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

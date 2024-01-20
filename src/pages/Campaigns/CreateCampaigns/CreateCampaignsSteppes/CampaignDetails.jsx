import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputField from "../../../../components/inputs/InputField";
import { FormLabel } from "react-bootstrap";
import { colors } from "../../../../constants/theme";
import DropZone from "../../../../components/inputs/dragAndDrop";
import SelectField from "../../../../components/inputs/SelectField";
import CheckBox from "../../../../components/inputs/checkBox";
import Box from "@mui/material/Box";
import { useCreateOrUpdate } from "../../../../Hooks/useCreateOrUpdate";
import CountrySelect from "../../../../components/inputs/countrySelect";
import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CampaignDetails = () => {
  const { control, getValues } = useFormContext();
  const [Category, setCategory] = useState([]);

  const page = 1;
  const limit = 20;
  // getValues()
  // const{mutate}=  useCreateOrUpdate({url:''});

  // mutate(getValues())

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BE_BASE_URL}/campaign/campaign-category?page=${page}&limit=${limit}`
      )
      .then((res) => {
        setCategory(res.data.rows);
        console.log("---------------------->", setCategory);
      })

      .catch((error) => {
        // Handle error if the request fails
        console.error("Error fetching category data:", error);
      });
  }, []);

  return (
    <div className="pb-20">
      <Box className="flex py-20 justify-center items-center">
        <DropZone
          name="campaign_image"
          acceptedFiles={({ "file/*": [".xlsx"] }, { "file/*": [".png"] })}
          maxFiles={1}
          // onChange={() => submitForm()}
          // isLoading={isUploadLoading}
        />
      </Box>
      <Controller
        control={control}
        name="title"
        render={({ field }) => (
          <InputField
            name={"title"}
            required={true}
            label={"Title of the Campaign:"}
            placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="goal_amount"
        render={({ field }) => (
          <InputField
            name={"goal_amount"}
            required={true}
            label={"Amount to be raised:"}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="location"
        render={({ field }) => (
          <InputField
            required={true}
            name={"location"}
            label={"Location:"}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <SelectField
            required={true}
            name={"category"}
            label={"Choose a Category:"}
            // options={[
            //   { label: "Self", value: "Self" },
            //   { label: "Family/Friends", value: "Family/Friends" },
            //   { label: "Charity", value: "Charity" },
            // ]}
            options={Category.map((label) => ({
              label: label.name,
              value: label.id,
            }))}
            // placeholder={"Title of the Campaign (Max 250 Words)"}
            {...field}
          />
          // {console.log(options)}
        )}
      />

      <div className="inline-flex w-full">
        <div className="w-[50%]">
          <Controller
            control={control}
            name="zakat_eligible"
            render={({ field: { onChange, value } }) => (
              <>
                {console.log(value, "<==checkbox valuerurru")}
                <FormLabel
                  className="text-capitalize font-medium d-flex align-items-center"
                  style={{
                    padding: "4px 8px 8px 8px",
                    color: colors.text.main,
                    fontSize: "20px",
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
                  name={"zakat_eligible"}
                  label={"Yes"}
                  checked={value}
                  onChange={onChange}
                />
              </>
            )}
          />
        </div>

        <div className="w-[50%]">
          <Controller
            control={control}
            name="end_date"
            render={({ field }) => (
              <div>
                <InputField
                  type={"date"}
                  name={"end_date"}
                  label={"Date"}
                  // placeholder={"Title of the Campaign (Max 250 Words)"}
                  {...field}
                />
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;

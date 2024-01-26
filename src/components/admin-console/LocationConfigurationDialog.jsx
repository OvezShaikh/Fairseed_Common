import { Add, Edit } from "@carbon/icons-react";
import { Grid, Box, Button } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useQueryClient } from "react-query";
import { Dialog } from "../layout/dialogBox/dialog";
import { useCreateOrUpdate, useGetAll } from "../../Hooks";
import PrimaryButton from "../inputs/PrimaryButton";
import SecondaryButton from "../inputs/secondaryButton";
import { colors } from "../../constants/theme";
import InputField from "../inputs/InputField";
import CustomSwitch from "../inputs/customSwitch";
import SelectField from "../inputs/SelectField";
import { toast } from "react-toastify";
import ErrorIcon from "@mui/icons-material/Error";

const initialState = {
  location: "",
  country_id: {},
  default_online_voice_routing_policy_id: {},
  default_dial_plan_policy_id: {},
  ad_path: "",
  active: true,
};

const validations = yup.object({
  location: yup
    .string()
    .trim("This field cannot include leading and trailing spaces")
    .strict(true)
    .required("Location is required!"),
  country_id: yup
    .object({
      country: yup.string().required("Country Name is required!"),
      id: yup.string().required("Country Name is required!"),
    })
    .nullable()
    .required("Country Name is required!"),
  ad_path: yup
    .string()
    .trim("This field cannot include leading and trailing spaces")
    .strict(true)
    .required("Path is required!"),
});

export const LocationConfigurationDialog = ({
  isUpdate = false,
  data,
  onEditClick,
  onSuccess,
  onClose,
}) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate ? `/admin/location/${data?.id}` : "/admin/location",
    method: isUpdate ? "put" : "post",
    onSuccess: () => onSuccess && onSuccess(),
  });

  const { data: countryData } = useGetAll({
    key: `/admin/location/country`,

    enabled: true,
  });

  const { data: PolicyOptions } = useGetAll({
    key: `/admin/policy`,
    enabled: true,
  });

  return (
    <Dialog
      title={`${isUpdate ? "Update" : "Add"}  Location`}
      onClose={() => onClose && onClose()}
      button={
        isUpdate ? (
          <Button
            onClick={() => onEditClick && onEditClick()}
            startIcon={<Edit />}
            className="text-capitalize"
            sx={{
              lineHeight: "18px",
              fontFamily: "FuturaLight",
              fontWeight: "300",
              fontSize: {
                xs: "0.8rem",
                lg: "0.9rem",
              },
            }}
            variant="text"
          >
            View/Edit
          </Button>
        ) : (
          <PrimaryButton
            className="text-capitalize"
            startIcon={<Add size={24} />}
          >
            Add New
          </PrimaryButton>
        )
      }
    >
      {({ onClose }) => (
        <Formik
          initialValues={{
            ...initialState,
            ...data,
            country_id: data?.["Country.country"]
              ? { id: data?.["Country.id"], country: data?.["Country.country"] }
              : {},
            default_online_voice_routing_policy_id: data?.[
              "VoiceRoutingPolicy.policy"
            ]
              ? {
                id: data?.["Policy.id"],
                policy: data?.["VoiceRoutingPolicy.policy"],
              }
              : {},
            default_dial_plan_policy_id: data?.["DialPlan.policy"]
              ? { id: data?.["Policy.id"], policy: data?.["DialPlan.policy"] }
              : {},
          }}
          enableReinitialize={true}
          validationSchema={validations}
          onSubmit={(values, { resetForm }) => {
            mutate(
              {
                ...values,
                country_id: values?.country_id?.id,
                default_online_voice_routing_policy_id:
                  values?.default_online_voice_routing_policy_id?.id,
                default_dial_plan_policy_id:
                  values?.default_dial_plan_policy_id?.id,
              },
              {
                onSuccess: () => {
                  resetForm();
                  toast.success(
                    `Location ${isUpdate ? "Updated" : "Created"} Successfully`
                  );
                  onClose();
                  queryClient.refetchQueries({
                    queryKey: ["/admin/location"],
                    stale: true,
                    exact: false,
                  });
                },
              }
            );
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Grid container className="mt-2">
                <Grid
                  container
                  columnSpacing={4}
                  rowSpacing={2}
                  className="px-4"
                >
                  <Grid md={6} xs={12} item>
                    <InputField name="location" label="Location Name" />
                  </Grid>
                  <Grid md={6} xs={12} item>
                    <SelectField
                      name="country_id"
                      options={countryData?.rows ? countryData?.rows : []}
                      getOptionLabel={(option) =>
                        option.country && option?.dial
                          ? `${option.country} (${option?.dial}) `
                          : option?.country
                            ? option.country
                            : ""
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                          {...props}
                        >
                          <img
                            width="25"
                            height={"18"}
                            src={`${process.env.REACT_APP_API_URL}${option?.flag_location}`}
                            alt="flag"
                          />
                          &nbsp;
                          {option?.country} ({option?.dial})
                        </Box>
                      )}
                      label={"Country Name"}
                      value={values?.country_id}
                      disable={isUpdate}
                    // onInputChange={(e) => setSearch(e.target.value)}
                    />
                  </Grid>
                  <Grid md={6} xs={12} item>
                    <SelectField
                      placeholder="Please Select a Value"
                      name="default_online_voice_routing_policy_id"
                      label="online voice routing profile"
                      getOptionLabel={(option) => option?.policy || ""}
                      options={
                        PolicyOptions
                          ? PolicyOptions?.online_voice_routing_profile
                          : []
                      }
                      value={values?.default_online_voice_routing_policy_id}
                    />
                  </Grid>
                  <Grid md={6} xs={12} item>
                    <SelectField
                      placeholder="Please Select a Value"
                      name="default_dial_plan_policy_id"
                      label="dial plan"
                      getOptionLabel={(option) => option?.policy || ""}
                      options={
                        PolicyOptions ? PolicyOptions?.dial_plan_profile : []
                      }
                      value={values?.default_dial_plan_policy_id}
                    />
                  </Grid>
                  <Grid xs={12} item>
                    <InputField
                      name="ad_path"
                      label="AD Path"
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
                  </Grid>

                  <Grid item xs={12}>
                    <CustomSwitch
                      name={"active"}
                      value={values?.active}
                      onChange={(e) =>
                        setFieldValue("active", e.target.checked)
                      }
                    />
                  </Grid>
                </Grid>

                <Grid xs={12} item className="border-top mt-4 pt-3">
                  <Box className="d-flex justify-content-end mt-8">
                    <SecondaryButton
                      className="px-4 text-capitalize me-4"
                      sx={{ border: `1px solid ${colors.primary.dark}` }}
                      color="warning"
                      onClick={onClose}
                    >
                      Close
                    </SecondaryButton>
                    <PrimaryButton
                      isLoading={isLoading}
                      variant="contained"
                      className="text-capitalize me-4 px-4 "
                      type="submit"
                    >
                      Save Changes
                    </PrimaryButton>
                  </Box>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      )}
    </Dialog>
  );
};

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
import AddNew from "../AdminPanelPages/Categories/AddNew"


const initialState = {
  location: "",
  country_id: {},
  default_online_voice_routing_policy_id: {},
  default_dial_plan_policy_id: {},
  ad_path: "",
  active: true,
};
const InputStyle =
{
  padding: '16px', border: "1px solid #e2e2e2"
  , borderRadius: '5px',
  // },
  "&:focus-within": {
    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.15);`,
    borderColor: " black",
  },
}

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
      title={`${isUpdate ? "Update" : "Add"}  Category`}
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
        <AddNew />
      )}
    </Dialog>
  );
};
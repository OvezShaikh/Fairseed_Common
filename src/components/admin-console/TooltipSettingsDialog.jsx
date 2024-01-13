import { Add, Edit } from "@carbon/icons-react";
import { Grid, Box, Button } from "@mui/material";
import React from "react";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { useQueryClient } from "react-query";
import { Dialog } from "../layouts/dialogBox";
import { useCreateOrUpdate } from "../../hooks";
import PrimaryButton from "../inputs/PrimaryButton";
import SecondaryButton from "../inputs/secondaryButton";
import { colors } from "../../constants/theme";
import RichTextEditor from "../inputs/RichTextEditor";
import { toast } from "react-toastify";

const initialState = {
  description: "",
};

const validations = yup.object({
  description: yup.string(),
});

export const TooltipSettingsDialog = ({
  isUpdate = false,
  data,
  onClick,
  onSuccess,
  onClose,
}) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useCreateOrUpdate({
    url: isUpdate ? `/admin/tooltip/${data?.id}` : "/admin/tooltip",
    method: isUpdate ? "put" : "post",
    onSuccess: () => onSuccess && onSuccess(),
  });

  return (
    <Dialog
      title={`${isUpdate ? "Update" : "Add"}  Description`}
      onClose={() => onClose && onClose()}
      button={
        isUpdate ? (
          <Button
            onClick={() => onClick && onClick()}
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
          }}
          enableReinitialize={true}
          validationSchema={validations}
          onSubmit={(values, { resetForm }) => {
            mutate(
              {
                ...values,
              },
              {
                onSuccess: () => {
                  resetForm();
                  onClose();
                  toast.success(`Description Updated Successfully`);
                  queryClient.refetchQueries({
                    queryKey: ["/admin/tooltip"],
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
                  <Grid xs={12} item className="mb-12">
                    <RichTextEditor
                      name="description"
                      style={{ height: "auto" }}
                      //   style={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>

                <Grid xs={12} item className="border-top mt-4 pt-3">
                  <Box className="d-flex justify-content-end mt-8">
                    <PrimaryButton
                      isLoading={isLoading}
                      variant="contained"
                      className="text-capitalize me-4 px-4 "
                      type="submit"
                    >
                      Save Changes
                    </PrimaryButton>
                    <SecondaryButton
                      className="px-4 text-capitalize me-4"
                      sx={{ border: `1px solid ${colors.primary.dark}` }}
                      color="warning"
                      onClick={onClose}
                    >
                      Close
                    </SecondaryButton>
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

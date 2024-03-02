import { RowDelete } from "@carbon/icons-react";
import { useDelete } from "../../../../hooks/useDelete";
import { useQueryClient } from "react-query";
import Typography from "@mui/material/Typography";
import { Confirm } from "../confirm";
import SecondaryButton from "../../../inputs/secondaryButton";

export const DeleteBox = ({
  data,
  title,
  children,
  url,
  refetchUrl,
  onSuccess,
  onClick,
  onClose,
}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useDelete({
    url,
    name: title || "",
    refetch: () =>
      queryClient.refetchQueries({
        queryKey: [refetchUrl ? refetchUrl : url],
        stale: true,
        exact: false,
        predicate: (query) => !query?.options?.params?.download,
      }),
  });

  return (
    <Confirm
      isLoading={isLoading}
      onClose={onClose}
      button={
        <SecondaryButton
          variant="text"
          sx={{ border: "none" }}
          startIcon={<RowDelete />}
          color={"red"}
          className="text-capitalize"
          onClick={() => onClick && onClick()}
        >
          <Typography
            className="text-capitalize  xl:text-sm 2xl:text-semi-base ms-2"
            sx={{
              lineHeight: "18px",
              fontFamily: "FuturaLight",
              fontWeight: "300",
              fontSize: {
                xs: "0.8rem",
                lg: "0.9rem",
              },
            }}
          >
            Remove
          </Typography>
        </SecondaryButton>
      }
      submitHandler={(onClose) => {
        mutate(data, {
          onSuccess: () => {
            onClose();
            onSuccess && onSuccess();
          },
        });
      }}
      title={`Delete ${title}` || "Delete"}
    >
      <p className="m-0">
        {children || "Are you sure do you want to delete this item?"}{" "}
      </p>
    </Confirm>
  );
};

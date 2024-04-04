import React from "react";
import ReactTable from "../../Table/index";
import { useState } from "react";
import IndeterminateCheckbox from "../../Table/IndeterminateCheckbox";
import SecondaryButton from "../../inputs/secondaryButton";
import { GoDotFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import images from "../../../constants/images";
import { Dialog } from "../../../components/layout/dialogBox";
import PrimaryButton from "../../inputs/PrimaryButton";
import axios from "axios";
import { toast } from "react-toastify";
import serverAPI from "../../../config/serverAPI";
import { Form, Formik } from "formik";
import { useCreateOrUpdate } from "../../../Hooks";
import { useQueryClient } from "react-query";
const style = {
  padding: "4px 48px",
  color: "white",
  fontSize: "18px",
  fontWeight: 700,
  fontFamily: "satoshi",
};
const style2 = {
  padding: "4px 48px",
  color: "black",
  fontSize: "18px",
  fontWeight: 700,
  fontFamily: "satoshi",
};

const User_Campaign = ({ onClose }) => {
  const [selectedRowID, setSelectedRowID] = useState(null);
  const [rowId, setRowId] = useState("");
  const queryClient = useQueryClient();

  const { pathname } = useLocation();

  const getStatusCellStyle = (status) => {
    if (status === "Pending") {
      return {
        color: "#fa9820",
        background: "#f5fabe  ",
      };
    } else if (status === "Active") {
      return {
        background: "#ECFDF3  ",

        color: "#037847",
      };
    } else if (status === "Rejected") {
      return {
        background: "#f5d0d0",
        color: "#f03c24",
      };
    } else {
      return {
        background: "#EBF0ED",
        color: "#717171",
      };
    }
  };

  const StatusCell = ({ value }) => (
    <div
      className=" flex justify-center gap-1  items-center w-[100px] h-[25px] rounded-3xl"
      style={getStatusCellStyle(value)}
    >
      <span className="" style={getStatusCellStyle(value)}>
        <GoDotFill />
      </span>
      <span className="" style={getStatusCellStyle(value)}>
        {value}
      </span>
    </div>
  );

  const { mutate: finalize } = useCreateOrUpdate({
    url: `/user-dashboard/finalize-campaign/${rowId}`,
  });

  const handleSubmit = (values) => {
    finalize(values, {
      onSuccess: (response) => {
        toast.success(response?.data?.message, {
          position: "top-right",
        });
        queryClient.refetchQueries({
          queryKey: ["/user-dashboard/campaign"],
          exact: false,
        });
      },
    });
  };


  const { mutate: Withdrawl } = useCreateOrUpdate({
    url: `/user-dashboard/make-withdrawal`,
  });



  const handlewithdrawSubmit = (row , onClose) => {
    const formData = new FormData();
    formData.append('campaign', row?.values?.id);
    Withdrawl(formData, {
      onSuccess: (response) => {
        toast.success(response?.data?.message, {
          position: "top-right",
        });
        queryClient.refetchQueries({
          queryKey: ["/user-dashboard/campaign"],
          exact: false,
        });
        onClose();
      },
    });
  };
  // const finaize = async (id, onClose) => {
  //   await serverAPI
  //     .post(`/user-dashboard/finalize-campaign/${id}`)
  //     .then((response) => {
  //       console.log(response, "id");
  //       toast.success(response?.data?.message, {
  //         position: "top-right",
  //       });
  //       onClose();
  //     });
  // };

  const columns = React.useMemo(() => [
    {
      Header: "Id",
      accessor: "id",
      Cell: ({ row }) => <div>{row.index + 1}</div>,
      minWidth: 50,
      width: 50,
      search: false,
    },

    {
      Header: "Title",
      accessor: "campaign.title",
      Cell: ({ row }) => {
        return (
          <div className="flex  ">
            <div className="w-[80px] truncate">{row?.original?.title}</div>
            <a href={`/campaign-details/${row.id}`}>
              <img
                className="ml-2"
                src={images.CausesDetails}
                alt="CausesDetails"
              />
            </a>
          </div>
        );
      },

      minWidth: 100,
      width: 100,
    },
    {
      Header: "User",
      accessor: "user.username",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Email",
      accessor: "user.email",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Mobile",
      accessor: "user.mobile_number",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Goal",
      accessor: "goal_amount",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Status",
      accessor: "status",

      minWidth: 100,
      width: 100,
      Cell: StatusCell,
    },
    {
      Header: "Deadline",
      accessor: "end_date",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Actions",
      accessor: "actions",

      minWidth: pathname === "/User/Campaigns" ? 180 : 100,
      width: pathname === "/User/Campaigns" ? 180 : 100,

      Cell: ({ row }) => {
        return (
          <div
            className={`flex items-center gap-2 justify-center max-desktop:pl-0 max-tablet:pl-0`}
          >
            {row?.values?.status === "Completed" && (
              <>
                <Dialog
                  onClose={() => onClose && onClose()}
                  button={
                    <SecondaryButton
                      sx={{ height: "30px" }}
                    >
                     Make Withdrawl
                    </SecondaryButton>
                  }
                  maxWidth="sm"
                >
                  <Formik
                    initialValues={{campaign:''}}
                    onSubmit={() => handlewithdrawSubmit(row ,onClose)}
                  >
                    {({ onClose }) => (
                      <Form>
                        <div className="flex flex-col gap-10 justify-center items-center flex-wrap text-center pb-4">
                          <img src={images.Vector} alt="" />
                          <p className="text-[ var(--Neutral-Neutral-7, #717171)] w-[65%] font-[satoshi] text-[34px] font-semibold max-tablet:text-[18px]">
                            Are you Sure you want to Make Withdrawl request. This
                            action can’t be undone.
                          </p>
                          <div className="flex justify-center gap-4 max-tablet:flex-col">
                            <SecondaryButton onClick={onClose} sx={style2}>
                              Cancel
                            </SecondaryButton>
                            <PrimaryButton
                              type="submit"
                              sx={style}
                            >
                              Withdraw
                            </PrimaryButton>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </Dialog>
              </>
            )}

            {row?.values?.status === "Active" && (
              <>
                <Link to="Edit-Campaign" state={{ id: row?.id }}>
                  <SecondaryButton sx={{ height: "30px" }}>
                    Edit
                  </SecondaryButton>
                </Link>

                <Dialog
                  onClose={() => onClose && onClose()}
                  button={
                    <SecondaryButton
                      sx={{ height: "30px" }}
                      onClick={() => setRowId(row?.id)}
                    >
                      Finalize Campaign
                    </SecondaryButton>
                  }
                  maxWidth="sm"
                >
                  <Formik
                    initialValues={{}}
                    onSubmit={(values) => handleSubmit(values)}
                  >
                    {({ onClose }) => (
                      <Form>
                        <div className="flex flex-col gap-10 justify-center items-center flex-wrap text-center pb-4">
                          <img src={images.Vector} alt="" />
                          <p className="text-[ var(--Neutral-Neutral-7, #717171)] w-[65%] font-[satoshi] text-[34px] font-semibold max-tablet:text-[18px]">
                            Are you Sure you want to finalize the cause. This
                            action can’t be undone.
                          </p>
                          <div className="flex justify-center gap-4 max-tablet:flex-col">
                            <SecondaryButton onClick={onClose} sx={style2}>
                              Cancel
                            </SecondaryButton>
                            <PrimaryButton
                              type="submit"
                              sx={style}
                              onClick={() => setRowId(row?.id, onClose)}
                            >
                              Finalize
                            </PrimaryButton>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </Dialog>

                {/* </Link> */}
              </>
            )}

            <Link to="Edit" state={{ id: row?.id }}>
              <SecondaryButton sx={{ height: "30px" }}>
                Edit Bank and KYC
              </SecondaryButton>
            </Link>
          </div>
        );
      },
    },
  ]);
  return (
    <div>
      <ReactTable
        rows={[]}
        columns={columns}
        showFilter
        manualPagination
        title={"Campaign"}
        checkboxComponent={IndeterminateCheckbox}
        url={`/user-dashboard/campaign`}
        extraQuery={{ inactive: true }}
        selectedRowID={selectedRowID}
      />
    </div>
  );
};

export default User_Campaign;

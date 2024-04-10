import React from "react";
import ReactTable from "../../Table/index";
import { useState } from "react";
import IndeterminateCheckbox from "../../Table/IndeterminateCheckbox";
import images from "../../../constants/images";
import { GoDotFill } from "react-icons/go";
import PrimaryButton from "../../inputs/PrimaryButton";
import { Link, useLocation } from "react-router-dom";
import SecondaryButton from "../../inputs/secondaryButton";
import { FaSortDown } from "react-icons/fa";

const Withdrawals = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
  const [get, setGet] = useState("");

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

  const columns = React.useMemo(() => [
    {
      Header: "Id", // Row number header
      accessor: "id", // Accessor for row number
      Cell: ({ row }) => <div>{row.index + 1}</div>,
      minWidth: 50,
      width: 50,
      search: false,
    },
    {
      Header: "Name",
      accessor: "title",
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
      Header: "Date",
      accessor: "end_date",
      minWidth: 100,
      width: 100,
    },
    {
      Header: "Causes",
      accessor: "causes",
      minWidth: 100,
      width: 100,
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
    },
    {
      Header: "Actions",
      accessor: "actions",
      sortable: false,
      nofilter: true,
      minWidth: 100,
      width: 100,
      Cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center pl-6 gap-3 max-desktop:pl-0 max-tablet:pl-0 max-tablet:gap-0 !max-desktop:gap-0">
            {row?.value?.status === "Pending" ? (
              <PrimaryButton
                sx={{
                  height: "30px",
                  width: "60px",
                  background: "red", 
                  color: "white",
                  "& .MuiButton-root:hover": {
                    background: "yellow",
                  },
                }}
              >
                Delete
              </PrimaryButton>
            ) : (
              <>
                <PrimaryButton
                  disabled
                  sx={{
                    height: "30px",
                    width: "60px",
                    background: "green",
                    color: "white",
                    "& .MuiButton-root:hover": {
                      background: "yellow",
                    },
                  }}
                >
                  Paid
                </PrimaryButton>
                <Link to="View" state={{ id: row?.id }}>
                  <SecondaryButton
                    sx={{
                      height: "30px",
                      width: "60px",
                      color: "blue",
                      fontWeight: 700,
                      border: "none !important",
                    }}
                  >
                    View
                    <FaSortDown className="pl-1 pb-2 text-blue-700 w-5 h-5" />
                  </SecondaryButton>
                </Link>
              </>
            )}
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
        url={`/admin-dashboard/campaign`}
        extraQuery={{ inactive: true }}
        selectedRowID={selectedRowID}
      />
    </div>
  );
};

export default Withdrawals;

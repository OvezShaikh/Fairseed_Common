import React from "react";
import ReactTable from "../../Table/index";
import { useState } from "react";
import IndeterminateCheckbox from "../../Table/IndeterminateCheckbox";
import SecondaryButton from "../../inputs/secondaryButton";
import { GoDotFill } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import images from "../../../constants/images";

const User_Campaign = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
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
          <div className={`flex items-center gap-2 justify-center pl-6 max-desktop:pl-0 max-tablet:pl-0`}>
            {
              row?.status !== 'Active' ? (
                <>
                  <Link to="Edit-Campaign" state={{ id: row?.id }}>
                    <SecondaryButton sx={{ height: "30px" }}>
                      Edit
                    </SecondaryButton>
                  </Link>
                  <Link to="View" state={{ id: row?.id }}>
                    <SecondaryButton sx={{ height: "30px" }}>
                      Finalize Campaign
                    </SecondaryButton>
                  </Link>
                </>

              ) : (

                <>
                  <Link to="View" state={{ id: row?.id }}>
                    <SecondaryButton sx={{ height: "30px" }}>
                      Make Withdrawl
                    </SecondaryButton>
                  </Link>

                </>
              )
            }

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

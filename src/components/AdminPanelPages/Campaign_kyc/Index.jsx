import React from "react";
import ReactTable from "../../Table/index";
import { useState } from "react";
import IndeterminateCheckbox from "../../Table/IndeterminateCheckbox";
import { LocationConfigurationDialog } from "../../admin-console/AddCategorydialog";
import { Link } from "react-router-dom";
import PrimaryButton from "../../inputs/PrimaryButton";
import { GoDotFill } from "react-icons/go";
import images from "../../../constants/images";

const Campaign_Kyc = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
  const getStatusCellStyle = (status) => {
    // let { state } = useLocation(); let { id } = state
    console.log("Status:", status);
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
      accessor: "index", // Accessor for row number
      Cell: ({ row }) => (
        // Display row number using index provided by React Table
        <div>{row.index + 1}</div>
      ),
      minWidth: 50,
      width: 50,
      search: false,
    },
    {
      Header: "Campaign Title",
      accessor: "campaign.title",

      minWidth: 100,
      width: 100,
      // Cell: ({ row }) => {
      //   return (
      //     <div className='flex  '>
      //       <div className="w-[80px] truncate">
      //         {row?.original?.title}
      //       </div>
      //       <a href={`/campaign-details/${row.id}`}>
      //         <img className='ml-2' src={images.CausesDetails} alt="CausesDetails" />
      //       </a>
      //     </div>
      //   );
      // },
    },
    {
      Header: "IFSC Code",
      accessor: "ifsc_code",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Bank Name",
      accessor: "bank_name",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Benificary Account No",
      accessor: "account_number",

      minWidth: 130,
      width: 130,
    },
    {
      Header: "Benificary Name",
      accessor: "account_holder_name",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: StatusCell,

      minWidth: 100,
      width: 100,
    },
    {
      Header: "campaign ID",
      accessor: "campaign.id",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Actions",
      accessor: "actions",

      nofilter: true,
      minWidth: 100,
      width: 100,
      Cell: ({ row }) => {
        return (
          <div className="flex items-center justify-center pl-6 gap-3 max-desktop:pl-0 max-tablet:pl-0 max-tablet:gap-0 !max-desktop:gap-0">
            <Link to="View" state={{ id: row?.id }}>
              <PrimaryButton
                sx={{
                  height: "30px",
                  width: "60px",
                  background: "#219D80",
                  color: "white",
                  "&  .MuiButton-root:hover": {
                    background: "yellow",
                  },
                }}
                text={"View"}
              >
                View
              </PrimaryButton>
            </Link>
            {/* <SecondaryButton sx={{ height: '30px' }}>Edit Bank and KYC</SecondaryButton> */}
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
        title={"Cause-KYC"}
        checkboxComponent={IndeterminateCheckbox}
        url={`/admin-dashboard/campaign-kyc`}
        extraQuery={{ inactive: true }}
        selectedRowID={selectedRowID}
      />
    </div>
  );
};

export default Campaign_Kyc;

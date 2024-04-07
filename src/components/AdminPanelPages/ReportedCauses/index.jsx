import React from "react";
import ReactTable from "../../Table/index";
import { useState } from "react";
import IndeterminateCheckbox from "../../Table/IndeterminateCheckbox";

import SecondaryButton from "../../inputs/secondaryButton";
import { Link } from "react-router-dom";
import PrimaryButton from "../../inputs/PrimaryButton";
import { GoDotFill } from "react-icons/go";

const Reported_Causes = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);

  const getStatusCellStyle = (status) => {
    if (status === 'Pending') {
      return {

        color: '#fa9820',
        background: '#f5fabe  ',
      };
    } else if (status === 'Active') {
      return {
        background: '#ECFDF3  ',

        color: '#037847',
      };
    } else if (status === 'Rejected') {
      return {
        background: '#f5d0d0',
        color: '#f03c24',
      }
    } else {
      return {
        background: '#EBF0ED',
        color: '#717171'
      }
    }
    ;
  };

  const StatusCell = ({ value }) => (
    <div className=' flex justify-center gap-1  items-center w-[100px] h-[25px] rounded-3xl' style={getStatusCellStyle(value)}>
      <span className='' style={getStatusCellStyle(value)}><GoDotFill /></span>
      <span className='' style={getStatusCellStyle(value)}>{value}</span>
    </div>
  );


  const columns = React.useMemo(() => [
    {
      Header: "Id", 
      accessor: "index", 
      Cell: ({ row }) => (
        <div>{row.index + 1}</div>
      ),
      minWidth: 50,
      width: 50,
      search: false,
    },
    {
      Header: "Name",
      accessor: "campaign.title",

      minWidth: 100,
      width: 100,
    },
  
    {
      Header: "Raising For",
      accessor: "campaign.rasing_for",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Description",
      accessor: "message",

      minWidth: 100,
      width: 100,
    },
    {
      Header: "Status",
      accessor: "approval_status",
      minWidth: 100,
      width: 100,
      Cell:StatusCell
    },
    {
      Header: "Date",
      accessor: "updated_on",

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
          <>
          <div className="flex gap-2 justify-center items-center p-3">
            <Link to="Edit" state={{ id: row?.id }}>
              <PrimaryButton>Delete</PrimaryButton>
            </Link>
           <Link to="Edit" state={{ id: row?.id }}>
             <SecondaryButton>Edit</SecondaryButton>
           </Link>
         </div>
         </>
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
        title={"Reported-Cause"}
        checkboxComponent={IndeterminateCheckbox}
        url={`/admin-dashboard/reported-campaign`}
        extraQuery={{ inactive: true }}
        selectedRowID={selectedRowID}
      />
    </div>
  );
};

export default Reported_Causes;

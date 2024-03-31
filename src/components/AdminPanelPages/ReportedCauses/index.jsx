import React from "react";
import ReactTable from "../../Table/index";
import { useState } from "react";
import IndeterminateCheckbox from "../../Table/IndeterminateCheckbox";

import SecondaryButton from "../../inputs/secondaryButton";
import { Link } from "react-router-dom";

const Reported_Causes = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);

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
      Header: "Name",
      accessor: "title",

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
    },
    {
      Header: "Date",
      accessor: "end_date",

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
          <div className="flex">
            <Link to="Edit" state={{ id: row?.id }}>
              <SecondaryButton>Edit</SecondaryButton>
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

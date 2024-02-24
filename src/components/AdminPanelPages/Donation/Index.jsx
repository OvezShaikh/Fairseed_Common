import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';

const Index = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
  const columns = React.useMemo(
    () => [
      {
        Header: "Id", // Row number header
        accessor: "index", // Accessor for row number
        Cell: ({ row }) => (
          // Display row number using index provided by React Table
          <div>{row.index + 1}</div>
        ),
        minWidth: 50,
        width: 50,
        search: false
      },
      {
        Header: "Name",
        accessor: "title",
        // minWidth: 150,
        // width: 200,
        nofilter: true,

      },
      {
        Header: "Action",
        accessor: "description",
        // minWidth: 200,
        // width: 280,

      },
      {
        Header: "Status",
        accessor: "price",
        // minWidth: 200,
        // width: 280,
        nofilter: true,

      },

    ],

    []
  );

  return (
    <div>
      <ReactTable
        rows={[]}
        columns={columns}
        manualPagination
        title={"Donations"}
        url="/admin-dashboard/donation-api"
        extraQuery={{ inactive: true }}
        // addButton={<LocationConfigurationDialog />}
        // addButton={<Button>HElloooooo</Button>}
        selectedRowID={selectedRowID}
        checkboxSelection={true}
      />
    </div>
  )
}

export default Index

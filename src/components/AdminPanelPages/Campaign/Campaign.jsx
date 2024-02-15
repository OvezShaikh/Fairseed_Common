import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import Columnfilter from '../../Table/Columnfilter'

const Campaign = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        sortable: false,
      },
      {
        Header: "Name",
        accessor: "title",
        sortable: false,


      },
      {
        Header: "User",
        accessor: "user.username",
        sortable: false,


      },
      {
        Header: "Email",
        accessor: "user.email",
        sortable: false,

      },
      {
        Header: "Mobile",
        accessor: "user.mobile_number",
        sortable: false,

      },
      {
        Header: "Goal",
        accessor: "goal_amount",
        sortable: false,

      },
      {
        Header: "Status",
        accessor: "status",

        sortable: false,
      },
      {
        Header: "Date",
        accessor: "end_date",
        sortable: false,
      },

    ],
    []
  );
  return (
    <div>
      <ReactTable
        rows={[]}
        columns={columns}
        showFilter
        manualPagination
        title={"Campaign"}
        checkboxComponent={IndeterminateCheckbox}
        url="/admin-dashboard/campaign"
        extraQuery={{ inactive: true }}
        addButton={<LocationConfigurationDialog />}
        // addButton={<Button>HElloooooo</Button>}
        selectedRowID={selectedRowID}
      />
    </div>
  )
}

export default Campaign

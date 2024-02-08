import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox, TextField } from '@mui/material';
// import CheckBox from "../../../components/inputs/checkBox"
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import { Formik } from 'formik';

const Index = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
  const columns = React.useMemo(
    () => [
      {
        id: "selection",

        Header: ({ getToggleAllRowsSelectedProps }) => (
          <Checkbox
            color="warning"
            {...getToggleAllRowsSelectedProps()}
          />
        ),
        width: 60,
        sortable: false,
        Cell: ({ row }) => {
          return (
            <Checkbox
              color="warning"
              {...row.getToggleRowSelectedProps()}
            />
          );
        },
      },
      {
        Header: 'Id',
        accessor: 'id',
        sortable: false,
      },
      {
        Header: 'Title',
        accessor: 'title',
        sortable: false,

      },
      {
        Header: 'User',
        accessor: 'username',
        sortable: false,

      },
      {
        Header: 'Email',
        accessor: 'email',
        sortable: false,

      },
      {
        Header: 'Mobile',
        accessor: 'mobile_number',
        sortable: false,

      },
      {
        Header: 'Goal',
        accessor: 'goal_amount',
        sortable: false,

      },
      {
        Header: 'Funds Raised',
        accessor: 'fund_raised',
        sortable: false,

      },
      {
        Header: 'Status',
        accessor: 'status',
        sortable: false,

      },
      {
        Header: 'Date',
        accessor: 'end_date'
        , sortable: false,

      },
      // {
      //     Header:'Deadline',
      //     accessor:'end_date'
      // },
      // {
      //     Header:'Actions',
      // },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div>

      <ReactTable
        rows={[]}
        columns={columns}
        manualPagination
        title={"Categories"}
        url="/admin-dashboard/campaign"
        extraQuery={{ inactive: true }}
        addButton={<LocationConfigurationDialog />}
        // addButton={<Button>HElloooooo</Button>}
        selectedRowID={selectedRowID}
        checkboxSelection={true}
      />
    </div>
  )
}

export default Index
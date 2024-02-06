import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';

const Index = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
  const columns = React.useMemo(
    () => [
      // {
      //   // Header: (params)=>(<Checkbox label='' name='test'/>),
      //   Header: '-',
      //   accessor: "category",
      //   minWidth: 100,
      //   width: 100,       
      //   // cell: (params)=>(<Checkbox label='' name='test'/>),
      //   // Cell: ({ row }) => {
      //   //   return (<Checkbox/>);
      //   // },
      // },
      {
        Header: 'Id',
        accessor: 'id'
      },
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'User',
        accessor: 'username'
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Mobile',
        accessor: 'mobile_number'
      },
      {
        Header: 'Goal',
        accessor: 'goal_amount'
      },
      {
        Header: 'Funds Raised',
        accessor: 'fund_raised'
      },
      {
        Header: 'Status',
        accessor: 'status'
      },
      {
        Header: 'Date',
        accessor: 'end_date'
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
      />
    </div>
  )
}

export default Index
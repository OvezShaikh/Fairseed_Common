import React from 'react';
import ReactTable from '../../Table/index';
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import Columnfilter from '../../Table/Columnfilter';
import { GoDotFill } from "react-icons/go";

const Campaign = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);

  const getStatusCellStyle = (status) => {
    console.log('Status:', status);
    if (status === 'Pending') {
      return {
        background: '#EBF0ED',
        color: '#717171'
      };
    } else if (status === 'Active') {
      return {
        background: '#ECFDF3  ',

        color: '#037847',
      };
    }
    return {
      color: 'gray'
    };
  };
  // const Status = ({ values }) => {
  //   // Loop through the array and create a badge-like component instead of a comma-separated string
  //   return (
  //     <>
  //       {values.map((Status, idx) => {
  //         return (
  //           <span key={idx} className="badge">
  //             {Status}
  //           </span>
  //         );
  //       })}
  //     </>
  //   );
  // };

  const StatusCell = ({ value }) => (
    <div className=' flex justify-center gap-1  items-center w-[81px] h-[22px] rounded-3xl' style={getStatusCellStyle(value)}>
      <span className='' style={getStatusCellStyle(value)}><GoDotFill /></span>
      <span className='' style={getStatusCellStyle(value)}>{value}</span>
    </div>
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        sortable: false,
      },
      {
        Header: 'Name',
        accessor: 'title',
        sortable: false,
      },
      {
        Header: 'User',
        accessor: 'user.username',
        sortable: false,
      },
      {
        Header: 'Email',
        accessor: 'user.email',
        sortable: false,
      },
      {
        Header: 'Mobile',
        accessor: 'user.mobile_number',
        sortable: false,
      },
      {
        Header: 'Goal',
        accessor: 'goal_amount',
        sortable: false,
      },
      {
        Header: 'Status',
        accessor: 'status',
        sortable: false,
        Cell: StatusCell,


      },
      {
        Header: 'Date',
        accessor: 'end_date',
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
        title={'Campaign'}
        checkboxComponent={IndeterminateCheckbox}
        url='/admin-dashboard/campaign'
        extraQuery={{ inactive: true }}
        addButton={<LocationConfigurationDialog />}
        selectedRowID={selectedRowID}
      />
    </div>
  );
};

export default Campaign;

import React from 'react';
import ReactTable from '../../Table/index';
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import Columnfilter from '../../Table/Columnfilter'
import SecondaryButton from '../../inputs/secondaryButton';
import CauseEdit from '../CauseEditApprovel/Index';
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

const Campaign = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);

  const getStatusCellStyle = (status) => {
    console.log('Status:', status);
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

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        // apiURL: `/admin-dashboard/campaign
        filter: 'text',
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Title",
        accessor: "title",
        // apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,


      },
      {
        Header: "User",
        accessor: "user.username",
        // apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Email",
        accessor: "user.email",
        // apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Mobile",
        accessor: "user.mobile_number",
        // apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Goal",
        accessor: "goal_amount",
        // apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Status",
        accessor: "status",
        // apiURL: `/admin-dashboard/campaign
        minWidth: 100,
        width: 100,
        Cell: StatusCell,
      },
      {
        Header: "Deadline",
        accessor: "end_date",
        // apiURL: `/admin-dashboard/campaign`,

        minWidth: 100,
        width: 100,
      },
      {
        Header: 'Actions',
        accessor: 'actions',

        nofilter: true,
        minWidth: 100,
        width: 100,
        Cell: ({ row }) => {
          return (
            <div className='flex items-center justify-center pl-6 max-desktop:pl-0 max-tablet:pl-0'>
              <Link to="Edit" state={{ id: row?.id }} ><SecondaryButton sx={{ height: '30px' }} >Edit</SecondaryButton></Link>
              {/* <SecondaryButton sx={{ height: '30px' }}>Finalize your Campaign</SecondaryButton> */}
              {/* <SecondaryButton sx={{ height: '30px' }}>Edit Bank and KYC</SecondaryButton> */}
            </div >
          )
        }
      }
    ],

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
        url={`/admin-dashboard/campaign`}
        extraQuery={{ inactive: true }}
        addButton={<LocationConfigurationDialog />}
        // addButton={<Button>HElloooooo</Button>}
        selectedRowID={selectedRowID}
      />
    </div>
  )
}

export default Campaign;

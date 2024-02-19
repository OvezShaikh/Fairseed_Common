import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox, TextField } from '@mui/material';
// import CheckBox from "../../../components/inputs/checkBox"
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import { Formik } from 'formik';
import images from '../../../constants/images';
import { GoDotFill } from "react-icons/go";



const Index = () => {
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
        search: false

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
        Cell: StatusCell,

      },
      {
        Header: 'Date',
        accessor: 'end_date'
        ,sortable: false,

      }, 
      {
        Header: 'Causes',
        accessor: 'causes',
        sortable: false,
        Cell: ({ row }) => {
          return (
            <div className='flex  '>
              <div className="w-[80px] truncate">
                {row?.original?.title}
              </div>
              <a href={`/campaign-details/${row.id}`}>
                <img className='ml-2' src={images.CausesDetails} alt="CausesDetails" />
              </a>
            </div>
          );
        },

      },
     
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
        url="/admin-dashboard/category"
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

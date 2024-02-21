import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox, TextField } from '@mui/material';
// import CheckBox from "../../../components/inputs/checkBox"
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import { Formik } from 'formik';
import images from '../../../constants/images';

import { GoDotFill } from "react-icons/go";
import CauseEdit from '../CauseEditApprovel/Index';
import SecondaryButton from '../../inputs/secondaryButton';
import { Link } from 'react-router-dom';




const Index = () => {

  const [selectedRowID, setSelectedRowID] = useState(null);

  const getStatusCellStyle = (value) => {
    console.log('Status:', value);
    if (value === true) {
      return {
        background: '#ECFDF3',
        color: '#037847'
      };
    } else if (value === false ) {
      return {
        background: '#f5d0d0',
        color: '#f03c24',
      };
    }
  };
 

  const StatusCell = ({ value }) => (
    <div className=' flex justify-center gap-1  items-center w-[60px] h-[22px] rounded-3xl' style={getStatusCellStyle(value)}>
      <span className='' style={getStatusCellStyle(value)}><GoDotFill /></span>
      <span className='' style={getStatusCellStyle(value)}>{
      value ? ("on") : ("off")
      }</span>
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
        Header: 'User',
        accessor: 'username',
        sortable: false,

      },
    
      {
        Header: 'Status',
        accessor: 'is_active',
        sortable: false,
       Cell:StatusCell,
      },

      {
        Header: 'Actions',
        accessor: 'actions',
        sortable: false,
        nofilter: true,
        minWidth: 100,
        width: 200,
        Cell: ({row})=>{
          return (
            <div className='flex'>
               <Link to={'/Edit'} target={<CauseEdit id={row?.id}/>}><SecondaryButton >Edit</SecondaryButton></Link> 
              <SecondaryButton>Finalize your Campaign</SecondaryButton>
              <SecondaryButton>Edit Bank and KYC</SecondaryButton>
            </div>
          )
        }
      }
     
     
     
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
        url="/admin-dashboard/category?page=1&limit=10"
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

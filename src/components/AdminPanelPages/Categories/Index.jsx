import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox, TextField } from '@mui/material';
// import CheckBox from "../../../components/inputs/checkBox"
import { LocationConfigurationDialog } from '../../admin-console/AddCategorydialog';
import { Formik } from 'formik';
import images from '../../../constants/images';
import { GoDotFill } from "react-icons/go";
import SecondaryButton from '../../inputs/secondaryButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDelete } from '../../../Hooks';
import PrimaryButton from '../../inputs/PrimaryButton';




const Index = () => {

  const [selectedRowID, setSelectedRowID] = useState(null);

  const { mutate } = useDelete({
    url: '/admin-dashboard/category',
    name: 'Category',
  });

  const handleDelete = (id) => {
    mutate(id);
  };



  const getStatusCellStyle = (value) => {
    console.log('Status:', value);
    if (value === true) {
      return {
        background: '#ECFDF3',
        color: '#037847'
      };
    } else if (value === false) {
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
        Header: 'Name',
        accessor: 'name',


      },

      {
        Header: 'Status',
        accessor: 'is_active',
        Cell: StatusCell,
      },

      {
        Header: 'Actions',
        accessor: 'actions',

        nofilter: true,
        minWidth: 100,
        width: 100,
        Cell: ({ row }) => {
          return (
            <div className='flex items-center justify-center pl-6 gap-3 max-desktop:pl-0 max-tablet:pl-0 max-tablet:gap-0 !max-desktop:gap-0'>
              <Link to="Edit" state={{ id: row?.id }} ><PrimaryButton sx={{ height: '30px' }} >Edit</PrimaryButton></Link>
              <PrimaryButton sx={{ height: '30px', width: '60px', background: '#red', color: 'white' }} onClick={() => handleDelete(row?.id)} text={'Delete'}>Delete</PrimaryButton>
            </div >
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

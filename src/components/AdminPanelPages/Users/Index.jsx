import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import SecondaryButton from '../../inputs/secondaryButton';
import { Link } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import PrimaryButton from '../../inputs/PrimaryButton';

const User = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);


  const getStatusCellStyle = (user_type) => {
    // let { state } = useLocation(); let { id } = state
    console.log('user_type', user_type);
    if (user_type === 'NGO') {
      return {



        color: '#fa9820',
        background: '#f5fabe  ',
      };
    } else if (user_type === 'Individual') {
      return {
        background: '#ECFDF3  ',

        color: '#037847',
      };
    } else {
      return {
        display: 'none'
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
        Header: "Date",
        accessor: "created_on",
        minWidth: 100,
        width: 100,


      },
      {
        Header: "User",
        accessor: "username",
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Email",
        accessor: "email",
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Mobile",
        accessor: "mobile_number",
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Country",
        accessor: "country",
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Registered As",
        accessor: "user_type",
        minWidth: 100,
        width: 100,
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
              <Link to="Edit-User" state={{ id: row?.id }} ><SecondaryButton sx={{ height: '30px' }} >Edit</SecondaryButton></Link>
              <PrimaryButton sx={{ height: '30px', width: '60px', background: 'red', color: 'white' }} text={'Delete'}>Delete</PrimaryButton>
              
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
        url={`admin-dashboard/users?paage=1&limit=10`}
        extraQuery={{ inactive: true }}
        addButton={<LocationConfigurationDialog />}
        // addButton={<Button>HElloooooo</Button>}
        selectedRowID={selectedRowID}
      />
    </div>
  )
}

export default User

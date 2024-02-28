import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import PrimaryButton from '../../inputs/PrimaryButton';
import SecondaryButton from '../../inputs/secondaryButton';
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { PagesAddNew } from '../../admin-console/PagesAddNew';

const Page = () => {
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
        Header: "Title",
        accessor: "title",
        sortable: false,
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Slug/URL",
        accessor: 'slug',
        sortable: false,
        minWidth: 100,
        width: 100,
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        sortable: false,
        nofilter: true,
        minWidth: 100,
        width: 100,
        Cell: ({ row }) => {
          return (
            <div className='flex items-center justify-center pl-6 gap-3 max-desktop:pl-0 max-tablet:pl-0 max-tablet:gap-0 !max-desktop:gap-0'>
              <Link to="Edit-Pages" state={{ id: row?.id }} ><SecondaryButton sx={{ height: '30px' }} >Edit</SecondaryButton></Link>
              <PrimaryButton sx={{ height: '30px', width: '60px', background: 'red', color: 'white' }} text={'Delete'}>Delete</PrimaryButton>
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
        url={`admin-dashboard/pages?page=1&limit=10`}
        extraQuery={{ inactive: true }}
        addButton={<PagesAddNew />}
        // addButton={<Button>HElloooooo</Button>}
        selectedRowID={selectedRowID}
      />
    </div>
  )
}

export default Page


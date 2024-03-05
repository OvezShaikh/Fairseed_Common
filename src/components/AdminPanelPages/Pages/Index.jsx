import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import SecondaryButton from '../../inputs/secondaryButton';
import { Link } from 'react-router-dom';
import { PagesAddNew } from '../../admin-console/PagesAddNew';
import { DeleteBox } from '../../layout/dialogBox/delete';

const Page = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);


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
  // const { mutate } = useDelete({
  //   url: '/admin-dashboard/pages',
  //   name: 'Page',
  // });



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
              <DeleteBox
                url={`/admin-dashboard/pages`}
                data={row?.original?.id}
                title={"Pages"}
                // onClick={() => setSelectedRowID(row?.original?.id)}
                // onSuccess={() => setSelectedRowID(null)}
                // onClose={() => setSelectedRowID(null)}

                refetchUrl={'/admin-dashboard/pages'}
              >

              </DeleteBox>
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
        url={`/admin-dashboard/pages`}
        // extraQuery={{ inactive: true }}
        addButton={<PagesAddNew />}
        // addButton={<Button>HElloooooo</Button>}
        selectedRowID={selectedRowID}
      />
    </div>
  )
}

export default Page


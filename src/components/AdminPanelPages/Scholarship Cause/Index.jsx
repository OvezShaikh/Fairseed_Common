import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';

import { Link } from 'react-router-dom';
import PrimaryButton from '../../inputs/PrimaryButton';

const Scholarship = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);

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
        Header: "Name",
        accessor: "title",
        apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,


      },
      {
        Header: "User",
        accessor: "user.username",
        apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Email",
        accessor: "user.email",
        apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Mobile",
        accessor: "user.mobile_number",
        apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Goal",
        accessor: "goal_amount",
        apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Status",
        accessor: "status",
        apiURL: `/admin-dashboard/campaign`,
        minWidth: 100,
        width: 100,
      },
      {
        Header: "Date",
        accessor: "end_date",
        apiURL: `/admin-dashboard/campaign`,
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
            <div className='flex items-center justify-center pl-6 gap-3 max-desktop:pl-0 max-tablet:pl-0 max-tablet:gap-0 !max-desktop:gap-0'>
              <Link to="View" state={{ id: row?.id }} ><PrimaryButton sx={{
                height: '30px', width: '60px', background: '#219D80', color: 'white', "&  .MuiButton-root:hover": {
                  background: "yellow"
                }
              }} text={'View'}>View</PrimaryButton></Link>
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

export default Scholarship

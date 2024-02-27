import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import PrimaryButton from '../../inputs/PrimaryButton';


const Index = () => {
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
        search: false,
        sortable: false
      },
      {
        Header: "Full Name",
        accessor: "full_name",
        // minWidth: 150,
        // width: 200,
        nofilter: true,

      },
      {
        Header: "Campaign",
        accessor: "campaign",
        // minWidth: 200,
        // width: 280,

      },
      {
        Header: "Email",
        accessor: "email",
        // minWidth: 150,
        // width: 200,
        nofilter: true,

      },
      {
        Header: "Donation",
        accessor: "amount",
        // minWidth: 200,
        // width: 280,

      },
      {
        Header: "Payment Type",
        accessor: "payment_type",
        // minWidth: 150,
        // width: 200,
        nofilter: true,

      },
      {
        Header: "Date",
        accessor: "created_on",
        // minWidth: 200,
        // width: 280,

      },
      {
        Header: "Donation Type",
        accessor: 'donation_type'
      },
      {
        Header: "Status",
        accessor: "status",
        // minWidth: 200,
        // width: 280,
        nofilter: true,

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
              <PrimaryButton sx={{
                height: '30px', width: '60px', background: '#219D80', color: 'white', "&  .MuiButton-root:hover": {
                  background: "yellow"
                }
              }} text={'View'}>View</PrimaryButton>
              {/* <SecondaryButton sx={{ height: '30px' }}>Edit Bank and KYC</SecondaryButton> */}
            </div >
          )
        }
      }

    ],

    []
  );

  return (
    <div>
      <ReactTable
        rows={[]}
        columns={columns}
        manualPagination
        title={"Donations"}
        url="/admin-dashboard/donors?page=1&limit=10"
        extraQuery={{ inactive: true }}
        // addButton={<LocationConfigurationDialog />}
        // addButton={<Button>HElloooooo</Button>}
        selectedRowID={selectedRowID}
        checkboxSelection={true}
      />
    </div>
  )
}

export default Index

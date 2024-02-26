import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import SecondaryButton from '../../inputs/secondaryButton';
import { Link } from 'react-router-dom';

const Index = () => {
    const [selectedRowID, setSelectedRowID] = useState(null);
    const columns = React.useMemo(
        () => [
          {
            Header: "ID",
            accessor: "id",
            minWidth: 100,
            width: 100,
            
          },
          {
            Header: "Full name",
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
            // minWidth: 200,
            // width: 280,
            nofilter: true,
            
          },
          {
            Header: "Donation",
            accessor: "amount",
            // minWidth: 200,
            // width: 280,
            nofilter: true,
            
          },
          {
            Header: "	Payment gateway",
            accessor: "payment_type",
            // minWidth: 200,
            // width: 280,
            nofilter: true,
            
          },
          {
            Header: "Date",
            accessor: "created_on",
            // minWidth: 200,
            // width: 280,
            nofilter: true,
            
          },
          {
            Header: "Donation Type",
            accessor: "donation_type",
            // minWidth: 200,
            // width: 280,
            nofilter: true,
            
          },
          {
            Header: "Preferred Country",
            accessor: "country",
            // minWidth: 200,
            // width: 280,
            nofilter: true,
            
          },
          {
            Header: "Preferred City",
            accessor: "city",
            // minWidth: 200,
            // width: 280,
            nofilter: true,
            
          },
          {
            Header: "Status",
            accessor: "is_approved",
            // minWidth: 200,
            // width: 280,
            nofilter: true,
            
          },
          {
            Header: 'Action',
            accessor: 'Action',
            sortable: false,
            nofilter: true,
            minWidth: 100,
            width: 100,
            Cell: ({row})=>{
              return (
                <div className='flex'>
                   <Link to={'/Edit'} ><SecondaryButton >view</SecondaryButton></Link> 
                 
                </div>
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

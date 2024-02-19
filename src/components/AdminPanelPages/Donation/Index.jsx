import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';

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
            Header: "Name",
            accessor: "title",
            // minWidth: 150,
            // width: 200,
            nofilter: true,
            
          },
          {
            Header: "Action",
            accessor: "description",
            // minWidth: 200,
            // width: 280,
          
          },
          {
            Header: "Status",
            accessor: "price",
            // minWidth: 200,
            // width: 280,
            nofilter: true,
            
          },
         
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
        url="/admin-dashboard/donation-api"
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

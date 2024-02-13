import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import  Columnfilter  from '../../Table/Columnfilter'

const Campaign = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
  const columns = React.useMemo(
      () => [
        {
          Header: "ID",
          accessor: "id",
        },
        {
          Header: "Name",
          accessor: "title", 
        
        },
        {
          Header: "User",
          accessor: "username",
      
        },
        {
          Header: "Email",
          accessor: "email",
         
        },
        {
          Header: "Mobile",
          accessor: "mobile",
         
        },
        {
          Header: "Goal",
          accessor: "goal_amount",
          
        },
        {
          Header: "Status",
          accessor: "status",
        },
        {
          Header: "Date",
          accessor: "end_date",
        },
        
      ],
      []
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
    url="/admin-dashboard/campaign"
    extraQuery={{ inactive: true }}
     addButton={<LocationConfigurationDialog />}
    // addButton={<Button>HElloooooo</Button>}
    selectedRowID={selectedRowID}
    />
  </div>
)
}

export default Campaign

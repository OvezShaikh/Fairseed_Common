import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import  Columnfilter  from '../../Table/Columnfilter'
import SecondaryButton from '../../inputs/secondaryButton';
import CauseEdit from '../CauseEditApprovel/Index';
import { Link } from 'react-router-dom';

const User = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
 
  const columns = React.useMemo(
      () => [
        {
          Header: "Full name",
          accessor: "username",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          filter:'text',
          minWidth: 100,
          width: 100,
          
        },
        {
          Header: "Email",
          accessor: "email", 
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
          
        
        },
        {
          Header: "Mobile",
          accessor: " mobile_number",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
      
        },
        {
          Header: "Campaigns",
          accessor: "user.email",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
         
        },
        {
          Header: "Mobile",
          accessor: "user.mobile_number",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
         
        },
        {
          Header: "Date",
          accessor: "created_on",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
          
        },
        {
          Header: "Registered As",
          accessor: "user_type",
          apiURL:`/admin-dashboard/campaign`,
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
          Cell: ({row})=>{
            return (
              <div className='flex'>
                 <Link to={'/Edit'} target={<CauseEdit id={row?.id}/>}><SecondaryButton >Edit</SecondaryButton></Link> 
                <SecondaryButton>Delete</SecondaryButton>
                
              </div>
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
    url={`/admin-dashboard/users`}
    extraQuery={{ inactive: true }}
     addButton={<LocationConfigurationDialog />}
    // addButton={<Button>HElloooooo</Button>}
    selectedRowID={selectedRowID}
    />
  </div>
)
}

export default User

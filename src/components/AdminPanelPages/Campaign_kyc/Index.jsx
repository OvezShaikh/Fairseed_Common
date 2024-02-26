import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import { Button, Checkbox } from '@mui/material';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import Columnfilter from '../../Table/Columnfilter'
import SecondaryButton from '../../inputs/secondaryButton';
import CauseEdit from '../CauseEditApprovel/Index';
import { Link } from 'react-router-dom';

const Campaign_Kyc = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
 
  const columns = React.useMemo(
      () => [
        {
          Header: "ID",
          accessor: "id",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          filter:'text',
          minWidth: 100,
          width: 100,
        },
        {
          Header: "Benificary Name",
          accessor: "account_holder_name", 
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
          
        
        },
        {
          Header: "	Benificary Account No",
          accessor: "account_number",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 150,
      
        },
        {
          Header: "Bank Name",
          accessor: "bank_name",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
         
        },
        {
          Header: "IFSC Code",
          accessor: "ifsc_code",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
         
        },
        {
          Header: "	Campaign ID",
          accessor: "campaign.id",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
          
        },
        {
          Header: "Campaign Title",
          accessor: "campaign.title",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
        },
        {
          Header: "Status",
          accessor: "status",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
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
                 <Link to={'/Edit'} target={<CauseEdit id={row?.id}/>}><SecondaryButton >view</SecondaryButton></Link> 
               
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
    url={`/admin-dashboard/campaign-kyc?page=1&limit=4`}
    extraQuery={{ inactive: true }}
     addButton={<LocationConfigurationDialog />}
    // addButton={<Button>HElloooooo</Button>}
    selectedRowID={selectedRowID}
    />
  </div>
)
}

export default Campaign_Kyc

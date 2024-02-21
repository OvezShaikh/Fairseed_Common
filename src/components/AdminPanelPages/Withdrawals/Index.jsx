import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/LocationConfigurationDialog';
import images from '../../../constants/images';
import { GoDotFill } from "react-icons/go";


const Withdrawals = () => {
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
 

  const StatusCell = ({ value }) => (
    <div className=' flex justify-center gap-1  items-center w-[100px] h-[25px] rounded-3xl' style={getStatusCellStyle(value)}>
      <span className='' style={getStatusCellStyle(value)}><GoDotFill /></span>
      <span className='' style={getStatusCellStyle(value)}>{value}</span>
    </div>
  );
 
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
          Header: "Name",
          accessor: "title", 
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
          
        
        },
      
        {
          Header: "Email",
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
          Header: "Goal",
          accessor: "goal_amount",
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
          Cell:StatusCell,
        },
        {
          Header: "Date",
          accessor: "end_date",
          apiURL:`/admin-dashboard/campaign`,
          sortable: false,
          minWidth: 100,
          width: 100,
        },
        {
          Header: 'Causes',
          accessor: 'causes',
          sortable: false,
          Cell: ({ row }) => {
            return (
              <div className='flex  '>
                <div className="w-[80px] truncate">
                  {row?.original?.title}
                </div>
                <a href={`/campaign-details/${row.id}`}>
                  <img className='ml-2' src={images.CausesDetails} alt="CausesDetails" />
                </a>
              </div>
            );
          },
  
        },
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

export default Withdrawals

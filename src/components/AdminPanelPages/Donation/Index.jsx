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
            // Header: (params)=>(<Checkbox label='' name='test'/>),
            Header: '-',
            accessor: "category",
            minWidth: 100,
            width: 100,       
            // cell: (params)=>(<Checkbox label='' name='test'/>),
            // Cell: ({ row }) => {
            //   return (<Checkbox/>);
            // },
          },
          {
            Header: "ID",
            accessor: "id",
            minWidth: 100,
            width: 100,
            
          },
          {
            Header: "Name",
            accessor: "title",
            minWidth: 150,
            width: 200,
            nofilter: true,
            
          },
          {
            Header: "Action",
            accessor: "description",
            minWidth: 200,
            width: 280,
          
          },
          {
            Header: "Status",
            accessor: "price",
            minWidth: 200,
            width: 280,
            nofilter: true,
            
          },
          // {
          //   Header: "city",
          //   accessor: "city",
          //   nofilter: true,
          //   minWidth: 200,
          //   width: 480,
          //   sortable: false,
          // },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );
      // console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
  return (
    <div>
      <ReactTable
        rows={[]}
        columns={columns}
        manualPagination
        title={"Donations"}
        url="/products"
        extraQuery={{ inactive: true }}
        addButton={<LocationConfigurationDialog />}
        // addButton={<Button>HElloooooo</Button>}
        selectedRowID={selectedRowID}
        checkboxSelection={true}
      />
    </div>
  )
}

export default Index

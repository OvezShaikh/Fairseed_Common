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
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "ID",
            accessor: "id",
          },
        ],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
      );
  return (
    <div>
      <ReactTable
      rows={[]}
      columns={columns}
      noSearch
      showFilter
      manualPagination
      title={"Categories"}
      url="/admin-dashboard/category"
      extraQuery={{ inactive: true }}
       addButton={<LocationConfigurationDialog />}
      // addButton={<Button>HElloooooo</Button>}
      selectedRowID={selectedRowID}
      checkboxSelection
      />
    </div>
  )
}

export default Index

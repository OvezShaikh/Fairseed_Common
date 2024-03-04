import React from 'react'
import ReactTable from '../../Table/index'
import { useState } from 'react';
import IndeterminateCheckbox from '../../Table/IndeterminateCheckbox';
import { LocationConfigurationDialog } from '../../admin-console/AddCategorydialog';
import images from '../../../constants/images';
import { GoDotFill } from "react-icons/go";
import PrimaryButton from '../../inputs/PrimaryButton';
import { Link, useLocation } from 'react-router-dom';


const Withdrawals = () => {
  const [selectedRowID, setSelectedRowID] = useState(null);
  const [get, setGet] = useState('')
  let { pathname } = useLocation()

  const getStatusCellStyle = (status) => {
    setGet(status)
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
        Header: "Id", // Row number header
        accessor: "id", // Accessor for row number
        Cell: ({ row }) => (
          <div>{row.index + 1}</div>
        ),
        minWidth: 50,
        width: 50,
        search: false
      },
      {
        Header: "Name",
        accessor: "title",
        minWidth: 100,
        width: 100,


      },

      {
        Header: "Email",
        accessor: "user.email",
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Mobile",
        accessor: "user.mobile_number",
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Goal",
        accessor: "goal_amount",
        minWidth: 100,
        width: 100,

      },
      {
        Header: "Status",
        accessor: "status",
        minWidth: 100,
        width: 100,
        Cell: StatusCell,
      },
      {
        Header: "Date",
        accessor: "end_date",
        minWidth: 100,
        width: 100,
      },
      {
        Header: 'Causes',
        accessor: 'causes',
        minWidth: 100,
        width: 100,
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
              {pathname === '/User/Withdrawals' ? (
                <>
                  {get === 'Active' ? (
                    <PrimaryButton
                      sx={{
                        height: '30px',
                        width: '60px',
                        background: 'red', // Corrected color value
                        color: 'white',
                        "& .MuiButton-root:hover": {
                          background: "yellow"
                        }
                      }}
                    >
                      Delete
                    </PrimaryButton>
                  ) : (
                    <PrimaryButton
                      disabled
                      sx={{
                        height: '30px',
                        width: '60px',
                        background: 'green',
                        color: 'white',
                        "& .MuiButton-root:hover": {
                          background: "yellow"
                        }
                      }}
                    >
                      Paid
                    </PrimaryButton>
                  )}
                </>
              ) : (
                <Link to="View" state={{ id: row?.id }} >
                  <PrimaryButton
                    sx={{
                      height: '30px',
                      width: '60px',
                      background: '#219D80',
                      color: 'white',
                      "& .MuiButton-root:hover": {
                        background: "yellow"
                      }
                    }}
                  >
                    View
                  </PrimaryButton>
                </Link>
              )}

              {/* <SecondaryButton sx={{ height: '30px' }}>Edit Bank and KYC</SecondaryButton> */}
            </div >
          )
        }
      }
    ],
    console.log(get, 'get+=================>')
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

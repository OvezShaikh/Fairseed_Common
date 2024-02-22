import React from 'react'
import AdminNavbar from '../AdminNavbar'
import { SideBar } from '../sideBar'

const AdminLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <>
      <AdminNavbar />
      <SideBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}></SideBar>
      <div className='main-container transition-all duration-200 ease-in-out' style={{ width: mobileOpen ? `calc(100vw - 290px)` : undefined, marginLeft: mobileOpen ? '270px' : '0px', marginRight: mobileOpen ? '0px' : '1rem' }} >
        {children}
      </div>
      <hr className='pb-5' />
    </>
  )
}

export default AdminLayout

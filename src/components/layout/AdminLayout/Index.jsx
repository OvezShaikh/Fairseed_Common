import React from 'react'
import AdminNavbar from '../AdminNavbar'
import { SideBar } from '../sideBar'

const   AdminLayout = ({children}) => {
  return (
    <>
    <AdminNavbar />
    <SideBar></SideBar>
    <div className='main-container'>
      {children}
    </div>
    <hr className='pb-5'/>
    </>
  )
}

export default AdminLayout

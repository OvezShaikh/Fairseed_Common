import React from 'react'
import Footer from '../../../components/layout/Footer'
import UserNavbar from '../../login/UserNavbar'
import CreateCampaigns from './CreateCampaigns'
function Index() {
  return (
    <>
    <UserNavbar/>
    <CreateCampaigns/>
    <Footer/>
    </>
  )
}

export default Index

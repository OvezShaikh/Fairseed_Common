import React from 'react'

const DashboardActivities = () => {
  return (
    <div className='p-7'>
    <div className='grid grid-cols-3 grid-rows-2 gap-2 items-center'>
      <div className='px-[16px] py-[14px] shadow-md w-[163.19px] h-[150.56px] rounded-2xl'>
        <p className='font-medium'>Active Users</p>
        <h3 className='font-bold text-3xl mt-3'>24</h3>
      </div>
      <div className='px-[16px] py-[14px] shadow-md w-[163.19px] h-[150.56px] rounded-2xl'>
        <p className='font-medium'>Total Funds(lacs)</p>
        <h3 className='font-bold text-3xl mt-3'>3,298</h3>
      </div>
      <div className='px-[16px] py-[14px] shadow-md w-[163.19px] h-[150.56px] rounded-2xl'>
        <p className='text-sm'>Av. Session Length</p>
        <h3 className='font-bold text-2xl mt-3'>2m 34s</h3>
      </div>
      <div className='px-[16px] py-[14px] shadow-md w-[163.19px] h-[150.56px] rounded-2xl'>
        <p className='font-medium'>Causes</p>
        <h3 className='font-bold text-3xl mt-3'>27</h3>
      </div>
      <div className='px-[16px] py-[14px] shadow-md w-[163.19px] h-[150.56px] rounded-2xl'>
        <p className='font-medium'>Visits</p>
        <h3 className='font-bold text-3xl mt-3'>86%</h3>
      </div>
      <div className='px-[16px] py-[14px] shadow-md w-[163.19px] h-[150.56px] rounded-2xl'>
        <p className='font-medium'>Total Users</p>
        <h3 className='font-bold text-3xl mt-3'>154</h3>
      </div>
    </div>
    </div>
  )
}

export default DashboardActivities
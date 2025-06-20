import React from 'react'
import SideBar from '../pages/global/SideBar'
import TopBar from '../pages/global/TopBar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='flex flex-row'>
      <SideBar />
      <div className=' flex flex-col flex-1'>
        <TopBar />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
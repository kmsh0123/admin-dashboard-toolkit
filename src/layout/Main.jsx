import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Sidebar'
import Nav from '../components/Nav'

const Main = () => {
  return (
    <section className='flex'>
        <Sidebar/>
        <div className="flex-grow">
          <Nav/>
          <Outlet/>
        </div>
    </section>
  )
}

export default Main
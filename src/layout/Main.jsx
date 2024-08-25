import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../pages/Sidebar'
import Nav from '../components/Nav'

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <section className="flex">
        <Sidebar ref={sidebarRef} isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        <div className="flex-1">
          <Nav onMenuClick={handleMenuClick}/>
          <div className='lg:ml-64 ml-0 p-4'>
          <Outlet/>
          </div>
        </div>
    </section>
  )
}

export default Main
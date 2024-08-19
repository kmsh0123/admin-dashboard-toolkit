import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './router/routes'

const App = () => {
  return (
    // <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
    //     <div onClick={toggleDarkMode} className="absolute z-10 right-[200px] top-[6px] m-[11px] cursor-pointer">
    //       {darkMode ? <BsToggleOn className='text-4xl text-blue-500' /> : <BsToggleOff className='text-4xl text-white' />}
    //     </div>
        <RouterProvider router={routes} />
      // </div>
  )
}

export default App
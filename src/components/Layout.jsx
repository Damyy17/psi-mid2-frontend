import { Outlet } from 'react-router-dom'
import '../assets/styles/layout.scss'
import SideNavbar from './Sidebar'

function Layout() {
  return (
    <div className='layout'>
      <div className='navsidebar'>
        <SideNavbar />
      </div>
        <div className='outlet'>
          <Outlet />
        </div>
    </div>
  )
}

export default Layout
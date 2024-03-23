import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

// Custom Modules
import useLoggedIn from '@shared/hooks/useLoggedIn'
import { Routes } from '@shared/constants/routes.constant'
import Footer from './components/Footer'

const DashboardLayout = () => {
  const { sidebarExpanded } = useSelector((state) => state.global)
  const isLoggedIn = useLoggedIn()

  if (!isLoggedIn) {
    return <Navigate to={Routes.login} replace />
  }

  return (
    <div
      className={`min-h-100vh flex flex-col grow bg-slate-50 dark:bg-navy-900 ${
        sidebarExpanded && 'is-sidebar-open'
      }`}
    >
      <div className='sidebar print:hidden '>
        <Sidebar />
      </div>

      <nav className='header print:hidden'>
        <Header />
      </nav>

      {/* Main Content Wrapper */}
      <main className='main-content w-full grow'>
        <Outlet />
      </main>

      {/* Footer */}
      <div className='main-content'>
        <Footer />
      </div>
    </div>
  )
}

export default DashboardLayout

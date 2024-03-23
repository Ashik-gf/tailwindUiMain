import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const HomeLayout = () => {
  return (
    <div className={`min-h-100vh flex grow bg-slate-50 dark:bg-navy-900 `}>
      <nav className='header print:hidden'>
        <Header />
      </nav>

      {/* Main Content Wrapper */}
      <main className='main-content w-full  pb-8'>
        <Outlet />
      </main>

      {/* Footer */}
    </div>
  )
}

export default HomeLayout

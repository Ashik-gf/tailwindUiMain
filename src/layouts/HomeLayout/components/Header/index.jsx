import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Custom Modules
import { setTheme } from '@store/global/globalSlice'
import useTheme from '@shared/hooks/useTheme'
import AppLogo from '@assets/logo.png'
import { Routes } from '@shared/constants/routes.constant'
import useLoggedIn from '@shared/hooks/useLoggedIn'
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'

const Header = () => {
  const dispatch = useDispatch()
  const isLogin = useLoggedIn()
  const isDark = useTheme()

  const darkModeToggler = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light')
      dispatch(setTheme('light'))
    } else {
      localStorage.setItem('theme', 'dark')
      dispatch(setTheme('dark'))
    }
  }

  return (
    <div className='header-container relative flex w-full bg-white dark:bg-navy-700 print:hidden'>
      {/* Header Items */}
      <div className='sm:flex w-full items-center justify-between'>
        {/* Left  */}
        <div className='flex items-center space-x-2'>
          <img className='h-10 w-10' src={AppLogo} alt='logo' />
          <p className='text-lg font-bold text-slate-500 dark:text-navy-100 leading-tight'>
            CTA Compliance Platform
          </p>
        </div>

        {/* Right: Header buttons */}
        <div className=' grid grid-cols-2 gap-4 -mr-1.5 sm:flex items-center space-x-2'>
          
          <Link
            to={Routes.home}
            class='btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-primary dark:text-primary-light dark:hover:bg-primary dark:hover:text-white dark:focus:bg-primary dark:focus:text-white dark:active:bg-primary/90'
          >
            Home
          </Link>

          <Link
            to={Routes.blog}
            class='btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-primary dark:text-primary-light dark:hover:bg-primary dark:hover:text-white dark:focus:bg-primary dark:focus:text-white dark:active:bg-primary/90'
          >
            Blogs
          </Link>

          <Link
            to={Routes.resource}
            class='btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-primary dark:text-primary-light dark:hover:bg-primary dark:hover:text-white dark:focus:bg-primary dark:focus:text-white dark:active:bg-primary/90'
          >
            Resources
          </Link>

          <Link
            to={Routes.contact}
            class='btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-primary dark:text-primary-light dark:hover:bg-primary dark:hover:text-white dark:focus:bg-primary dark:focus:text-white dark:active:bg-primary/90'
          >
            Contact
          </Link>
          <Link
            to={isLogin ? Routes.dashboard : Routes.login}
            class='btn border border-primary font-medium text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white active:bg-primary/90 dark:border-primary dark:text-primary-light dark:hover:bg-primary dark:hover:text-white dark:focus:bg-primary dark:focus:text-white dark:active:bg-primary/90'
          >
            {isLogin ? 'Dashboard' : 'Login'}
          </Link>

          {/* Dark Mode Toggle */}
          <button className='btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
            {isDark ? (
              <Icon
                onClick={darkModeToggler}
                icon={Iconify.darkMode}
                className='text-amber-400'
              />
            ) : (
              <Icon
                onClick={darkModeToggler}
                icon={Iconify.lightMode}
                className='text-amber-400'
              />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header

import { useSelector, useDispatch } from 'react-redux'
import { setTheme, sidebarToggled } from '@store/global/globalSlice'
import useTheme from '@shared/hooks/useTheme'
import DropDownLink from '@shared/components/menus/DropDownLink'
import { headerMenuTree } from '@shared/constants/menu.constant'
import userAvatar from '@assets/images/avatar/avatar-1.jpg'
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'

const Header = () => {
  const dispatch = useDispatch()
  const { sidebarExpanded } = useSelector((state) => state.global)

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
      <div className='flex w-full items-center justify-between'>
        {/* Left: Sidebar Toggle Button */}
        <div className='h-7 w-7'>
          {sidebarExpanded ? (
            <Icon
              onClick={() => dispatch(sidebarToggled())}
              icon={Iconify.menuOpen}
              className='h-8 w-8 cursor-pointer'
            />
          ) : (
            <Icon
              onClick={() => dispatch(sidebarToggled())}
              icon={Iconify.menuClose}
              className='h-8 w-8 cursor-pointer'
            />
          )}
        </div>

        {/* Right: Header buttons */}
        <div className='-mr-1.5 flex items-center space-x-2'>
          {/* Mobile Search Toggle */}
          <button className='btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:hidden'>
            <Icon icon={Iconify.search} />
          </button>

          {/* Main Searchbar */}
          <template className='hidden sm:block'>
            <div className='relative mr-4 flex h-8'>
              <input
                placeholder='Search here...'
                className={`form-input peer h-full  rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-primary/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900 focus:w-80 w-60 transition-all duration-300`}
              />
              <div className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
                <Icon icon={Iconify.search} />
              </div>
            </div>
          </template>

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

          {/* Notification*/}
          <div className='flex space-x-4 items-center'>
            <button className='btn relative h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'>
              <Icon icon={Iconify.notification} />
              <span className='absolute -top-px -right-px flex h-3 w-3 items-center justify-center'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-80'></span>
                <span className='inline-flex h-2 w-2 rounded-full bg-secondary'></span>
              </span>
            </button>
          </div>

          {/* User Profile */}
          <DropDownLink data={headerMenuTree}>
            <div className='avatar h-8 w-8'>
              <img className='rounded-full ' src={userAvatar} alt='avatar' />
            </div>
          </DropDownLink>
        </div>
      </div>
    </div>
  )
}

export default Header

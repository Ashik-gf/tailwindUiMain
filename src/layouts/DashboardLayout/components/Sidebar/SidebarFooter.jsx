import { useDispatch } from 'react-redux'

// Custom Modules
import { userLoggedOut } from '@store/auth/authSlice'
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'

const SidebarFooter = () => {
  const dispatch = useDispatch()

  function handleLogout() {
    dispatch(userLoggedOut())
  }

  return (
    <div onClick={handleLogout} className='mt-3 px-4 mb-3'>
      <button className='btn h-9 w-full space-x-2 bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'>
        <Icon icon={Iconify.logout} />
        <span>Logout</span>
      </button>
    </div>
  )
}

export default SidebarFooter

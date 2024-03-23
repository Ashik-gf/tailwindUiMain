import { useSelector } from 'react-redux'
import BannarImage from '@assets/images/object/object-4.jpg'
import AvatarImage from '@assets/images/avatar/avatar-1.jpg'
import { Link } from 'react-router-dom'
import { Routes } from '@shared/constants/routes.constant'
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'

const Profile = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className='card m-6'>
      <div className='h-32 rounded-t-lg bg-primary dark:bg-accent'>
        <img
          className='h-full w-full rounded-t-lg object-cover object-center'
          src={BannarImage}
          alt='image'
        />
      </div>
      <div className='px-6 py-2 '>
        <div className='flex justify-between space-x-4'>
          <div className='avatar -mt-12 h-20 w-20'>
            <img
              className='rounded-full border-2 border-white dark:border-navy-700'
              src={AvatarImage}
              alt='avatar'
            />
          </div>
        </div>

        <div className='flex items-center space-x-10'>
          <div>
            <h3 className='pt-2 text-xl font-medium text-slate-700 dark:text-navy-100'>
              {user?.name}
            </h3>
            <p className='text-sm'>{user.location.name}</p>
          </div>

          <div className='flex space-x-2'>
            <button className='btn h-7 w-7 rounded-full bg-primary/10 p-1 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25'>
              <Icon icon={Iconify.facebook} />
            </button>
            <button className='btn h-7 w-7 rounded-full bg-primary/10 p-1 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25'>
              <Icon icon={Iconify.instagram} />
            </button>
            <button className='btn h-7 w-7 rounded-full bg-primary/10 p-1 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25'>
              <Icon icon={Iconify.linkedin} />
            </button>
            <button className='btn h-7 w-7 rounded-full bg-primary/10 p-1 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-accent-light/10 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25'>
              <Icon icon={Iconify.twitter} />
            </button>
          </div>
        </div>

        <div className='my-4 h-px w-full bg-slate-200 dark:bg-navy-500'></div>
        <div className='grow space-y-4'>
          <div className='flex items-center space-x-4'>
            <div className='flex h-7 w-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light'>
              <Icon icon={Iconify.phone} />
            </div>
            <p>(01) 22 888 4444</p>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex h-7 w-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light'>
              <Icon icon={Iconify.mail} />
            </div>
            <p>konnor@example.com</p>
          </div>
          <div className='flex items-center space-x-4'>
            <div className='flex h-7 w-7 items-center rounded-lg bg-primary/10 p-2 text-primary dark:bg-accent-light/10 dark:text-accent-light'>
              <Icon icon={Iconify.web} />
            </div>
            <p>www.konnor.com</p>
          </div>
        </div>
      </div>
      <div className={'mt-6 p-5 flex justify-end space-x-4'}>
        <Link
          to={Routes.logout}
          className='btn h-9 space-x-2 bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
        >
          <Icon icon={Iconify.logout} />
          <span>Logout</span>
        </Link>
        <Link
          to={Routes.dashboard}
          className='btn h-9 space-x-2 bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90'
        >
          <span>Back to Dashboard</span>
        </Link>
      </div>
    </div>
  )
}

export default Profile

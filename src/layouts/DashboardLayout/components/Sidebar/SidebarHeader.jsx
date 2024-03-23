import AppLogo from '@assets/logo.png'

const SidebarHeader = () => {
  return (
    <div className='flex h-18 w-full items-center justify-between pl-4 pr-1'>
      <div className='flex justify-center space-x-4 items-center'>
        <img className='mx-auto h-12 w-12' src={AppLogo} alt='logo' />
        <p className='text-lg font-bold text-slate-500 dark:text-navy-100 leading-tight'>
          CTA Compliance
        </p>
      </div>
    </div>
  )
}

export default SidebarHeader

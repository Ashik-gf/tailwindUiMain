import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'

const Footer = () => {
  return (
    <div className='card mx-6 mb-2 rounded-lg flex flex-row items-center justify-between  p-2'>
      <div className=' flex space-x-1 justify-start items-center'>
        <button className='btn text-xs text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25 px-2'>
          Disclaimer
        </button>
        <button className='btn text-xs text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25 px-2'>
          Privacy Statement
        </button>
        <button className='btn text-xs text-slate-700 hover:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-100 dark:hover:bg-navy-300/20 dark:active:bg-navy-300/25 px-2'>
          Terms & Conditions
        </button>
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
      <div className='text-xs'>
        2024 Corporate Transparency Act Compliance Platform. All rights
        reserved.
      </div>
    </div>
  )
}

export default Footer

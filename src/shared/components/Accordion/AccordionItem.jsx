import { useState } from 'react'
import { Iconify } from '@shared/constants/iconify.constant'
import { twMerge } from 'tailwind-merge'
import Icon from '../Icon'

const AccordionItem = ({ title, open, children }) => {
  const [expanded, setExpanded] = useState(Boolean(open))

  const toggleAccordion = () => {
    setExpanded(!expanded)
  }

  return (
    <div>
      <div
        onClick={toggleAccordion}
        className='flex cursor-pointer items-center justify-between py-4 text-base font-medium text-slate-700 dark:text-navy-100'
      >
        <p>{title}</p>
        <div className='text-sm font-normal leading-none text-slate-400 transition-transform duration-300 dark:text-navy-300'>
          <Icon
            icon={expanded ? Iconify.arrowUp : Iconify.arrowDown}
            className='h-5 w-5 transition-transform duration-300'
          />
        </div>
      </div>
      <div className={twMerge(' duration-1000', expanded ? 'block' : 'hidden')}>
        <div className='pb-4'>{children}</div>
      </div>
    </div>
  )
}

export default AccordionItem

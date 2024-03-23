import { twMerge } from 'tailwind-merge'
import { Icon as IconifyIcon } from '@iconify/react'
const Icon = ({ className, icon, ...attributes }) => {
  return (
    <>
      <IconifyIcon
        className={twMerge(
          'h-6 w-6 transition-all duration-200 ease-out origin-top cursor-pointer',
          className
        )}
        icon={icon}
        {...attributes}
      />
    </>
  )
}

export default Icon

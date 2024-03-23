import { Icon } from '@iconify/react'

const InputDate = ({
  label = '',
  subLabel = '',
  optional,
  icon,
  value,
  error,
  className = '',
  ...attributes
}) => {
  return (
    <div className={className}>
      <label className='block'>
        <p className='col-span-2 font-medium text-slate-700 dark:text-navy-100 flex justify-between items-center space-x-2'>
          <span className='text-sm'>{label}</span>
          {optional && <span className='text-xs text-slate-400'>Optional</span>}
        </p>
        <span className='text-xs text-slate-400'>{subLabel}</span>
        <span className='relative mt-1.5 flex'>
          <input
            value={value}
            type='date'
            {...attributes}
            className={`form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 ${
              icon && 'pl-9'
            } placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent ${className}
          }`}
          />
          <span className='pointer-events-none absolute flex h-full w-10 items-center justify-center '>
            <Icon
              icon={icon}
              className='text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent h-6 w-6'
            />
          </span>
        </span>
      </label>
      {error && <span className='text-tiny+ text-error'>{error}</span>}
    </div>
  )
}

export default InputDate

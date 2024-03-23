import React from 'react'
import Icon from '../Icon'
import { Iconify } from '@shared/constants/iconify.constant'

const InputPassword = ({
  label,
  value,
  error,
  className = '',
  ...attributes
}) => {
  const [inputType, setInputType] = React.useState('password')

  function inputTypeToggler() {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
    <div>
      <label className='block'>
        <span>{label}</span>
        <span className='relative mt-1.5 flex'>
          <input
            value={value}
            type={inputType}
            {...attributes}
            className={`form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent ${className}
  }`}
          />
          <span className='pointer-events-none absolute flex h-full w-10 items-center justify-center '>
            <Icon
              icon={Iconify.lock}
              className=' text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'
            />
          </span>

          <span
            onClick={inputTypeToggler}
            className='cursor-pointer absolute flex h-full w-10 right-2 items-center justify-center z-10'
          >
            {inputType === 'password' ? (
              <Icon
                icon={Iconify.viewOff}
                className=' text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'
              />
            ) : (
              <Icon
                icon={Iconify.view}
                className=' text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'
              />
            )}
          </span>
        </span>
      </label>
      {value && error && <span className='text-tiny+ text-error'>{error}</span>}
    </div>
  )
}

export default InputPassword

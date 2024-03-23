const SelectOption = ({
  options = [],
  value,
  error,
  className = '',
  label = '',
  subLabel = '',
  optional,
  name,
  handleChange,
  placeholder,
  ...attributes
}) => {
  const onChange = (e) => {
    handleChange(name, e.target.value, true)
  }

  return (
    <div className={className}>
      <label className='block'>
        <p className='col-span-2 font-medium text-slate-700 dark:text-navy-100 flex justify-between items-center space-x-2'>
          <span className='text-sm'>{label}</span>
          {optional && <span className='text-xs text-slate-400'>Optional</span>}
        </p>
        <span className='text-xs text-slate-400'>{subLabel}</span>
        <select
          onChange={onChange}
          className={`form-select mt-1.5 w-full rounded-lg border border-slate-300
          bg-white px-3 py-2 hover:border-slate-400 focus:border-primary 
          dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 
          dark:focus:border-accent`}
          defaultValue={value}
          {...attributes}
        >
          <option value=''>{placeholder}</option>
          {options?.map((option, i) => (
            <option key={i++} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      {error && <span className='text-tiny+ text-error'>{error}</span>}
    </div>
  )
}

export default SelectOption

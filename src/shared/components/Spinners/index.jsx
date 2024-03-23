const Spinner = ({ className }) => {
  return (
    <div className={`spinner h-60 w-60 animate-spin text-success ${className}`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-full w-full'
        fill='none'
        viewBox='0 0 28 28'
      >
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-2.764.005c0 6.185-5.014 11.2-11.2 11.2-6.185 0-11.2-5.015-11.2-11.2 0-6.186 5.015-11.2 11.2-11.2 6.186 0 11.2 5.014 11.2 11.2zM8.4 16.8a2.8 2.8 0 100-5.6 2.8 2.8 0 000 5.6z'
          clipRule='evenodd'
        />
      </svg>
    </div>
  )
}

export default Spinner

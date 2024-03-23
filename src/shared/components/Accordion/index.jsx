import React from 'react'

const Accordion = ({ children }) => {
  return (
    <div className='flex flex-col divide-y divide-slate-150 dark:divide-navy-500'>
      {children}
    </div>
  )
}

export default Accordion

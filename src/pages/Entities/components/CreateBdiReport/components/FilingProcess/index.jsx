const FilingProcess = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-semibold'>
        Beneficial Ownership Filing Process
      </h1>
      <div className='mt-4'>
        <p className='flex justify-between text-xs font-bold mb-1 text-slate-500 dark:text-navy-200'>
          <span>Tasks</span>
          <span>70%</span>
        </p>
        <div className='progress h-2 bg-success/15 dark:bg-success/25'>
          <div className='w-8/12 rounded-full bg-success'></div>
        </div>
      </div>
      <div className='my-4 h-px bg-slate-200 dark:bg-navy-500'></div>
      <div>
        <ol className='steps is-vertical'>
          <li className='step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500'>
            <div className='step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white'>
              1
            </div>
            <h3 className='text-slate-600 dark:text-navy-100'>
              Identity Reporting Company
            </h3>
          </li>
          <li className='step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500'>
            <div className='step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white'>
              2
            </div>
            <h3 className='text-slate-600 dark:text-navy-100'>
              Add Company Applicant
            </h3>
          </li>
          <li className='step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500'>
            <div className='step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white'>
              3
            </div>
            <h3 className='text-slate-600 dark:text-navy-100'>
              Add Beneficial Owner(s)
            </h3>
          </li>
          <li className='step space-x-4 pb-8 before:bg-slate-200 dark:before:bg-navy-500'>
            <div className='step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white'>
              4
            </div>
            <h3 className='text-slate-600 dark:text-navy-100'>
              Review Summary
            </h3>
          </li>
          <li className='step space-x-4 before:bg-slate-200 dark:before:bg-navy-500'>
            <div className='step-header rounded-full bg-slate-200 text-slate-800 dark:bg-navy-500 dark:text-white'>
              5
            </div>
            <h3 className='text-slate-600 dark:text-navy-100'>
              Submit for Filing
            </h3>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default FilingProcess

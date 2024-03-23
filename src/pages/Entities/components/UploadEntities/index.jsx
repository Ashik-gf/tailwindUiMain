import noRecordsFound from '@assets/no_records_found.svg'
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'

const UploadEntities = () => {
  return (
    <div className=' card mt-4 transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6 mx-4 p-4'>
      <div className='flex flex-col text-center'>
        <h1 className='text-xl font-semibold'>Upload your Entities List</h1>
        <p className='pt-2 text-slate-500 dark:text-navy-200 text-sm'>
          Before you upload your files below, make sure they are appropiately
          formatted using the reporting template
        </p>
        <div className='my-4 h-px  bg-slate-200 dark:bg-navy-500'></div>

        <div className='flex justify-between items-center'>
          <p className='text-slate-500 dark:text-navy-200 text-md font-bold'>
            Upload Entity Details
          </p>
          <p className='text-info dark:text-info text-sm font-bold'>
            Download Reporting Details
          </p>
        </div>

        <div className=' flex flex-col py-6 w-full items-center justify-center space-y-4 '>
          <div
            htmlFor='fileInput'
            className='border-info border-2 rounded-xl w-full py-6 bg-info/10 flex flex-col items-center justify-center'
          >
            <Icon icon={Iconify.upload} className='h-10 w-10' />
            <span className='text-sm font-bold'>Drop here to upload</span>
            <input
              type='file'
              id='fileInput'
              className='hidden'
              multiple
              onChange={(e) => e.preventDefault()}
            />
          </div>

          <p className='text-slate-500 dark:text-navy-200 '>
            Reporting template must be uploaded using CSV format
          </p>
          <img src={noRecordsFound} className='h-40' />
          <p className='mt-6 text-xl font-semibold text-slate-800 dark:text-navy-50 lg:mt-10 '>
            No Files Uploaded
          </p>

          <div className='flex w-full space-x-2 justify-end mt-10'>
            <button type='button' className='flex space-x-1 btn-indigo py-2'>
              <span>Cancel</span>
            </button>
            <button
              type={'submit'}
              className=' btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 gap-2 py-2 border'
            >
              <span>Next</span>
              <Icon icon={Iconify.arrowRight} className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadEntities

import noRecordsFound from '@assets/no_records_found.svg'
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'
import { useUploadEntitiesType } from '@shared/hooks/useUploadEntitiesType'

const NoRecordsFound = () => {
  const { setType } = useUploadEntitiesType()
  return (
    <div className=' card mt-4 transition-all duration-[.25s] sm:mt-5 sm:gap-5 lg:mt-6 lg:gap-6 mx-4 p-4'>
      <div className='flex flex-col'>
        <h1 className='text-xl font-semibold'>
          Corporate Transparency Act Compliance Platform Dashboard
        </h1>
        <div className='my-4 h-px  bg-slate-200 dark:bg-navy-500'></div>
        <div className=' flex flex-col py-12 w-full items-center justify-center space-y-4 '>
          <img src={noRecordsFound} className='h-40' />
          <p className='mt-6 text-xl font-semibold text-slate-800 dark:text-navy-50 lg:mt-10 lg:text-3xl'>
            No Records Found.
          </p>
          <p className='pt-2 text-slate-500 dark:text-navy-200 lg:text-lg'>
            Here you can find your list of entites and filings, Start from one
            of the options below
          </p>

          <div className={'flex items-center gap-3 justify-center'}>
            <button
              onClick={() => setType('upload')}
              type={'button'}
              className='flex space-x-1 btn-indigo py-2'
            >
              <Icon icon={Iconify.upload} className='h-5 w-5' />
              <span>Upload Multiple Entities</span>
            </button>

            <button
              onClick={() => setType('create')}
              type={'submit'}
              className=' btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 gap-2 py-2 border'
            >
              <Icon icon={Iconify.add} className='h-5 w-5' />
              <span>Create New BDI Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoRecordsFound

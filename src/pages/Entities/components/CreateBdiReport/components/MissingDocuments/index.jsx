import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'

const MissingDocuments = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-xl font-semibold'>Missing Document?</h1>
      <div className='my-4 h-px  bg-slate-200 dark:bg-navy-500'></div>
      <p className=' text-slate-500 dark:text-navy-200 text-sm'>
        Share a link for Uploading Documents, Add company applicants or
        beneficial owners information by providing them with a secure email link
        to fill in their details.
      </p>
      <button
        type={'submit'}
        className='mt-4 btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90 gap-2 py-2 border'
      >
        <Icon icon={Iconify.mail} className='h-5 w-5' />
        <span>Email Link</span>
      </button>
    </div>
  )
}

export default MissingDocuments

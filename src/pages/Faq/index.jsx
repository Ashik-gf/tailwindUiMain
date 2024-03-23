import { Link } from 'react-router-dom'
import NotfoundIcon from '@assets/images/illustrations/ufo-dark.svg'

const Faq = () => {
  return (
    <>
      <div
        id='root'
        className='min-h-100vh flex grow bg-slate-50 dark:bg-navy-900'
      >
        <main className='grid w-full grow grid-cols-1 place-items-center bg-center'>
          <div className='max-w-[26rem] text-center'>
            <div className='w-full'>
              <img className='w-full' src={NotfoundIcon} alt='not Found' />
            </div>
            <p className='pt-4 text-7xl font-bold text-primary dark:text-accent'>
              This is FAQ Page
            </p>

            <Link
              to='/'
              className='btn mt-8 h-11 bg-primary text-base font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:hover:shadow-accent/50 dark:focus:bg-accent-focus dark:focus:shadow-accent/50 dark:active:bg-accent/90'
            >
              Back To Home
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}

export default Faq

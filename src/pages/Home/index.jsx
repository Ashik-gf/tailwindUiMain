import NotfoundIcon from '@assets/images/illustrations/ufo-dark.svg'

const Home = () => {
  return (
    <>
      <div id='root' className='mt-10 flex grow bg-slate-50 dark:bg-navy-900'>
        <main className='grid w-full grow grid-cols-1 place-items-center bg-center'>
          <div className='max-w-[26rem] text-center'>
            <div className='w-full'>
              <img className='w-full' src={NotfoundIcon} alt='not Found' />
            </div>
            <p className='pt-4 text-4xl font-bold text-primary dark:text-accent'>
              This is Home Page
            </p>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home

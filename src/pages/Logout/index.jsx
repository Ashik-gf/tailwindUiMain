import { useEffect, useState } from 'react'
import Modal from '@shared/components/modal/Modal'
import { useDispatch } from 'react-redux'
import { userLoggedOut } from '@store/auth/authSlice'
import Spinner from '@shared/components/Spinners'

const Logout = () => {
  const [open, setOpen] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => dispatch(userLoggedOut()), 500)
  })

  return (
    <Modal
      open={open}
      modalHandler={() => setOpen(false)}
      panelSize={'max-w-xl'}
    >
      <div className=' mx-auto relative max-w-lg rounded-lg bg-white px-4 py-10 text-center transition-opacity duration-300 dark:bg-navy-700 sm:px-5'>
        <Spinner className='h-12 w-12 mx-auto' />

        <div className='mt-4'>
          <h2 className='text-2xl text-slate-700 dark:text-navy-100'>
            Logging Out
          </h2>
        </div>
      </div>
    </Modal>
  )
}

export default Logout

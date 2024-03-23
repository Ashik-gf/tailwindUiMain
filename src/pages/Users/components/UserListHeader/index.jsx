import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

// Custom Modules
import AddUserModal from '../AddUserModal'
import { setUserSearch } from '@store/users/usersSlice'
import { Iconify } from '@shared/constants/iconify.constant'
import Icon from '@shared/components/Icon'
import DropDownLink from '@shared/components/menus/DropDownLink'
import EntitiesConst from '@shared/constants/entities.constant'

const UserListHeader = () => {
  const [addUser, setAddUser] = useState(false)

  // Search Functionliaties
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      dispatch(setUserSearch(search))
    }, 300)
    return () => clearTimeout(debounceTimer)
  }, [search, dispatch])

  return (
    <>
      {addUser && <AddUserModal isOpen={addUser} setIsOpen={setAddUser} />}
      <div className='space-y-5'>
        <h2 className='text-xl font-medium text-slate-700 line-clamp-1 dark:text-navy-50 lg:text-2xl'>
          Beneficial Ownership Dashboard
        </h2>
        <div className='flex items-center justify-between '>
          <div>
            <label className='relative flex items-center justify-end space-x-2'>
              <input
                className='form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent'
                placeholder='Search here...'
                onChange={(e) => setSearch(e.target.value)}
                type='text'
              />
              <div className='pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent'>
                <Icon icon={Iconify.search} className='h-5 w-5' />
              </div>
            </label>
          </div>
          <div className='flex space-x-2'>
            <button className='btn space-x-2 border border-info/30 bg-info/10 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25'>
              <Icon icon={Iconify.filter} className='h-5 w-5' />
              <span>Filter</span>
            </button>

            <button className='btn space-x-2 border border-info/30 bg-info/10 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25'>
              <Icon icon={Iconify.settings} className='h-5 w-5' />
              <span>Settings</span>
            </button>

            <DropDownLink
              className=''
              buttonClass='block w-full'
              data={EntitiesConst.tableActions}
            >
              <button className='flex space-x-1 btn-indigo-active'>
                <span>Table Actions</span>
              </button>
            </DropDownLink>

            <button
              onClick={() => setAddUser(true)}
              className='flex space-x-1 btn-indigo-active'
            >
              <Icon icon={Iconify.add} className='h-5 w-5' />
              <span>Add New Filing</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserListHeader

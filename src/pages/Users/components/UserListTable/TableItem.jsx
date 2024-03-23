import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useDeleteUsersMutation, useGetUsersQuery } from '@store/users/usersApi'
import ConfirmModal from '@shared/components/modal/ConfirmModal'
import { userImages } from '@shared/utils/data.utils'
import ArrayUtils from '@shared/utils/array.utils'
import EditUsermodal from '../EditUserModal'
import ViewUserModal from '../ViewUserModal'
import { Iconify } from '@shared/constants/iconify.constant'
import Icon from '@shared/components/Icon'
import InputCheckbox from '@shared/components/inputs/InputCheckbox'

const TableItem = ({ user }) => {
  const [editUser, setEditUser] = useState(false)
  const [deleteData, setDeleteUser] = useState(false)
  const [viewUser, setViewUser] = useState(false)
  const [deleteUser, { data, error }] = useDeleteUsersMutation()
  const { refetch } = useGetUsersQuery()

  const handleConfirm = () => {
    deleteUser(user?._id)
    setDeleteUser(false)
  }
  React.useEffect(() => {
    if (data?.success) {
      toast.success(data.message)
      refetch()
    }
    if (error?.data) {
      toast.error(error.data?.message || error?.error || 'Something Went Wrong')
    }
  }, [data])

  return (
    <>
      {editUser && (
        <EditUsermodal setIsOpen={setEditUser} isOpen={editUser} user={user} />
      )}
      {deleteData && (
        <ConfirmModal
          open={deleteData}
          setDelete={setDeleteUser}
          handleConfirm={handleConfirm}
        />
      )}
      {viewUser && (
        <ViewUserModal isOpen={viewUser} setIsOpen={setViewUser} user={user} />
      )}
      <tr className='border border-transparent border-b-slate-200 dark:border-b-navy-500 '>
        <td className='whitespace-nowrap rounded-l-lg px-4 py-4 sm:px-5 flex items-center space-x-2'>
          <InputCheckbox />
          <img
            className='h-8 w-8 rounded-full'
            src={ArrayUtils.randomSingle(userImages)}
            alt={user?.name}
          />
          <span>{user?.name}</span>
        </td>
        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          <span>{user?.type}</span>
        </td>
        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          <span>{user?.state}</span>
        </td>

        <td className='whitespace-nowrap px-4 py-4 sm:px-5'>
          {user?.filingStatus && (
            <span className={'bg-green-500 text-white px-1 py-0.5 rounded'}>
              Active
            </span>
          )}
          {!user?.filingStatus && (
            <span className={'bg-yellow-500 text-white px-1 py-0.5 rounded'}>
              Draft
            </span>
          )}
        </td>

        <td className='whitespace-nowrap  px-4 py-4 sm:px-5'>
          <span>{user?.submittedDate}</span>
        </td>

        <td className='whitespace-nowrap rounded-r-lg px-4 py-4 sm:px-5  '>
          <div className={'flex space-x-2'}>
            <Icon
              onClick={() => setViewUser(true)}
              icon={Iconify.view}
              className='btn h-7 w-7 rounded-full bg-success/10 p-1 text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25 dark:bg-success-light/10 dark:text-success-light dark:hover:bg-success-light/20 dark:focus:bg-success-light/20 dark:active:bg-success-light/25'
            />
            <Icon
              onClick={() => setEditUser(true)}
              icon={Iconify.edit}
              className='btn h-7 w-7 rounded-full bg-warning/10 p-1 text-warning hover:bg-warning/20 focus:bg-warning/20 active:bg-warning/25 dark:bg-warning-light/10 dark:text-warning-light dark:hover:bg-warning-light/20 dark:focus:bg-warning-light/20 dark:active:bg-warning-light/25'
            />
            <Icon
              onClick={() => setDeleteUser(true)}
              icon={Iconify.delete}
              className='btn h-7 w-7 rounded-full bg-error/10 p-1 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25 dark:bg-error-light/10 dark:text-error-light dark:hover:bg-error-light/20 dark:focus:bg-error-light/20 dark:active:bg-error-light/25'
            />
          </div>
        </td>
      </tr>
    </>
  )
}

export default TableItem

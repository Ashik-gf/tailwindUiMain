import { useSelector } from 'react-redux'
import { useEffect } from 'react'

// Custom Module
import TableItem from './TableItem'
import { useGetUsersQuery } from '@store/users/usersApi'
import Loader from '@shared/components/Loader'
import Alert from '@shared/components/Alert'
import EntitiesConst from '@shared/constants/entities.constant'

const UserListTable = () => {
  const {
    users,
    query,
    queryOptions: { page, search },
  } = useSelector((state) => state.users)
  const { isError, isLoading, error, data, refetch } = useGetUsersQuery(query)

  let content

  if (isLoading) {
    content = <Loader />
  }

  if (isError || error) {
    content = <Alert message={error?.message} />
  }

  if (data && users?.length) {
    content = EntitiesConst.data.map((data) => (
      <TableItem key={data?._id} user={data} />
    ))
  }

  useEffect(() => {
    refetch()
  }, [page, search, refetch])

  return (
    <div className='is-scrollbar-hidden min-w-full overflow-x-auto'>
      <table className='is-hoverable w-full text-left'>
        <thead>
          <tr className='border border-transparent border-b-slate-200 dark:border-b-navy-500'>
            <th className='whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              Entity Name
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              Type
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              US Domentic
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              Filing Status
            </th>
            <th className='whitespace-nowrap bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              Submitted Date
            </th>
            <th className='whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-4 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  )
}

export default UserListTable

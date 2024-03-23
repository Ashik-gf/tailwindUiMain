import DropDownLink from '@shared/components/menus/DropDownLink'
import Icon from '@shared/components/Icon'
import { Iconify } from '@shared/constants/iconify.constant'

export default function MostFavourites() {
  return (
    <>
      <div className='card col-span-12 lg:col-span-4'>
        <div className='flex items-center justify-between py-3 px-4'>
          <h2 className='font-medium tracking-wide text-slate-700 dark:text-navy-100'>
            Most Favourites Places
          </h2>
          <div className='inline-flex'>
            <DropDownLink
              data={[
                { title: 'Top 10', link: '#' },
                { title: 'Top 20', link: '#' },
                { title: 'Top 50', link: '#' },
              ]}
            >
              <Icon icon={Iconify.dotsPipe} width={20} />
            </DropDownLink>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-y-4 pb-3 sm:grid-cols-3'>
          {/* <ProjectCard /> */}
        </div>
      </div>
    </>
  )
}

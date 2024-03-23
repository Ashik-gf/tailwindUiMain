import CountCardItem from './CountCardItem'
import { Iconify } from '@shared/constants/iconify.constant'
import Icon from '@shared/components/Icon'

export default function CountCard() {
  return (
    <>
      <div className='col-span-12 lg:col-span-4'>
        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-2'>
          <CountCardItem
            count={'8.8k'}
            name={'Users'}
            icon={
              <Icon
                icon={Iconify.user}
                className='text-primary dark:text-primary h-10 w-10'
              />
            }
          />
          <CountCardItem
            count={'10'}
            name={'Categories'}
            icon={
              <Icon
                icon={Iconify.category}
                className='text-secondary dark:text-secondary h-10 w-10'
              />
            }
          />
          <CountCardItem
            count={'46k'}
            name={'Feeds'}
            icon={
              <Icon
                icon={Iconify.feed}
                className='text-info dark:text-info  h-10 w-10'
              />
            }
          />
          <CountCardItem
            count={'67.6k'}
            name='Favorites'
            icon={
              <Icon
                icon={Iconify.favourite}
                className='text-error dark:text-error h-10 w-10'
              />
            }
          />
          <CountCardItem
            count={'1.6k'}
            name='Bookmarks'
            icon={
              <Icon
                icon={Iconify.bookmark}
                className='text-warning dark:text-warning h-10 w-10'
              />
            }
          />

          <CountCardItem
            count={'3.6k'}
            name='Notes'
            icon={
              <Icon
                icon={Iconify.note}
                className='text-secondary dark:text-secondary h-10 w-10'
              />
            }
          />
        </div>
      </div>
    </>
  )
}

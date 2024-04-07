import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import WithDescription from './With description'
import WithList from './With list'
import WithActions from './With actions'
import WithLinkOnRight from './With link on right'
import WithAccentBorder from './With accent border'
import WithDismissButton from './With dismiss button'

const Alert = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'FeedBack'} title={'Alerts'} />
      <HeaderSection title={'With Discription'}>
        <div className=' h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md'>
        <WithDescription />
        </div>
      </HeaderSection>
      {/* With list */}
      <HeaderSection title={'With list'}>
        <div className=' h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md'>
        <WithList />
        </div>
      </HeaderSection>

      {/* With actions */}
      <HeaderSection title={'With actions'}>
        <div className=' h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md'>
        <WithActions />
        </div>
      </HeaderSection>
      {/* With link on right */}
      <HeaderSection title={'With link on right'}>
        <div className=' h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md'>
        <WithLinkOnRight />
        </div>
      </HeaderSection>
      {/* With accent border */}
      <HeaderSection title={'With accent border'}>
        <div className=' h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md'>
        <WithAccentBorder />
        </div>
      </HeaderSection>
      {/* With dismiss button */}
      <HeaderSection title={'With dismiss button'}>
        <div className=' h-full px-12 py-24 md:px-20 lg:px-60 border-2 border-gray-200 rounded-md'>
        <WithDismissButton />
        </div>
      </HeaderSection>

    </div>
  )
}

export default Alert
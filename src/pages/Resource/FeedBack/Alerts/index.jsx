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
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={'FeedBack'} />
      <HeaderSection>
        <div className=' mx-64'>
        <WithDescription />
        </div>
      </HeaderSection>
      {/* With list */}
      <HeaderSection title={'With list'}>
        <div className=' mx-64'>
        <WithList />
        </div>
      </HeaderSection>

      {/* With actions */}
      <HeaderSection title={'With actions'}>
        <div className=' mx-64'>
        <WithActions />
        </div>
      </HeaderSection>
      {/* With link on right */}
      <HeaderSection title={'With link on right'}>
        <div className=' mx-64'>
        <WithLinkOnRight />
        </div>
      </HeaderSection>
      {/* With accent border */}
      <HeaderSection title={'With accent border'}>
        <div className=' mx-64'>
        <WithAccentBorder />
        </div>
      </HeaderSection>
      {/* With dismiss button */}
      <HeaderSection title={'With dismiss button'}>
        <div className=' mx-64'>
        <WithDismissButton />
        </div>
      </HeaderSection>

    </div>
  )
}

export default Alert
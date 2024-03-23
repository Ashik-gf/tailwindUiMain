import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import WithCloseButtonOnOutside from './With close button on outside'

const SlideOver = () => {
  return (
    <div>
      <MainHeaderSection title={'Slide Over'} tag={'Overlays'} />
      <HeaderSection title={'With close button on outside'}>
<div>
  <WithCloseButtonOnOutside />
</div>
      </HeaderSection>
    </div>
  )
}

export default SlideOver
import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import SidebarOnDark from './Sidebar on dark'
import Stacked from './Stacked'

const DetailsScreen = () => {
  return (
    <div>
      <MainHeaderSection title={'Details Screen'} tag={'Page Example'} />
      <HeaderSection title={'Sidebar on dark'}>
<div className="px-2 py-3">
  <SidebarOnDark />
</div>
      </HeaderSection>


      {/* Stacked */}
      <HeaderSection title={'Stacked'}>
        <Stacked />
      </HeaderSection>
    </div>
  )
}

export default DetailsScreen
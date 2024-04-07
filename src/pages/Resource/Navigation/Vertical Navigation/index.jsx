import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import Simple from './Simple'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import WithBadges from './With badges'
import WithIconsAndBadges from './With icons and badges'
import WithIcons from './With icons'
import WithSecondaryNavigation from './With secondary navigation'
import OnGray from './On gray'

const VarticalNavigation = () => {
  return (
    <div>
      <MainHeaderSection goto={'appui'} section={'Application UI'} tag={"Navigation"} title={"Vartical Navgation"} />
      <FirstHeaderSection title={'Simple'}>
<div className="h-full px-12 md:px-96 py-12  border-2 border-gray-200 rounded-md">
<Simple />
</div>
      </FirstHeaderSection>
      {/* With badges */}
      <HeaderSection title={'With badges'}>
        <div className="h-full px-12 md:px-96 py-12  border-2 border-gray-200 rounded-md">
         <WithBadges /> 
        </div>

      </HeaderSection>

      {/* With icons and badges */}
      <HeaderSection title={'With icons and badges'}>
        <div className="h-full px-12 md:px-96 py-12  border-2 border-gray-200 rounded-md">
          <WithIconsAndBadges />
        </div>

      </HeaderSection>
      {/* With icons */}
      <HeaderSection title={'With icons'}>
        <div className="h-full px-12 md:px-96 py-12  border-2 border-gray-200 rounded-md">
          <WithIcons />
        </div>

      </HeaderSection>
      {/* With secondary navigation */}
      <HeaderSection title={'With secondary navigation'}>
        <div className="h-full px-12 md:px-96 py-12  border-2 border-gray-200 rounded-md">
          <WithSecondaryNavigation />
        </div>

      </HeaderSection>
      {/* On gray */}
      <HeaderSection title={'On gray'}>
        <div className="h-full px-12 md:px-96 py-12  border-2 border-gray-200 rounded-md">
          <OnGray />
        </div>

      </HeaderSection>
    </div>
  )
}

export default VarticalNavigation
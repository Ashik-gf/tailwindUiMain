import React from 'react'
import MainHeaderSection from '@shared/components/MainHeader'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import SimpleDarkWithMenuButtonOnLeft from './Simple dark with menu button on left'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import DarkWithQuickAction from './Dark with quick action'
import SimpleDark from './Simple dark'
import SimpleWithMenuButtonOnLeft from './Simple with menu button on left'
import Simple from './Simple'
import WithQuickAction from './With quick action'
import DarkWithSearch from './Dark with search'
import WithSearch from './With search'
import WithSeaWithCenteredSearchAndSecondaryLinksSarkrch from './With centered search and secondary links'
import WithSearchInColumnLayout from './With search in column layout'

const Navbars = () => {
  return (
    <div>
        <MainHeaderSection title={'Navigation'} />
        <FirstHeaderSection title={'Simple dark with menu button on left'}>
            <div className="max-24">
            <SimpleDarkWithMenuButtonOnLeft />
            <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
            </div>
        </FirstHeaderSection>
        {/* Dark with quick action */}
        <HeaderSection title={'Dark with quick action'}>
<div className="mx-8">
  <DarkWithQuickAction />
  <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
</div>
        </HeaderSection>
        {/* Simple dark */}
        <HeaderSection title={'Simple dark'}>
<div className="mx-8">
  <SimpleDark />
  <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
</div>
        </HeaderSection>
        {/* Simple with menu button on left */}
        <HeaderSection title={'Simple with menu button on left'}>
<div className="mx-8">
  <SimpleWithMenuButtonOnLeft />
  <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
</div>
        </HeaderSection>
        {/* Simple */}
        <HeaderSection title={'Simple'}>
<div className="mx-8">
  <Simple />
  <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
</div>
        </HeaderSection>
        {/* With quick action */}
        <HeaderSection title={'With quick action'}>
<div className="mx-8">
  <WithQuickAction />
  <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
</div>
        </HeaderSection>
        {/* Dark with search */}
        <HeaderSection title={'Dark with search'}>
<div className="mx-8">
  <DarkWithSearch />
  <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
</div>
        </HeaderSection>
        {/* With search */}
        <HeaderSection title={'With search'}>
<div className="mx-8">
  <WithSearch />
  <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
</div>
        </HeaderSection>
        {/* With Search With Centered Search And Secondary Links Sarkrch */}
        <HeaderSection title={'With Search With Centered Search And Secondary Links Sarkrch'}>
<div className="mx-8">
  <WithSeaWithCenteredSearchAndSecondaryLinksSarkrch />
  <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
</div>
        </HeaderSection>
        {/* With search in column layout */}
        <HeaderSection title={'With search in column layout'}>
<div className="mx-8 mb-4">
  <WithSearchInColumnLayout />
  <div className=' h-[400px] bg-gray-100 rounded-b-md'>

</div>
</div>

        </HeaderSection>
      
        

    </div>
  )
}

export default Navbars
import React from 'react'
import FirstHeaderSection from '@shared/components/FirstHeaderSection'
import HeaderSection from '@shared/components/HeaderSection/HeaderSection'
import MainHeaderSection from '@shared/components/MainHeader'
import MultiColumn from './MultiColumn'
import WithSummaryChart from './WithSummaryChart'
import AvatarsWithSeparateDescription from './Avatars with separate description'
import SimpleWithAvatars from './SimpleWithAvatars'

const Reviews = () => {
  return (
    <div>  
       <MainHeaderSection
    goto={"ecommerce"}
    section={"Ecommerce"}
    title={"Reviews"}
    tag={"Components"}
  />
  <FirstHeaderSection title={"Multi Column"}>
    <div className="border-2 border-gray-200 rounded-xl h-full sm:h-[650px]">
   <MultiColumn />
    </div>
  </FirstHeaderSection>
  {/* With tiered images */}
  <HeaderSection title={'With Summary Chart'}>
  <div className="border-2 border-gray-200 rounded-xl md:h-[650px] h-full">
     <WithSummaryChart />
    </div>
  </HeaderSection>
  {/* Avatars with separate description */}
  <HeaderSection title={'Avatars with separate description'}>
  <div className="border-2 border-gray-200 rounded-xl px-6 py-4 h-full">
     <AvatarsWithSeparateDescription />
    </div>
  </HeaderSection>
  {/* Simple with avatars */}
  <HeaderSection title={'Simple with avatars'}>
  <div className="border-2 border-gray-200 rounded-xl px-6 py-4 h-full">
     <SimpleWithAvatars />
    </div>
  </HeaderSection>
  </div>
  )
}

export default Reviews